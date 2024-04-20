import { useRef, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import PaymentFooter from "../components/PaymentFooter";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../theme/theme";
import WalletSvg from "../utils/Svg/WallletSvg";
import VisaSvg from "../utils/Svg/VisaSvg";
import CimCardSvg from "../utils/Svg/CimCardSvg";
import { useStore } from "../context/useStore";
import { useNavigation } from "@react-navigation/native";
import PopupAnimation from "../components/PopupAnimation";
const PaymentList = [
   {
      name: "Wallet",
      isIcon: true,
   },
   {
      name: "Google Pay",
      // eslint-disable-next-line no-undef
      icon: require("../assets/app_images/gpay.png"),
      isIcon: false,
   },
   {
      name: "Apple Pay",
      // eslint-disable-next-line no-undef
      icon: require("../assets/app_images/applepay.png"),
      isIcon: false,
   },
   {
      name: "Amazon Pay",
      // eslint-disable-next-line no-undef
      icon: require("../assets/app_images/amazonpay.png"),
      isIcon: false,
   },
];
export default function PaymentScreen({ route }) {
   const calculateCartPrice = useStore((status) => status.calculateCartPrice);
   const addToOrderHistoryListFromCart = useStore(
      (status) => status.addToOrderHistoryListFromCart,
   );
   const [PaymentMode, setPaymentMode] = useState("Credit card");
   const [CardYear, setCardYear] = useState("00");
   const [CardMonth, setCardMonth] = useState("00");
   const [CardNumber, setCardNumber] = useState([
      "1234",
      "5678",
      "1234",
      "1234",
   ]);
   const [CardName, setCardName] = useState("robert janson");
   const [ShowAnimation, setShowAnimation] = useState(false);

   const CardNameRef = useRef(null);
   const CardYearRef = useRef(null);
   const CardMonthRef = useRef(null);
   const navigation = useNavigation();

   const inputRefs = Array.from({ length: 4 }, () => useRef(null));

   const handleTextChange = (text, index) => {
      let newVal = [];
      CardNumber.map((val, i) =>
         index == i ? newVal.push(text) : newVal.push(val),
      );
      setCardNumber(newVal);
      if (text.length === 4 && index <= inputRefs.length - 1) {
         if (index === 3) {
            CardNameRef.current.focus();
         } else {
            inputRefs[index + 1].current.focus();
         }
      } else if (text.length === 0 && index > 0) {
         inputRefs[index - 1].current.focus();
      }
   };
   const HandelSubmit = () => {
      setShowAnimation(true);
      calculateCartPrice();
      addToOrderHistoryListFromCart();
      setTimeout(() => {
         setShowAnimation(false);
         navigation.navigate("History");
      }, 1300);
   };
   return (
      <View className="flex-1  bg-dark-200 p-2">
         {ShowAnimation ? (
            <PopupAnimation
               // eslint-disable-next-line no-undef
               src={require("../lottie/successful.json")}
            ></PopupAnimation>
         ) : (
            <></>
         )}
         <TouchableOpacity onPress={() => setPaymentMode("Credit card")}>
            <LinearGradient
               start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 1 }}
               colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
               className={`my-1 h-52 justify-between rounded-2xl px-2 py-2 ${"Credit card" == PaymentMode && "border border-secondary"}`}
            >
               <View className="flex-row justify-between p-1">
                  <CimCardSvg></CimCardSvg>
                  <VisaSvg></VisaSvg>
               </View>
               <View className="flex-row justify-center ">
                  {inputRefs.map((ref, index) => (
                     <TextInput
                        key={index}
                        ref={ref}
                        value={CardNumber[index]}
                        className="flex-1 text-center text-lg text-white"
                        maxLength={4}
                        keyboardType="numeric"
                        onChangeText={(text) => handleTextChange(text, index)}
                     />
                  ))}
               </View>
               <View className="flex-row justify-between">
                  <View>
                     <Text className="text-xs text-gray-500">
                        Card Holder Name
                     </Text>
                     <TextInput
                        className="  text-white "
                        value={CardName}
                        id="CardName"
                        onChangeText={(el) => setCardName(el)}
                        onSubmitEditing={() => CardYearRef.current.focus()}
                        ref={CardNameRef}
                     ></TextInput>
                  </View>
                  <View>
                     <Text className="text-xs text-gray-500">Expire Date</Text>
                     <View className="flex-row justify-end">
                        <TextInput
                           className="  text-white "
                           value={CardYear}
                           onChangeText={(el) => setCardYear(el)}
                           onSubmitEditing={() => CardMonthRef.current.focus()}
                           maxLength={2}
                           keyboardType="number-pad"
                           ref={CardYearRef}
                        ></TextInput>
                        <Text className="text-lg text-white">/</Text>
                        <TextInput
                           className="  text-white "
                           value={CardMonth}
                           keyboardType="number-pad"
                           maxLength={2}
                           onChangeText={(el) => setCardMonth(el)}
                           ref={CardMonthRef}
                        ></TextInput>
                     </View>
                  </View>
               </View>
            </LinearGradient>
         </TouchableOpacity>
         {PaymentList.map((el) => (
            <TouchableOpacity
               key={el.name}
               onPress={() => setPaymentMode(el.name)}
            >
               <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  className={`my-1 h-12 flex-row items-center rounded-full px-2 py-2 ${el.name == PaymentMode && "border border-secondary"}`}
               >
                  {el.isIcon && <WalletSvg></WalletSvg>}
                  {!el.isIcon && (
                     <Image source={el.icon} className="h-7 w-7"></Image>
                  )}
                  <Text className="ml-2 text-center font-medium text-white">
                     {el.name}
                  </Text>
               </LinearGradient>
            </TouchableOpacity>
         ))}
         <View className="flex-1"></View>
         <PaymentFooter
            price={route.params.price}
            onPress={() => HandelSubmit()}
         >
            Pay from {PaymentMode}
         </PaymentFooter>
      </View>
   );
}
