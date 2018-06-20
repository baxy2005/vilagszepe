var brandFull = $('.header__brand').html();
// var brandLogo = $('.navmenu i img')

$(document).ready(function() {

  $(".section--carousel .item").hover(function(e) {
      e.preventDefault();
      $(this).parents('.col').siblings().toggleClass('opacity');
  });
  $('.nav-tabs').responsiveTabs();

/*-------------------------------------------
  ScrollMagic
-------------------------------------------*/

// init ScrollMagic
var controller = new ScrollMagic.Controller();
// set timeline

var ourScene = new ScrollMagic.Scene({
  // triggerElement: '#project01 img',
  triggerHook: 1,
  offset: 10
})
.setClassToggle('.header', 'header-small') // add class to project01
.addIndicators({
  name: 'fade scene',
  colorTrigger: 'black',
  colorStart: '#75C695',
  colorEnd: 'pink'
}) // this requires a plugin
.addTo(controller);


$(".owl-all-device").owlCarousel({
   navigation : true, // Show next and prev buttons
   slideSpeed : 500,
   margin:0,
   paginationSpeed : 400,
   autoplay:false,
   items : 1,
   loop:true,
   nav:true,
   lazyLoad:true,
   navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
});


 // fakewaffle.responsiveTabs(['xs', 'sm']);


if ( $(window).width() < 992 ) {
  // $(brandLogo).clone().appendTo('.navbar')
  $(brandFull).clone().appendTo('.navbar');
  $('.navbar .navmenu-brand small').remove()

//  $('.navbar').append(brandLogo);
//  $('.navbar').append(brand);
}
  if ( $(window).width() < 576 ) {
    startCarousel();
  } else {
    $('.owl-dis').addClass('off');
  }
  // overlay
  $('.navmenu').on('show.bs.offcanvas', function() {
  	if ($(window).width() <= 992) {
  		$('.overlay').fadeIn();
    }
  });
  $('.navmenu').on('hide.bs.offcanvas', function() {
  	if ($(window).width() <= 992) {
  		$('.overlay').fadeOut();
    }
  });
});
$(window).resize(function() {
    if ( $(window).width() < 576 ) {
      $('.owl-dis').removeClass('off');
      startCarousel();
    } else {
      stopCarousel();
    }
    // close modal on resize
    if ($(window).width() > 992) {
      $('.overlay').hide(0, false);
      $('body').removeClass('bs.offcanvas');
      $('.navbar .navmenu-brand').remove()
    }
    if ($(window).width() < 992) {
      var brandcheck = $(".navbar .navmenu-brand")
      if (brandcheck.length == 0){
        console.log('brandcheck.length')
        $(brandFull).clone().appendTo('.navbar')
        $('.navbar .navmenu-brand small').remove()
      }

    }
});

function startCarousel(){
  $(".owl-carousel").owlCarousel({
     navigation : true, // Show next and prev buttons
     slideSpeed : 500,
     margin:0,
     paginationSpeed : 400,
     autoplay:false,
     items : 1.5,
     itemsDesktop : false,
     itemsDesktopSmall : false,
     itemsTablet: false,
     itemsMobile : false,
     loop:true,
     nav:false,
     // navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });
}
function stopCarousel() {
  var owl = $('.owl-dis');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}



// simulate modal opening
// $('.nav-link').click(function() {
//   if ($(window).width() > 992) {
//     $('.overlay').hide(0, false);
//   }
//
// 	$('#myNavmenu').click();
// });






// // switch active navigation link onclick
// $('.nav a').on('click', function() {
//   $('.nav').find('.active').removeClass('active');
//   $(this).parent().addClass('active');
// });
//
// // close modal when navigating to anchor
// $('.navmenu-nav li a').on('click', function() {
//   $('body').removeClass('bs.offcanvas');
// });
