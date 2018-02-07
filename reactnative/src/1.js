import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
List,
ListItem,
Icon
} from "native-base";
import {ScrollView,TouchableOpacity} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
class Header1 extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#fff'}}>
        <Header style={{backgroundColor:'#4d4dff'}}>
 <Left>
<Button transparent onPress={() => {this.props.navigation.navigate('DrawerOpen')}}>

<Icon name="menu" size={25} style={{color:'white'}}  />

</Button>

</Left>
         
          <Body>
            <Title>Electronics</Title>
          </Body>
          <Right >
<Button transparent onPress={() => this.props.navigation.navigate('Search')}>

            <Icon name='search' style={{color:'white'}}  />  
          </Button>
<Button transparent onPress={() => this.props.navigation.navigate('Cart')}>

<FIcon name="shopping-cart" size={25} style={{color:'white'}}  />

</Button>
</Right>
        </Header>
<ScrollView>
        <Content>
<List>
<ListItem>
 
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Mobile Phones",category:"mobile_phone",})}>


           <Text>      Mobile Phones </Text>
                
              
</TouchableOpacity>


</ListItem>
<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Laptops",category:"laptop",})}>
<Text>      Laptops </Text>
</TouchableOpacity>
</ListItem>
<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Cameras",category:"camera",})}>
<Text>      Cameras</Text>
</TouchableOpacity>
</ListItem>

</List>
</Content>
</ScrollView>
      </Container>
    );
  }
}

export default Header1;