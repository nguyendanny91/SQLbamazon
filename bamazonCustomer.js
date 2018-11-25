var mysql = require("mysql");
var inquirer = require("inquirer");
var listofProducts = [];
var stockQuantity;
var Quantity;
var Price;
var productSelect

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
    queryAllProducts();

    // connection.end();
  });

function queryAllProducts() {

    console.log("Products Available!" + "\n" +
    "-----------------------------------" + "\n" +
    "ITEM_ID | PRODUCT_NAME | DEPARTMENT_NAME | PRICE | QUANTITY")

    connection.query("SELECT * FROM products ORDER BY item_id", function(err, res) {
        for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        listofProducts.push(res[i].product_name)

        }
        console.log("-----------------------------------");

        selectProducts();
    });
}

function selectProducts() {
    inquirer
    .prompt([
        {
            name: "itemList",
            type: "list",
            message: "What would you like to purchase?",
            choices: listofProducts
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function validateNumber(number)
            {
               var reg = /^\d+$/;
               return reg.test(number) || "Quantity should be a number!";
            }
        }
    ])
    .then(function(productPurchase) {
        productSelect = productPurchase;
        Product = productPurchase.itemList;
        Quantity = productPurchase.quantity;

        connection.query(
            "SELECT * FROM products where product_name = ?", productPurchase.itemList, function (err,res) {
                stockQuantity = res[0].stock_quantity;
                Price = res[0].price;

                if (res[0].stock_quantity < productPurchase.quantity) {
                    console.log("Insufficient quantity!");
                    connection.end();
                }
                else
                    submitTransaction();
            }
        )
    })
}

function submitTransaction() {
    connection.query(
        "UPDATE products SET stock_quantity = ? WHERE product_name = ?",[stockQuantity - productSelect.quantity, productSelect.itemList], function (error) {
            if (error) throw err;
            console.log(
                "-----------------------------------" + "\n" +
                "Order placed successfully!" + "\n" +
                "Quantity Remaining: " + (stockQuantity - productSelect.quantity) + "\n" +
                "-----------------------------------" + "\n" +
                "Product Ordered: " + Product + "\n" +
                "Quantity: " + Quantity + "\n" +
                "Price per item: " + Price + "\n" +
                "Subtotal: " + (Price * Quantity)
            );
        }
    )

    connection.end();
}