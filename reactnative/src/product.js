import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Image,Alert} from 'react-native';
import { addcart,addorder } from './Api'
import { Container, Header, Item, Input,Icon, Button, Left,Right,Body,Text,Toast,Title,Spinner,Thumbnail,Footer,FooterTab,Content,Card,CardItem } from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';
class Product extends React.Component {
constructor(props){
  
  super(props);

    this.state={
       showToast: false,    prod:this.props.navigation.state.params.details ,
 
                 userid: global.userid ,productid:this.props.navigation.state.params.proc ,
                 auth: global.auth,  fontsAreLoaded: false,

    }
  } 


  async componentDidMount(){
   

 
 await Expo.Font.loadAsync({
      
'Roboto': require('native-base/Fonts/Roboto.ttf'),
 
     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
   
 this.setState({...this.state, fontsAreLoaded: true});
  }

 


handleaddcartPressed = async () => {
 
   let resp = await addcart(this.state.userid, this.state.productid);
 
if (resp.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } 
Toast.show({
              text: 'Item added to cart',
              position: 'bottom',
              
            }) 
}


handlebuyPressed = async () => {
 
   let resp = await addorder(this.state.userid, this.state.productid,this.state.auth);
  
if (resp.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } 
}



  render() {
const{navigate}=this.props.navigation;

if(this.state.prod !== null && this.state.fontsAreLoaded){
 
    return (

<Container style={{backgroundColor: 'white'}}>
 <Header style={{backgroundColor: '#4d4dff'}} >
<Left> 
<Button transparent onPress={() => this.props.navigation.goBack()}
 >
              <Icon name="arrow-back" style={{color:'white'}} />
            </Button>
         </Left>
          <Body>
            <Title>Mobile Phones</Title>
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
        
   
   <Content>
   

<Card>
<CardItem>
<Image source={{uri: this.state.prod.product_imageid}} style={styles.canvas} />
</CardItem>
<CardItem>
<Body>
<Text style={{fontWeight: "bold", fontSize: 20}}>{this.state.prod.product_name}</Text>
<Text>{this.state.prod.product_rating}</Text><Icon name='star'/>
</Body>

</CardItem>


<CardItem>
<Image source={require("./images/rupees.png")} style={{height:30, width:30}}/>
<Text style={{fontWeight: "bold",fontSize: 30}}>{this.state.prod.product_price}</Text>
</CardItem>
</Card>


<Text style={{fontWeight: "bold",fontSize: 20,color: 'blue'}}>Features{"\n"}</Text>
<Text>{this.state.prod.product_details}</Text>
  </Content>
  
     <Footer>
          <FooterTab>
            
         <Button style={{backgroundColor:'#32CD32'}} onPress={this.handleaddcartPressed}>
              <Text style={{color:'white'}}>Add to cart</Text>
            </Button>
            <Button style={{backgroundColor:'#32CD32'}}  onPress={() => this.props.navigation.navigate('Book',{proc: this.state.productid,details: this.state.prod,})}>
              <Text style={{color:'white'}}>Buy Now</Text>
            </Button>
            </FooterTab>
        </Footer>  
</Container>

    )  
}
return (
     
 <Container>
     
   <Header style={{backgroundColor: '#4d4dff'}} />
     
   <Content>
      
    <Spinner color='black' />
   
     </Content>
     
 </Container>
    
);
  }
}


export default Product;


  
const styles = StyleSheet.create({
 
 
canvas: {
 flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});




                                                                                                                                                                 