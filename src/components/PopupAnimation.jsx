import LottieView from "lottie-react-native";
import { View } from "react-native";

export default function PopupAnimation({ src }) {
   return (
      <View className="absolute top-0 z-10 h-screen w-screen bg-light-400/30 ">
         <LottieView className="flex-1" autoPlay source={src}></LottieView>
      </View>
   );
}
