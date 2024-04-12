// import { } from "expo-status-bar";
import { SafeAreaView, View, StatusBar } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigator/AppNavigator";

NativeWindStyleSheet.setOutput({
   default: "native",
});

const queryClient = new QueryClient();
export default function App() {
   return (
      <>
         <SafeAreaView className="flex-1">
            <QueryClientProvider client={queryClient}>
               <NavigationContainer>
                  <AppNavigator></AppNavigator>
               </NavigationContainer>
            </QueryClientProvider>
         </SafeAreaView>
         <StatusBar style="auto" />
      </>
   );
}
