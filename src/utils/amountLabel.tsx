import { useContext } from "react" 
import { AmountContext } from "src/contexts/amount"
import { Text, TextProps } from "react-native"

export const AmountLabel = (props:TextProps) => {
    const { amount } = useContext(AmountContext)

    const comma = (text: string) => text.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    
    return (
        <Text
            style={[{
                fontSize: 120,
                fontWeight: "400",
                textAlign: "center",
            }, props.style]}
        >
            {comma(amount as string)}<Text style={{fontSize: 24, fontWeight:"600"}}>円</Text>
        </Text>
    ) 
}