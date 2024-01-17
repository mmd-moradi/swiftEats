import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native"
import HomeScreen from "./screens/HomeScreen";

import { RestaurantType } from "./constants";
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";
import OrderPreparing from "./screens/OrderPreparing";
import DeliveryScreen from "./screens/DeliveryScreen";
import { RestaurantDataType } from "./sanity/dataTypes";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantDataType;
  Cart: undefined;
  OrderPreparing: undefined;
  Delivary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{ presentation: "modal" }} component={CartScreen} />
        <Stack.Screen name="OrderPreparing" options={{ presentation: "fullScreenModal" }} component={OrderPreparing} />
        <Stack.Screen name="Delivary" options={{ presentation: "fullScreenModal" }} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
