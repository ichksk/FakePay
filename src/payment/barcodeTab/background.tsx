import { LinearGradient } from "expo-linear-gradient"
import { ViewProps } from "react-native"

export const Background = (props:ViewProps) => {
    return (
        <LinearGradient
            style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
            }}
            colors={['#ff936c', '#ff3b61']}
            {...props}
        />
    )
}