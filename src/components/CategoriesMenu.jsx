import { ScrollView, Text, View } from "react-native";

export default function CategoriesMenu({ item, FilterValue, setFilterValue }) {
   return (
      <View className="m-3 ">
         <ScrollView horizontal>
            {item.map((el) => (
               <Text
                  onPress={() => setFilterValue(el)}
                  key={el}
                  className={`px-3  ${el == FilterValue ? "text-secondary" : "text-white"}`}
               >
                  {el}
               </Text>
            ))}
         </ScrollView>
      </View>
   );
}
