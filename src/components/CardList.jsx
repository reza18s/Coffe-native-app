import { FlatList, View } from "react-native";
import Card from "./Card";

export default function CardList({ items, ListRef }) {
   return (
      <View className="">
         <FlatList
            ref={ListRef}
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
