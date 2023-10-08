import { View, ViewProps } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export const Background = (props : ViewProps) => {
    return (
        <View
            style={{
                height: "100%",
                backgroundColor: "#efefef"
            }}
        >
            <LinearGradient
                style={{
                    width: "100%",
                    height: 300,
                    alignItems: "center",
                }}
                colors={['#2cc6a0', '#22a6a9']}
            />
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    paddingHorizontal: 16,
                }}
                {...props}
            />
        </View>
    )
}