import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity,View,Image,ScrollView,Alert,StyleSheet} from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';

import { Col, Row, Grid } from 'react-native-easy-grid';
import {NavigationActions} from 'react-navigation';
import { getProduct } from './hasuraApi'


import { Container, Header, Title, Content,Thumbnail, Footer,Segment,DeckSwiper,Spinner,Card,CardItem, FooterTab,Item,Input, Button, Left, Right, Body, Icon, Text,List,ListItem } from 'native-base';


class Main extends React.Component {
 constructor(props){
  
  super(props);

    this.state={
      category: "mobile_phone",
     
 resp: null ,resp1: null,    fontsAreLoaded: false,

    }
  } 


  async componentDidMount(){
    
let resp = await getProduct("mobile_phone");
  
  if(resp.status === 200){
  
    articleObjJson = await resp.json();
 
console.log(articleObjJson);
     this.setState({
        resp: await articleObjJson     });
    } 
else {

      if (resp.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } else
 {
        Alert.alert('Something went wrong', 'Please check table permissions and your internet connection')
      }
    }

 

let resp1 = await getProduct("men_clothing");
  
  if(resp1.status === 200){
  
    articleObjJson = await resp1.json();
 
console.log(articleObjJson);
     this.setState({
        resp1: await articleObjJson     });
    } 
else {

      if (resp1.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } else
 {
        Alert.alert('Something went wrong', 'Please check table permissions and your internet connection')
      }
    }

  

let resp2 = await getProduct("women_clothing");
  
  if(resp2.status === 200){
  
    articleObjJson = await resp2.json();
 
console.log(articleObjJson);
     this.setState({
        resp2: await articleObjJson     });
    } 
else {

      if (resp2.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } else
 {
        Alert.alert('Something went wrong', 'Please check table permissions and your internet connection')
      }
    }

   
  await Expo.Font.loadAsync({
      
'Roboto': require('native-base/Fonts/Roboto.ttf'),
 
     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
   
 this.setState({...this.state, fontsAreLoaded: true});
  }

 
handledispPressed = async (category) => {
 
let resp1 = await getProduct(category);

   
  if(resp1.status === 200){
  
    articleObj = await resp1.json();
 

     this.setState({
       resp1: await articleObj    });
  

  } 
else {

      if (prod.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } else
 {
        Alert.alert('Something went wrong', 'Please check table permissions and your internet connection')
      }
    }

  


}

 render() {





const{navigate}=this.props.navigation;
 if(this.state.articleObj !== null && this.state.fontsAreLoaded){
 
return (
      


<Container>
        <Header style={{backgroundColor:'#4d4dff'}}>
          <Left>
<Button transparent onPress={() => {this.props.navigation.navigate('DrawerOpen')}}>

<Icon name="menu" size={25} style={{color:'white'}}  />

</Button>

</Left>
          <Body>
<View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
<Thumbnail style={{paddingLeft:40,height:30, width:30}} source={require("./images/logo.png")} />
            <Title>Shopmart</Title>
</View>
          </Body>
          <Right>
<Button transparent onPress={() => this.props.navigation.navigate('Cart')}>

<FIcon name="shopping-cart" size={25} style={{color:'white'}}  />

</Button>
</Right>



        </Header>
 <Segment style={{backgroundColor:'#4d4dff'}}>
         
           <Button style={{backgroundColor: '#fff'}} onPress={() => this.props.navigation.navigate('Search')}>

            <Text style={{color:'grey'}} ><Icon name='search' style={{color:'grey'}}  />  Search for Products</Text>
          </Button>
         
       </Segment>

<Content style={{backgroundColor:'#32CD32'}}>
<List>
<ListItem>
<View style={{paddingLeft:10,flexDirection: 'row',justifyContent: 'space-between'}}>
<Text style={{color:'white',fontSize: 20}}>Mobile Phones      </Text>

<Button style={{height:20, width:100}} onPress={() => this.props.navigation.navigate('Sub1',{title:"Mobile Phones",category:"mobile_phone",})}> 
<Text>View all</Text>
</Button>
</View>
</ListItem>
</List>
<Card>
<CardItem>

<Image style={styles.canvas}  source={{uri: this.state.resp[0].product_imageid}}/>
<Image style={styles.canvas} source={{uri: this.state.resp[1].product_imageid}}/>


</CardItem>
</Card>
<List>
<ListItem>
<View style={{paddingLeft:10,flexDirection: 'row',justifyContent: 'space-between'}}>
<Text style={{color:'white',fontSize: 20}}>Men Clothing     </Text>
<Button style={{height:20, width:100}} onPress={() => this.props.navigation.navigate('Sub1',{title:"Men Clothing",category:"men_clothing",})}> 
<Text>View all</Text>
</Button>
</View>
</ListItem>
</List>
<Card>
<CardItem>
<Image style={styles.canvas}  source={{uri: this.state.resp1[0].product_imageid}}/>

</CardItem>
</Card>

<List>
<ListItem>
<View style={{paddingLeft:10,flexDirection: 'row',justifyContent: 'space-between'}}>
<Text style={{color:'white',fontSize: 20}}>Women Clothing </Text>
<Button style={{height:20, width:100}} onPress={() => this.props.navigation.navigate('Sub1',{title:"Women Clothing",category:"women_clothing",})}> 
<Text>View all</Text>
</Button>
</View>
</ListItem>
</List>
<Card>
<CardItem>
<Image style={styles.canvas}  source={{uri: this.state.resp2[0].product_imageid}}/>



</CardItem>
</Card>
</Content>
 


      </Container>
    )
  }
return (
      <Container>
        <Header style={{backgroundColor:'#4d4dff'}} />
        <Content>
      
    <Spinner color='black' />
        </Content>
      </Container>
    );
  }
}


export default Main;

const styles = StyleSheet.create({
 
 container: {
  
     
backgroundColor: '#fff',
 
   alignItems: 'center',
  
  justifyContent: 'center',
  },


canvas: {
 flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

  