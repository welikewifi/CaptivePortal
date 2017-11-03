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
    window.location = "left-side.html";
}

function rightClick(){
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
            if (ui.position.left >= 195) {
                setTimeout(function(){ rightClick(); }, 3000);
            }
            if (ui.position.left <= 0) {
                setTimeout(function(){ leftClick(); }, 3000);
            }
        }
    });   

    $('#slider-2')[0].addEventListener('touchmove', function(event) {
        event.preventDefault();
        var el = event.target;
        var touch = event.touches[0];
        var curX = touch.pageX;
        if(!touchStartX) {
            touchStartX = curX;
        }
        else{
            var diff = curX - touchStartX;
            var replacement = Number(100 + diff);
            ($("#slider-2").css('left', replacement+'px'));
            if (($("#slider-2").css('left')).replace('px','') >= 200) {
                ($("#slider-2").css('left', 200+'px'));
            }
            if (($("#slider-2").css('left')).replace('px','') <= -2) {
                ($("#slider-2").css('left', 0+'px'));
            }
        }
    }, false);  

    $('#slider-2')[0].addEventListener('touchend', function(event) {
        if (($("#slider-2").css('left')).replace('px','') >= 195) {
            setTimeout(function(){ rightClick(); }, 3000);
            
        }
        if (($("#slider-2").css('left')).replace('px','') <= 0) {
            setTimeout(function(){ leftClick(); }, 3000);
        }
        $("#slider-2").animate({
            left: (100)+'px'
        });

    }, false);

});