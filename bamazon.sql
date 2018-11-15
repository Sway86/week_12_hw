CREATE DATABASE bamazon;

CREATE TABLE products
(
    Item_id VARCHAR(20) NOT NULL,
    Product_name VARCHAR(20) NOT NULL,
    Department_name VARCHAR(20) NOT NULL,
    Price VARCHAR(20) NOT NULL,
    stock_quantity VARCHAR(20) NOT NULL
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '1', 'Trousers', 'Garments', '20', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '2', 'Boots', 'Footwear', '50', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '3', 'Blouse', 'Garments', '15', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '4', 'Gloves', 'Garments', '10', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '5', 'Overcoat', 'Garments', '70', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '6', 'Sneakers', 'Footwear', '30', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '7', 'Sun Glasses', 'Accessories', '10', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '8', 'Tie', 'Accessories', '7', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '9', 'Shoe Polish', 'Footwear', '5', '5'
);

INSERT INTO products
    (
    Item_id, Product_name, Department_name, Price, stock_quantity
    )

VALUES
    (
        '10', 'Watch', 'Accessories', '100', '5'
)