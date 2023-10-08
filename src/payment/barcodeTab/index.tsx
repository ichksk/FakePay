import { View } from "react-native"
// import { useBrightControl } from "./brightnesControl"
import { BarcodeContainer } from "./barcodeContainer"
import { Background } from "./background"
import { Barcode } from "./barcode"
import { MobileTCard } from "./mobileTCard"
import { QRCode } from "./qrcode"
import { Wallet } from "./wallet"

export const BarcodeTab = () => {
    // useBrightControl()

    return (
        <Background>
            <View
                style={{
                    position: "relative",
                    top: 110,
                }}
            >
                <BarcodeContainer>
                    <Barcode
                        value="900081818895579920128799"
                        options={{
                            format:"CODE128",
                            fontSize: 16,
                            height: 84,
                        }}
                    />
                    <View
                        style={{
                            marginTop:8,
                        }}
                    >
                        <QRCode/>
                    </View>
                    <View
                        style={{
                            paddingHorizontal:16,
                            width:"100%",
                        }}
                    >
                        <Wallet/>
                    </View>
                </BarcodeContainer>
                <MobileTCard/>
            </View>
        </Background>
    )
}