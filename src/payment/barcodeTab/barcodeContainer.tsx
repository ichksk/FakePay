import { View, ViewProps, Dimensions } from "react-native"

export const BarcodeContainer = (props: ViewProps) => {
    const sw = Dimensions.get('window').width;

    return (
        <View
            style={{
                borderRadius: 8,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                width: sw - 16,
                alignItems: "center",
                paddingTop:12,
                paddingBottom:32
            }}
            {...props}
        />
    )
}