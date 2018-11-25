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
  stock_quantity DECIMAL (10,2) NULL,
  product_sales  DECIMAL (10,2) NULL
);

-- Create departments table
CREATE TABLE departments (
  department_id INTEGER(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(100) NULL,
  over_head_costs DECIMAL (10,2) NULL
);

-- Create Records
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Tomagachi','Electronics',7.50,100,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Tickle Me Elmo','Toys',10.00,1000,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Booties','Apparel',20.00,5000,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Couch','Furniture',209.00,10,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Hatch Animal','Toys',34.99,1000,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('SUPREME Crew Neck Sweater','Apparel',1435.00,10,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Cranberry Sauce','Food',1.75,100000,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Nintendo Switch','Toys',325.00,1050,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('OnePlus6T','Electronics',600.00,500,0);
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) values ('Roomba','Electronics',400.00,5000,0);


-- Create department records

INSERT INTO departments (department_name, over_head_costs) values ('Electronics', 2000);
INSERT INTO departments (department_name, over_head_costs) values ('Toys', 1000);
INSERT INTO departments (department_name, over_head_costs) values ('Apparel', 700);
INSERT INTO departments (department_name, over_head_costs) values ('Furniture', 600);
INSERT INTO departments (department_name, over_head_costs) values ('Food', 500);


COMMIT
