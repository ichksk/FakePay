import { View } from "react-native"
import { AmountLabel } from "src/utils/amountLabel"
import { ShopIcon } from "src/utils/shopIcon"
import { ShopLabel } from "src/utils/shopLabel"
import { CurrentDate } from "./currentDate"
import { SettlementStateLabel } from "./settlementStateLabel"
import { Container } from "./container"


export const Settlement = () => {
    return (
        <Container>
            <View
                style={{
                    top: -34,
                }}
            >
                <ShopIcon/>

                <View
                    style={{
                        margin:24,
                    }}
                >
                    <ShopLabel 
                        style={{
                            fontWeight: "normal",
                            marginBottom: 16,
                        }}
                    />
                    <CurrentDate/>
                </View>
                <AmountLabel style={{
                    fontSize: 48,
                }}/>

                <SettlementStateLabel/>
            </View>
        </Container>
    )
}