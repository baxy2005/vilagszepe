$(document).ready(function() {
  var brand = $('.navmenu h3').html("világszép");
  var brandLogo = $('.navmenu i img').html('<img src="images/brand-spiral.svg" alt="vilagszep">')

if ( $(window).width() < 992 ) {
  console.log('hello')
  $('.navbar').append(brandLogo);
  $('.navbar').append(brand);
  console.log(brand)
}


  if ( $(window).width() < 540 ) {
    startCarousel();
  } else {
    $('.owl-carousel').addClass('off');
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
    if ( $(window).width() < 540 ) {
      $('.owl-carousel').removeClass('off');
      startCarousel();
    } else {
      stopCarousel();
    }
    // close modal on resize
    if ($(window).width() > 992) {
      $('.overlay').hide(0, false);
      $('body').removeClass('bs.offcanvas');
    }
});

function startCarousel(){
  $("#owl_about_main_slider").owlCarousel({
     navigation : true, // Show next and prev buttons
     slideSpeed : 500,
     margin:0,
     paginationSpeed : 400,
     autoplay:false,
     items : 1,
     itemsDesktop : false,
     itemsDesktopSmall : false,
     itemsTablet: false,
     itemsMobile : false,
     loop:true,
     nav:true,
     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });
}
function stopCarousel() {
  var owl = $('.owl-carousel');
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
