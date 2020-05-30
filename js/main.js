$(document).ready(function() {
    $(window).scroll(function() {

        if ( $('html, body').scrollTop() > 100 ) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
    });
});