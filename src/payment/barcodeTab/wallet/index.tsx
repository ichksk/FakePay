import { View } from "react-native"
import { Ballance } from "./ballance"
import { PointUsage } from "./pointUsage"
import { useState } from "react"

export const Wallet = () => {
    const [ hidden, setHidden ] = useState<boolean>(false)
    const toggleHidden = () => {
        setHidden(prev=>!prev)
    }

    return (
        <View
            style={{
                borderWidth:1,
                borderColor: "#ededed",
                borderRadius:4,
                width: "100%"
            }}
        >
            <Ballance hidden={hidden} toggleHidden={toggleHidden}/>
            <PointUsage hidden={hidden}/>
        </View>
    )
}