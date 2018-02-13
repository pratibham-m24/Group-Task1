
const dataUrl = "https://api.environmentally45.hasura-app.io/category";

const loginUrl = "https://api.environmentally45.hasura-app.io/login";

const signupUrl = "https://api.environmentally45.hasura-app.io/signup";


const searchUrl = "https://api.environmentally45.hasura-app.io/search";


const addUrl = "https://api.environmentally45.hasura-app.io/addcart";


const delUrl = "https://api.environmentally45.hasura-app.io/deletecart";

const aorderUrl = "https://api.environmentally45.hasura-app.io/addorder";

const vorderUrl = "https://api.environmentally45.hasura-app.io/vieworder";


const viewUrl = "https://api.environmentally45.hasura-app.io/viewcart";


import { Alert } from 'react-native';


const networkErrorObj = {
  status: 503
}




export async function trySignup(username, password) {
 
     console.log('Making signup query');
 
 let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

 
 let body = {
           "username": username,
      "password": password
     };


  requestOptions["body"] = JSON.stringify(body);

  
  
  try {
    let resp = await fetch(signupUrl, requestOptions);

    console.log(resp);

    return resp; 
  }

  catch(e) {
    
console.log("Request Failed: " + e);
 
   return networkErrorObj;
  
}


}




export async function tryLogin(username, password) {
  
console.log('Making login query');
  
let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

  
let body = {
        "username": username,
      "password": password
      };


  requestOptions["body"] = JSON.stringify(body);


  
  try {
   
 let resp = await fetch(loginUrl, requestOptions);
 
   console.log(resp);
  
  return resp; 

  }
  
catch(e) {
   
 console.log("Request Failed: " + e);

    return networkErrorObj;

  }


}




export async function getProduct(category) {

	console.log('Making data query (get product details)');

  let requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };


  let body = {
  "category": category
 };

 
 requestOptions["body"] = JSON.stringify(body);
  

 try {
  	
let resp = await fetch(dataUrl, requestOptions);
 
   console.log(resp);
  
	return resp;
 
  }
 
 catch(e) {
  
	console.log("Request Failed: " + e);

    return networkErrorObj;

  }


}





export async function trysearch(name) {
 
 console.log('Making search query');
 
 let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

 
 let body = {
           "name": name    };


  requestOptions["body"] = JSON.stringify(body);

  
  
  try {
    
let resp = await fetch(searchUrl, requestOptions);

    console.log(resp);

    return resp; 

  }

  catch(e) {
    
console.log("Request Failed: " + e);
 
   return networkErrorObj;
 
 }


}




export async function addcart(userid,productid) {
 
 console.log('Adding to the cart');
 
 let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

 
 let body = {
           "userid": userid ,"productid": productid   };


  requestOptions["body"] = JSON.stringify(body);

  
  
  try {
    
let resp = await fetch(addUrl, requestOptions);

    console.log(resp);

    return resp; 
  
}

  catch(e) {

    console.log("Request Failed: " + e);
 
   return networkErrorObj;

  }

}



export async function deletecart(userid,productid) {
 
 console.log('Deleting......');
 
 let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

 
 let body = {
           "userid": userid ,"productid": productid   };


  requestOptions["body"] = JSON.stringify(body);

  
  
  try {
    
let resp = await fetch(delUrl, requestOptions);

    console.log(resp);

    return resp; 

  }

  catch(e) {
   
 console.log("Request Failed: " + e);
 
   return networkErrorObj;

  }


}



export async function addorder(userid,productid,auth) {
 
 console.log('Adding.......');
 
 let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

 
 let body = {
           "userid": userid ,"productid": productid,"authtoken":auth   };


  requestOptions["body"] = JSON.stringify(body);

  
  
  try {
   
 let resp = await fetch(aorderUrl, requestOptions);

    console.log(resp);

    return resp; 

  }

  catch(e) {
   
 console.log("Request Failed: " + e);
 
   return networkErrorObj;
  
}

}



export async function vieworder(userid,auth) {
 
 console.log('Viewing......');
 
 let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

 
 let body = {
           "userid": userid ,"authtoken":auth   };


  requestOptions["body"] = JSON.stringify(body);

  
  
  try {
   
 let resp = await fetch(vorderUrl, requestOptions);

    console.log(resp);

    return resp; 

  }

  catch(e) {
 
   console.log("Request Failed: " + e);
 
   return networkErrorObj;
  
}


}





export async function viewcart(userid) {
 
 console.log('Viewing the cart');
 
 let requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type":"application/json"
    }
  };

 
 let body = {
           "userid": userid   };


  requestOptions["body"] = JSON.stringify(body);

  
  
  try {
    
let resp = await fetch(viewUrl, requestOptions);

    console.log(resp);

    return resp; 

  }

  catch(e) {
  
  console.log("Request Failed: " + e);
 
   return networkErrorObj;
 
 }

}





