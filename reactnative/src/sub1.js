import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Image,Alert} from 'react-native';
import { getProduct,addcart } from './Api'
import { Container, Header, Item, Input,Icon, Button, Left,Right,Body,Text,Title,Spinner,Thumbnail,Content,Card,CardItem } from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';
class Sub1 extends React.Component {
constructor(props){
  
  super(props);

    this.state={
      category: this.props.navigation.state.params.category,
     
                      prod: null,   fontsAreLoaded: false,

    }
 
 } 


  async componentWillMount(){
  
  
let prod = await getProduct(this.state.category);
  
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
return this.state.prod.map((article,i) => {
var proc=article.product_id;
return (

<TouchableOpacity onPress={() => this.props.navigation.navigate('Product',{proc: article.product_id,details: article,})}  key={i}> 
  <Card>
<CardItem>
<Left>
<Thumbnail square large source={{uri: article.product_imageid}} style={styles.canvas} />

<Body>
<Text style={{fontWeight: "bold"}}>{article.product_name}</Text>
<Text style={{fontWeight: "bold"}}><Image source={require("./images/rupees.png")} style={{height:30, width:30}}/> {article.product_price}</Text>
</Body>
</Left>
</CardItem>


</Card>
</TouchableOpacity>

 );
}); };
if(this.state.prod !== null && this.state.fontsAreLoaded){
 
    return (

<Container>
 <Header style={{backgroundColor: '#4d4dff'}}>
 <Left>
<Button transparent onPress={() => {this.props.navigation.goBack()}}>
<Icon name="arrow-back" style={{color:'white'}} />


</Button>

</Left>
         
          <Body>
            <Title>{this.props.navigation.state.params.title}</Title>
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
        
   
   <Content >
   

{showProd()}
    </Content>
  
        
    
      </Container>
    )  
}
return (
      
<Container>
       
 <Header style={{backgroundColor: '#4d4dff'}}/>
      
  <Content>
      
    <Spinner color='black' />
    
    </Content>
     
 </Container>
    );
  }
}


export default Sub1;


  
const styles = StyleSheet.create({
 
 


canvas: {
 flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});




                                                                                                                                                                 