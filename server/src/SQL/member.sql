DROP TABLE members;
--@BLOCK
CREATE TABLE members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT false,
  is_approved BOOLEAN DEFAULT false,
  approvedBy INT,
  phone_number VARCHAR(50) NOT NULL UNIQUE,
  password TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  approvedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (approvedBy) REFERENCES admins(id) ON DELETE SET NULL
);

--@block
SELECT * FROM members;