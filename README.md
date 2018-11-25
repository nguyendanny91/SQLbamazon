
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

1. Execute SQL to reload Database

[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/41662459/48976232-81b8b200-f038-11e8-998f-41536cdd98df.png)](https://drive.google.com/file/d/1lZXKdtuzehNcj61vL9ymK81nHjd0cyaN/view)



```
node bamazonCustomer.js
```
