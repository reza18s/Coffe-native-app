import { ImageBackground, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarSvg from "../utils/Svg/StarSvg";
import CoffeeSvg from "../utils/Svg/CoffeSvg";
import MilkSvg from "../utils/Svg/MilkSvg";
import GoBackSvg from "../utils/Svg/GoBackSvg";
import Heart_outline from "../utils/Svg/Heart_outline";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import PaymentFooter from "../components/PaymentFooter";
import { useStore } from "../context/useStore";

export default function DetailScreen({ route }) {
   const CoffeeList = useStore((status) => status.CoffeeList);
   const BeanList = useStore((status) => status.BeanList);

   let { type, itemId } = route.params;
   const item =
      type == "Coffee"
         ? CoffeeList.find((el) => el.id == itemId)
         : BeanList.find((el) => el.id == itemId);
   console.log(item, itemId);
   const [Size, setSize] = useState(item.prices[0]);
   const AddToCard = useStore((state) => state.addToCart);
   const calculateCartPrice = useStore((status) => status.calculateCartPrice);
   const navigation = useNavigation();
   const AddToCardHandler = (CardItem) => {
      const {
         id,
         index,
         name,
         roasted,
         imagelink_square,
         special_ingredient,
         type,
      } = CardItem;
      AddToCard({
         id,
         index,
         name,
         roasted,
         imagelink_square,
         special_ingredient,
         type,
         prices: [{ ...Size, quantity: 1 }],
      });
      calculateCartPrice();
      navigation.navigate("Card");
   };

   return (
      <ScrollView className="flex-1 bg-dark-200 ">
         <ImageBackground
            source={item.imagelink_portrait - 19}
            className="w-scree h-96 bg-cover "
         >
            <View className="w-screen flex-1 flex-row justify-between p-4">
               <TouchableOpacity
                  className="rounded-md bg-dark-200 p-1"
                  onPress={() => navigation.goBack()}
               >
                  <GoBackSvg></GoBackSvg>
               </TouchableOpacity>
               <TouchableOpacity className="rounded-md bg-dark-200 p-1">
                  <Heart_outline></Heart_outline>
               </TouchableOpacity>
            </View>
            <View className="h-36  rounded-t-3xl bg-dark-200/50 p-4">
               <View className="flex-row justify-between">
                  <View>
                     <Text className="text-2xl font-bold text-white">
                        {item.name}
                     </Text>
                     <Text className=" text-xs font-thin text-gray-100">
                        {item.special_ingredient}
                     </Text>
                  </View>
                  <View className="flex-row justify-between ">
                     <View className="mr-3 rounded-xl bg-light-400 px-2 py-1">
                        <CoffeeSvg></CoffeeSvg>
                        <Text className="text-xs text-white">coffee</Text>
                     </View>
                     <View className="rounded-xl bg-light-400 px-2 py-1">
                        <MilkSvg></MilkSvg>
                        <Text className="text-center text-xs text-white">
                           Milk
                        </Text>
                     </View>
                  </View>
               </View>
               <View className="mt-2 flex-row items-center justify-between">
                  <View className=" w-[45%] flex-row items-center">
                     <StarSvg size={20}></StarSvg>
                     <Text className="pr-2 text-lg font-semibold text-white">
                        {item.average_rating}
                     </Text>

                     <Text className="pr-2 text-sm font-light text-white">
                        ({item.ratings_count})
                     </Text>
                  </View>
                  <View className=" rounded-xl bg-light-400 px-4  py-3">
                     <Text className="text-sm font-semibold text-white">
                        {item.roasted}
                     </Text>
                  </View>
               </View>
            </View>
         </ImageBackground>
         <View className=" p-4">
            <Text className="text-lg font-semibold text-white">
               Description
            </Text>

            <Text className="pt-2 font-light text-gray-100">
               {item.description}
            </Text>
            <Text className="my-2 text-lg font-semibold text-white">Size</Text>
            <View className="mt-1 w-full flex-row justify-between">
               {item.prices.map((el) => (
                  <TouchableOpacity
                     className={` h-12 w-24 justify-center rounded-xl bg-light-400 ${Size === el ? "border border-secondary" : ""}`}
                     key={el.size}
                     onPress={() => setSize(el)}
                  >
                     <Text
                        className={`text-center text-white  ${Size === el ? "text-secondary" : ""}`}
                     >
                        {el.size}
                     </Text>
                  </TouchableOpacity>
               ))}
            </View>
            <PaymentFooter
               price={Size.price}
               onPress={() => AddToCardHandler(item)}
            >
               Add to card
            </PaymentFooter>
         </View>
      </ScrollView>
   );
}
