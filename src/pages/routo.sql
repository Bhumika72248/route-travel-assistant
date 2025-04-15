CREATE DATABASE routo;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE recent_searches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    location_from VARCHAR(100),
    location_to VARCHAR(100),
    search_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
SHOW TABLES;
DESCRIBE users;
DESCRIBE recent_searches;

SELECT * FROM users;
SELECT * FROM recent_searches;
