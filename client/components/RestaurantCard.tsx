import { View, Text, TouchableWithoutFeedback, Image } from "react-native"
import React from "react"
import { RestaurantType } from "../constants"
import * as Icon from "react-native-feather";
import { themeColor } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../screens/HomeScreen";
import { RestaurantDataType } from "../sanity/dataTypes";
import { urlFor } from "../sanity/imageConf";
type Props = {
  item: RestaurantDataType;
}
export default function RestaurantCard({item}: Props) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", item)}
    >
        <View style={{backgroundColor: "white"}}
          className="mb-2 mr-6 bg-white rounded-3xl shadow-lg shadow-orange-500/40">
          <Image className="h-36 w-60 rounded-t-3xl object-cover" source={{uri: urlFor(item.image)}} />
          <View className="bg-white px-3 pb-4 space-y-2 rounded-3xl">
            <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-xs">
                    <Text className="text-green-700">{item.rating}</Text>
                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.type.name}</Text>
                </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  )
}
