import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Container, Header, Item, Input,Icon, Button,Thumbnail,Content,Footer,FooterTab,Spinner,Toast, Left,Card,CardItem,Right,Body,Text,List,ListItem } from 'native-base';
import { viewcart,deletecart,addorder } from './hasuraApi'
import FIcon from 'react-native-vector-icons/FontAwesome';

class Book extends React.Component {
constructor(props){
  
  super(props);

    this.state={
          prod: null,
  fontsAreLoaded: false,
prodetails:this.props.navigation.state.params.details ,pid: this.props.navigation.state.params.proc, userid: global.userid,productid: 1,auth:global.auth
    }
 
 } 


  
 async componentDidMount(){
 
  await Expo.Font.loadAsync({
      
'Roboto': require('native-base/Fonts/Roboto.ttf'),
 
     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
   
 this.setState({...this.state, fontsAreLoaded: true});
  }

 

handlebuyPressed = async () => {
 
let prod = await addorder(this.state.userid, this.state.pid,this.state.auth);

   
  if(prod.status === 200){
  
    articleObjJson = await prod.json();
 
Toast.show({
              text: 'Order placed successfully',
              position: 'bottom',
              
            }) 
     this.setState({
        prod: await articleObjJson    });
  

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
if(this.state.fontsAreLoaded ){
 
return(
 <Container style={{backgroundColor:'#DCDCDC'}}>
<Header style={{backgroundColor:'#4d4dff'}}>

          <Left>
          

            <Button transparent onPress={() => this.props.navigation.goBack()}
 >
              <Icon name="arrow-back" style={{color:'white'}} />
            </Button>
</Left>

<Right/>
          
          </Header>
<Card>
<CardItem>
<Left>

<Thumbnail square large source={{uri: this.state.prodetails.product_imageid}} style={styles.canvas} />

<Body>
<Text style={{fontWeight: "bold", fontSize: 15}}>{this.state.prodetails.product_name}</Text>

<Text style={{fontWeight: "bold", fontSize: 30}}><Image source={require("./images/rupees.png")} style={{height:30, width:30}}/>{this.state.prodetails.product_price}</Text>
</Body>
</Left>
</CardItem>

</Card>
 
<Card  >
<CardItem>
<List>
<ListItem>
<Text>PRICE DETAILS</Text>
</ListItem>
</List>
</CardItem>
<CardItem>
<Text>
<Text>Price(1 Qty):            {this.state.prodetails.product_price} {"\n"}</Text>
<Text>Delivery free {"\n"}</Text>
<Text style={{fontWeight: "bold", fontSize: 15}}>Total amount :           {this.state.prodetails.product_price}</Text>
</Text>
</CardItem>
</Card>

<Footer><FooterTab>
            <Button style={{backgroundColor:'#32CD32'}} onPress={() =>{this.handlebuyPressed()}}>
              <Text style={{color:'white'}}>Buy now</Text>
            </Button>
            </FooterTab>
        </Footer>

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

export default Book;


  
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




                                                                