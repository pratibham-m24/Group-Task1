import React from "react";
import { Root,Icon } from "native-base";
import { DrawerNavigator } from "react-navigation";

import Header1 from "./1.js";
import Header3 from "./3.js";
import Header4 from "./4.js";
import SideBar from "./SideBar.js";

import Search from "./Tabs22.js";
import Main from "./Main.js";
import Cart from "./Cart.js";
import S1 from "./1s.js";

import S3 from "./3s.js";
import S4 from "./4s.js";

import Sub1 from "./sub1.js";
import Product from "./product.js";
import Book from "./Book.js";
import Order from "./order.js";
import Login from "./Login.js";
import {TouchableOpacity,View,Image} from 'react-native';
import {NavigationActions} from 'react-navigation';

const Drawer2 = DrawerNavigator(
  {
    
  Drawer1: { screen: Main,

},
   
    Header1: { screen: Header1 },
     Header3: { screen: Header3 },
 Header4: { screen: Header4 },
    Search: { screen: Search },
    
    Cart: {screen: Cart },
  S1: {screen: S1 },
   
S3: {screen: S3 },
S4: {screen: S4 },

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
    <Drawer2 />
  </Root>;