var $ = require('../../node_modules/jquery/dist/jquery.min.js');
var slick = require('./slick.js');

$(document).ready(function() {
    $('.project-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

});

function menuToggle() {
    alert("zzz");
}