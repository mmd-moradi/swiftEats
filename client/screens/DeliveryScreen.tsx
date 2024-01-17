import { View, Text, Image, Touchable, TouchableOpacity } from "react-native"
import React from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColor } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { emptyCart } from "../slices/cartSlice";


export type Props = NativeStackScreenProps<RootStackParamList, "Delivary">;
export type DelivaryScreenRouteProp = Props["route"];
export type DelivaryScreenNavProp = Props["navigation"]
export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  const navigation = useNavigation<DelivaryScreenNavProp>();
  const handleCancelOrder = () => {
    dispatch(emptyCart())
    navigation.navigate("Home")
  }
  return (
    <View className="flex-1">
      {/* Map view */}
      <MapView
        initialRegion={{
          latitude: restaurant!.lat,
          longitude: restaurant!.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="terrain"
      >
        <Marker
          coordinate={{
            latitude: restaurant!.lat,
            longitude: restaurant!.lng,
          }}
          title={restaurant?.name}
          description={restaurant?.description}
        />
      </MapView>
      <View className="-mt-12 rounded-t-3xl bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
            <Text className="text-2xl font-bold text-gray-700">20-30 Minuts</Text>
            <Text className="mt-1 font-semibold text-gray-700">Your order is own its way!</Text>
          </View>
          <Image 
            source={require("../assets/images/bikeGuy2.gif")}
            className="w-24 h-24"
          />
        </View>
        <View 
          style={{backgroundColor: themeColor.bgColor(0.8)}}
          className="flex-row justify-between items-center rounded-full p-2 mx-2 my-5">
            <View style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}} className="p-2 rounded-full">
              <Image 
                source={require("../assets/images/courier.png")}
                className="w-14 h-14 rounded-full"
              />
            </View>
            <View className="flex-1 ml-3">
              <Text className="text-lg font-bold text-white">Alex rami</Text>
              <Text className="font-bold text-white">Your Rider</Text>
            </View>
            <View>
              <View className="flex-row items-center space-x-3 mr-2">
                <TouchableOpacity style={{ backgroundColor: "white" }} className="rounded-full p-2">
                  <Icon.Phone fill={themeColor.bgColor(1)} stroke={themeColor.bgColor(1)}  />
                </TouchableOpacity>
                <TouchableOpacity

                  onPress={() => handleCancelOrder()}
                  style={{ backgroundColor: "white" }} 
                  className="rounded-full p-2">
                  <Icon.X color="red" strokeWidth={4}  />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    </View>
  )
}