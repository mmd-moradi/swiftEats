import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as Icon from "react-native-feather";
import { themeColor } from "../theme";
import Categories from "../components/Categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { FeaturedRestaurantDataType } from "../sanity/dataTypes";
import { getData, getFeaturedGroq } from "../sanity/groq";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

export type Props = NativeStackScreenProps<RootStackParamList, "Home">;
export type HomeScreenNavigationProp = Props["navigation"];

export default function HomeScreen() {
  const [featured, setFeatured] = useState<FeaturedRestaurantDataType[]>([])
  const dispatch = useDispatch();
  useEffect(() => {
    const getfeatured = async() => {  
      const data = (await getData(getFeaturedGroq)) as FeaturedRestaurantDataType[];
      setFeatured(data);
    }
    getfeatured();
  }, [])

  return (
    <ScrollView className="bg-white pt-10">
      <StatusBar style="dark" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-4">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1"/>
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">
              New York, NYC
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColor.bgColor(1) }}  className="p-3 rounded-full">
          <Icon.Sliders width="20" height="20" strokeWidth="2.5" stroke="white" />
        </View>
      </View>
      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-4">
          { featured &&
            featured.map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.name}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </ScrollView>
  )
}