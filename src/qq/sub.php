<?php
echo"hello world";

    $Name=$_POST["name"];
    $Email=$_POST["email"];
    $Address=$_POST["address"];
    $Phone_Number=$_POST["phone"];
    $Organization_Name=$_POST["organization"];
    $Website=$_POST["website"];

    $Categories=$_POST["categories"];
    $Product_Info=$_POST["product"];
    $Article_Name=$_POST["article"];
    $Fabric=$_POST["fabric"];
    $Quantity=$_POST["quantity"];
    $Size=$_POST["size"];
   
    $Additionals=$_POST["file"];
    $deadline=$_POST["Deadline"];
    $shipping=$_POST["shipping-address"];
    
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
$mail = new PHPMailer(true); // Passing `true` enables exceptions;


$mail->SMTPDebug = 2;
$mail->isSMTP();                           
$mail->Host = 'mail.cuirconintl.com';            
$mail->SMTPAuth = true;                     
$mail->Username = 'ali@cuirconintl.com'; 
$mail->Password = 'Fitrace800$'; 
$mail->SMTPSecure = 'tls';                  
$mail->Port = 587;    
$mail->setFrom('ali@cuirconintl.com', 'Name');
$mail->addAddress('ali@cuirconintl.com'); 
$mail->isHTML(true); 


$mail->Subject = 'New enquiry';
$mail->Body    = "
<h1>Contact Form</h1>
<strong>Name</strong>:<span>$Name</span>
<strong>Email</strong>:<span>$Email</span>
<strong>Phone</strong>:<span>$Phone_Number</span>
<strong>organization</strong>:<span>$Organization_Name</span>
<strong>website</strong>:<span>$Website</span>
<strong>categories</strong>:<span>$Categories</span>
<strong>product</strong>:<span>$Product_Info</span>
<strong>article</strong>:<span>$Article_Name</span>
<strong>fabric</strong>:<span>$Fabric</span>
<strong>quantity</strong>:<span>$Quantity</span>
<strong>size</strong>:<span>$Size</span>







";
if(!$mail->send()) {
  echo 'Message was not sent.';
  echo 'Mailer error: ' . $mail->ErrorInfo;
} 
else {
  echo 'Message has been sent.';
}



?>