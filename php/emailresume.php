<?php
error_reporting(E_ALL);
session_start();

// get origal page for redirect
$referrer = $_SERVER['HTTP_REFERER'];

// load mailer class
require 'phpmailer/PHPMailerAutoload.php';

// define human resources mail
define('HRMAIL', 'hr@aofl.com');
// define('HRMAIL', 'jeffry@webstudioswest.com'); //dev mail

// create email from data
try {
	if(!empty($_POST) && is_array($_POST)){
		$mail = new PHPMailer;

		// get new files url
		$files = processFiles();

		$mail->isSendmail();                                      // Set mailer to use Sendmail

		$mail->From = $_POST['email'];
		$mail->FromName = $_POST['name'];
		$mail->addAddress(HRMAIL);     // Add a recipient

		$mail->WordWrap = 50;                              // Set word wrap to 50 characters
		
		foreach ($files as $name => $filepath) {
			$mail->addAttachment($filepath, $name);         // Add attachments
		}
		
		$mail->isHTML(true);                                  // Set email format to HTML

		$mail->Subject = 'Age of Learning Corp. - Resume submission of '.$_POST['name'];
		
		// create body
		$mail->Body = processBody();
		
		// send
		if(!$mail->send()) {
			throw new Exception("Mailer Error: " . $mail->ErrorInfo.".", 1);
		} else {
		    $_SESSION['messages'][] = "Application has been sent.";
		}
	} else {
		throw new Exception("Error, no data provided.", 1);
	}
} catch (Exception $e) {
	$_SESSION['errors'][] = $e->getMessage();
}

// Redirect back to page
header("Location:".$referrer);
exit();

// ************************** FUNCTIONS *****************************

// crate array of uploaded files paths
function processFiles(){
	$files = array();

	// check if uploads folder exists if not create it
	$upload_folder = getcwd().'/uploads/'.date('Ymd', strtotime('now'));

	if (!file_exists($upload_folder)) {
    	mkdir($upload_folder, 0777, true);
	}

	foreach ($_FILES as $filename => $file_info) {
		//copy the temp. uploaded file to uploads folder
		$name_of_uploaded_file = $filename.str_replace('@', '_', $_POST['email']).$_FILES[$filename]['name'];

		$path_of_uploaded_file = $upload_folder .'/'. $name_of_uploaded_file;
		$tmp_path = $_FILES[$filename]["tmp_name"];
		 
		if(is_uploaded_file($tmp_path))
		{
			if(!copy($tmp_path,$path_of_uploaded_file))
			{
				throw new Exception("Error while copying the uploaded file.", 1);
			} else {
				$files[$filename.'-'.$_FILES[$filename]['name']] = $path_of_uploaded_file;
			}
		}
	}

	return $files;
}

function processBody(){

	// create body
	$body = '<p>Information submitted:</p>';
	$body .= '<table>';

	foreach ($_POST as $key => $value) {
		// item
		$body .= '<tr><td style="text-align: right;vertical-align:top;"><strong>'.ucwords(str_replace('_', ' ', $key)).': </strong></td>';
		
		// value
		if($key == 'shifts' && is_array($value)){
			$body .= '<td style="text-align: left;vertical-align:top;">';
			foreach ($value as $shift) {
				if($shift == 3){
					$body .= 'M - F 9:30 AM - 6:30 PM <br />';
				} elseif($shift == 4) {
					$body .= 'M - F 11:00 AM - 8:00 PM <br />';
				}
			}
			$body .= '</td>';

		} else {
			$body .= '<td>'.$value.'</td>';
		}
		
		$body .= '</tr>';
	}

	$body .= '</table>';
	$body .= '<p>Email Generated from Carrers page in Age of Learning Site, please don\'t reply to this message;</p>';

	return $body;
}
