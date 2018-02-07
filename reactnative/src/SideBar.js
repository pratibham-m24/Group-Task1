import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Font } from 'expo';
import {View,StyleSheet,TouchableOpacity, ScrollView,
 } from 'react-native';
import {NavigationActions} from 'react-navigation';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';

import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Header, Content,Card,CardItem,Thumbnail,
          List, ListItem, Text,Icon, Left, Body,
          Right, Switch,Button } from 'native-base';
import S1 from "./1s.js";

class SideBar extends React.Component {


constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

  });
this.setState({ fontLoaded: true });
}

  render() {

    return (


<Container style={styles.container}>
{ this.state.fontLoaded ? (

     <View style={{paddingTop:Expo.Constants.statusBarHeight,borderBottomWidth: 1,backgroundColor: '#4d4dff'}}>
<Thumbnail style={{paddingLeft:60}} source={require("./images/logo.png")} />


<View style={{paddingLeft:10,flexDirection: 'row',justifyContent: 'space-between'}}>
    <Text style={{fontWeight: "bold",color:'white',fontSize:20}}>Hello {username}{"\n"}</Text>
    
</View>




</View>
) : null
}
 <ScrollView>

   <List style={{paddingLeft:10}}>


 <ListItem style={{borderBottomWidth: 0}} >
             
<TouchableOpacity onPress={() => this.props.navigation.navigate('Drawer1')}>

           
                <Text style={{fontWeight: "normal"}}><EIcon name="home" size={25} style={{color:'grey'}} />   Home</Text>
              
</TouchableOpacity>

              </ListItem>


            <ListItem style={{borderBottomWidth: 0}} >
<TouchableOpacity onPress={() => this.props.navigation.navigate('S1')}>
              <Left>


           
                <Text style={{fontWeight: "normal"}}><FIcon name="mobile" size={25} style={{color:'grey'}} />   Electronics</Text>
              

</Left>
</TouchableOpacity>
              </ListItem>

            <ListItem style={{borderBottomWidth: 0}}  >
              <Left>
<TouchableOpacity onPress={() => this.props.navigation.navigate('S3')}>


            
                <Text style={{fontWeight: "normal"}}><IIcon name="md-shirt" size={20} style={{color:'grey'}} /> Fashion</Text>
            
              </TouchableOpacity>
              </Left>
            </ListItem>

 


              
          
<ListItem style={{borderBottomWidth: 0}} >
              <Left>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Order')}>
 


              
             
                <Text style={{fontWeight: "normal"}}><EIcon name="book" style={{color:'grey'}} size={20}/>My Orders</Text>
              </TouchableOpacity>
              </Left>
            </ListItem>
<ListItem style={{borderBottomWidth: 0}} >
              <Left>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
 


              
             
                <Text style={{fontWeight: "normal"}}><EIcon name="book" style={{color:'grey'}} size={20}/>Logout</Text>
              </TouchableOpacity>
              </Left>
            </ListItem>
          </List>    
    

</ScrollView>
</Container>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'white',
  },
})  ;
SideBar.propTypes = {
navigation:PropTypes.object
};
export default SideBar; 
                                                                                          