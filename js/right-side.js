
var _redirectURLS = [
    right_side.google,
    right_side.apple,
    right_side.yahoo
];

var user_mac = right_side.user_mac,
    link_origin = right_side.link_origin,
    link_login_only = right_side.link_login_only;

var params = right_side.params;

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