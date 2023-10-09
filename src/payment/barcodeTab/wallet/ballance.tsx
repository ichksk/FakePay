import { Text, View } from "react-native"
import { Icon, ListItem } from "@rneui/themed"

export const Ballance = ({hidden, toggleHidden} : {hidden: boolean, toggleHidden: ()=>void}) => {
    const ballance = 1000000
    return (
        <ListItem
            style={{
                borderBottomWidth:1,
                borderBottomColor:"#ededed",
            }}
        >
            <ListItem.Content
                style={{
                    flexDirection:"row",
                    justifyContent:"flex-start",
                }}
            >
                <Icon
                    type="material-community"
                    name="credit-card-outline"
                    size={48}
                    style={{
                        marginRight: 16,
                    }}
                />
                <View style={{
                    flexDirection: "column",
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            marginBottom: 4,
                        }}
                    >
                        <Text
                            style={{
                                marginRight: 4,
                                fontWeight: "600"
                            }}
                        >PayPay残高</Text>
                        <Icon
                            type="ionicon"
                            name={hidden ? "eye-off-outline" : "eye-outline"}
                            size={16}
                            onPress={toggleHidden}
                        />
                    </View>
                    <Text
                        style={{
                            color:"#606060"
                        }}
                    >利用可能額： {hidden ? "******" : ballance}円</Text>
                </View>
            </ListItem.Content>
            <ListItem.Chevron/>
        </ListItem>
    )
}