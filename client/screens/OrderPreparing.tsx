import { View, Text, Image } from "react-native"
import React, { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";



export type Props = NativeStackScreenProps<RootStackParamList, "OrderPreparing">;
export type OrderPrepScreenRouteProp = Props["route"];
export type OrderPrepScreenNavProp = Props["navigation"]

export default function OrderPreparing() {
  const navigation = useNavigation<OrderPrepScreenNavProp>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivary")
    }, 3000)
  }, [])
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image source={require("../assets/images/delivery.gif")} className="w-80 h-80"/>
    </View>
  )
}