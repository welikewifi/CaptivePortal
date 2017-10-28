
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

function do_login(el, with_link_origin) {
    console.log(el.attr('data-ready'));

    if (true == true || el.attr('data-ready') == "true") {
        $("#well").fadeOut();
        xmlhttp.open('POST', link_login_only, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                setTimeout( function() {
                    if (with_link_origin) {
                        window.location = link_origin;
                        //                  window.location = 'https://www.facebook.com/CafeRider/';
                    } else {
//                            location = location.replace('login.html','https://www.zomato.com/dubai/al-kamil-restaurant-billiard-jumeirah-lake-towers/photos');
                        //                           window.location = location;
                    }
                }, 1500);
            }
        };
        xmlhttp.send(params);
    } }

// When the user clicks anywhere outside of the modal, close it

var css_back = getCookie("reconnection");
var n = css_back.toString();
if ( n == "" ) { var n = "1" }

function redirect(){
    do_login($("#slider-2"), false);
    // update cookie value first
    checkCookie();
    // redirect now
    window.location = _redirectURLS[n-1];
}

$(document).ready(function() {
    redirect();
});