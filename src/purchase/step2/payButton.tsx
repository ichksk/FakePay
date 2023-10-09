import { SafeAreaView } from "react-native"
import { Button } from "react-native-elements"
import KeyboardSpacer from "react-native-keyboard-spacer"
import { usePlaySound } from "./sound"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStack } from "src/route"

export const PayButton = () => {
    const { playSound } = usePlaySound()
    const navigation = useNavigation<StackNavigationProp<RootStack>>()

    const pay = () => {
        playSound()
        .then(() => {
            navigation.navigate("Result")
        })
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "flex-end",
            }}
        >
            <Button
                buttonStyle={{
                    borderRadius: 8,
                    paddingVertical: 12,
                    backgroundColor: "#3895ff",
                }}
                titleStyle={{
                    fontSize:16,
                    fontWeight: "600"
                }}
                title="支払う"
                onPress={pay}
            />
            <KeyboardSpacer/>
        </SafeAreaView>
    )
}