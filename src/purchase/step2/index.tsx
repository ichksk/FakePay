import { View } from "react-native"
import { PayButton } from "./payButton"
import { RotatingShop } from "./rotatingShop"

export const Step2 = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white"
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginHorizontal: 16,
                }}>
                <RotatingShop/>
                <PayButton/>
            </View>
        </View>
    )
}