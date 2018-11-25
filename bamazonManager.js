var mysql = require("mysql");
var inquirer = require("inquirer");
var listofProducts = []
var productSelect;
var Product;
var Quantity;

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "D@nny2433",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    queryMenu();
});

function queryMenu() {
    inquirer
    .prompt(
        {
            name: "menuOptions",
            type: "list",
            message: "What would you like to do?",
            choices: ["View Products for Sale","View Low Inventory","Add to Inventory","Add New Product","End Program"]
        }
    )
    .then(function(selectList) {
        if (selectList.menuOptions === "View Products for Sale") {
            queryAllProducts();
        }
        if (selectList.menuOptions === "View Low Inventory") {
            queryLowInventory();
        }
        if (selectList.menuOptions === "Add to Inventory") {
            addInventory();
        }
        if (selectList.menuOptions === "Add New Product") {
            addProduct();
        }
        if (selectList.menuOptions === "End Program") {
            connection.end();
        }
        
    })
}



function queryAllProducts() {

    console.log("Products Available!" + "\n" +
    "-----------------------------------" + "\n" +
    "ITEM_ID | PRODUCT_NAME | DEPARTMENT_NAME | PRICE | QUANTITY")

    connection.query("SELECT * FROM products ORDER BY item_id", function(err, res) {
        for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);

        }
        console.log("-----------------------------------");

        queryMenu();
    });
}

function queryLowInventory() {

    console.log("Products Available!" + "\n" +
    "-----------------------------------" + "\n" +
    "ITEM_ID | PRODUCT_NAME | DEPARTMENT_NAME | PRICE | QUANTITY")

    connection.query("SELECT * FROM products where stock_quantity <= 5 ORDER BY item_id", function(err, res) {
        for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);

        }
        console.log("-----------------------------------");

        queryMenu();
    });
}

function addInventory() {
    connection.query("SELECT * FROM products ORDER BY item_id", function(err, res) {

        for (var i = 0; i < res.length; i++) {
            listofProducts.push(res[i].product_name)
        }

        inquirer
        .prompt([
            {
                name: "itemList",
                type: "list",
                message: "Which item would you like to restock?",
                choices: listofProducts
            },
            {
                name: "quantity",
                type: "input",
                message: "How many items would you like to add?",
                validate: function validateNumber(number)
                {
                   var reg = /^\d+$/;
                   return reg.test(number) || "Quantity should be a number!";
                }
            }
        ])
        .then(function(productAdd) {
            productSelect = productAdd;
            Product = productAdd.itemList;
            Quantity = productAdd.quantity;
    
            connection.query(
                "UPDATE products SET stock_quantity = stock_quantity + ? WHERE product_name = ?", [Quantity,Product], function (error) {
                    stockQuantity = res[0].stock_quantity;
                    Price = res[0].price;
                    if (error) throw err;

                    console.log(
                    "Product Selected: " + Product + "\n" +
                    "Quantity Added: " + Quantity + "\n" +
                    "-----------------------------------"
                    )

                    queryMenu();

                })
        })
    });
}

function addProduct() {
    inquirer
    .prompt([
        {
            name: "productName",
            type: "input",
            message: "What is the product name?",
        },
        {
            name: "departmentName",
            type: "list",
            message: "What department?",
            choices: ["Electronics","Toys","Apparel","Furniture","Food"]
        },
        {
            name: "price",
            type: "input",
            message: "What price?",
            validate: function(value) {
              if (isNaN(value) === false) {
                return true;
                }
              return false;
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "What quantity?",
            validate: function(value) {
              if (isNaN(value) === false) {
                return true;
                }
              return false;
            }
        }
    ])
    .then(function(productAdded) {

    connection.query(
        "INSERT INTO products SET ?", 
        {
            product_name: productAdded.productName,
            department_name: productAdded.departmentName,
            price: productAdded.price,
            stock_quantity: productAdded.quantity
        }
        , function (error) {
            console.log(
            "Product Added: " + productAdded.productName + "\n" +
            "Department Selected: " + productAdded.departmentName + "\n" +
            "Price: " + productAdded.price + "\n" +
            "Quantity: " + productAdded.quantity + "\n" +
            "-----------------------------------"
            )

            queryMenu();
        })
    })
}