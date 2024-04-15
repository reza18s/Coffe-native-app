import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import CardScreen from "../screens/CardScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import OrderScreen from "../screens/OrderScreen";
import { COLORS } from "../theme/theme";
import { BlurView } from "expo-blur";

const IconName = {
   Favorite: "heart",
   Card: "shoppingcart",
   Home: "home",
   History: "bells",
};
function TabBarIcon(color, size, route) {
   const iconName = IconName[route.name];
   // You can return any component that you like here!
   return <AntDesign name={iconName} size={size} color={color} />;
}

const Tap = createBottomTabNavigator();
export default function AppNavigator() {
   return (
      <Tap.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => TabBarIcon(color, size, route),
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: COLORS.primaryOrangeHex,
            tabBarBackground: () => (
               <BlurView
                  className="absolute bottom-0 left-0 right-0 top-0 bg-black/0"
                  intensity={5}
               ></BlurView>
            ),
            tabBarStyle: {
               position: "absolute",
               backgroundColor: COLORS.primaryBlackRGBA,
               height: 60,
               elevation: 0,
               borderTopWidth: 0,
               borderTopColor: "transparent",
            },
         })}
      >
         <Tap.Screen name="Home" component={HomeScreen} />
         <Tap.Screen name="Card" component={CardScreen} />
         <Tap.Screen name="Favorite" component={FavoritesScreen} />
         <Tap.Screen name="History" component={OrderScreen} />
      </Tap.Navigator>
   );
}
