import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Sub1 from "./sub1.js";
import Search from "./Search.js";
import Cart from "./Cart.js";
import Product from "./product.js";
import Header1 from "./category1.js";
import Book from "./Book.js";
const S1 = StackNavigator(
  {
    
   Header1: { screen: Header1},
   
    Search: { screen: Search },
    
    Cart: {screen: Cart },
    Sub1: {screen: Sub1 },
   Product:{screen: Product},
   Book:{screen: Book},
   
    },
  {
    initialRouteName:"Header1",
    headerMode: "none",
  }
);

export default S1;
  