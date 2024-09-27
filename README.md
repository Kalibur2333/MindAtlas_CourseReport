# Course Enrollment Report

This is a example project that displays course enrollment reports using **PHP**, **MySQL**, **React+Vite**, and **Tailwind CSS**. The project provides a frontend interface to search, filter, and paginate course enrollment data and a backend API to fetch data from the database.

## Features
<img width="885" alt="a8496b25ad302e570605e7e81ac2908" src="https://github.com/user-attachments/assets/c655f3c6-4f1c-4877-a032-6e9d678bd56e">

- **Search**: Users can search for enrollments by first name, last name, course name, or completion status.

<img width="885" alt="a8210c875ccefedc6e8c7c7a9fe0837" src="https://github.com/user-attachments/assets/9839c2d4-b1ec-431a-bda2-cc8105a51310">

- **Sort**: Users can sort enrollments by different columns (first name, last name, course name, and status).

<img width="885" alt="dc81bb4071deb52f2b2753426ba8857" src="https://github.com/user-attachments/assets/ed85bf9c-4755-4465-9d78-5fa77fd6e9b8">

- **Pagination**: View data page by page with next, previous, and page number buttons.
- **Responsive Design**: Uses Tailwind CSS for styling and is fully responsive for different screen sizes.
- **Easy to Find Completion Details**

<img width="885" alt="771f405b738e9fc4e8c8978fd216e81" src="https://github.com/user-attachments/assets/ac332cf1-70d8-4992-b950-b056bdfe8fd0">
<img width="885" alt="3f1a80a206f925bb35113ef318eb117" src="https://github.com/user-attachments/assets/50cbd8e0-6a57-4882-9bc0-d5dce5a24ec3">

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



