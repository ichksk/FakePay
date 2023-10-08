import { BarcodeTab } from "../barcodeTab"
import { CameraTab } from "../cameraTab"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarLabel } from "./tabBarLabel";
import { TabBarIcon } from "./tabBarIcon";
import { HeaderLeftIcon } from "./headerLeftIcon";
import { HeaderRightIcon } from "./headerRightIcon";

const Tabs = createBottomTabNavigator()

export const PaymentView = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 50,
                    height: 90,
                },
                headerTransparent: true,
                headerLeft: HeaderLeftIcon,
                headerRight: HeaderRightIcon,
                headerTitleStyle: {
                    color: "white"
                },
                unmountOnBlur: true,
            }}
        >
            <Tabs.Screen
                name="barcode"
                component={BarcodeTab}
                options={{
                    headerTitle:"支払い",
                    tabBarLabel: ({focused}) => <TabBarLabel focused={focused} text={"バーコード支払い"}/>,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="qrcode"/>,
                    tabBarItemStyle: {
                        borderRightWidth: 0.5,
                        borderColor: "white"
                    }
                }}
            />
            <Tabs.Screen
                name="camera"
                component={CameraTab}
                options={{
                    unmountOnBlur: true,
                    headerTitle:"スキャン",
                    tabBarLabel: ({focused}) => <TabBarLabel focused={focused} text={"スキャン支払い"}/>,
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="line-scan"/>,
                    tabBarItemStyle: {
                        borderLeftWidth: 0.5,
                        borderColor: "white"
                    }
                }}

            />
        </Tabs.Navigator>
    )
}
