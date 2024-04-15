import {
   createNativeStackNavigator,
   TransitionPresets,
} from "@react-navigation/stack";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
   return (
      <Stack.Navigator
         screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
            headerShown: false,
         }}
      >
         <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
   );
}
