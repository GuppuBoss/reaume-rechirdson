<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require '../../components/PHPMailer.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.mailtrap.io';                     
    $mail->SMTPAuth   = true;                                 
    $mail->Username   = 'dfd8da395f7b87';                    
    $mail->Password   = 'fa4903c13f1300';                            
    $mail->Port       = 2525;                                     

    $mail->setFrom('aliabdullah292631@gmail.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User');     
    $mail->addAddress('ellen@example.com');               
    // $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');
  
    $mail->isHTML(true);                              
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
    header("Location: /",true,301);
    die();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
// functionName();
// function functionName() {
//   echo "hello! we will send the mail now";
//   $email = $_POST['email'];
//   $name = $_POST['name'];
//   $message = $_POST['message'];
//   mail($email,'Subject',$message);
// }
?>