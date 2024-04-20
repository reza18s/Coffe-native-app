import {
   ImageBackground,
   ScrollView,
   Text,
   TouchableOpacity,
   View,
} from "react-native";
import StarSvg from "../utils/Svg/StarSvg";
import CoffeeSvg from "../utils/Svg/CoffeSvg";
import MilkSvg from "../utils/Svg/MilkSvg";
import GoBackSvg from "../utils/Svg/GoBackSvg";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../context/useStore";
import HeartSvg from "../utils/Svg/HeartSvg";
import HeaderBar from "../components/HeaderBar";
import EmptyListAnimation from "../components/EmptyListAnimation";

export default function FavoritesScreen() {
   const FavoritesList = useStore((status) => status.FavoritesList);
   const deleteFromFavoriteList = useStore(
      (status) => status.deleteFromFavoriteList,
   );

   const navigation = useNavigation();
   const HandelFavorite = (id, type) => {
      deleteFromFavoriteList(id, type);
   };

   return (
      <ScrollView className=" bg-dark-200">
         <HeaderBar title={"Favourite"}></HeaderBar>
         <View className="w-screen items-center">
            {FavoritesList.length === 0 ? (
               <View className="h-screen w-screen  ">
                  <EmptyListAnimation></EmptyListAnimation>
               </View>
            ) : (
               FavoritesList.map((item) => (
                  <View
                     key={item.id}
                     className="my-4 w-[90%] overflow-hidden rounded-3xl"
                  >
                     <ImageBackground
                        source={item.imagelink_portrait}
                        className="h-96 w-full bg-cover "
                     >
                        <View className="w-full flex-1 p-4">
                           <View className="flex-row justify-between">
                              <TouchableOpacity
                                 className="h-9 rounded-md bg-dark-200 p-1"
                                 onPress={() => navigation.goBack()}
                              >
                                 <GoBackSvg></GoBackSvg>
                              </TouchableOpacity>
                              <TouchableOpacity
                                 className="rounded-md bg-dark-200 p-1"
                                 onPress={() =>
                                    HandelFavorite(item.type, item.id)
                                 }
                              >
                                 <HeartSvg></HeartSvg>
                              </TouchableOpacity>
                           </View>
                        </View>
                        <View className="h-36  rounded-t-3xl bg-dark-200/50 p-4">
                           <View className="flex-row justify-between">
                              <View>
                                 <Text className=" text-xl font-bold text-white">
                                    {item.name}
                                 </Text>
                                 <Text className=" text-xs font-thin text-gray-100">
                                    {item.special_ingredient}
                                 </Text>
                              </View>
                              <View className="flex-row justify-between ">
                                 <View className="mr-3 rounded-xl bg-light-400 px-2 py-1">
                                    <CoffeeSvg></CoffeeSvg>
                                    <Text className="text-xs text-white">
                                       coffee
                                    </Text>
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
                     {/* <LinearGradient
                     start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 1 }}
                     colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                     className="px-2 py-2"
                  >
                     <Text className="text-lg font-semibold text-white">
                        Description
                     </Text>

                     <Text className="pt-2 font-light text-gray-100">
                        {item.description}
                     </Text>
                  </LinearGradient> */}
                  </View>
               ))
            )}
         </View>
         <View className=" h-20"></View>
      </ScrollView>
   );
}
