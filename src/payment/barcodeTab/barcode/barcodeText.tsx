import JsBarcode from "jsbarcode";
import { Text } from "react-native-svg";

export default function BarcodeText({text, width, options}: {text:string, width:number, options:JsBarcode.Options}) {

    if (options.displayValue) {
        const y = (options.height as number) + (options.textMargin as number) + (options.fontSize as number);
        const x = width / 2;
        const formattedText = text.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim()
        return (
            <Text
                x={x}
                y={y}
                fontFamily={options.font}
                fontSize={options.fontSize}
                fontWeight="300"
                textAnchor={"middle"}
            >
                {formattedText}
            </Text>
        );
    } else {
        return null;
    }
}