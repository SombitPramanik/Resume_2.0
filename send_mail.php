<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "m.sombitpramanik@gmail.com"; // Replace with your Gmail address
    $headers = "From: $email";

    // Send the email
    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        echo "success"; // Return success response to the client
    } else {
        echo "error"; // Return error response to the client
    }
}
?>
