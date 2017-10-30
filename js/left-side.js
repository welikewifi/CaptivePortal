
var _redirectURLS = [
    left_side.google,
    left_side.apple,
    left_side.yahoo
];

var user_mac = left_side.user_mac,
    link_origin = left_side.link_origin,
    link_login_only = left_side.link_login_only;

var params = left_side.params;

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