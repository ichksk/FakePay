import { View } from "react-native"
import { PayPayQRCode } from "./qrcode"
import { Timer } from "./timer"

export const QRCode = () => {
    return (
        <View
            style={{
                flexDirection:"column"
            }}
        >
            <PayPayQRCode/>
            <Timer/>
        </View>
    )
}