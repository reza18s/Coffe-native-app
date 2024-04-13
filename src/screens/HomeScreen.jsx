import { ScrollView, View } from "react-native";
import { useStore } from "../context/useStore";
import { useState } from "react";
import HeaderBar from "../components/HeaderBar";
const getCategories = (CoffeeList) => {
   let list;
   list = CoffeeList.map((el) => el.name);
   list.push("All");
   return [...new Set(list)];
};

export default function HomeScreen() {
   const CoffeeList = useStore((state) => state.CoffeeList);
   const [categories, setCategories] = useState(() =>
      getCategories(CoffeeList),
   );
   const [FilterList, setFilterList] = useState();

   console.log(categories);
   return (
      <View className="flex-1  bg-dark-200">
         <ScrollView className="h-[2000px]">
            <HeaderBar></HeaderBar>
         </ScrollView>
      </View>
   );
}
