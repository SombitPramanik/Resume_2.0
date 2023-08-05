<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "m.sombitpramanik@gmail.com"; // Replace with your Gmail address
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Success response
        $response = array(
            "status" => "success",
            "message" => "Message sent successfully!"
        );
    } else {
        // Error response
        $response = array(
            "status" => "error",
            "message" => "Failed to send the message. Please try again later."
        );
    }

    // Convert the response to JSON and send it to the client
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
