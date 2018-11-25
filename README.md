
# SQLbamazon

## Overview
In this repository I created an Amazon-like storefront using MySQL and Node. The application will take in orders from customers and deplete the stock from the store's inventory. Also, it is able to manage the inventory and track sales by department.

## Capabilities
* The application has the following capabilities:
    1. Customer - Able to search through catalogue of items and make purchases that will deplete the quantity
    2. Manager - View items, view low inventory (quantity < 5), add inventory quantities, and add new products
    3. Supervisor - View product sales per department and create new departments


## Components
* SQL
  1. MySQL
* NPM Packages
  1. dotenv
  2. inquirer
  3. cli-table

## Examples

1. Execute Application

```
node liri.js
```

<img width="453" alt="example1" src="https://user-images.githubusercontent.com/41662459/47960692-f65d7b00-dfbb-11e8-9174-478b0713936c.png">

2. User arrow keys to select what you would like to search for and select 'Enter' on keyboard
```
NOTE: If user selects "What you want" then the application will run the text in the "random.txt" file
```

<img width="580" alt="screenshot2" src="https://user-images.githubusercontent.com/41662459/47960726-83a0cf80-dfbc-11e8-93cf-cb78edaf488e.png">

3. Enter in your search criteria and select 'Enter' on keyboard

<img width="945" alt="screenshot3" src="https://user-images.githubusercontent.com/41662459/47960747-d8444a80-dfbc-11e8-977c-d2a7453d2eed.png">

4. Repeat steps 1-3 and view log.txt file
<img width="835" alt="screenshot4" src="https://user-images.githubusercontent.com/41662459/47960786-543e9280-dfbd-11e8-9e80-53abe6e95e43.png">

5. See full demo video here

[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/41662459/47961097-1fccd580-dfc1-11e8-98e2-4785d70acb2b.png)](https://drive.google.com/file/d/1-VyH_3pF2S0SVpUmLkeDJSHmY4hfvdFM/view)
