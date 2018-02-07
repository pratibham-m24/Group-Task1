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
class Header4 extends Component {
  render() {
    return (
      <Container >
        <Header style={{backgroundColor:'#4d4dff'}}>
          <Left>
<Button transparent onPress={() => {this.props.navigation.navigate('DrawerOpen')}}>

<Icon name="menu" size={25} style={{color:'white'}}  />

</Button>

</Left>
          <Body>
            <Title>Home and Furniture</Title>
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
<ListItem itemDivider>
<Text>Kitchen & Dinnerware</Text>
</ListItem>
<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Pressure Cookers",category:"home",})}>
<Text>       Pressure Cookers</Text>
</TouchableOpacity>
</ListItem>
<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Kitchen Tools",category:"home",})}>
<Text>       Kitchen Tools</Text>
</TouchableOpacity>
</ListItem>

<ListItem itemDivider>
<Text>Home Decor</Text>
</ListItem>
<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Paintings",category:"home",})}>
<Text>       Paintings</Text>
</TouchableOpacity>
</ListItem>
<ListItem>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Sub1',{title:"Showpieces",category:"home",})}>
<Text>       Showpieces</Text>
</TouchableOpacity>
</ListItem>

</List>
</Content>
</ScrollView>
      </Container>
    );
  }
}

export default Header4;