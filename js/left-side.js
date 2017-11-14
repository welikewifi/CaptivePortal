var _redirectURLS = [
    left_side.promo_link1,
    left_side.promo_link2,
    left_side.promo_link3
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
    setTimeout(function() {
        redirect();
    }, 1000);
});