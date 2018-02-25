import React from "react";
import { Root,Icon } from "native-base";
import { DrawerNavigator } from "react-navigation";

import Header1 from "./category1.js";
import Header2 from "./category2.js";

import SideBar from "./SideBar.js";

import Search from "./Search.js";
import Main from "./Main.js";
import Cart from "./Cart.js";
import S1 from "./cat1stack.js";

import S2 from "./cat2stack.js";


import Sub1 from "./sub1.js";
import Product from "./product.js";
import Book from "./Book.js";
import Order from "./order.js";
import Login from "./Login.js";
import {TouchableOpacity,View,Image} from 'react-native';
import {NavigationActions} from 'react-navigation';

const Drawer = DrawerNavigator(
  {
    
  Main: { screen: Main,

},
   
    Header1: { screen: Header1 },
     Header2: { screen: Header2 },

    Search: { screen: Search },
    
    Cart: {screen: Cart },
  S1: {screen: S1 },
   
S2: {screen: S2 },


Sub1:{screen:Sub1},
Product:{screen:Product},
Order:{screen:Order},
Book:{screen:Book},
Login: {screen: Login},
    },
  {
    
    headerMode: "none",
  
contentOptions: {
      activeTintColor: "#e91e64"
    },
contentComponent: SideBar

   }
);

export default () =>
  <Root>
    <Drawer />
  </Root>;