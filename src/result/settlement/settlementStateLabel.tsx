import { useState, useEffect } from 'react';
import { View, Text } from "react-native"

export const SettlementStateLabel = () => {
    return (
        <View
            style={{
                marginVertical: 8,
                borderRadius: 16,
                paddingVertical: 8,
                paddingHorizontal: 16,
                backgroundColor: "#1CBE77",
                alignSelf: "center",
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    fontSize:14,
                    fontWeight: "500",
                    color: "white"
                }}
            >支払い完了</Text>
        </View>
    )
}