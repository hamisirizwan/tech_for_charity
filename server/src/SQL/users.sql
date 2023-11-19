DROP TABLE users;
--@BLOCK
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  is_active BOOLEAN DEFAULT false,
  is_admin BOOLEAN DEFAULT false,
  is_approved BOOLEAN DEFAULT false,
  approvedBy INT,
  deactivatedBy INT,
  phone_number VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) UNIQUE,
  password TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  approvedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (approvedBy) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (deactivatedBy) REFERENCES users(id) ON DELETE SET NULL
);

--@block
SELECT * FROM users;