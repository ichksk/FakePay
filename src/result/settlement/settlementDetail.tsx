import { useState } from "react"
import { Icon, ListItem } from "@rneui/themed"
import { View, Text } from "react-native"

export const SettlementDetail = () => {
    const [ expand, setExpand ] = useState<boolean>(false)

    return (
        <ListItem.Accordion
            style={{
                marginTop: 8,
                marginBottom: 16,
            }}
            isExpanded={expand}
            onPress={() => {
                setExpand(!expand);
            }}
            containerStyle={{
                justifyContent: 'center',
            }}
            
            content={
                <View>
                    <Text
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#96C6D8"
                        }}
                    >詳細を見る</Text>
                </View>
            }
        >
        </ListItem.Accordion>
    )
}