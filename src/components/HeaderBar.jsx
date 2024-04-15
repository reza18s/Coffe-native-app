import { Image, Text, View } from "react-native";
import MenuSvg from "../utils/Svg/MenuSvg";

export default function HeaderBar({ title }) {
   return (
      <View className="flex-row justify-between bg-dark-300/10 px-3 py-2 ">
         <View className="h-10 rounded-lg bg-dark-300/30 p-2">
            <MenuSvg></MenuSvg>
         </View>
         <View className="justify-center ">
            <Text className="text-lg font-semibold  text-white">{title}</Text>
         </View>
         <View className=" p-1">
            <Image
               source={
                  // eslint-disable-next-line no-undef
                  require("../assets/app_images/avatar.png")
               }
               className="h-9 w-9 rounded-full"
            ></Image>
         </View>
      </View>
   );
}
