import { View, Text, Image, TouchableOpacity, TouchableHighlight, ScrollView} from "react-native"
import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { RestaurantType } from "../constants";
import { NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "../navigation";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColor } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
import { urlFor } from "../sanity/imageConf";


export type Props = NativeStackScreenProps<RootStackParamList, "Restaurant">;
export type RestaurantScreenRouteProp = Props["route"];
export type RestaurantScreenNavProp = Props["navigation"];

export default function RestaurantScreen() {
  const {params} = useRoute<RestaurantScreenRouteProp>();
  const item = params
  const navigation = useNavigation<RestaurantScreenNavProp>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item._id ) {
      dispatch(setRestaurant(item))
    }
  })

  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image source={{uri: urlFor(item.image)}} className="w-full h-72" />
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="absolute top-12 left-4 rounded-full bg-gray-50 shadow p-2">
            <Icon.ArrowLeft stroke={themeColor.bgColor(1)} strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }} className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">
              {item.name}
            </Text>
            <View className="flex-row space-x-3 my-2">
              <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-xs">
                    <Text className="text-green-700">{item.stars}</Text>
                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                  <Icon.MapPin color="gray" width={15} height={15} />
                  <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">
              {item.description}
            </Text>
          </View>
        </View>
        <View className="pb-20 bg-white">
          <Text className="p-4 text-2xl font-bold">
            Menu
          </Text>
          {/* Dishes */}
          {
            item.dishes.map((dish, index) => <DishRow key={index} item={dish} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}