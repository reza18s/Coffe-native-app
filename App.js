import { SafeAreaView, StatusBar } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "./src/theme/theme";
import AppNavigation from "./src/navigator/AppNavigator";

NativeWindStyleSheet.setOutput({
   default: "native",
});

const queryClient = new QueryClient();
export default function App() {
   return (
      <>
         <SafeAreaView className="flex-1 bg-dark-200">
            <QueryClientProvider client={queryClient}>
               <NavigationContainer>
                  <AppNavigation></AppNavigation>
               </NavigationContainer>
            </QueryClientProvider>
         </SafeAreaView>
         <StatusBar backgroundColor={COLORS.primaryOrangeHex} style="auto" />
      </>
   );
}
