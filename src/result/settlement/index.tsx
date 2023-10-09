import { View } from "react-native"
import { Divider } from '@rneui/themed';

import { AmountLabel } from "src/utils/amountLabel"
import { ShopIcon } from "src/utils/shopIcon"
import { ShopLabel } from "src/utils/shopLabel"
import { CurrentDate } from "./currentDate"
import { SettlementStateLabel } from "./settlementStateLabel"
import { Container } from "./container"
import { SettlementDetail } from "./settlementDetail";

export const Settlement = () => {
    return (
        <Container>
            <View
                style={{
                    top: -34,
                }}
            >
                <View
                    style={{
                        width: 80,
                        height: 80,
                        alignSelf: "center",
                        justifyContent: "center",
                        borderRadius: 80/2,
                        backgroundColor: "white",
                    }}
                >
                    <ShopIcon/>
                </View>

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
            <Divider
                style={{
                    marginHorizontal: 8,
                }}
            />
            <SettlementDetail/>
            
        </Container>
    )
}