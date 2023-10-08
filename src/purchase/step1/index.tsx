import { TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native"
import { Button } from "react-native-elements"
import { View } from "react-native"
import { useContext } from "react"
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { Shop } from "./shop"
import { AmountInput } from "./amountInput"
import { Wallet } from "src/payment/barcodeTab/wallet"
import { AmountContext } from "../amount"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PurchaseStack } from "../route";

export const Step1 = () => {
    const { amount } = useContext(AmountContext)
    const navigation = useNavigation<StackNavigationProp<PurchaseStack>>()

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "white",
                }}
            >
                <View
                    style={{
                        flex:1,
                        marginHorizontal:16,
                        justifyContent: "space-between"
                    }}
                >
                    <View>
                        <Shop/>
                        <AmountInput/>
                        <Wallet/>
                    </View>

                    <SafeAreaView
                        style={{
                            justifyContent:"flex-end",
                        }}
                    >
                        <Button
                            title="次へ"
                            type="outline"
                            disabled={amount === "" || amount === undefined ? true : false}
                            style={{
                                justifyContent:"flex-end",
                            }}
                            buttonStyle={{
                                borderColor: "#4f8fdf",
                                borderWidth:1,
                                borderRadius:8,
                                paddingVertical:12,
                            }}
                            onPress={() => {
                                navigation.navigate("Step2")
                            }}
                        />
                        <KeyboardSpacer/>
                    </SafeAreaView>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}