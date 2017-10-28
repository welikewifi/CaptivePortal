var css_back = getCookie("reconnection");
var n = css_back.toString();
if ( n == "" ) { n = "1" }
else if ( n == "1" ) { n = "2" }
else if ( n == "2" ) { n = "3" }
else if ( n == "3" ) { n = "1" }
if (window.matchMedia('all and (orientation:portrait)').matches) {
    $(document).ready(function () {
        $('body').css('background-image', 'url(img/'+n+'.gif)');
    });
}
else if (window.matchMedia('all and (orientation:landscape)').matches) {
    $(document).ready(function () {
        $('body').css('background-image', 'url(img/'+n+'h.jpg)');
    });
}

var xmlhttp = new XMLHttpRequest(),
    user_mac = "$(mac-esc)",
    link_origin = "$(link-orig-esc)",
    link_login_only = "$(link-login-only)";

var params = 'username=T-' + user_mac + '&dst=' + link_origin;
function goto_html2() {
    window.location = 'html2.html';
}


function do_login(el, with_link_origin) {
    console.log(el.attr('data-ready'));
    if (el.attr('data-ready') == true || el.attr('data-ready') == "true") {
        $("#well").fadeOut();

        xmlhttp.open('POST', link_login_only, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                setTimeout( function() {
                    if (with_link_origin) {
                        window.location = link_origin;
                    } else {

                        window.location = 'html2.html';
                        //                         window.location = 'https://www.facebook.com/CafeRider/';
                        // var location = window.location.href;
//                            location = location.replace('login.html','https://www.zomato.com/dubai/al-kamil-restaurant-billiard-jumeirah-lake-towers/photos');
                        //                           window.location = location;
                    }
                }, 1500);
            }
        };
        xmlhttp.send(params);
    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var botn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
botn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

$(document).ready(function() {

    /* Load after 5 sec */
    setTimeout(function(){
        $('.connect').remove();
        $('#silder-page-wrap').fadeIn();
        $('#buttons1').fadeIn();

    }, 5000);

    $("#slider").draggable({
        axis: 'x',
        containment: 'parent',
        drag: function(event, ui) {
//                console.log("ui.position.left: ",ui.position.left);
//                if (ui.position.left > 550) {
//                } else {
//                }
        },
        stop: function(event, ui) {
            if (ui.position.left >= 200) {
                console.log("execute click");
                goto_html2();
//                    do_login($("#slider"), false);
            }
            $(this).animate({
                left: 0
            })
        }
    });


    $('#slider')[0].addEventListener('touchmove', function(event) {
        console.log("touchmove");
        event.preventDefault();
        var el = event.target;
        var touch = event.touches[0];
        var curX = touch.pageX - this.offsetLeft - 73;
        console.log("curX: ", curX);
        if(curX <= 0) return;
//            if(curX > 550){
//                $('#well').fadeOut();
//            }
        el.style.webkitTransform = 'translateX(' + curX + 'px)';
        if(curX >= 203){
            el.style.webkitTransform = 'translateX(' + 201 + 'px)';
        }
    }, false);

    $('#slider')[0].addEventListener('touchend', function(event) {
        console.log("touchend");
        var touch = event.changedTouches[0];
//            console.log(touch.pageX);
        var curX = touch.pageX - this.offsetLeft - 73;
        this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
        this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
        this.style.webkitTransform = 'translateX(0px)';
        if (curX >= 200) {
            console.log("execute click");
            goto_html2();
//                do_login($("#slider"), false);
        }
    }, false);

});