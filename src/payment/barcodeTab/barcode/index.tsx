import JsBarcode from "jsbarcode"
import { useEffect, useState } from "react"
import { G, Svg } from "react-native-svg"
import BarcodeText from "./barcodeText"
import BarcodeChunk from "./barcodeChunk"

type Encoding = {
    data : string,
    options: JsBarcode.Options,
    text: string,
}

type BarcodeType = {
    encodings: Array<Encoding>
}

export const Barcode = ({ value, options } : { value:string, options:JsBarcode.Options}) => {
    const [ width, setWidth ] = useState<number>(0)
    const [ height, setHeight ] = useState<number>(0)
    const [ encoding, setEncoding ] = useState<Encoding>()

    const getEncodingWidth = (encoding:Encoding) => {
        return (
            encoding.data.length * (encoding.options.width as number) +
            (encoding.options.marginLeft as number) +
            (encoding.options.marginRight as number)
        )
    }

    const getEncodingHeight = (encoding:Encoding) => {
        return (
            (encoding.options.height as number)+
            (encoding.options.fontSize as number)+
            (encoding.options.textMargin as number)+
            (encoding.options.marginTop as number)+
            (encoding.options.marginBottom as number)
        );
    }

    useEffect(() => {
        let barcode: BarcodeType = {} as BarcodeType
        JsBarcode(barcode, value, options)
        setEncoding(barcode.encodings[0])
        setWidth(getEncodingWidth(barcode.encodings[0]))
        setHeight(getEncodingHeight(barcode.encodings[0]))
    }, [])

    return (
        <Svg
            x={0}
            y={0}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            originX={0}
            originY={0}
        >
            {encoding && (
                <G
                    x={encoding.options.marginLeft}
                    y={encoding.options.marginTop}
                    fill={encoding.options.lineColor}
                >
                    <BarcodeChunk
                        binary={encoding.data}
                        options={encoding.options}
                    />
                    <BarcodeText
                        text={encoding.text}
                        width={width as number}
                        options={encoding.options}
                    />
                </G>
            )}
            </Svg>
    )
}