import JsBarcode from "jsbarcode";
import { Rect } from "react-native-svg";

const BarcodeChunk = ({ binary, options } : { binary : string, options:JsBarcode.Options}) => {
    let barWidth = 0;
    let x = 0;
    let bars = [];
    for (var b = 0; b < binary.length; b++) {
        x = b * (options.width as number);

        if (binary[b] === "1") {
            barWidth++;
        } else if (barWidth > 0) {
            bars.push({
                x: x - (options.width as number) * barWidth,
                y: 0,
                width: (options.width as number) * barWidth,
                height: (options.height as number),
            });
            barWidth = 0;
        }
    }

    if (barWidth > 0) {
        bars.push({
            x: x - (options.width as number) * (barWidth - 1),
            y: 0,
            width: (options.width as number) * barWidth,
            height: (options.height as number),
        });
    }

    return (
        <>
            {bars.map((bar, i) => (
                <Rect
                    key={i}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                />
            ))}
        </>
    );
};

export default BarcodeChunk;