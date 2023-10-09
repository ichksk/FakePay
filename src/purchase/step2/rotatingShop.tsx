import { useEffect } from "react"
import { View } from "react-native"
import { Icon } from "react-native-elements"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated"

import { Shop } from "../shop"
import { AmountLabel } from "src/utils/amountLabel"

export const RotatingShop = () => {
    const degree = useSharedValue(0)


    useEffect(() => {
        degree.value = withDelay(300, withTiming(180, {easing:Easing.linear, duration:300}))
    }, [])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [ { rotate: `${degree.value}deg` } ],
            height: 350,
        }
    })



    return (
        <View
            style={{
                flex: 1
            }}
        >
            <Animated.View
                style={[animatedStyle]}
            >
                <Shop/>
                <AmountLabel/>
            </Animated.View>
            <Icon
                type="material-community"
                name="crop-rotate"
                size={32}
                onPress={() => {
                    degree.value = withTiming(degree.value===0?180:0, {easing:Easing.linear, duration:300})
                }}
                containerStyle={{
                    position: "absolute",
                    left: 0,
                    top: 320,
                    zIndex: 1,
                }}
            />
        </View>
    )
}