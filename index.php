<?php
/* Trying to get Apple to show the WiFi popup */
if (!empty($_REQUEST['url']) && (strstr($_REQUEST['url'],'success.html') || strstr($_REQUEST['url'],'detect.html'))) {
	echo '
	Redirecting...
	<script type="text/javascript">
	window.location = "/login.html";
	</script>';
	exit;
}
header( 'Location: /login.html'.$_SERVER['QUERY_STRING']) ;  ?>