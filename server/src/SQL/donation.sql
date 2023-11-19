DROP TABLE cash_donation;
--@BLOCK
CREATE TABLE cash_donation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount VARCHAR(255) NOT NULL,
  receipt_no VARCHAR(255) NOT NULL,
  payment_method ENUM("bank","mpesa", "cash", "paypal", "card transfers") NOT NULL,
  is_donor_member BOOLEAN DEFAULT false,
  donors_name VARCHAR(255) NOT NULL,
  donatedBy INT,
  receivedBy INT,
  phone_number VARCHAR(50),
  email VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (receivedBy) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (donatedBy) REFERENCES users(id) ON DELETE SET NULL
);

--@block
SELECT * FROM cash_donation;

--  item donation
--@block
DROP TABLE items_donation;
--@BLOCK
CREATE TABLE items_donation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  is_donor_member BOOLEAN DEFAULT false,
  doners_name VARCHAR(255) NOT NULL,
  donatedBy INT,
  receivedBy INT,
  phone_number VARCHAR(50),
  email VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (donatedBy) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (receivedBy) REFERENCES users(id) ON DELETE SET NULL
);

--@block
SELECT * FROM items_donation;


-- donated item
--@block
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