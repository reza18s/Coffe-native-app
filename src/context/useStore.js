import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
   persist(
      // eslint-disable-next-line no-unused-vars
      (set, get) => ({
         CoffeeList: CoffeeData,
         BeanList: BeansData,
         CardPrice: 0,
         CardList: [],
         FavoriteList: [],
         OrderHistory: [],
      }),
      { name: "coffee-app", storage: createJSONStorage(() => AsyncStorage) },
   ),
);
