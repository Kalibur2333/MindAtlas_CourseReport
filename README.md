# MySQL Code Test
Expected Result:

![expected_result](https://github.com/user-attachments/assets/2ce052a0-4028-4248-b1aa-bc5526106788)
- Details can be found in `MindAtlas_MySQL_CodeTest.sql`
  
# Course Enrollment Report

This is a example project that displays course enrollment reports using **PHP**, **MySQL**, **React+Vite**, and **Tailwind CSS**. The project provides a frontend interface to search, filter, and paginate course enrollment data and a backend API to fetch data from the database.

## Features
<img width="906" alt="f87c753dcae5d59679b46fcee443499" src="https://github.com/user-attachments/assets/e8dba732-9fc7-4d11-b46e-d4d9b948f2dd">


- **Search**: Users can search for enrollments by first name, last name, course name, or completion status.
<img width="906" alt="62692396ec1fb41338383dcf72ab8e3" src="https://github.com/user-attachments/assets/092b1296-76bd-43b7-a6f6-59b98b52196e">
<img width="906" alt="c9e47f797cc31d0480fb6bd4fca56ff" src="https://github.com/user-attachments/assets/ed538392-c80d-489c-ae3b-6da9f47023f8">



- **Sort**: Users can sort enrollments by different columns (first name, last name, course name, and status).

<img width="906" alt="6de2650be7b47a19f5d2103f5e00ca4" src="https://github.com/user-attachments/assets/0aa1a009-9021-4784-b214-8bb6327bee87">
<img width="906" alt="3385dcc7a47aea3b98d1ac02e406aa0" src="https://github.com/user-attachments/assets/1e31b8b2-8587-449d-ae62-27806ee43ce3">



- **Pagination**: View data page by page with next, previous, and page number buttons.
<img width="906" alt="e7d3451d835af095c6bae46bef0599b" src="https://github.com/user-attachments/assets/83cf3b20-67ea-4e21-b83b-19d88a0f496e">

- **Responsive Design**: Uses Tailwind CSS for styling and is fully responsive for different screen sizes.
- **Easy to Find Completion Details**

![4b60276bdbd005a71fecef22837f9c2](https://github.com/user-attachments/assets/117a5775-333c-41f5-82c9-ade130cc636e)
<img width="906" alt="ffcd473b4b14dad1bb8b60a62939292" src="https://github.com/user-attachments/assets/47b18e35-da45-49d8-8152-06b390f77d99">



## Technologies Used

- **PHP**: Backend language used to connect to the MySQL database and fetch the enrollment data.
- **MySQL**: Database used to store user, course, and enrollment data.
- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework used for styling the frontend.
- **XAMPP**: Local development environment used to run PHP and MySQL.

## Installation

### Prerequisites

- **XAMPP** (or any local server setup with PHP and MySQL)
- **Node.js** (for React and Vite)
- **Git** (for version control)

### Backend Setup (PHP and MySQL)

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/MindAtlas_CourseReport.git
    cd MindAtlas_CourseReport
    ```

2. Place the PHP backend files (`db.php`, `get_enrollments.php`) inside the `htdocs` folder of your XAMPP installation (usually `C:/xampp/htdocs`).

3. Set up your MySQL database:
    - Create a new MySQL database named `course_report`.
    - Run the following SQL queries to create the necessary tables and seed the database:
    ```sql
    CREATE DATABASE course_report;
    USE course_report;

    -- Create Users table
    CREATE TABLE Users (
      user_id INT PRIMARY KEY AUTO_INCREMENT,
      first_name VARCHAR(50),
      last_name VARCHAR(50)
    );

    -- Create Courses table
    CREATE TABLE Courses (
      course_id INT PRIMARY KEY AUTO_INCREMENT,
      description VARCHAR(255)
    );

    -- Create Status table
    CREATE TABLE Status (
      status_id INT PRIMARY KEY AUTO_INCREMENT,
      status_description VARCHAR(50)
    );

    -- Create Enrollments table
    CREATE TABLE Enrollments (
      enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT,
      course_id INT,
      status_id INT,
      FOREIGN KEY (user_id) REFERENCES Users(user_id),
      FOREIGN KEY (course_id) REFERENCES Courses(course_id),
      FOREIGN KEY (status_id) REFERENCES Status(status_id)
    );

    -- Insert sample data
    INSERT INTO Users (first_name, last_name) VALUES ('Roboute', 'Guilliman');
    INSERT INTO Courses (description) VALUES ('Foundation of MySQL');
    INSERT INTO Status (status_description) VALUES ('not started');
    INSERT INTO Enrollments (user_id, course_id, status_id) VALUES (1, 1, 1);
    ```
    - Details can be found in `MindAtlas_CourseReport_MySQL.sql`
4. Configure the database connection in `db.php`:
    ```php
    <?php
    $host = 'localhost';  // MySQL server host
    $dbname = 'course_report';  // Database name
    $username = 'root';  // MySQL username
    $password = '';  // MySQL password (leave blank if not set)

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Database connection failed: " . $e->getMessage());
    }
    ```
   - Details can be found in `db.php` & `get_enrollments.php`
5. Start **Apache** and **MySQL** in XAMPP.

### Frontend Setup (React and Vite)

1. Navigate to the `course-report` directory and install the dependencies:
    ```bash
    cd course-report
    npm install
    ```

2. Start the React development server:
    ```bash
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173` to view the React frontend.

## Usage

1. Use the search bar to filter enrollments by name, course, or status.
2. Use the sorting arrows to sort enrollments by first name, last name, course, or status.
3. Navigate through pages using the pagination buttons at the bottom of the table.



