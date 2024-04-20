import { Image, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../context/useStore";
import { ScrollView } from "react-native-gesture-handler";
import HeaderBar from "../components/HeaderBar";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";

export default function OrderScreen() {
   const OrderHistoryList = useStore((status) => status.OrderHistoryList);
   const navigation = useNavigation();
   const Fixed = (price, quantity) => {
      const ItemPrice = price * quantity;
      return ItemPrice.toFixed(2);
   };
   return (
      <View className="flex-1 bg-dark-200 ">
         <ScrollView>
            <HeaderBar title={"History"}></HeaderBar>
            {OrderHistoryList.map((item) => (
               <View key={item.OrderDate} className="my-3 px-4">
                  <View className="flex-row justify-between ">
                     <View>
                        <Text className="font-semibold  text-white">
                           Order Data
                        </Text>
                        <Text className="text-xs font-thin text-white">
                           {item.OrderDate}
                        </Text>
                     </View>
                     <View className="">
                        <Text className="font-semibold text-white">
                           Total Amount
                        </Text>
                        <Text className="text-right font-semibold text-secondary">
                           $ {item.CardListPrice}
                        </Text>
                     </View>
                  </View>
                  {item.CardList.map((item) => (
                     <View key={item.id} className="items-center">
                        <LinearGradient
                           start={{ x: 0, y: 0 }}
                           end={{ x: 1, y: 0 }}
                           colors={[
                              COLORS.primaryGreyHex,
                              COLORS.primaryBlackHex,
                           ]}
                           className="m-1  w-full rounded-2xl px-3 py-3"
                        >
                           <View>
                              <TouchableOpacity
                                 className="flex-row pb-3"
                                 onPress={() =>
                                    navigation.navigate("DetailScreen", {
                                       itemId: item.id,
                                       type: item.type,
                                    })
                                 }
                              >
                                 <Image
                                    source={item.imagelink_square}
                                    className="mr-4 h-14 w-14 rounded-xl"
                                 ></Image>
                                 <View className="w-[55%]">
                                    <Text className="text-lg font-semibold text-white ">
                                       {item.name}
                                    </Text>
                                    <Text className="text-sm font-thin text-white">
                                       {item.special_ingredient}
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
                              </TouchableOpacity>
                           </View>
                           {item.prices.map((el) => (
                              <View
                                 className="w-full flex-row justify-between py-1"
                                 key={el.size}
                              >
                                 <View className="flex-row">
                                    <View className="mr-[2px] h-9 w-14 items-center justify-center rounded-l-lg bg-dark-200">
                                       <Text className="text-center text-[10px] text-white">
                                          {el.size}
                                       </Text>
                                    </View>
                                    <View className="h-9 w-20 flex-row items-center justify-center rounded-r-lg  bg-dark-200 ">
                                       <Text className="text-md mr-1 text-secondary">
                                          $
                                       </Text>
                                       <Text className=" text-md font-semibold text-white">
                                          {item.ItemPrice}
                                       </Text>
                                    </View>
                                 </View>
                                 <View className="flex-row ">
                                    <Text className="mr-1 text-lg text-secondary">
                                       ✖
                                    </Text>
                                    <Text className=" text-lg text-white">
                                       {el.quantity}
                                    </Text>
                                 </View>
                                 <Text className="text-center text-lg font-semibold text-secondary">
                                    {Fixed(el.price, el.quantity)}
                                 </Text>
                              </View>
                           ))}
                        </LinearGradient>
                     </View>
                  ))}
               </View>
            ))}
            <View className="h-14"></View>
         </ScrollView>
      </View>
   );
}
