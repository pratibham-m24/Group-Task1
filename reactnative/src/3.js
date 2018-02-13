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
List,ListItem,
Icon
} from "native-base";

import {ScrollView,TouchableOpacity} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';


class Header3 extends Component {

  render() {

    return (
      <Container >
        <Header style={{backgroundColor:'#4d4dff'}}>
<Left>
<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>

<Icon name="menu" size={25} style={{color:'white'}}  />

</Button>

</Left>
          
          <Body>
            <Title>Fashion</Title>
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
        <Content style={{backgroundColor:'#fff'}}>
 
<List>
<ListItem itemDivider style={{backgroundColor:'#32CD32'}}>
<Text>Men</Text>
</ListItem>


<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Men-Footwear",category:"men_footwear",})}>

<Text>      Footwear</Text>
</TouchableOpacity>
</ListItem>


<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Men-Clothing",category:"men_clothing",})}>

<Text>       Clothing</Text>
</TouchableOpacity>
</ListItem>


<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Men-Watches",category:"men_watch",})}>

<Text>       Watches</Text>
</TouchableOpacity>
</ListItem>


<ListItem itemDivider style={{backgroundColor:'#32CD32'}}>
<Text>Women</Text>
</ListItem>


<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Women-Clothing",category:"women_clothing",})}>

<Text>     Clothing</Text>
</TouchableOpacity>
</ListItem>


<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Women-Footwear",category:"women_footwear",})}>

<Text>       Footwear</Text>
</TouchableOpacity>
</ListItem>


<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Women-Watches",category:"women_watch",})}>

<Text>       Watches</Text>
</TouchableOpacity>
</ListItem>


<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Women-Handbags",category:"women_bag",})}>

<Text>      Handbags & Clutches</Text>
</TouchableOpacity>
</ListItem>

</List>
</Content>
</ScrollView>
      </Container>
    );
  }
}

export default Header3;