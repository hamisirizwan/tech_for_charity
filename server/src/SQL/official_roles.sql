DROP TABLE official_roles;
--@BLOCK
CREATE TABLE official_roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--@block
SELECT * FROM official_roles;