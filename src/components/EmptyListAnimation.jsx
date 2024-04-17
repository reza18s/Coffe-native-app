import LottieView from "lottie-react-native";
import { View } from "react-native";

export default function EmptyListAnimation() {
   return (
      <View className="h-[80%]">
         <LottieView
            className="flex-1"
            // eslint-disable-next-line no-undef
            source={require("../lottie/coffeecup.json")}
            loop
            autoPlay
         ></LottieView>
      </View>
   );
}
