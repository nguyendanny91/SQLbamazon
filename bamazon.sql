-- Create bamazon database
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

-- Use bamazon database
USE bamazon;

-- Create table products
CREATE TABLE products (
  item_id INTEGER(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10,2) NULL,
  stock_quantity DECIMAL (10,2) NULL
);

-- Create Records
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Tomagachi','Electronics',7.50,100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Tickle Me Elmo','Toys',10.00,1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Booties','Apparel',20.00,5000);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Couch','Furniture',209.00,10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Hatch Animal','Toys',34.99,1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('SUPREME Crew Neck Sweater','Apparel',1435.00,10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Cranberry Sauce','Food',1.75,100000);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Nintendo Switch','Toys',325.00,1050);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('OnePlus6T','Electronics',600.00,500);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Roomba','Electronics',400.00,5000);

COMMIT