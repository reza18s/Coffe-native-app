import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";

export default function CardItem({ CardList, decrease, increase }) {
   const navigation = useNavigation();
   const Fixed = (price, quantity) => {
      const ItemPrice = price * quantity;
      return ItemPrice.toFixed(2);
   };
   return (
      <View>
         {CardList.map((item) => (
            <View key={item.id} className="items-center">
               <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  className="m-2  w-full rounded-2xl px-2 py-2"
               >
                  <View className="flex-row ">
                     <TouchableOpacity
                        onPress={() =>
                           navigation.navigate("DetailScreen", {
                              itemId: item.id,
                              type: item.type,
                           })
                        }
                     >
                        <Image
                           source={item.imagelink_square - 19}
                           className={`mr-2 rounded-xl ${item.prices.length !== 1 ? "h-24 w-24" : "h-32 w-32"}`}
                        ></Image>
                     </TouchableOpacity>
                     <View className="w-[55%]">
                        <Text className="text-lg font-semibold text-white ">
                           {item.name}
                        </Text>
                        <Text className="text-sm font-thin text-white">
                           {item.special_ingredient}
                        </Text>
                        {item.prices.length !== 1 ? (
                           <View className="mt-2 w-32 items-center  rounded-xl bg-light-400 px-4 py-3">
                              <Text className="text-sm font-semibold text-white">
                                 {item.roasted}
                              </Text>
                           </View>
                        ) : (
                           <>
                              <View className="flex-row py-2">
                                 <View className="mr-8 h-8 w-16 justify-center rounded-xl bg-light-400">
                                    <Text className="text-center text-white ">
                                       {item.prices[0].size}
                                    </Text>
                                 </View>
                                 <View className="flex-row ">
                                    <Text className="mr-1 text-lg text-secondary">
                                       $
                                    </Text>
                                    <Text className=" text-lg text-white">
                                       {item.ItemPrice}
                                    </Text>
                                 </View>
                              </View>
                              <View className="flex-row justify-between">
                                 <TouchableOpacity
                                    className="h-8 w-8 items-center justify-center rounded-lg  bg-secondary"
                                    onPress={() =>
                                       decrease(item.id, item.prices[0].size)
                                    }
                                 >
                                    <Text className="items-center text-lg text-white">
                                       -
                                    </Text>
                                 </TouchableOpacity>
                                 <Text className="w-16 rounded-lg bg-light-400 text-center text-lg font-semibold text-white">
                                    {item.prices[0].quantity}
                                 </Text>
                                 <TouchableOpacity
                                    className="h-8 w-8 items-center justify-center rounded-lg  bg-secondary"
                                    onPress={() =>
                                       increase(item.id, item.prices[0].size)
                                    }
                                 >
                                    <Text className="items-center   text-lg text-white">
                                       +
                                    </Text>
                                 </TouchableOpacity>
                              </View>
                           </>
                        )}
                     </View>
                  </View>
                  {item.prices.length > 1 &&
                     item.prices.map((el) => (
                        <View
                           className="w-full flex-row justify-between py-2"
                           key={el.size}
                        >
                           <View className="h-8 w-16 justify-center rounded-xl bg-light-400">
                              <Text className="text-center text-white ">
                                 {el.size}
                              </Text>
                           </View>
                           <View className="flex-row ">
                              <Text className="mr-1 text-lg text-secondary">
                                 $
                              </Text>
                              <Text className=" text-lg text-white">
                                 {Fixed(el.price, el.quantity)}
                              </Text>
                           </View>
                           <TouchableOpacity
                              className="h-8 w-8 items-center justify-center rounded-lg  bg-secondary"
                              onPress={() => decrease(item.id, el.size)}
                           >
                              <Text className="items-center text-lg text-white">
                                 -
                              </Text>
                           </TouchableOpacity>
                           <Text className="h-8 w-16 rounded-lg bg-light-400 text-center text-lg font-semibold text-white">
                              {el.quantity}
                           </Text>
                           <TouchableOpacity
                              className="h-8 w-8 items-center justify-center rounded-lg  bg-secondary"
                              onPress={() => increase(item.id, el.size)}
                           >
                              <Text className="items-center   text-lg text-white">
                                 +
                              </Text>
                           </TouchableOpacity>
                        </View>
                     ))}
               </LinearGradient>
            </View>
         ))}
      </View>
   );
}
