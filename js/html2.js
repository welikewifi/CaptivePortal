function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var xmlhttp = new XMLHttpRequest(),
    user_mac = html2.user_mac,
    link_origin = html2.link_origin,
    link_login_only = html2.link_login_only;

var params = html2.params;

function do_login(el, with_link_origin) {
    if (true == true || el.attr('data-ready') == "true") {
        $("#well").fadeOut();
        xmlhttp.open('POST', link_login_only, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                setTimeout( function() {
                    if (with_link_origin) {
                        window.location = link_origin;
                    } else {
                    }
                }, 1500);
            }
        };
        xmlhttp.send(params);
    } }

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var botn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks anywhere outside of the modal, close it

var css_back = getCookie("reconnection");
var n = css_back.toString();
if ( n == "" ) { var n = "1" }


if (window.matchMedia('all and (orientation:portrait)').matches) {
    $(document).ready(function () {
        $('body').css('background-image', 'url(img/a'+n+'.jpg)');


    });
}
else if (window.matchMedia('all and (orientation:landscape)').matches) {
    $(document).ready(function () {
        $('body').css('background-image', 'url(img/a'+n+'h.jpg)');
    });
}





var sTime = new Date().getTime();
var countDown = 5;

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var botn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function leftClick(){
    do_login($("#slider-2"), false);
    window.location = "left-side.html";
}

function rightClick(){
    do_login($("#slider-2"), false);
    window.location = "right-side.html";
}

var funcs =[moveArrowsToSides,hideArrows,moveArrowsToOrigin,showArrows];

var i=0;
function callFuncs() {

    if(i<4) {
        funcs[i++]();
        if (i < funcs.length) {
            setTimeout(callFuncs, 1000);
        } else {
            setTimeout(function () {
                i = 0;
            }, 500);
        }
        setTimeout(callFuncs, 1000);

    }
}
function moveArrowsToSides()
{
    $('.slider-arrow-left').css('left', '10px');
    $('.slider-arrow-right').css('right', '10px');
}
function moveArrowsToOrigin()
{
    $('.slider-arrow-left').css('left', '100px');
    $('.slider-arrow-right').css('right', '100px');
}
function hideArrows()
{
    $('.slider-arrow-left').css('opacity', '0');
    $('.slider-arrow-right').css('opacity', '0');
}
function showArrows()
{
    $('.slider-arrow-left').css('opacity', '1');
    $('.slider-arrow-right').css('opacity', '1');
}


$(document).ready(function() {
    /* Load after 5 sec */

    setTimeout(function(){
        $('.connect').remove();
        $('#silder-page-wrap-2').fadeIn();

        setTimeout(function()
        {
            callFuncs();
        },500);

    }, 5000);


    var touchStartX = null;

    $(window).resize(function(){
        touchStartX = null;
    })

    $("#slider-2").draggable({
        axis: 'x',
        containment: 'parent',
        drag: function(event, ui) {
        },
        stop: function(event, ui) {
            $(this).animate({
                left: (100)+'px'
            });
            console.log(ui.position.left);
            if (ui.position.left >= 195) {
                rightClick();
            }
            if (ui.position.left <= 0) {
                leftClick();
            }
        }
    });   

    $('#slider-2')[0].addEventListener('touchend', function(event) {
        if (($("#slider-2").css('left')).replace('px','') >= 195) {
            rightClick();
        }
        if (($("#slider-2").css('left')).replace('px','') <= 0) {
            leftClick();
        }
        $("#slider-2").animate({
            left: (100)+'px'
        });

    }, false);

});