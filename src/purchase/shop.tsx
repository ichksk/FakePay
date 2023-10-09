import { View } from "react-native"
import { ShopIcon } from "src/utils/shopIcon"
import { ShopLabel } from "src/utils/shopLabel"


export const Shop = () => {
    return (
        <View
            style={{
                marginVertical:24,
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <ShopIcon 
                containerStyle={{
                    marginRight: 8,
                }}
            />
            <ShopLabel/>
        </View>
    )
}