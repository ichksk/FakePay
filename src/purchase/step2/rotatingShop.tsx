import { View, Text } from "react-native"
import { useContext, useEffect } from "react"

import { Shop } from "../step1/shop"
import { AmountContext } from "../amount"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated"
import { Icon } from "react-native-elements"

export const RotatingShop = () => {
    const { amount } = useContext(AmountContext)
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
                <Shop labelStyle={{
                    fontSize:24,
                    fontWeight:"600"
                }}/>
                <Text
                    style={{
                        fontSize: 120,
                        fontWeight: "400",
                        textAlign: "center",
                    }}
                >
                    {amount?.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}<Text style={{fontSize: 24, fontWeight:"600"}}>円</Text>
                </Text>
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