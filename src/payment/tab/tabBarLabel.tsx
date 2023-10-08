import { Text } from "react-native"

export const TabBarLabel = ({focused, text} : {focused: boolean, text:string}) => {
    return (
        <Text
            style={{
                color:"#fff9f8",
                opacity: focused ? 1 : 0.4,
            }}>
                {text}
        </Text>
    )
}