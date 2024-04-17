import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../theme/theme";
import { LinearGradient } from "expo-linear-gradient";
import StarSvg from "../utils/Svg/StarSvg";
import { useStore } from "../context/useStore";
import { useNavigation } from "@react-navigation/native";
export default function Card({ item }) {
   const navigation = useNavigation();
   const AddToCard = useStore((state) => state.addToCart);
   const calculateCartPrice = useStore((status) => status.calculateCartPrice);
   const AddToCardHandler = (CardItem) => {
      const {
         id,
         index,
         name,
         roasted,
         imagelink_square,
         special_ingredient,
         type,
         prices,
      } = CardItem;
      AddToCard({
         id,
         index,
         name,
         roasted,
         imagelink_square,
         special_ingredient,
         type,
         prices: [{ ...prices[0], quantity: 1 }],
      });
      calculateCartPrice();
      navigation.navigate("Card");
   };
   return (
      <LinearGradient
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 1 }}
         colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
         className="m-2 h-56 w-36 rounded-2xl  px-2 pt-2.5"
      >
         <View className="h-28  overflow-hidden rounded-2xl bg-white">
            <ImageBackground
               source={item.imagelink_portrait - 19}
               className="h-32 w-[105%]  items-end rounded-2xl"
            >
               <View className="h-5 w-[45%] flex-row items-center rounded-bl-2xl bg-dark-200/40 pl-2">
                  <StarSvg size={15}></StarSvg>
                  <Text className="pr-2 text-sm font-semibold text-white">
                     {item.average_rating}
                  </Text>
               </View>
            </ImageBackground>
         </View>
         <Text className="pt-2 text-base font-normal text-white">
            {item.name}
         </Text>
         <Text className="pt-1 text-sm font-thin text-white ">{item.name}</Text>
         <View className="flex-row items-center justify-between">
            <View className="flex-row pt-2">
               <Text className="mr-1 text-lg text-secondary">$</Text>
               <Text className=" text-lg text-white">
                  {item.prices[0].price}
               </Text>
            </View>
            <TouchableOpacity
               className="h-8 w-8 items-center justify-center rounded-lg  bg-secondary"
               onPress={() => AddToCardHandler(item)}
            >
               <Text className="items-center   text-lg text-white">+</Text>
            </TouchableOpacity>
         </View>
      </LinearGradient>
   );
}
