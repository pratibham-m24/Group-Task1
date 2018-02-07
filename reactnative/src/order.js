import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Container, Header, Item, Input,Icon, Button,Thumbnail,Content,Spinner, Left,Card,CardItem,Right,Body,Text } from 'native-base';
import { vieworder } from './hasuraApi'
import FIcon from 'react-native-vector-icons/FontAwesome';

class Order extends React.Component {
constructor(props){
  
  super(props);

    this.state={
          prod: null,
    fontsAreLoaded: false,
 userid: global.userid,auth:global.auth
    }
 
 } 


  async componentDidMount(){
    
let prod = await vieworder(this.state.userid,this.state.auth);
  
  if(prod.status === 200){
  
    articleObjJson = await prod.json();
 

     this.setState({
        prod: await articleObjJson     });
    } 
else {

      if (articleObj.status === 504) {
     
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

 

  render() {
const{navigate}=this.props.navigation;
const showProd = () => {
return this.state.prod.map((art,i) => {
console.log(art);
return (

<TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}  key={i}> 
  <Card>
<CardItem>
<Left>
<Thumbnail square large source={{uri: art.orderproduct.product_imageid}} style={styles.canvas} />

<Body>
<Text style={{fontWeight: "bold", fontSize: 15}}>{art.orderproduct.product_name}</Text>
<Text style={{fontWeight: "bold",fontSize: 20}}><Image source={require("./images/rupees.png")} style={{height:30, width:30}}/>{art.orderproduct.product_price}</Text>
</Body>
</Left>
</CardItem>
<CardItem cardBody>
<Text>{art.total_cost} </Text>


</CardItem>

</Card>
</TouchableOpacity>
 );
}); };
if(this.state.prod !== null && this.state.fontsAreLoaded){
 
    return (

<Container style={{backgroundColor:'#DCDCDC'}}>
        <Header style={{backgroundColor: '#4d4dff'}}>

          <Left>
          

            <Button transparent onPress={() => this.props.navigation.goBack()}
 >
              <Icon name="arrow-back" style={{color:'white'}} />
            </Button>
</Left>
<Body>
<Text style={{color:'white'}}>My Orders</Text>
 

         </Body>
<Right/>
          
          </Header>

<Content>{showProd()}</Content>
    
      </Container>
    )
}
return (
      <Container>
        <Header style={{backgroundColor:'#4d4dff'}}/>
        <Content>
      
    <Spinner color='black' />
        </Content>
      </Container>
    );
  }
}

export default Order;


  
const styles = StyleSheet.create({
 
 container: {
  
  flex: 1,
    
backgroundColor: '#fff',
 
   alignItems: 'center',
  
  justifyContent: 'center',
  },

canvas: {
 flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

});




                                              