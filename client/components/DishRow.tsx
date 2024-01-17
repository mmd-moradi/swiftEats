import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { DishesType } from "../constants"
import * as Icon from "react-native-feather";
import { themeColor } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItems, selectCartById } from "../slices/cartSlice";
import { RootState } from "../store/store";
import { DishDataType } from "../sanity/dataTypes";
import { urlFor } from "../sanity/imageConf";
type Props = {
  item: DishDataType;
}

export default function DishRow({item}: Props) {
  const dispatch  = useDispatch()
  const totalItems = useSelector((state: RootState) => selectCartById(state, item._id))
  const handleIncrese = () => {
    dispatch(addToCart(item))
  }

  const handleDecrease = () => {
    dispatch(removeFromCart(item))
  }

  return (
    <View style={{ backgroundColor: "white" }} className="flex-row items-center p-3 bg-white rounded-3xl shadow-2xl shadow-black/30 mb-3 mx-2">
      <Image source={{uri: urlFor(item.image)}} className="rounded-3xl" style={{ height: 100, width: 100 }} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-600">{item.description}</Text>
        </View>
        <View className="flex-row items-center justify-between pl-3">
          <Text className="text-lg text-gray-700 font-bold">
            ${item.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity className="rounded-full p-1"
              disabled={!totalItems.length}
              onPress={handleDecrease}
              style={{ backgroundColor: themeColor.bgColor(1) }}
            >
              <Icon.Minus height="20" width="20" stroke="white" />
            </TouchableOpacity>
            <Text className="text-lg font-semibold px-3">{totalItems.length}</Text>
            <TouchableOpacity className="rounded-full p-1"
            onPress={handleIncrese}
              style={{ backgroundColor: themeColor.bgColor(1) }}
            >
              <Icon.Plus height="20" width="20" stroke="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}