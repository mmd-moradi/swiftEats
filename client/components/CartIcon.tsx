import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColor } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { RestaurantScreenNavProp } from "../screens/RestaurantScreen";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
  const navigation = useNavigation<RestaurantScreenNavProp>()
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotal)
  if (cartItems.length === 0) {
    return;
  }
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColor.bgColor(1) }}
        className="flex flex-row justify-between items-center shadow-lg p-4 py-3 rounded-full mx-5">
        <View className="rounded-full p-2 px-4" style={{backgroundColor: "rgba(255, 255, 255, 0.3)"}}>
          <Text className="font-extrabold text-lg text-white">{cartItems.length}</Text>
        </View>
        <Text className="flex-1 font-extrabold text-center text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-xl">${totalPrice}</Text>

      </TouchableOpacity>
    </View>
  )
}