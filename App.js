import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

NativeWindStyleSheet.setOutput({
   default: "native",
});

const queryClient = new QueryClient();
export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <SafeAreaView>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
         </SafeAreaView>
      </QueryClientProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
