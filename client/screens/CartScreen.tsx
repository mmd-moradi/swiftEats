import { View, Text, Touchable, TouchableOpacity, Image, ScrollView } from "react-native"
import React, { useEffect, useMemo, useState } from "react"
import { themeColor } from "../theme"
import * as Icon from "react-native-feather";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DishesType, featured } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectRestaurant } from "../slices/restaurantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../slices/cartSlice";
import { DishDataType } from "../sanity/dataTypes";
import { urlFor } from "../sanity/imageConf";


export type Props = NativeStackScreenProps<RootStackParamList, "Cart">;
export type CartScreenRouteProp = Props["route"];
export type CartScreenNavProp = Props["navigation"];

export default function CartScreen() {
  const restaurant = useSelector((selectRestaurant))
  const navigation = useNavigation<CartScreenNavProp>()
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const delivaryFee = 2;
  const [groupedItems, setGroupedItems] = useState<{[key: number]: DishDataType[]}>()
  const handleDecrese = (item: DishDataType) => {
    dispatch(removeFromCart(item))
  }


  useEffect(() => {
    const items = cartItems.reduce((group: {[key: string]: DishDataType[]}, item) => {
      if (group[item._id]) {
        group[item._id].push(item)
      } else {
        group[item._id] = [item]
      }
      return group;
    }, {})
    setGroupedItems(items)
    setIsDisabled(cartItems.length === 0)
  }, [cartItems])


  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColor.bgColor(1) }}
          className="p-1 rounded-full absolute top-5 left-4 z-10 shadow-lg shadow-black/40 bg-orange-500"
        >
         <Icon.ArrowLeft stroke="white" strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className="font-bold text-center text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant?.name}</Text>
        </View>
      </View>
      {/* Delivery Time */}
      <View style={{ backgroundColor: themeColor.bgColor(0.2) }} className="flex-row items-center justify-between px-5 pr-6">
        <Image source={require("../assets/images/bikeGuy.png")} className="w-20 h-20 rounded-full"  />
        <Text className="font-semibold">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{ color: themeColor.bgColor(1)}} className="font-bold">Change</Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="pt-5 bg-white">
          {
            groupedItems &&
            Object.entries(groupedItems).map(([key, items]) => {
              let item = items[0]
              return (
                <View
                  key={key}
                  className="rounded-3xl bg-white shadow-lg shadow-black/40 flex-row items-center justify-between py-2 px-4 space-x-3 mx-2 mb-3"
                  >
                    <Text style={{color: themeColor.text}} className="font-bold">
                      {items.length} x
                    </Text>
                    <Image source={{uri: urlFor(item.image)}} className="h-14 w-14 rounded-full" />
                    <Text className="text-gray-700 font-bold text-lg flex-1">
                      {item.name}
                    </Text>
                    <Text className="font-semibold text-base">
                      ${item.price}
                    </Text>
                    <TouchableOpacity 
                      onPress={() => handleDecrese(item)}
                      style={{ backgroundColor: themeColor.bgColor(1) }} className=" rounded-full p-1">
                      <Icon.Minus stroke="white" strokeWidth={3} width={20} height={20} />
                    </TouchableOpacity>
                </View>
              )
          })
          }
        </View>
      </ScrollView>
        {/* Total */}
        <View style={{backgroundColor: themeColor.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">${cartTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery fee</Text>
            <Text className="text-gray-700">${delivaryFee}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold">${cartTotal + 2}</Text>
          </View>
          <TouchableOpacity
            disabled={isDisabled}
            onPress={() => navigation.navigate("OrderPreparing")}
            style={{ backgroundColor: isDisabled ? themeColor.bgColor(0.8) : themeColor.bgColor(1), opacity: isDisabled ? 0.8 : 1 }}
            className="rounded-full p-3"
            >
            <Text className="text-lg text-center font-bold text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}