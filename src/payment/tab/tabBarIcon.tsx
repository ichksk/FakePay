import { Icon } from "@rneui/themed"

export const TabBarIcon = ({focused, name} : {focused: boolean, name: string}) => {
    return (
        <Icon 
            type="material-community" 
            name={name} 
            size={40} 
            color="#fff9f8" 
            style={{
                opacity: focused ? 1 : 0.4
            }}
        />
    )
}