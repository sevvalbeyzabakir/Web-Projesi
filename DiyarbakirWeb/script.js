var modal1 = document.getElementsByClassName("open-menu")[0];

var btn1 = document.getElementsByClassName("header-div8")[0];

btn1.onclick = function () {
  modal1.style.display = "block";
  btn1.style.display = "none";
}

var btn2 = document.getElementsByClassName("close-icon")[0];

btn2.onclick = function () {
  modal1.style.display = "none";
  btn1.style.display = "block";
}

$(function () { //Slider geçiş sürelerini ayarlama kodu
  $('#slider2').carousel({
    interval: 3000, //saniye
    keyword: false, //klavye ile hareket ettirme
    pause: false, //slider ın üstünde mouse u çekince devam etme özelliği, varsayılanı 'hover'
    wrap: false //son slider a geldiğinde hareket etmez başa dönmez
  });
});

$(function () {
  //Slide IDs
  var slides = [];
  //Get all markers from the map and put them to array
  $('.map-marker').each(function () {
    slides.push($(this).attr('data-dive'));
  });
  //Index of currently displayed slide
  var currentSlide = 0;
  //Show the inital slide
  $('.map-content').hide();
  $('#' + slides[currentSlide]).show();
  $('.' + slides[currentSlide]).addClass("active");
  $('.' + slides[currentSlide]).show();
  $('.' + slides[currentSlide]).addClass("active2");

  //Click on markers on the map will show the specific slide
  $('.map-marker').on('click', function () {

    $('.prev-tab').removeClass("active");
    $('.next-tab').removeClass("active");
    $('.map-marker').removeClass("active");
    $(this).addClass("active");

    //First we get the data-dive attribute
    let diveId = $(this).attr('data-dive');
    //Now we hide all content items shown
    $('.map-content').hide();
    //And show the chosen one
    $('#' + diveId).show();
    $('.' + diveId).show();
    $('.map-content2').removeClass("active");
    $('.' + diveId).addClass("active");
    $('.' + diveId).addClass("active2");

    //And set the current slide to that value so the next and prev buttons
    //can navigate from that point
    currentSlide = slides.indexOf(diveId);
    return false;
  });

  //Click on each button does basically the same,
  //except the direction of the move
  $('.next-tab, .prev-tab').on('click', function () {
    //We check whether or not we clicked on next or prev and increase
    //or decrease the slide number accordingly
    if ($(this).hasClass('next-tab')) {
      $('.prev-tab').removeClass("active");
      $('.prev-tab2').removeClass("active");//
      $(this).addClass("active");
      $('.next-tab2').addClass("active");//
      currentSlide++;
    }
    else {
      $('.next-tab').removeClass("active");
      $('.next-tab2').removeClass("active");
      $(this).addClass("active");
      $('.prev-tab2').addClass("active");//
      currentSlide--;
    }
    //Next we check for the boundaries and adjust it accordingly
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    //Hide all shown content items
    $('.map-content').hide();
    $('.map-content2').removeClass("active");
    //Show the next(or prev) one
    $('#' + slides[currentSlide]).show();
    $('.' + slides[currentSlide]).show();
    $('.map-marker').removeClass("active");
    $('.' + slides[currentSlide]).addClass("active");
    $('.' + slides[currentSlide]).addClass("active2");
    return false;
  });

  $('.next-tab2, .prev-tab2').on('click', function () {
    //We check whether or not we clicked on next or prev and increase
    //or decrease the slide number accordingly
    if ($(this).hasClass('next-tab2')) {
      $('.prev-tab2').removeClass("active");
      $('.prev-tab').removeClass("active");
      $(this).addClass("active");
      $('.next-tab').addClass("active");
      currentSlide++;
    }
    else {
      $('.next-tab2').removeClass("active");
      $('.next-tab').removeClass("active");
      $(this).addClass("active");
      $('.prev-tab').addClass("active");
      currentSlide--;
    }
    //Next we check for the boundaries and adjust it accordingly
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    //Hide all shown content items
    $('.map-content').hide();
    $('.map-content2').removeClass("active");
    $('.map-marker').removeClass("active");
    //Show the next(or prev) one
    $('#' + slides[currentSlide]).show();
    $('.' + slides[currentSlide]).show();
    $('.' + slides[currentSlide]).addClass("active");
    $('.' + slides[currentSlide]).addClass("active2");
    return false;
  });
})

$('.map-marker1').on('click', function(){ 
  $('.map-marker1').addClass("active3");
  $('.map-marker3').removeClass("active3");
  $('.map-marker4').removeClass("active3");
  $('.map-content3').css('display','block');
  $('.map-content4').css('display','none');
  $('.map-content5').css('display','none');
});
$('.map-marker3').on('click', function(){ 
  $('.map-marker1').removeClass("active3");
  $('.map-marker3').addClass("active3");
  $('.map-marker4').removeClass("active3");
  $('.map-content4').css('display','block');
  $('.map-content3').css('display','none');
  $('.map-content5').css('display','none');
});
$('.map-marker4').on('click', function(){ 
  $('.map-marker1').removeClass("active3");
  $('.map-marker3').removeClass("active3");
  $('.map-marker4').addClass("active3");
  $('.map-content3').css('display','none');
  $('.map-content4').css('display','none');
  $('.map-content5').css('display','block');
});