import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function PaymentFooter({ price, children, onPress }) {
   return (
      <View className="my-4 flex-row items-center justify-between">
         <View className="flex-row pt-2">
            <Text className="mr-1 text-lg text-secondary">$</Text>
            <Text className=" text-lg text-white">{price}</Text>
         </View>
         <TouchableOpacity
            className="h-12 w-48  items-center justify-center rounded-xl  bg-secondary"
            onPress={onPress}
         >
            <Text className="items-center   text-lg text-white">
               {children}
            </Text>
         </TouchableOpacity>
      </View>
   );
}
