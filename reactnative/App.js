import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import PropTypes from 'prop-types';
import {TouchableOpacity,View,Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Header1 from "./src/1";
import Header4 from "./src/4";
import Header3 from "./src/3";
import Main from "./src/Main.js";
import SideBar from "./src/SideBar.js";
import Drawer2 from "./src/drawer1.js";
import Login from "./src/Login.js";



const AppNavigator = StackNavigator(
  {
    Login: {screen: Login},

    Drawer2: { screen: Drawer2},
    
   Header1:{screen: Header1},
    Main : {screen: Main},
   Header3:{screen: Header3},
Header4:{screen: Header4},
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