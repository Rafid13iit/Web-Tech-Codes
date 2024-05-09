<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $dbname = "your_database";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind parameters
    $stmt = $conn->prepare("INSERT INTO your_table (userid, passid, username, address, country, zip, email, sex, languages, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $userid, $passid, $username, $address, $country, $zip, $email, $sex, $languages, $description);

    // Sanitize and validate inputs
    $userid = $_POST["userid"];
    $passid = $_POST["passid"];
    $username = $_POST["username"];
    $address = $_POST["address"];
    $country = $_POST["country"];
    $zip = $_POST["zip"];
    $email = $_POST["email"];
    $sex = $_POST["sex"];
    $languages = implode(", ", $_POST["language"]); // Convert array to string
    $description = $_POST["desc"];

    // Execute statement
    if ($stmt->execute() === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
