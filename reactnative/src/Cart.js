import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Image,Alert} from 'react-native';
import { Container, Header, Item, Input,Icon, Button,Thumbnail,Content,
         Footer,FooterTab,Spinner,Toast, Left,Card,CardItem,Right,Body,Text,List,ListItem } from 'native-base';
import { viewcart,deletecart,addorder } from './Api'
import FIcon from 'react-native-vector-icons/FontAwesome';
class Empty extends React.Component {
render(){
return(
<View style={styles.container}>
    
    <Text style={{
                fontSize: 30,color:'#A9A9A9'}}>Cart is empty!!</Text>
 <Image source={require("./images/cart.png")} style={{height:50, width:50}}/>
        
    </View>
  
);
}
}
class Cart extends React.Component {
constructor(props){
  
  super(props);

    this.state={
          prod: null,
    fontsAreLoaded: false,
 userid: global.userid,
                               auth:global.auth
    }
 
 } 


  

async componentDidMount(){
    
let prod = await viewcart(this.state.userid);
  
  if(prod.status === 200){
  
    articleObjJson = await prod.json();
 

     this.setState({
        prod: await articleObjJson     });
    } 
else {

      if (prod.status === 504) {
     
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

 

handledelPressed = async (prodid) => {
 

   let resp = await deletecart(this.state.userid, prodid);

if (resp.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } 

   let prod = await viewcart(this.state.userid);
  
   if(prod.status === 200){
  
    articleObjJson = await prod.json();
 

     this.setState({
        prod: await articleObjJson     });
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


handlebuyPressed = async (prodid) => {
 
let addod = await addorder(this.state.userid, prodid,this.state.auth);

if (addod.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } 
Toast.show({
              text: 'Order placed successfully',
              position: 'bottom',
             
            }) 
   
let resp = await deletecart(this.state.userid, prodid);

if (resp.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } 


let prod = await viewcart(this.state.userid);
  
  if(prod.status === 200){
  
    articleObjJson = await prod.json();
 

     this.setState({
        prod: await articleObjJson     });
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
var num=-1;
const showProd = () => {
return this.state.prod.map((art,i) => {
num=num+1;

if(art.total_cost == undefined){

return (
<TouchableOpacity onPress={() => this.props.navigation.navigate('Product',{proc: art.cart.product_id,details: art.cart,})} key={i}> 
 
<Card>
 <CardItem>
  <Left>

    <Thumbnail square large source={{uri: art.cart.product_imageid}} style={styles.canvas} />

  <Body>
  <Text style={{fontWeight: "bold", fontSize: 15}}>{art.cart.product_name}</Text>

   <Text style={{fontWeight: "bold", fontSize: 30}}><Image source={require("./images/rupees.png")} style={{height:30, width:30}}/>{art.cart.product_price}</Text>
  </Body>
  </Left>
  </CardItem>


<CardItem>
<View style = {{height:10}} />
<Button block onPress={() =>this.handledelPressed(art.cart.product_id)}> 
<Text>                Remove             </Text>
</Button>
</CardItem>

</Card>
 
</TouchableOpacity> 
 
 )}


return(

<Card key={i} >
  <CardItem>
   <List>
     <ListItem>
<Text>PRICE DETAILS</Text>
     </ListItem>
   </List>
   </CardItem>


<CardItem>
<Text>
<Text>Price({num} Qty):            {art.total_cost} {"\n"}</Text>
<Text>Delivery free {"\n"}</Text>
<Text style={{fontWeight: "bold", fontSize: 15}}>Total amount :           {art.total_cost}</Text>
</Text>
</CardItem>
</Card>
);

}); };

const addOrder = () => {
return this.state.prod.map((art,i) => {
if(art.total_cost == undefined){
{this.handlebuyPressed(art.cart.product_id)}
}
}); };




if(this.state.prod !== null && this.state.fontsAreLoaded ){
 

    return (

<Container style={{backgroundColor:'#DCDCDC'}}>
        <Header style={{backgroundColor:'#4d4dff'}}>

          <Left>
          

            <Button transparent onPress={() => this.props.navigation.goBack()}
 >
              <Icon name="arrow-back" style={{color:'white'}} />
            </Button>
</Left>
<Body>
<Text style={{color:'white'}}>My Cart</Text>
 

         </Body>
<Right/>
          
          </Header>
{ (this.state.prod[0].total_cost == undefined) ? 
 <Content>{showProd()}</Content>
   :<Empty/> }

{ (this.state.prod[0].total_cost == undefined) ? 
<Footer><FooterTab>
            <Button style={{backgroundColor:'#32CD32'}} onPress={() =>addOrder()}>
              <Text style={{color:'white'}}>Buy now</Text>
            </Button>
            </FooterTab>
        </Footer>
: <Footer><FooterTab>
            <Button style={{backgroundColor:'#32CD32'}} onPress={() => {this.props.navigation.navigate('DrawerOpen')}}>
              <Text style={{color:'white'}}>Shop Now</Text>
            </Button>
            </FooterTab>
        </Footer>}
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

export default Cart;


  
const styles = StyleSheet.create({
 
 container: {
  
  flex: 1,
    
backgroundColor: '#fff',
 
   alignItems: 'center',
  
  justifyContent: 'center',
  },

canvas: {
 flex: 1,
    width: 200,
    height:200,
    resizeMode: 'contain',
  },

});




                                                                