import { createContext } from "react";
import cardList from "../constants/card";

export const isClient = typeof window != "undefined";
export const CardContext = createContext({
  currentIndex: 0,
  current: cardList[0],
});
