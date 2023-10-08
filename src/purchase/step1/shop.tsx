import { View, Text, TextProps } from "react-native"
import { Icon } from "react-native-elements"

type ShopProps = {
    labelStyle? : TextProps["style"],

}
export const Shop = (props: ShopProps) => {
    const name = "Fake Shop"

    return (
        <View
            style={{
                marginVertical:24,
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Icon
                type="material"
                name="storefront"
                size={48}
                color="white"
                style={{
                    width:68,
                    height:68,
                    backgroundColor:"#fabb74",
                    borderRadius:34,
                    alignSelf:"center",
                    justifyContent: "center",
                    marginRight: 8,
                }}
            />
            <Text
                style={[{fontSize: 20}, props.labelStyle]}
            >{name}</Text>
        </View>
    )
}