import { useState } from  "react"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';

import { PaymentView } from './src/payment';
import { PurchaseView } from "src/purchase";
import { ResultView } from "src/result";
import { AmountContext } from "src/contexts/amount";

const Stack = createStackNavigator()

export default function App() {
  const [ amount, setAmount ] = useState<string | undefined>(undefined)

  return (
    <AmountContext.Provider value={{amount, setAmount}}>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
          initialRouteName="Purchase"
        >
          <Stack.Screen name="Payment" component={PaymentView}/>
          <Stack.Screen name="Purchase" component={PurchaseView}/>
          <Stack.Screen name="Result" component={ResultView}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AmountContext.Provider>
  );
}