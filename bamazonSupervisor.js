require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
var pass = require("./keys.js");
var Table = require('cli-table');
var TableArray;

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: pass.dbpassword.id,
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
            choices: ["View Product Sales by Department","Create New Department","End Program"]
        }
    )
    .then(function(selectList) {
        if (selectList.menuOptions === "View Product Sales by Department") {
            productSalesView();
        }
        if (selectList.menuOptions === "Create New Department") {
            createDepartment();
        }
        if (selectList.menuOptions === "End Program") {
            connection.end();
        }
        
    })
}


function productSalesView() {
    connection.query(

        "WITH product_sum as (select department_name,sum(product_sales) product_sales from products group by department_name) select dept.department_id,dept.department_name,dept.over_head_costs,CASE WHEN prod.product_sales IS NULL THEN 'Missing Products' ELSE prod.product_sales END AS product_sales, CASE WHEN (prod.product_sales - dept.over_head_costs) IS NULL THEN 'Missing Products' ELSE (prod.product_sales - dept.over_head_costs) END AS total_profit from departments dept left join product_sum prod on dept.department_name = prod.department_name", function (error, res) {


            var table = new Table({
                head: ['department_id','department_name','over_head_costs','product_sales','total_profit']
                // , colWidths: [100, 200]
            });


            for (var i = 0; i < res.length; i++) {
                table.push(Object.values(res[i]))
            }

            console.log(table.toString() + "\n" +
            "-----------------------------------"
            );

            queryMenu();

        })

}



function createDepartment() {
    inquirer
    .prompt([
        {
            name: "departmentName",
            type: "input",
            message: "What is the department name?",
        },
        {
            name: "overheadCost",
            type: "input",
            message: "What is the overhead costs?",
            validate: function(value) {
              if (isNaN(value) === false) {
                return true;
                }
              return false;
            }
        }
    ])
    .then(function(departmentDetails) {

    connection.query(
        "INSERT INTO departments SET ?", 
        {
            department_name: departmentDetails.departmentName,
            over_head_costs: departmentDetails.overheadCost,
        }
        , function (error) {
            console.log(
            "Department Added: " + departmentDetails.departmentName + "\n" +
            "Overhead costs: " + departmentDetails.overheadCost + "\n" +
            "-----------------------------------"
            )

            queryMenu();
        })
    })
}