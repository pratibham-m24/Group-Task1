import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Main from "./Main.js";
import Search from "./Search.js";
import Cart from "./Cart.js";
import Sub1 from "./sub1.js";
import Header2 from "./category2.js";
import Product from "./product.js";
import Book from "./Book.js";

const S2 = StackNavigator(
  {
    
   Header2: { screen: Header2},
   
    Search: { screen: Search },
    
    Cart: {screen: Cart },
   Sub1: {screen: Sub1 },
   Product:{screen: Product},
  Book:{screen:Book},

   
    },
  {
    initialRouteName:"Header2",
    headerMode: "none",
  }
);

export default S2;
  