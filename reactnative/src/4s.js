import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Sub1 from "./sub1.js";
import Search from "./Tabs22.js";
import Cart from "./Cart.js";
import Product from "./product.js";
import Header4 from "./4.js";
import Book from "./Book.js";
const S4 = StackNavigator(
  {
    
   Home1: { screen: Header4 },
   
    Search: { screen: Search },
    
    Cart: {screen: Cart },
  
      Sub1: {screen: Sub1 },
Product:{screen: Product},
  Book:{screen:Book},
   
    },
  {
    initialRouteName:"Home1",
    headerMode: "none",
  }
);

export default () =>
  <Root>
    <S4 />
  </Root>;