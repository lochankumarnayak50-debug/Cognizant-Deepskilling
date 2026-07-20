CREATE DATABASE ProductDB;
USE ProductDB;
SHOW TABLES;
CREATE TABLE Products (
    ProductID INT,
    ProductName VARCHAR(50),
    Category VARCHAR(50),
    Price INT
);
INSERT INTO Products VALUES
(1, 'Laptop', 'Electronics', 90000),
(2, 'Phone', 'Electronics', 70000),
(3, 'Tablet', 'Electronics', 50000),
(4, 'Camera', 'Electronics', 50000),
(5, 'Shoes', 'Fashion', 8000),
(6, 'Jacket', 'Fashion', 6000),
(7, 'Watch', 'Fashion', 6000),
(8, 'Bag', 'Fashion', 4000);

SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RowNumber,
    RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS RankNumber,
    DENSE_RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS DenseRankNumber
FROM Products;

SELECT *
FROM
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RankNumber
    FROM Products
) AS Result
WHERE RankNumber <= 3;