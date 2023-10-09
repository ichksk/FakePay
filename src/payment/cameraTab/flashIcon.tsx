import { Icon } from "@rneui/themed";
import { TouchableOpacity, StyleSheet } from "react-native"
import { FlashMode } from "expo-camera";

export const FlashIcon = ({flashMode, toggleFlashMode} : {flashMode: FlashMode, toggleFlashMode: ()=>void}) => {
    return (
        <TouchableOpacity
            style={styles.iconContainer}
            onPress={toggleFlashMode}
        >
            <Icon
                type="ionicon"
                name= {flashMode === FlashMode.off ? "flash-off-sharp" : "flash-sharp"}
                size={24}
                color="black"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 20,
        right: 16,
        bottom: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
});