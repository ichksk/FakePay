import { Text, View, Linking } from "react-native"
import { Button } from "@rneui/themed"

export const NoPermission = () => {
    return (
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text>カメラへのアクセス権限がありません</Text>
            <Button
                title="設定へ移動する"
                onPress={() => {
                    Linking.openSettings()
                }}
            />

        </View>
    )
}