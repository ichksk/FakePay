import { useState } from "react"
import { Text, View } from "react-native"
import { Switch } from "react-native-elements"

export const PointUsage = ({hidden} : {hidden: boolean}) => {
    const point = 0
    const [ usePoint, setUsePoint ] = useState<boolean>(false)

    return (
        <View
            style={{
                paddingHorizontal:16,
                paddingVertical:8,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
            }}
        >
            <Text>PayPayポイントを使う</Text>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontWeight:"bold"
                    }}
                >{hidden ? "******" : point}pt</Text>
                <Switch
                    value={usePoint}
                    onChange={() => setUsePoint(prev => !prev)}
                    style={{
                        marginLeft:8,
                    }}
                />
            </View>
        </View>
    )
}