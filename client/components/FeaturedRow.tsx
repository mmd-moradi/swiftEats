import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { RestaurantType } from "../constants"
import { themeColor } from "../theme"
import RestaurantCard from "./RestaurantCard"
import { RootStackParamList } from "../navigation"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RestaurantDataType } from "../sanity/dataTypes"



type Props = {
  title: string;
  restaurants: RestaurantDataType[];
  description: string;
}

export default function FeaturedRow({title, description, restaurants}: Props) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColor.text}} className="font-semibold" >See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard key={index} item={restaurant} />
          )
        })}
      </ScrollView>
    </View>
  )
}