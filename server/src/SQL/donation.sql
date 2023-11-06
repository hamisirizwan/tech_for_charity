DROP TABLE cash_donation;
--@BLOCK
CREATE TABLE cash_donation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount VARCHAR(255) NOT NULL,
  receipt_no VARCHAR(255) NOT NULL,
  payment_method ENUM("bank","mpesa", "cash", "paypal", "card transfers") NOT NULL,
  doners_name VARCHAR(255) NOT NULL,
  receivedBy INT,
  phone_number VARCHAR(50) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (receivedBy) REFERENCES admins(id) ON DELETE SET NULL
);

--@block
SELECT * FROM cash_donation;



--  item donation
DROP TABLE items_donation;
--@BLOCK
CREATE TABLE items_donation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  doners_name VARCHAR(255) NOT NULL,
  receivedBy INT,
  phone_number VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (receivedBy) REFERENCES admins(id) ON DELETE SET NULL
);

--@block
SELECT * FROM items_donation;


-- donated item
DROP TABLE donated_item;
--@BLOCK
CREATE TABLE donated_item (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  items_donation_id INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (items_donation_id) REFERENCES items_donation(id) ON DELETE CASCADE
);

--@block
SELECT * FROM donated_item;