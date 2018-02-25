import React from 'react';

import { Container, Header, Title, Content, Button, Left, Body, Text, Form, Item, Label,List,ListItem,Thumbnail, 
          Input, Right, Spinner} from 'native-base';


import { View, Alert } from 'react-native';

import { trySignup, tryLogin } from './Api';

import Drawer from './drawer.js'

 
class Login extends React.Component {
  

  constructor(props){
    
     super(props);
   
     this.state = {
	  	isLoggedIn : false,
	resp: null,  
	                        usernameTextBox : '',
	  	passwordTextBox : '',
      
	                        fontsAreLoaded: false,
	  
}

  }

  

async componentDidMount() {
 

   await Expo.Font.loadAsync({
  
 
   'Roboto': require('native-base/Fonts/Roboto.ttf'),
   
   'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
 
   });
   

 this.setState({...this.state, fontsAreLoaded: true});

  }

  

handleLoginPressed = async () => {
 

   let resp = await tryLogin(this.state.usernameTextBox, this.state.passwordTextBox);
  
   global.username= this.state.usernameTextBox;
 if(resp.status === 503 ||resp.status === 400){
 Alert.alert("Please wait", "Project is processing" )
 }
 
 else if(resp.status === 200){
 
 
respJson = await resp.json();
 
global.userid= respJson.hasura_id;
global.auth=respJson.auth_token;

  if(respJson.code === "invalid-username" || respJson.code === "invalid-creds" ){
                      Alert.alert("Error",respJson.message)} 
   else {

 this.setState({isLoggedIn:true}) }

}
else{
    if (resp.status === 504) {
      
  Alert.alert("Network Error", "Check your internet connection" )
    }  
    }

}
 handleSignupPressed = async () => {
  
  let resp = await trySignup(this.state.usernameTextBox, this.state.passwordTextBox);
 
  global.username= this.state.usernameTextBox;  
if(resp.status === 503 ||resp.status === 400){
 Alert.alert("Please wait", "Project is processing" )
 }
 
 else if(resp.status === 200){
  

respJson = await resp.json();
 
global.userid= respJson.hasura_id;
global.auth=respJson.auth_token;

 if(respJson.code === "user-exists" || respJson.code === "invalid-password" || respJson.code === "invalid-username" ){
                      Alert.alert("Error",respJson.message)} 
 else {
 this.setState({isLoggedIn:true}); }
}
else{
    if (resp.status === 504) {
      
  Alert.alert("Network Error", "Check your internet connection" )
    }  
}
}
 handleUsernameChange = usernameTextBox => {
  	
this.setState({
  
		...this.state,
  	
	usernameTextBox: usernameTextBox
  	})
 
 }


  
handlePasswordChange = passwordTextBox => {

  	this.setState({
  		...this.state,
  	
	passwordTextBox: passwordTextBox
  	})
 
 }

  
handleLogout = () => {

    this.setState({
      ...this.state,
      isLoggedIn: false
    })
  }

  
render() {
	 

 if (this.state.fontsAreLoaded == true) {
      
if(this.state.isLoggedIn === true){
       


 return (
      
      <Drawer logoutCallback={this.handleLogout}/> 
       

 );
   
   }
    
   
   return(

        <Container>
          
<Header style={{backgroundColor:'#4d4dff'}}>
  
<Left>

<Thumbnail style={{paddingLeft:40,height:30, width:30}} source={require("./images/logo.png")} />
</Left>
   
<Body>
<Text style={{color:'white',fontWeight: "bold",fontSize: 20}}>Shopmart</Text>
</Body>            
                         <Right />
     
     </Header>

         
 <Content contentContainerStyle={{justifyContent:'center', margin: 20}}>
   
<List>
<ListItem>
<Text style={{color:'#4d4dff',fontSize: 40}}>Login</Text>
</ListItem>
</List>         
<Form>
          
    <Item floatingLabel>
 
    <Label>Username</Label>
      
    <Input value={this.state.usernameTextBox} onChangeText={this.handleUsernameChange}/>
   
    </Item>
  

     <Item floatingLabel>
                
    <Label>Password</Label>
     
    <Input value={this.state.passwordTextbox} onChangeText={this.handlePasswordChange} secureTextEntry/>
  
      </Item>
            
</Form>
            

<View style = {{height:10}} />
            
<Button style={{backgroundColor:'#32CD32'}} block onPress={this.handleSignupPressed} >
              
<Text style={{color:'white'}}> Sign up </Text>
          
  </Button>

            
<View style = {{height:10}} />
          
  <Button style={{backgroundColor:'#32CD32'}} block title="Log in" onPress={this.handleLoginPressed} >
       
       <Text style={{color:'white'}}> Log in </Text>
            
  </Button>
          

</Content>
       
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



export default Login;