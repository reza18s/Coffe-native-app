import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";
import { produce } from "immer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
   persist(
      // eslint-disable-next-line no-unused-vars
      (set, get) => ({
         CoffeeList: CoffeeData,
         BeanList: BeansData,
         CartPrice: 0,
         CardList: [],
         FavoriteList: [],
         OrderHistory: [],
         addToCart: (cartItem) =>
            set(
               produce((state) => {
                  let found = false;
                  for (let i = 0; i < state.CardList.length; i++) {
                     if (state.CardList[i].id == cartItem.id) {
                        found = true;
                        let size = false;
                        for (
                           let j = 0;
                           j < state.CardList[i].prices.length;
                           j++
                        ) {
                           if (
                              state.CardList[i].prices[j].size ==
                              cartItem.prices[0].size
                           ) {
                              size = true;
                              state.CardList[i].prices[j].quantity++;
                              break;
                           }
                        }
                        if (size == false) {
                           state.CardList[i].prices.push(cartItem.prices[0]);
                        }
                        state.CardList[i].prices.sort((a, b) => {
                           if (a.size > b.size) {
                              return -1;
                           }
                           if (a.size < b.size) {
                              return 1;
                           }
                           return 0;
                        });
                        break;
                     }
                  }
                  if (found == false) {
                     state.CardList.push(cartItem);
                  }
               }),
            ),
         calculateCartPrice: () =>
            set(
               produce((state) => {
                  let totalprice = 0;
                  for (let i = 0; i < state.CardList.length; i++) {
                     let tempprice = 0;
                     for (let j = 0; j < state.CardList[i].prices.length; j++) {
                        tempprice =
                           tempprice +
                           parseFloat(state.CardList[i].prices[j].price) *
                              state.CardList[i].prices[j].quantity;
                     }
                     state.CardList[i].ItemPrice = tempprice
                        .toFixed(2)
                        .toString();
                     totalprice = totalprice + tempprice;
                  }
                  state.CardPrice = totalprice.toFixed(2);
               }),
            ),
         addToFavoriteList: (type, id) =>
            set(
               produce((state) => {
                  if (type == "Coffee") {
                     for (let i = 0; i < state.CoffeeList.length; i++) {
                        if (state.CoffeeList[i].id == id) {
                           if (state.CoffeeList[i].favourite == false) {
                              state.CoffeeList[i].favourite = true;
                              state.FavoritesList.unshift(state.CoffeeList[i]);
                           } else {
                              state.CoffeeList[i].favourite = false;
                           }
                           break;
                        }
                     }
                  } else if (type == "Bean") {
                     for (let i = 0; i < state.BeanList.length; i++) {
                        if (state.BeanList[i].id == id) {
                           if (state.BeanList[i].favourite == false) {
                              state.BeanList[i].favourite = true;
                              state.FavoritesList.unshift(state.BeanList[i]);
                           } else {
                              state.BeanList[i].favourite = false;
                           }
                           break;
                        }
                     }
                  }
               }),
            ),
         deleteFromFavoriteList: (type, id) =>
            set(
               produce((state) => {
                  if (type == "Coffee") {
                     for (let i = 0; i < state.CoffeeList.length; i++) {
                        if (state.CoffeeList[i].id == id) {
                           if (state.CoffeeList[i].favourite == true) {
                              state.CoffeeList[i].favourite = false;
                           } else {
                              state.CoffeeList[i].favourite = true;
                           }
                           break;
                        }
                     }
                  } else if (type == "Beans") {
                     for (let i = 0; i < state.BeanList.length; i++) {
                        if (state.BeanList[i].id == id) {
                           if (state.BeanList[i].favourite == true) {
                              state.BeanList[i].favourite = false;
                           } else {
                              state.BeanList[i].favourite = true;
                           }
                           break;
                        }
                     }
                  }
                  let spliceIndex = -1;
                  for (let i = 0; i < state.FavoritesList.length; i++) {
                     if (state.FavoritesList[i].id == id) {
                        spliceIndex = i;
                        break;
                     }
                  }
                  state.FavoritesList.splice(spliceIndex, 1);
               }),
            ),
         incrementCartItemQuantity: (id, size) =>
            set(
               produce((state) => {
                  for (let i = 0; i < state.CardList.length; i++) {
                     if (state.CardList[i].id == id) {
                        for (
                           let j = 0;
                           j < state.CardList[i].prices.length;
                           j++
                        ) {
                           if (state.CardList[i].prices[j].size == size) {
                              state.CardList[i].prices[j].quantity++;
                              break;
                           }
                        }
                     }
                  }
               }),
            ),
         decrementCartItemQuantity: (id, size) =>
            set(
               produce((state) => {
                  for (let i = 0; i < state.CardList.length; i++) {
                     if (state.CardList[i].id == id) {
                        for (
                           let j = 0;
                           j < state.CardList[i].prices.length;
                           j++
                        ) {
                           if (state.CardList[i].prices[j].size == size) {
                              if (state.CardList[i].prices.length > 1) {
                                 if (state.CardList[i].prices[j].quantity > 1) {
                                    state.CardList[i].prices[j].quantity--;
                                 } else {
                                    state.CardList[i].prices.splice(j, 1);
                                 }
                              } else {
                                 if (state.CardList[i].prices[j].quantity > 1) {
                                    state.CardList[i].prices[j].quantity--;
                                 } else {
                                    state.CardList.splice(i, 1);
                                 }
                              }
                              break;
                           }
                        }
                     }
                  }
               }),
            ),
         addToOrderHistoryListFromCart: () =>
            set(
               produce((state) => {
                  let temp = state.CardList.reduce(
                     (accumulator, currentValue) =>
                        accumulator + parseFloat(currentValue.ItemPrice),
                     0,
                  );
                  if (state.OrderHistoryList.length > 0) {
                     state.OrderHistoryList.unshift({
                        OrderDate:
                           new Date().toDateString() +
                           " " +
                           new Date().toLocaleTimeString(),
                        CardList: state.CardList,
                        CardListPrice: temp.toFixed(2).toString(),
                     });
                  } else {
                     state.OrderHistoryList.push({
                        OrderDate:
                           new Date().toDateString() +
                           " " +
                           new Date().toLocaleTimeString(),
                        CardList: state.CardList,
                        CardListPrice: temp.toFixed(2).toString(),
                     });
                  }
                  state.CardList = [];
               }),
            ),
      }),
      {
         name: "coffee-app",
         storage: createJSONStorage(() => AsyncStorage),
      },
   ),
);
