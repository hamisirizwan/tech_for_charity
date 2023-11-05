DROP TABLE cash_donation;
--@BLOCK
CREATE TABLE cash_donation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount VARCHAR(255) NOT NULL,
  receipt_no VARCHAR(255) NOT NULL,
  doners_name VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT false,
  receivedBy INT,
  receivedBy INT,
  phone_number VARCHAR(50) NOT NULL UNIQUE,
  password TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  approvedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (approvedBy) REFERENCES admins(id) ON DELETE SET NULL
);

--@block
SELECT * FROM cash_donation;