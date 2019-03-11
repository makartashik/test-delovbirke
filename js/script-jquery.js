$(document).ready(function(){
  $('.page-banner').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
  });
});

$(window).on('resize', function () {
    if ($(window).width() < 501) {
        $(".about-company__text--hidden").slideUp();
    }
});

$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
    {
      breakpoint: 501,
      settings: {
        arrows: true,
      }
    }]
  });
});

$(document).ready(function(){
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 501,
      settings: "unslick"
    }]
  });
});

$(document).ready(function(){
  $(".about-company__button").click(function(){
    $(".about-company__text--hidden").slideToggle();
  });
});

document.querySelector("input[name='caption']").onkeyup = function() {
  document.querySelector(".example, .example-ribbon, .example-sticker").textContent = document.querySelector("input[name='caption']").value;
};

$(document).ready(function(){
    $("#ribbon-width2").on("click", function (event) {
       $('body').find('.example-ribbon').addClass('example-ribbon--width');
    });
    $("#ribbon-width1").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--width');
    });
});

$(document).ready(function(){
    $("#sticker-size2").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('color1 color2 color3 color4').addClass('example-sticker--small');
    });
    $("#sticker-size1").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker--small small-color4 small-color3 small-color2 small-color1');
    });
});

$(document).ready(function(){
    $("#font1").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font5 example-font6 example-font7').addClass('example-font1');
    });
    $("#font2").on("click", function (event) {
       $('body').find('.example').removeClass('example-font1 example-font3 example-font4 example-font5 example-font6 example-font7').addClass('example-font2');
    });
    $("#font3").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font1 example-font4 example-font5 example-font6 example-font7').addClass('example-font3');
    });
    $("#font4").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font1 example-font5 example-font6 example-font7').addClass('example-font4');
    });
    $("#font5").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font1 example-font6 example-font7').addClass('example-font5');
    });
    $("#font6").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font5 example-font1 example-font7').addClass('example-font6');
    });
    $("#font7").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font5 example-font6 example-font1').addClass('example-font7');
    });
});

$(document).ready(function(){
    $("#font1").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-font2 example-ribbon-font3 example-ribbon-font4 example-ribbon-font5 example-ribbon-font6 example-ribbon-font7').addClass('example-ribbon-font1');
    });
    $("#font2").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-font1 example-ribbon-font3 example-ribbon-font4 example-ribbon-font5 example-ribbon-font6 example-ribbon-font7').addClass('example-ribbon-font2');
    });
    $("#font3").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-font2 example-ribbon-font1 example-ribbon-font4 example-ribbon-font5 example-ribbon-font6 example-ribbon-font7').addClass('example-ribbon-font3');
    });
    $("#font4").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-font2 example-ribbon-font3 example-ribbon-font1 example-ribbon-font5 example-ribbon-font6 example-ribbon-font7').addClass('example-ribbon-font4');
    });
    $("#font5").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-font2 example-ribbon-font3 example-ribbon-font4 example-ribbon-font1 example-ribbon-font6 example-ribbon-font7').addClass('example-ribbon-font5');
    });
    $("#font6").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-font2 example-ribbon-font3 example-ribbon-font4 example-ribbon-font5 example-ribbon-font1 example-ribbon-font7').addClass('example-ribbon-font6');
    });
    $("#font7").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-font2 example-ribbon-font3 example-ribbon-font4 example-ribbon-font5 example-ribbon-font6 example-ribbon-font1').addClass('example-ribbon-font7');
    });
});

$(document).ready(function(){
    $("#font1").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-font2 example-sticker-font3 example-sticker-font4 example-sticker-font5 example-sticker-font6 example-sticker-font7').addClass('example-sticker-font1');
    });
    $("#font2").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-font1 example-sticker-font3 example-sticker-font4 example-sticker-font5 example-sticker-font6 example-sticker-font7').addClass('example-sticker-font2');
    });
    $("#font3").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-font2 example-sticker-font1 example-sticker-font4 example-sticker-font5 example-sticker-font6 example-sticker-font7').addClass('example-sticker-font3');
    });
    $("#font4").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-font2 example-sticker-font3 example-sticker-font1 example-sticker-font5 example-sticker-font6 example-sticker-font7').addClass('example-sticker-font4');
    });
    $("#font5").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-font2 example-sticker-font3 example-sticker-font4 example-sticker-font1 example-sticker-font6 example-sticker-font7').addClass('example-sticker-font5');
    });
    $("#font6").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-font2 example-sticker-font3 example-sticker-font4 example-sticker-font5 example-sticker-font1 example-sticker-font7').addClass('example-sticker-font6');
    });
    $("#font7").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-font2 example-sticker-font3 example-sticker-font4 example-sticker-font5 example-sticker-font6 example-sticker-font1').addClass('example-sticker-font7');
    });
});


$(document).ready(function(){
    $("#tag-picture0").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon-pic1 example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon--without-pic');
    });
    $("#tag-picture1").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic1');
    });
    $("#tag-picture2").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic1 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic2');
    });
    $("#tag-picture3").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic1 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic3');
    });
    $("#tag-picture4").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic1 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic4');
    });
    $("#tag-picture5").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic1 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic5');
    });
    $("#tag-picture6").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic1 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic6');
    });
    $("#tag-picture7").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic1 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic7');
    });
    $("#tag-picture8").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic1 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic8');
    });
    $("#tag-picture9").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic1 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic9');
    });
    $("#tag-picture10").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic1 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic10');
    });
    $("#tag-picture11").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic1 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic11');
    });
    $("#tag-picture12").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic1 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic12');
    });
    $("#tag-picture13").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic1 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic13');
    });
    $("#tag-picture14").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic1 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic14');
    });
    $("#tag-picture15").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic1 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic15');
    });
    $("#tag-picture16").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic1 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic16');
    });
    $("#tag-picture17").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic1 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic17');
    });
    $("#tag-picture18").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic1 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic18');
    });
    $("#tag-picture19").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic1 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic19');
    });
    $("#tag-picture20").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic1 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic20');
    });
    $("#tag-picture21").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic1 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic21');
    });
    $("#tag-picture22").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic1 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic22');
    });
    $("#tag-picture23").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic1 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic23');
    });
    $("#tag-picture24").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic1 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic24');
    });
    $("#tag-picture25").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic1 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic25');
    });
    $("#tag-picture26").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic1 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic26');
    });
    $("#tag-picture27").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic1 example-ribbon-pic28 example-ribbon-pic29 ').addClass('example-ribbon-pic27');
    });
    $("#tag-picture28").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic1 example-ribbon-pic29 ').addClass('example-ribbon-pic28');
    });
    $("#tag-picture29").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('example-ribbon--without-pic example-ribbon-pic2 example-ribbon-pic3 example-ribbon-pic4 example-ribbon-pic5 example-ribbon-pic6 example-ribbon-pic7 example-ribbon-pic8 example-ribbon-pic9 example-ribbon-pic10 example-ribbon-pic11 example-ribbon-pic12 example-ribbon-pic13 example-ribbon-pic14 example-ribbon-pic15 example-ribbon-pic16 example-ribbon-pic17 example-ribbon-pic18 example-ribbon-pic19 example-ribbon-pic20 example-ribbon-pic21 example-ribbon-pic22 example-ribbon-pic23 example-ribbon-pic24 example-ribbon-pic25 example-ribbon-pic26 example-ribbon-pic27 example-ribbon-pic28 example-ribbon-pic1 ').addClass('example-ribbon-pic29');
    });
});

$(document).ready(function(){
    $("#tag-picture0").on("click", function (event) {
      $('body').find('.example, .example-sticker').removeClass('example-pic1 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example--without-pic');
    });
    $("#tag-picture1").on("click", function (event) {
      $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic1');
    });
    $("#tag-picture2").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic1 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic2');
    });
    $("#tag-picture3").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic1 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic3');
    });
    $("#tag-picture4").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-picexample-pic2 example-pic3 example-pic1 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic4');
    });
    $("#tag-picture5").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic1 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic5');
    });
    $("#tag-picture6").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic1 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic6');
    });
    $("#tag-picture7").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic1 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic7');
    });
    $("#tag-picture8").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic1 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic8');
    });
    $("#tag-picture9").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic1 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic9');
    });
    $("#tag-picture10").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic1 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic10');
    });
    $("#tag-picture11").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic1 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic11');
    });
    $("#tag-picture12").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic1 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic12');
    });
    $("#tag-picture13").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic1 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic13');
    });
    $("#tag-picture14").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic1 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic14');
    });
    $("#tag-picture15").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic1 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic15');
    });
    $("#tag-picture16").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic1 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic16');
    });
    $("#tag-picture17").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic1 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic17');
    });
    $("#tag-picture18").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic1 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic18');
    });
    $("#tag-picture19").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic1 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic19');
    });
    $("#tag-picture20").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic1 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic20');
    });
    $("#tag-picture21").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic1 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic21');
    });
    $("#tag-picture22").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic1 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic22');
    });
    $("#tag-picture23").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic1 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic23');
    });
    $("#tag-picture24").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic1 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic24');
    });
    $("#tag-picture25").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic example--without-pic example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic1 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic25');
    });
    $("#tag-picture26").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic  example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic1 example-pic27 example-pic28 example-pic29 ').addClass('example-pic26');
    });
    $("#tag-picture27").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic  example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic1 example-pic28 example-pic29 ').addClass('example-pic27');
    });
    $("#tag-picture28").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic  example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic1 example-pic29 ').addClass('example-pic28');
    });
    $("#tag-picture29").on("click", function (event) {
       $('body').find('.example, .example-sticker').removeClass('example--without-pic  example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic1 ').addClass('example-pic29');
    });
});

$(document).ready(function(){
    $("#color1").on("click", function (event) {
      if ($('#sticker-example').hasClass('example-sticker--small')) {
        $('body').find('.example-sticker').removeClass('color1 color2 color3 color4 small-color4 small-color3 small-color2').addClass('small-color1');
      } else {
        $('body').find('.example, .example-sticker').removeClass('color2 color3 color4 small-color4 small-color3 small-color2 small-color1').addClass('color1');
      }
    });
    $("#color2").on("click", function (event) {
      if ($('#sticker-example').hasClass('example-sticker--small')) {
        $('body').find('.example-sticker').removeClass('color1 color2 color3 color4 small-color1 small-color3 small-color4').addClass('small-color2');
      } else {
        $('body').find('.example, .example-sticker').removeClass('color1 color3 color4 small-color1 small-color3 small-color4 small-color2').addClass('color2');
      }
    });
    $("#color3").on("click", function (event) {
      if ($('#sticker-example').hasClass('example-sticker--small')) {
        $('body').find('.example-sticker').removeClass('color2 color1 color3 color4 small-color2 small-color1 small-color4').addClass('small-color3');
      } else {
        $('body').find('.example, .example-sticker').removeClass('color2 color1 color4 small-color2 small-color1 small-color4 small-color3').addClass('color3');
      }
    });
    $("#color4").on("click", function (event) {
      if ($('#sticker-example').hasClass('example-sticker--small')) {
        $('body').find('.example-sticker').removeClass('color2 color3 color1 color4 small-color2 small-color3 small-color1').addClass('small-color4');
      } else {
        $('body').find('.example, .example-sticker').removeClass('color2 color3 color1 small-color4 small-color2 small-color3 small-color1').addClass('color4');
      }
    });
});

$(document).ready(function(){
    $("#color1").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-font-color2 ribbon-font-color3 ribbon-font-color4').addClass('ribbon-font-color1');
    });
    $("#color2").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-font-color1 ribbon-font-color3 ribbon-font-color4').addClass('ribbon-font-color2');
    });
    $("#color3").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-font-color1 ribbon-font-color2 ribbon-font-color4').addClass('ribbon-font-color3');
    });
    $("#color4").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-font-color1 ribbon-font-color2 ribbon-font-color3').addClass('ribbon-font-color4');
    });
});

$(document).ready(function(){
    $("#ribbon-color1").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color1');
    });
    $("#ribbon-color2").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color1 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color2');
    });
    $("#ribbon-color3").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color1 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color3');
    });
    $("#ribbon-color4").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color1 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color4');
    });
    $("#ribbon-color5").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color1 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color5');
    });
    $("#ribbon-color6").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color1 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color6');
    });
    $("#ribbon-color7").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color1 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color7');
    });
    $("#ribbon-color8").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color1 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color8');
    });
    $("#ribbon-color9").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color1 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color9');
    });
    $("#ribbon-color10").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color1 ribbon-color11 ribbon-color12 ribbon-color13').addClass('ribbon-color10');
    });
    $("#ribbon-color11").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color1 ribbon-color12 ribbon-color13').addClass('ribbon-color11');
    });
    $("#ribbon-color12").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color1 ribbon-color13').addClass('ribbon-color12');
    });
    $("#ribbon-color13").on("click", function (event) {
       $('body').find('.example-ribbon').removeClass('ribbon-color2 ribbon-color3 ribbon-color4 ribbon-color5 ribbon-color6 ribbon-color7 ribbon-color8 ribbon-color9 ribbon-color10 ribbon-color11 ribbon-color12 ribbon-color1').addClass('ribbon-color13');
    });
});

$(document).ready(function(){
    $("#sticker-color1").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-color2 example-sticker-color3 example-sticker-color4 example-sticker-color5').addClass('example-sticker-color1');
    });
    $("#sticker-color2").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-color1 example-sticker-color3 example-sticker-color4 example-sticker-color5').addClass('example-sticker-color2');
    });
    $("#sticker-color3").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-color2 example-sticker-color1 example-sticker-color4 example-sticker-color5').addClass('example-sticker-color3');
    });
    $("#sticker-color4").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-color1 example-sticker-color3 example-sticker-color2 example-sticker-color5').addClass('example-sticker-color4');
    });
    $("#sticker-color5").on("click", function (event) {
       $('body').find('.example-sticker').removeClass('example-sticker-color1 example-sticker-color3 example-sticker-color2 example-sticker-color4').addClass('example-sticker-color5');
    });
});
