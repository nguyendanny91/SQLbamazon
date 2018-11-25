
# SQLbamazon

## Overview
In this repository I created an Amazon-like storefront using MySQL and Node. The application will take in orders from customers and deplete the stock from the store's inventory. Also, it is able to manage the inventory and track sales by department.

## Capabilities
* The application has the following capabilities:
    1. Customer
        1. Able to search through catalogue of items and make purchases that will deplete the quantity
        2. Logic to invalidate if quantity purchase > quantity available
    2. Manager
        1. View items
        2. View low inventory (quantity < 5)
        3. Add inventory quantities
        4. Add new products
        
    3. Supervisor
        1. View product sales per department (uses CLI table to display data)
        2. Create new departments


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


2. Execute functions as Customer
```
node bamazonCustomer.js
```
[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/41662459/48976273-77e37e80-f039-11e8-8e61-f2a92e6ed7e2.png)](https://drive.google.com/file/d/1v3lvqU-qrXdPC-cHkKxds3NtX-NteU8B/view)

3. Execute functions as Manager
```
node bamazonManager.js
```
[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/41662459/48976273-77e37e80-f039-11e8-8e61-f2a92e6ed7e2.png)](https://drive.google.com/file/d/1c1fhAo9wqwFZplzUfajoE5fyuLUfxn22/view)

4. Execute functions as Supervisor
```
node bamazonManager.js
```
[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/41662459/48976401-ba0dbf80-f03b-11e8-8236-1682fa3c7493.png)](https://drive.google.com/file/d/14Yg9bt9seAYTdML0TSihsMKlexU35cyv/view)
