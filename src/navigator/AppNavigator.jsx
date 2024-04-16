import {
   createStackNavigator,
   TransitionPresets,
} from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import HomeNavigation from "./HomeNavigation";

const Stack = createStackNavigator();
export default function AppNavigation() {
   return (
      <Stack.Navigator
         screenOptions={() => ({
            ...TransitionPresets.ModalPresentationIOS,
            headerShown: false,
         })}
      >
         <Stack.Screen name="Tap" component={HomeNavigation}></Stack.Screen>
         <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
         ></Stack.Screen>
      </Stack.Navigator>
   );
}
