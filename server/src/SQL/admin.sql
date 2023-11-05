DROP TABLE admins;
--@BLOCK
CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  is_super_admin BOOLEAN DEFAULT false,
  is_deleted BOOLEAN DEFAULT false,
  official_role_id INT,
  phone_number VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (official_role_id) REFERENCES official_roles(id) ON DELETE SET NULL
);

--@block
SELECT * FROM admins;