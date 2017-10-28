<?php 
if (!empty($_REQUEST['url']) && (strstr($_REQUEST['url'],'redirect.html') || strstr($_REQUEST['url'],'login.html'))) {
	echo '
	Redirecting...
	<script type="text/javascript">
	window.location = "/login.html";
	</script>';
	exit;
}

header("Location:/login.html?". $_SERVER['QUERY_STRING']);