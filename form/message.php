<?php

// let's get all form values
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email)&& !empty($message)){
//if email and message field is not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        //if user entered email is valid 
        $receiver = "cigs.yusuf@gmail.com"; //email receiver address
        $subject = "From: $name <$email>"; //subject of the email. | subject looks like from: CigsYusuf <cigs.yusuf@gmail.com>
        //merging contacting all user values inside body variable. \n is used for new line
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\n\Message: $message\n\n\Regards,\n$name";
        $sender = "From: $email"; //sender email

        if(mail($receiver, $subject,$body, $sender)){
            //mail() is a inbuilt php function to send email
            echo"Your message has been sent";
        }else{
            echo"Sorry, failed to send your message!";
        }
    }else{
        echo "Enter a valid email address!";
    }
}else{
    echo "Email and password field is required!";
}

?>