import { Icon, IconProps } from "@rneui/themed";

export const ShopIcon = (props: Omit<IconProps, "name" | "color" | "type">) => {
    return (
        <Icon
            size={48}
            color="white"
            {...props}
            style={{
                width:68,
                height:68,
                backgroundColor:"#fabb74",
                borderRadius:34,
                alignSelf:"center",
                justifyContent: "center",
                ...props.style,
            }}
            type="material"
            name="storefront"
        />
    )
}