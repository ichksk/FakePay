import { Button } from "@rneui/themed"
import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { Step1 } from "./step1"
import { Step2 } from "./step2"
import { PurchaseStack } from "./route"

const Stack = createStackNavigator()

export const PurchaseView = () => {
    const navigation = useNavigation<StackNavigationProp<PurchaseStack>>()

    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTitle:"支払金額の入力",
                headerTintColor:"#636363",
                animationEnabled: false,
                gestureEnabled: false,
            }}
        >
            <Stack.Screen
                name="Step1"
                component={Step1}
            />
            <Stack.Screen
                name="Step2"
                component={Step2}
                options={{
                    headerRight: () => (
                        <Button
                            title="金額の変更"
                            type="clear"
                            titleStyle={{
                                fontSize: 16,
                                fontWeight: "700"
                            }}
                            containerStyle={{
                                marginRight: 16,
                            }}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}