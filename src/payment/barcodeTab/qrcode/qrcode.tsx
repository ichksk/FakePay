import { View } from 'react-native';
import QRCodeSvg from 'react-native-qrcode-svg';
import { PayPayLogo } from './paypayLogo';

export const PayPayQRCode = () => {
    return (
        <View
            style={{
                width: 100,
                height: 100,
            }}
        >
            <QRCodeSvg
                value="This is fake qr code. Do Not Use This"
            />
            <View style={{
                position: 'absolute',
                top:50-24/2,
                right:50-24/2,
                backgroundColor: "white",
            }}>
                <PayPayLogo size={24}/>
            </View>
        </View>
    )
}