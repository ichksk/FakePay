import { AppState } from "react-native";
import * as Brightness from "expo-brightness";
import { useEffect } from "react";


export const useBrightControl = () => {
    let originalBrightness : number|null = null
    useEffect(() => {
        Brightness.getBrightnessAsync()
        .then((brightness) => {
            originalBrightness = brightness
            Brightness.setBrightnessAsync(1)
        })

        const appStateSub = AppState.addEventListener("change", (state) => {
            if(state === "inactive" && originalBrightness) {
                Brightness.setBrightnessAsync(originalBrightness)
            } else if(state === "active") {
                Brightness.setBrightnessAsync(1)
            }
        })

        const brightnessSub = Brightness.addBrightnessListener((event) => {
            originalBrightness = event.brightness
        })

        return () => {
            appStateSub.remove()
            brightnessSub.remove()

            if(originalBrightness) {
                Brightness.setBrightnessAsync(originalBrightness)
            }
        }
    })
}