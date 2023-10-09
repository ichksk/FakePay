import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { Icon } from "@rneui/themed"

export const Timer = () => {
    const [ time, setTime ] = useState<number>(300)
    const timeText = `${Math.floor(time/60).toString().padStart(2, '0')}:${(time%60).toString().padStart(2, '0')}`
    useEffect(() => {
        const id = setInterval(() => {
            if(time>0){
                setTime(prev=>prev-1)
            } else {
                setTime(300)
            }
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [time])

    return (
        <View
            style={{
                marginVertical: 12,
                flexDirection:"row",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <Text
                style={{
                    textAlign: "center",
                    fontSize:12,
                    color: "#5c5c5c"
                }}
            >{timeText}</Text>
            <View
                style={{
                    marginLeft: 4,
                }}
            >
                <Icon
                    type="material-community"
                    name="refresh"
                    size={12}
                    color= {time >= 290 ? "#ebebeb" : "#3b95f9"}
                    onPress={() => {
                        if(time < 290){
                            setTime(300)
                        }
                    }}
                />
            </View>
        </View>
    )
}