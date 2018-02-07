import React, { Component } from 'react';
import {AppRegistry,StyleSheet,TouchableOpacity,View,Image} from 'react-native';
import { Container, Header, Item, Input,Icon,Form, Button, Text,Spinner,Content,Card,CardItem,Left,Thumbnail,Body } from 'native-base';
import { trysearch } from './hasuraApi'


import FIcon from 'react-native-vector-icons/FontAwesome';
class Empty extends React.Component {
render(){
return(
<View style={styles.container}>
    
    <Text style={{
                fontSize: 20,color:'#3F51B5'}}>No results found</Text>
 
        
    </View> 


);
}
}
class Search extends React.Component {
constructor(props){
    super(props);
   
 this.state = {
	  	  
	searchBox : '',
	  resp: null     
		  }
  }

 
handleSearchPressed = async () => {
 
   let resp = await trysearch(this.state.searchBox);
   
 if(resp.status === 200){
  
      respJson = await resp.json();
console.log(respJson[0]);
this.setState({
        resp: await respJson     });
 

  }

else {

      if (articleObj.status === 504) {
     
   Alert.alert('Network error', 'Check your internet connection');
      } else
 {
        Alert.alert('Something went wrong', 'Please check table permissions and your internet connection')
      }
      
}
}
 
handlesearchChange = searchBox => {
  	this.setState({
  
		...this.state,
  	
	searchBox: searchBox
  	})
  }

  
render() {
const{navigate}=this.props.navigation;
const showProd = () => {
return this.state.resp.map((article,i) => {
var proc=article.product_id;
return (

<TouchableOpacity onPress={() => this.props.navigation.navigate('Product',{proc: article.product_id,detail:article,})}  key={i}> 
  <Card>
<CardItem>
<Left>
<Thumbnail square large source={{uri: article.product_imageid}} style={styles.canvas} />

<Body>
<Text>{article.product_name}</Text>
<Text><Image source={require("./images/rupees.png")} style={{height:30, width:30}}/>{article.product_price}</Text>
</Body>
</Left>
</CardItem>


</Card>
</TouchableOpacity>
 );
}); };
if(this.state.resp!== null){
return (
<Container>
        <Header searchBar rounded style={{backgroundColor: '#fff',borderWidth:1}}>
 <Item>
<Button transparent onPress={() => this.props.navigation.goBack(null)}
 >
              <Icon name="arrow-back" style={{color:'black'}} />
            </Button>

         
         

            
            <Input value={this.state.searchBox} onChangeText={this.handlesearchChange} />
<Button transparent onPress={this.handleSearchPressed} >
              <Icon name="search" style={{color:'black'}} />
            </Button>
 </Item>

           
          </Header>

     {
            (this.state.resp[0] !== undefined)
            ?
     
      <Content>{showProd()}</Content>  
        :
            <Empty/>
          }
         


      </Container>
    )  
}

return (
   
<Container style={{backgroundColor:'#DCDCDC'}}>
        <Header searchBar rounded style={{backgroundColor: '#fff'}}>
 <Item>
<Button transparent onPress={() => this.props.navigation.goBack(null)}
 >
              <Icon name="arrow-back" style={{color:'black'}} />
            </Button>

         
         

            
            <Input value={this.state.searchBox} onChangeText={this.handlesearchChange} />
<Button transparent onPress={this.handleSearchPressed} >
              <Icon name="search" style={{color:'black'}} />
            </Button>
 </Item>

           
          </Header>

      </Container>
    ); 

  }
}


export default Search;

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

                                                                                                                                                    