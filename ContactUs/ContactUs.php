<?php
switch ($_POST['dropdown']) {
	case 'logistics':
		$mail_to = 'mani@anivaenterprises.com';
		break;
	case 'translation':
		$mail_to = 'heju@anivaenterprises.com';
		break;
	default:
		$mail_to = '';
		echo "An error has occured.";
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

$first_name = test_input($_POST['firstname']);
$last_name = test_input($_POST['lastname']);
$phone_number = test_input($_POST['phone']);
$field_email = test_input($_POST['email']);
$field_subject = test_input($_POST['subject']);
$field_message = test_input($_POST['body']);

$body_message = 'From: '.$first_name.' '.$last_name."\n";
$body_message .= 'Phone: '.$phone_number."\n";
$body_message .= 'Email: '.$field_email."\n";
$body_message .= 'Message: '.$field_message."\n";

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $field_subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		window.location = 'ThankYou.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please try again or directly send an email to mani@anivaenterprises.com or heju@anivaenterprises.com. This page will now refresh.');
		window.location = 'ContactUs.html';
	</script>
<?php
}
?>