import { View, Dimensions,Text } from "react-native"
import { TCardLogo } from "./TCardLogo";

export const MobileTCard = () => {
    const sw = Dimensions.get('window').width;

    return (
        <View
            style={{
                marginTop: 8,
                borderRadius: 8,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                width: sw - 16,
                height: 48,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Text><TCardLogo/>モバイルTカードを表示する</Text>
        </View>
    )
}