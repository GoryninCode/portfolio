$(function () {

  $('.burger').click(function (e) {
    $('.header__menu').toggleClass('header__menu--active');
    $('.burger').toggleClass('burger--active');
    $('body').toggleClass('lock');
  });

  $('.header__link').click(function (e) {
    $('.burger').removeClass('burger--active');
    $('.header__menu').removeClass('header__menu--active');
    $('body').removeClass();
  });

  var header = $(".header__top");

  function headerfixed() {
    if ($(window).scrollTop() > 150) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  $(window).on('scroll', headerfixed);

  headerfixed();



  $(".header__nav a, .logo, .header__scroll").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });

  var mixer = mixitup('.portfolio__items');

});