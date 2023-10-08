import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export const usePlaySound = () => {
    const [sound, setSound] = useState<Audio.Sound>();

    useEffect(() => {
        console.log("load sound")
        Audio.Sound.createAsync(require("assets/se/paypay.mp3"))
        .then(result => {
            setSound(result.sound)
        })

        return () => {
            console.log("unload sound")
            sound?.unloadAsync()
        }
    }, [])
    const playSound = async () => {
        await sound?.setPositionAsync(0)
        await sound?.playAsync()
        console.log("play sound")
    }
    return { playSound }
}