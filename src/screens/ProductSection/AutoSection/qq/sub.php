<?php
echo"hello world";

    $Company_Name=$_POST["companyName"];
    $Industry_Segment=$_POST["industrySegment"];
    $Website=$_POST["website"];
    $Name=$_POST["contactName"];
    $Position=$_POST["position"];
    $Email_Address=$_POST["email"];

    $Phone_Number=$_POST["phone"];
    $Preferred_Date_and_Time=$_POST["meetingDateTime"];
    $Platform_of_Choice=$_POST["meetingPlatform"];
    $Specific_Products_or_Categories_of_Interest=$_POST["productInterest"];
    $Current_Challenges_or_Requirements=$_POST["challenges"];
    $Any_Additional_Information=$_POST["additionalInfo"];
    
    
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
$mail = new PHPMailer(true); // Passing `true` enables exceptions;


$mail->SMTPDebug = 0;
$mail->isSMTP();                           
$mail->Host = 'mail.cuirconintl.com';            
$mail->SMTPAuth = true;                     
$mail->Username = 'ali@cuirconintl.com'; 
$mail->Password = 'Pakistan77&&'; 
$mail->SMTPSecure = 'tls';                  
$mail->Port = 587;    
$mail->setFrom('ali@cuirconintl.com', 'Name');
$mail->addAddress('ali@cuirconintl.com'); 
$mail->isHTML(true); 


$mail->Subject = 'Meeting Request Form';
$mail->Body    = "
<h1>Meeting Request Form</h1>
<strong>companyName</strong>:<span>$Company_Name</span>
<strong>industrySegment</strong>:<span>$Industry_Segment</span>
<strong>website</strong>:<span>$Website</span>
<strong>contactName</strong>:<span>$Name</span>
<strong>position</strong>:<span>$Position</span>
<strong>email</strong>:<span>$Email_Address</span>
<strong>phone</strong>:<span>$Phone_Number</span>
<strong>meetingDateTime</strong>:<span>$Preferred_Date_and_Time</span>
<strong>meetingPlatform</strong>:<span>$Platform_of_Choice</span>
<strong>productInterest</strong>:<span>$Specific_Products_or_Categories_of_Interest</span>
<strong>challenges</strong>:<span>$Current_Challenges_or_Requirements</span>
<strong>additionalInfo</strong>:<span>$Any_Additional_Information</span>






";
if ($mail->send()) {
  echo 'Your request has been sent successfully.';
} else {
  echo 'Oops! Something went wrong. Please try again later.';
}



?>