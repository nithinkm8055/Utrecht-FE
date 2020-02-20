# Utrecht-FE
This repository contains the FE components for the Customer and Business User
The idea behind the repository is to create a MVP for banking application where
two types of user can interact with the application

Customer 

Customer can get access to the product overview page where the list of products caterogeries available for the user is shown.
For example, 
Mortage, 
Payments

Also the list of products available under each catergory.
```Mortage```

   ` Banking Saving Mortage`
    `Interest Only`

Payments
    Payments Account
    Debit Card


LIVE Demo of the application is available here in the below link


## More about the application
The entire application can be build with single component, How ever to demonstration feature of angular such as component communication, the app has been split into two component.

`Landing` Component:
 This components is the entry component for the application, where user can decide on which module of the application he / she is going to use. (CUSTOMER | BUSINESS)


`Product-Overview` Component:
 This components is a component for showing specific product details such as its category, description, name.

`Business-Overview` Component:
 This components is for business user only, where the reports for a user is shown such as most used overview, performance results.

```Product Service ``` Service: This service makes http call to backend call to get the list of product category and product details



## Prerequisites
Install the CLI using the npm package manager:
```
npm install -g @angular/cli
```

## Getting Started

Clone the application from github repository.
```
https://github.com/nithinkm8055/Utrecht-FE
```

Run the below command in root folder of the application to install the required dependency

```
npm install
```
To start the development server
```
ng serve
```
This command will start the local serve and open your browser on http://localhost:4200/

To build a production copy
```
ng build --prod
```
This command will prepare a production copy of the application in `dist` folder.
```
ng test
```
This command will run the unit test cases
``` 
ng lint 
```
this command will run the lint on the project

## Dependencies
The app uses external material icons. ```material-icons``` library is used to obtain the icons.

 ```
 "material-icons": "^0.3.1",
 ```

 

