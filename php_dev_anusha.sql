CREATE TABLE accura_members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    ds_division VARCHAR(50),
    date_of_birth DATE,
    summary TEXT
);
