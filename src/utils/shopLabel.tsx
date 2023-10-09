import { Text, TextProps } from "react-native"

export const ShopLabel = (props:TextProps) => {
    const name = "Fake Shop"
    return (
        <Text
            {...props}
            style={[{
                fontSize:24,
                fontWeight:"600",
                textAlign: "center",
            }, props.style]}
        >{name}</Text>
    )
}