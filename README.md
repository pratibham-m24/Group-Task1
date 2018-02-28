# Single Seller Ecommerce App

An ecommerce app clone that allows users to buy products from a single seller.This app is built using React-Native and Nodejs express 
frameworks.It allows users
 

• To signup/login to their account (authentication is managed by the Hasura Auth APIs)

• To see a list of products being sold and filter by category or product name    
• To add multiple products to their shopping cart.    
• To place an order(without payment)     
• and maintains order history.    


## How to get it running ?
### Prerequisites

In order to get this app running, you must have the following:
* [hasura cli](https://docs.hasura.io/0.15/manual/install-hasura-cli.html) tool (hasura).
* [Node.js](https://nodejs.org/en)

### Getting started

```
$ # Get the project folder and create the cluster in one shot
$ hasura quickstart pratibha/ecommerce_app

```

```
$ # Navigate into the Project
$ cd ecommerce_app

```
The quickstart command does the following:

1. Creates a new folder in the current working directory called ecommerce_app
2. Creates a new trial hasura cluster for you and sets that cluster as the default cluster for this project. 
3. Initializes ecommerce_app as a git repository and adds the necessary git remotes.

To get the cluster information, run the following command:

```
$ hasura cluster status
Cluster name:       hoof73
Cluster alias:      hasura
Kubectl context:    hoof73
Platform version:   v0.15.23
Cluster state:      Synced

```
* Set the cluster name in your project by modifying reactnative -> src -> Api.js

```
const clusterName = hoof73;
```

* Install the required node modules. Run the following command from the project directory.

```
$ cd reactnative && npm install

```
* Run the following commands from the project directory to push it to your Hasura cluster.

```
$ # Git add, commit & push to deploy to your cluster

$ git add .
$ git commit -m "First commit"
$ git push hasura master

```
**The app is now ready to use**

### Opening the app

To run the app,you must install Expo app in your device

```
$ cd ecommerce_app/reactnative
$ npm start

```

* Scan the generated QR code using the Expo app from your phone
* Fully working app will open on your phone

###  Making changes and deploying

 To make changes to the project,
* Browse to /microservices/api/src and edit the server.js file in according to your app.
* Modify files in reactnative folder for frontend.

Commit the changes, and perform git push hasura master to deploy the changes.
```
$ git add .
$ git commit -m "commit"
$ git push hasura master

```
 



## Expo live demo
Scan this QR code with your Expo mobile app to load the project immediately.

<img src="https://github.com/pratibham-m24/Group-Task1/blob/master/reactnative/assets/demo.PNG" width="150" height="150">  

Alternatively you can install the app in your device using the following link:
 https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40prat24%2FGroupTask1-64f3fa6c-1a2b-11e8-8cd0-0a580a78261f-signed.apk




## Screenshots
<img src="https://github.com/pratibham-m24/Group-Task1/blob/master/reactnative/src/images/Screenshot_2018-02-07-23-18-52.png" width="350" height="650">                                                                        
<img src="https://github.com/pratibham-m24/Group-Task1/blob/master/reactnative/src/images/Screenshot_2018-02-07-23-20-53.png" width="350" height="650">
<img src="https://github.com/pratibham-m24/Group-Task1/blob/master/reactnative/src/images/Screenshot_2018-02-07-23-21-36.png" width="350" height="650">                                                                        
<img src="https://github.com/pratibham-m24/Group-Task1/blob/master/reactnative/src/images/Screenshot_2018-02-07-23-23-44.png" width="350" height="650">

