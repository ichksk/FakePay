import { View, ViewProps } from "react-native"

export const Container = (props: ViewProps) => {
    return (
        <View
            style={{
                // height: 400,
                top: 100,
                borderRadius: 16,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
            }}
            {...props}
        />
    )
}