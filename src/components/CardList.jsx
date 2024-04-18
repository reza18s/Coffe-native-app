import { FlatList, View } from "react-native";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function CardList({ items, ListRef }) {
   const navigation = useNavigation();

   return (
      <View className="">
         <FlatList
            ref={ListRef}
            className="pl-3 "
            horizontal
            data={items}
            extraData={items}
            key={(item) => item.id}
            renderItem={({ item }) => (
               <TouchableOpacity
                  onPress={() =>
                     navigation.navigate("DetailScreen", {
                        itemId: item.id,
                        type: item.type,
                     })
                  }
               >
                  <Card item={item}></Card>
               </TouchableOpacity>
            )}
         />
      </View>
   );
}
