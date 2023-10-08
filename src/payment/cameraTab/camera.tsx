import { BarCodeScanningResult, Camera, CameraType, FlashMode } from 'expo-camera';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FlashIcon } from "./flashIcon";

export const CameraView = ({setHasPermission, handleBarCodeScanned} : {setHasPermission: Dispatch<SetStateAction<boolean>>, handleBarCodeScanned: (result : BarCodeScanningResult) => void}) => {
    const [ flashMode, setFlashMode ] = useState<FlashMode>(FlashMode.off)

    const toggleFlashMode = () => {
        setFlashMode(prev => (
            prev === FlashMode.off ? FlashMode.torch : FlashMode.off
        ))
    }

    useEffect(() => {
        Camera.requestCameraPermissionsAsync()
        .then((value) => {
            setHasPermission(value.status === "granted");
        })
    }, [])

    return (
        <Camera
            style={{
                flex: 1,
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            type={CameraType.back}
            flashMode={flashMode}
            barCodeScannerSettings={{
                barCodeTypes: ["org.iso.QRCode"]
            }}
            onBarCodeScanned={handleBarCodeScanned}
        >
            <FlashIcon flashMode={flashMode} toggleFlashMode={toggleFlashMode}/>
        </Camera>
    )
}