import { Alert, Animated,  } from "react-native"

import { CameraView } from "./camera";
import { useEffect, useState } from "react";
import { NoPermission } from "./noPermission";
import { BarCodePoint, BarCodeScanningResult } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStack } from "src/route";
import { useFocusEffect } from '@react-navigation/native';

export const CameraTab = () => {
    const [ hasPermission, setHasPermission ] = useState<boolean>(true);
    const [ cornerPoints, setCornerPoints ] = useState<BarCodePoint[]>()
    const [ detected, setDetected ] = useState<boolean>(false)
    const navigation = useNavigation<StackNavigationProp<RootStack>>()

    const handleBarCodeScanned = (result: BarCodeScanningResult) => {
        if(!detected) {
            setDetected(true)
            setCornerPoints(result.cornerPoints)
            Alert.alert("result", "qr code detected")
            navigation.navigate("Purchase")
        }
    }

    useFocusEffect(()=>{
        setDetected(false)
    })
    return (
        <>
            {hasPermission
            ? (
                <>
                    <CameraView
                        setHasPermission={setHasPermission}
                        handleBarCodeScanned={handleBarCodeScanned}
                    />
                </>
            )
            : (
                <NoPermission/>
            )
        }
        </>
    );
}