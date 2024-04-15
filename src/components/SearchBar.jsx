import { TextInput, View } from "react-native";
import SearchIcon from "../utils/Svg/SearchIcon";
import { COLORS } from "../theme/theme";

export default function SearchBar() {
   return (
      <View className="mt-2 h-12 w-screen items-center justify-center ">
         <View className="h-12 w-[93%] flex-row items-center rounded-3xl bg-light-400 px-2">
            <SearchIcon></SearchIcon>
            <TextInput
               cursorColor={COLORS.primaryOrangeHex}
               placeholder="Search for Coffee"
               placeholderTextColor={"gray"}
               autoCapitalize="sentences"
               className="w-[90%] px-2 text-lg text-white"
            ></TextInput>
         </View>
      </View>
   );
}
