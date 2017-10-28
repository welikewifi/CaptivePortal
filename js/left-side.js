
var _redirectURLS = [
    'https://www.google.com',
    'https://www.apple.com',
    'https://www.yahoo.com'
];

var xmlhttp = new XMLHttpRequest(),
    user_mac = "$(mac-esc)",
    link_origin = "$(link-orig-esc)",
    link_login_only = "$(link-login-only)";

var params = 'username=T-' + user_mac + '&dst=' + link_origin;

var css_back = getCookie("reconnection");
var n = css_back.toString();
if ( n == "" ) { var n = "1" }

function redirect(){
    // update cookie value first
    checkCookie();
    // redirect now
    window.location = _redirectURLS[n-1];
}

$(document).ready(function() {
    redirect();
});