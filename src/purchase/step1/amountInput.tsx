import { useContext, useState } from "react"
import { View, Text } from "react-native"
import { Input } from "@rneui/themed"

import { AmountContext } from "src/contexts/amount"

export const AmountInput = () => {
    const { amount, setAmount } = useContext(AmountContext)
    const [ isActive, setIsActive ] = useState<boolean>(false);

    const handleChangeText = (text: string) => {
        if(text !== "0") {
            setAmount(text)
        }  
    }

    return (
            <View>
                <Text
                    style={{
                        fontSize:14,
                        color: "#808080",
                    }}
                >支払金額(税込)を入力</Text>
                <Input
                    autoFocus
                    placeholder="0"
                    textAlign="right"
                    keyboardType="number-pad"
                    value={amount}
                    onChangeText={handleChangeText}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}

                    inputStyle={{
                        fontWeight:"bold",
                        fontSize:32,
                    }}
                    inputContainerStyle={{
                        borderBottomColor: isActive ? "#4f9bf9" : "#c0c0c0",
                    }}

                    rightIcon={
                        <View style={{ flex:1, flexDirection: 'column', justifyContent:"flex-end" }}>
                            <Text
                                style={{
                                    marginBottom:4,
                                    fontSize: 16,
                                    fontWeight:"600"
                                }}
                            >円</Text>
                        </View>
                    }
                />
            </View>
    )
}