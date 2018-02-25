import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import {TouchableOpacity,View,Image} from 'react-native';


import Main from "./src/Main.js";

import Drawer from "./src/drawer.js";
import Login from "./src/Login.js";



const AppNavigator = StackNavigator(
  {
    Login: {screen: Login},

    Drawer: { screen: Drawer},
    
   
    Main : {screen: Main},
  

   },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;