import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import {TouchableOpacity,View,Image} from 'react-native';


import Main from "./src/Main.js";

import Drawer2 from "./src/drawer1.js";
import Login from "./src/Login.js";



const AppNavigator = StackNavigator(
  {
    Login: {screen: Login},

    Drawer2: { screen: Drawer2},
    
   
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