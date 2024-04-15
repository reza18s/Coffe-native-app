import { ScrollView, Text, View } from "react-native";
import { useStore } from "../context/useStore";
import { useEffect, useRef, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import SearchBar from "../components/SearchBar";
import CategoriesMenu from "../components/CategoriesMenu";
import CardList from "../components/CardList";
import CoffeeData from "../data/CoffeeData";
const getCategories = (CoffeeList) => {
   let list;
   list = CoffeeList.map((el) => el.name);
   list.unshift("All");
   return [...new Set(list)];
};

export default function HomeScreen() {
   const CoffeeList = useStore((state) => state.CoffeeList);
   const BeanList = useStore((state) => state.BeanList);
   const [categories, setCategories] = useState(() =>
      getCategories(CoffeeList),
   );
   const [FilterValue, setFilterValue] = useState("All");
   const [FilterList, setFilterList] = useState(CoffeeList);
   const ListRef = useRef();

   useEffect(() => {
      ListRef?.current?.scrollToOffset({
         animated: true,
         offset: 0,
      });
      if (FilterValue == "All") {
         return setFilterList(CoffeeList);
      }
      setFilterList(() => CoffeeList.filter((el) => el.name == FilterValue));
   }, [FilterValue]);
   return (
      <View className="flex-1  bg-dark-200">
         <ScrollView className="h-[2000px]">
            <HeaderBar></HeaderBar>
            <Text className="pl-4 text-[36px] font-bold  text-white">
               Find the best <Text className="text-secondary">Coffee</Text> for
               you
            </Text>
            <SearchBar></SearchBar>
            <CategoriesMenu
               item={categories}
               FilterValue={FilterValue}
               setFilterValue={setFilterValue}
            ></CategoriesMenu>
            <CardList items={FilterList} ListRef={ListRef}></CardList>
            <Text className="pl-4 text-lg text-white">Coffee Beans</Text>
            <CardList items={BeanList} ListRef={ListRef}></CardList>
         </ScrollView>
      </View>
   );
}
