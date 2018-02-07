const express = require('express')
var cookieParser = require('cookie-parser');
const app = express()
const request= require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fetchAction =  require('node-fetch');
const fileURL="https://filestore.environmentally45.hasura-app.io/v1/file/"


app.use(cookieParser());
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 

app.post('/signup', function (req, res) {
	var url = "https://auth.environmentally45.hasura-app.io/v1/signup";
	var requestOptions = {
	    "method": "POST",
	    "headers": {
	        "Content-Type": "application/json",
		  }
	};
	var body1=req.body;
	console.log(body1);
	var user_name=req.body.username;
        var password=req.body.password;
	var body = {
	    "provider": "username",
	    "data": {
	        "username": user_name,
	        "password": password
	    }
	};
	requestOptions.body = JSON.stringify(body);
	fetchAction(url, requestOptions)
	.then(function(response) {
		return response.json();
	})
	.then(function(result) {
		console.log(result);
		//var authToken = result.auth_token
	
		 //window.localStorage.setItem('HASURA_AUTH_TOKEN', authToken);
		var username=result.username;
		var user_id=result.hasura_id;
		var url2 = "https://data.environmentally45.hasura-app.io/v1/query";

	var requestOptions2 = {
  	  "method": "POST",
 	   "headers": {
 	       "Content-Type": "application/json"
	    }
	};

	var body = {
  
		  "type": "insert",
  
			  "args": {
    
				    "table": "user",
       	
					 "objects": [
            {

			                "user_name": username,
              
					  "user_id": user_id
          
						  }
        ]
    
			}
};

	requestOptions2.body = JSON.stringify(body);

	fetchAction(url2, requestOptions2)
	.then(function(response) {
		return response.json();
	})
	.then(function(result) {
	console.log(result);
	})
	.catch(function(error) {
		console.log('Request Failed:' + error);
	});
			res.send(result);
		})
		.catch(function(error) {
		console.log('Request Failed:' + error);
		res.send(error);
	});
	
});

app.post('/login', function (req, res) {
	var url = "https://auth.environmentally45.hasura-app.io/v1/login";
	var requestOptions = {
	    "method": "POST",
	    "headers": {
	        "Content-Type": "application/json"
	    }
	};
	var user_name=req.body.username;
        var password=req.body.password;

	var body = {
	    "provider": "username",
	    "data": {
 	       "username": user_name,
  	      "password": password
  	  }
	};

	requestOptions.body = JSON.stringify(body);

	fetchAction(url, requestOptions)
	.then(function(response) {
		return response.json();
	})
	.then(function(result) {
		console.log(result);
		res.send(result);
		 //var authToken = result.auth_token
		 //window.localStorage.setItem('HASURA_AUTH_TOKEN', authToken);
	})
	.catch(function(error) {
		console.log('Request Failed:' + error);
		res.send(error);
	 
	})
	
});

app.post('/category', function (req, res) {
var url = "https://data.environmentally45.hasura-app.io/v1/query";
var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};
var category=req.body.category;
var body = {
    "type": "select",
    "args": {
        "table": "product",
        "columns": [
            "product_rating",
            "product_price",
            "product_details",
            "product_imageid",
            "product_name",
            "product_id"
        ],
        "where": {
            "product_category": {
                "$eq": category
            }
        }
    }
};
requestOptions.body = JSON.stringify(body);
fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {	
	for(var j=0,length1=result.length;j<length1;j++){
	var link=result[j].product_imageid;
	result[j].product_imageid=fileURL+link;
	}
	console.log(result);
	res.send(result);
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
});


app.post('/search', function (req, res) {

var url = "https://data.environmentally45.hasura-app.io/v1/query";

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};
var name=req.body.name;
var body = {
    "type": "select",
    "args": {
        "table": "product",
        "columns": [
            "product_id",
            "product_name",
            "product_price",
            "product_details",
            "product_rating",
            "product_category",
            "product_imageid"
        ],
        "where": {
            "product_name": {
                "$ilike": "%"+name+"%"
            }
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
	 
})
.then(function(result) {
	for(var j=0,length1=result.length;j<length1;j++){
	var link=result[j].product_imageid;
	result[j].product_imageid=fileURL+link;
	}
	console.log(result);
	res.send(result);
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
});

app.post('/addcart', function (req, res) {

var url = "https://data.environmentally45.hasura-app.io/v1/query";

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};
var user_id=req.body.userid;
var productid=req.body.productid;
var body = {
    "type": "insert",
    "args": {
        "table": "cart",
        "objects": [
            {
                "cart_userid": user_id,
                "cart_productid": productid
            }
        ]
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	console.log(result);
	res.send(result);
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
});

app.post('/viewcart', function (req, res) {
var url = "https://data.environmentally45.hasura-app.io/v1/query";

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};
var user_id=req.body.userid
var body = {
    "type": "select",
    "args": {
        "table": "cart",
        "columns": [
            "cart_id",
            {
                "name": "cart",
                "columns": [
                    "product_id",
                    "product_name",
                    "product_category",
                    "product_imageid",
                    "product_rating",
                    "product_price",
                    "product_details"
                ]
            }
        ],
        "where": {
            "cart_userid": {
                "$eq": "userid"
            }
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	var totalcost=0;
	for(var j=0,length1=result.length;j<length1;j++){
	var link=result[j].cart.product_imageid;
	totalcost=totalcost+result[j].cart.product_price;
	result[j].cart.product_imageid=fileURL+link;
	}
	result.push({"total_cost": totalcost});
	console.log(result);
	res.send(result);;
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
});



app.post('/addorder', function (req, res) {
var url = "https://data.environmentally45.hasura-app.io/v1/query";
var authtoken=req.body.authtoken;
var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
	 "Authorization": "Bearer "+authtoken
    }
};
var product_id=req.body.productid;
var user_id=req.body.userid;
var body = {
    "type": "insert",
    "args": {
        "table": "order",
        "objects": [
            {
                "order_product": product_id,
                "order_user": user_id
            }
        ]
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	console.log(result);
	res.send(result);
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
});


app.post('/vieworder', function (req, res) {
var url = "https://data.environmentally45.hasura-app.io/v1/query";
var authtoken=req.body.authtoken;
var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
	"Authorization": "Bearer "+authtoken
    }
};
var userid=req.body.userid
var body = {
    "type": "select",
    "args": {
        "table": "order",
        "columns": [
            "order_id",
            {
                "name": "orderproduct",
                "columns": [
                    "product_name",
                    "product_id",
                    "product_price",
                    "product_imageid"
                ]
            }
        ],
        "where": {
            "order_user": {
                "$eq": userid
            }
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	for(var j=0,length1=result.length;j<length1;j++){
	var link=result[j].orderproduct.product_imageid;
	result[j].orderproduct.product_imageid=fileURL+link;
	}
	console.log(result);
	res.send(result);
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
});

app.post('/deletecart', function (req, res) {
var url = "https://data.environmentally45.hasura-app.io/v1/query";

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};
var productid=req.body.productid;
var userid=req.body.userid;
var body = {
    "type": "delete",
    "args": {
        "table": "cart",
        "where": {
            "$and": [
                {
                    "cart_productid": {
                        "$eq": productid
                    }
                },
                {
                    "cart_userid": {
                        "$eq": userid
                    }
                }
            ]
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	console.log(result);
	res.send(result);
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
});

app.listen(8080, function(){ 
	console.log('app listening on port 8080!');
});