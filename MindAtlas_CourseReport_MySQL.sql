CREATE DATABASE course_report;
USE course_report;

-- Create Users table
CREATE TABLE Users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

-- Create Course table
CREATE TABLE Courses (
	course_id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255)
);

-- Create Status table
CREATE TABLE Status (
	status_id INT PRIMARY KEY AUTO_INCREMENT,
    status_description VARCHAR(50)
);

-- Create Enrolments table
CREATE TABLE Enrolments (
	enrolment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    course_id INT,
    status_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id),
    FOREIGN KEY (status_id) REFERENCES Status(status_id)
);

-- Insert Test Samples
INSERT INTO Users (first_name, last_name)
VALUES
	('Horus','Lupercal'),
    ('Leman','Russ'),
    ('Ferrus','Manus'),
    ('Rogal','Dorn'),
    ('Roboute','Guilliman'),
    ('Lion','ElJoson'),
    ('Jaghatai','Khan'),
    ('Konrad','Curze'),
    ('Corvus','Corax'),
    ('Alpharius','Omegon');
    
INSERT INTO Courses (description)
VALUES
	('Foundation of PHP'),
    ('Foundation of MySQL'),
    ('Foundation of JavaScript'),
    ('Foundation of CSS');

INSERT INTO Status ( status_description)
VALUES
	('not started'),
    ('in progress'),
    ('completed');
    
INSERT INTO Enrolments (user_id, course_id, status_id)
VALUES
	(1,1,1),
    (2,2,2),
    (3,3,3),
    (4,1,2),
    (5,2,1),
    (6,2,2),
    (7,4,3),
    (8,3,1),
    (9,3,2),
    (10,4,3);

