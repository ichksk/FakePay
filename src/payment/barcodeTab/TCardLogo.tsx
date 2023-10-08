import Svg, { Path } from "react-native-svg";
import { View } from "react-native"
export const TCardLogo = () => {
    return (
        <View style={{
            marginRight: 8
        }}>
            <Svg width="16" height="16" viewBox="0 0 198 198" fill="none">
                <Path d="M0 65.989V198.004H65.989V65.989H0Z" fill="#004097"/>
                <Path d="M0 0V65.989H65.989V198.004H132.011V65.989H198V0H0Z" fill="#FFF100"/>
                <Path d="M132.011 65.989V198.004H198V65.989H132.011Z" fill="#004097"/>
            </Svg>
        </View>
    )
}