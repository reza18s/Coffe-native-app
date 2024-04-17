import { ScrollView, View } from "react-native";
import { useStore } from "../context/useStore";
import HeaderBar from "../components/HeaderBar";
import PaymentFooter from "../components/PaymentFooter";
import EmptyListAnimation from "../components/EmptyListAnimation";
import CardItem from "../components/CardItem";

export default function CardScreen() {
   const CardList = useStore((status) => status.CardList);
   const CardPrice = useStore((status) => status.CardPrice);
   const calculateCartPrice = useStore((status) => status.calculateCartPrice);
   const decrementCartItemQuantity = useStore(
      (status) => status.decrementCartItemQuantity,
   );
   const incrementCartItemQuantity = useStore(
      (status) => status.incrementCartItemQuantity,
   );
   const increaseQuantityHandler = (id, size) => {
      incrementCartItemQuantity(id, size);
      calculateCartPrice();
   };
   const decreaseQuantityHandler = (id, size) => {
      decrementCartItemQuantity(id, size);
      calculateCartPrice();
   };
   return (
      <View className=" flex-1 bg-dark-200">
         <ScrollView>
            <View className="min-h-screen">
               <HeaderBar title={"cart"}></HeaderBar>
               {CardList.length === 0 ? (
                  <EmptyListAnimation></EmptyListAnimation>
               ) : (
                  <View className="p-4">
                     <CardItem
                        CardList={CardList}
                        decrease={decreaseQuantityHandler}
                        increase={increaseQuantityHandler}
                     ></CardItem>
                     <PaymentFooter price={CardPrice}>pay</PaymentFooter>
                  </View>
               )}
            </View>
            <View className={CardList.length !== 0 && "h-10"}></View>
         </ScrollView>
      </View>
   );
}
