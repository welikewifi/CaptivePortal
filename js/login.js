var css_back = getCookie("reconnection");
var n = css_back.toString();
if ( n == "" ) { n = "1" }
else if ( n == "1" ) { n = "2" }
else if ( n == "2" ) { n = "3" }
else if ( n == "3" ) { n = "1" }
if (window.matchMedia('all and (orientation:portrait)').matches) {
    $(document).ready(function () {
        $('body').css('background-image', 'url(img/'+n+'.jpg)');
    });
}
else if (window.matchMedia('all and (orientation:landscape)').matches) {
    $(document).ready(function () {
        $('body').css('background-image', 'url(img/'+n+'h.jpg)');
    });
}

var xmlhttp = new XMLHttpRequest(),
    user_mac = login.user_mac,
    link_origin = login.link_origin,
    link_login_only = login.link_login_only;

var params = login.params;
function goto_html2() {
    window.location = login.html2;
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
        },
        stop: function(event, ui) {
            if (ui.position.left >= 200) {
                goto_html2();
            }
            $(this).animate({
                left: 0
            })
        }
    });


    $('#slider')[0].addEventListener('touchmove', function(event) {
        event.preventDefault();
        var el = event.target;
        var touch = event.touches[0];
        var curX = touch.pageX - this.offsetLeft - 73;
        if(curX <= 0) return;
        el.style.webkitTransform = 'translateX(' + curX + 'px)';
        if(curX >= 203){
            el.style.webkitTransform = 'translateX(' + 201 + 'px)';
        }
    }, false);

    $('#slider')[0].addEventListener('touchend', function(event) {
        var touch = event.changedTouches[0];
        var curX = touch.pageX - this.offsetLeft - 73;
        this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
        this.addEventListener( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
        this.style.webkitTransform = 'translateX(0px)';
        if (curX >= 200) {
            goto_html2();
        }
    }, false);

});