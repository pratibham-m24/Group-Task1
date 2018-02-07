import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Main from "./Main.js";
import Search from "./Tabs22.js";
import Cart from "./Cart.js";
import Sub1 from "./sub1.js";
import Header3 from "./3.js";
import Product from "./product.js";
import Book from "./Book.js";
const S3 = StackNavigator(
  {
    
   Header3: { screen: Header3},
   
    Search: { screen: Search },
    
    Cart: {screen: Cart },
   Sub1: {screen: Sub1 },
   Product:{screen: Product},
  Book:{screen:Book},
   
    },
  {
    initialRouteName:"Header3",
    headerMode: "none",
  }
);

export default () =>
  <Root>
    <S3 />
  </Root>;