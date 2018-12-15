//app displays all products for sale

//boilerplate
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon.sql"
});

connection.connect(function (err) {
    if (err) {
        console.error("error: " + err.stack);
    }
    loadProducts();
});

//loads products and prints to console
function loadProducts(); {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        promptCustomerForItem(res);
    });
}

//askes for product id
function promptCustomerForItem(inventory) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
                validate: function (val) {
                    return !isNaN(val) || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function (val) {
            checkIfShouldExit(val.choice);
            var choiceId = parseInt(val.choice);
            var products = checkInventory(choiceId, inventory);

            if (products) {
                promptCustomerForQuantity(product);
            }
            else {
                console.log("no longer available");
                loadProducts();
            }
        });
}

//askes for quantity
function promptCustomerForQuantity(product) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "quantity",
                message: "How many would you like? [Quit with Q]",
                validate: function (val) {
                    return val > 0 || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function (val) {
            checkIfShouldExit(val.quantity);
            var quantity = parseInt(val.quantity);

            if (quantity > product.stock_quantity) {
                console.log("unsatisfactory quantity");
                loadProducts();
            }
            else {
                makePurchase(product, quantity);
            }
        });
}

// Purchase the desired quantity of the desired item
function makePurchase(product, quantity) {
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function (err, res) {
            console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
            loadProducts();
        }
    );
}

//is the product there?
function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceId) {
            return inventory[i];
        }
    }
    return null;
}

//do you want to end?
function checkIfShouldExit(choice) {
    if (choice.toLowerCase() === "q") {
        console.log("Goodbye!");
        process.exit(0);
    }
}