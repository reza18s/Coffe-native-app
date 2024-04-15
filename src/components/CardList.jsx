import { FlatList, Text, View } from "react-native";
import Card from "./Card";
import CoffeeData from "../data/CoffeeData";

export default function CardList({ items }) {
   return (
      <View className="">
         <FlatList
            className="pl-3 "
            horizontal
            data={items}
            extraData={items}
            key={(item) => item.id}
            renderItem={Card}
         />
      </View>
   );
}
