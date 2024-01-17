import { View, Text, ScrollView, Touchable, TouchableOpacity, Image } from "react-native"
import React, { useEffect, useState } from "react"
import { categories } from "../constants"
import { CategoryDataType } from "../sanity/dataTypes";
import { urlFor } from "../sanity/imageConf";
import { getCategoriesGroq, getData } from "../sanity/groq";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string>();
  const [categories, setCategories] = useState<CategoryDataType[]>([])

  useEffect(() => {
    const getCategories = async() => {
      const data = (await getData(getCategoriesGroq)) as CategoryDataType[];
      setCategories(data);
    }
    getCategories();
  }, [])

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
      >
        {categories.map((category, index) => {
          let isActive = category._id === activeCategory
          let btnClass = isActive ? "bg-gray-300" : "bg-gray-100"
          let textClass = isActive ? "font-semibold text-gray-800": "text-gray-500"
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
              onPress={() => setActiveCategory(category._id)}
              className={`p-2 rounded-full shadow bg-gray-100 ${btnClass}`}
              >
                <Image
                source={{uri: urlFor(category.image)}}
                  style= {{ width: 45, height: 45, }}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}