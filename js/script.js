function startCarousel(){$(".owl-carousel").owlCarousel({navigation:!0,slideSpeed:500,margin:0,paginationSpeed:400,autoplay:!1,items:1.5,itemsDesktop:!1,itemsDesktopSmall:!1,itemsTablet:!1,itemsMobile:!1,loop:!0,nav:!1})}function stopCarousel(){var e=$(".owl-dis");e.trigger("destroy.owl.carousel"),e.addClass("off")}var brandFull=$(".header__brand").html(),language=$(".header__lang");$(document).ready(function(){$(".section--carousel .card").hover(function(e){e.preventDefault(),$(this).parents(".col").siblings().toggleClass("opacity")}),$(".nav-tabs").responsiveTabs();var e=new ScrollMagic.Controller,a=(new ScrollMagic.Scene({triggerHook:1,offset:10}).setClassToggle(".header","header-small").addIndicators({}).addTo(e),new TimelineMax);a.from(".card-image--one",1,{y:"-8%",ease:Power0.easeNone},0);var a=(new ScrollMagic.Scene({triggerHook:0,offset:10}).setTween(a).addIndicators({}).addTo(e),new TimelineMax);a.from(".card-image--two",1,{y:"-8%",ease:Power0.easeNone},0);var a=(new ScrollMagic.Scene({triggerElement:".card-image--two",triggerHook:0,offset:10}).setTween(a).addIndicators({}).addTo(e),new TimelineMax);a.from(".card-image--three",1,{y:"-8%",ease:Power0.easeNone},0);var a=(new ScrollMagic.Scene({triggerElement:".card-image--three",triggerHook:0,offset:10}).setTween(a).addIndicators({}).addTo(e),new TimelineMax);a.from(".card-image--four",1,{y:"-8%",ease:Power0.easeNone},0);new ScrollMagic.Scene({triggerElement:".card-image--four",triggerHook:0,offset:10}).setTween(a).addIndicators({}).addTo(e);$(".owl-all-device").owlCarousel({navigation:!0,slideSpeed:500,margin:1,paginationSpeed:400,autoplay:!1,items:1,responsive:{0:{items:1.1},576:{items:1,margin:0}},loop:!0,nav:!0,lazyLoad:!0,navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]}),$(window).width()<992&&($(brandFull).clone().appendTo(".navbar"),$(language).clone().prependTo(".navbar-nav"),$(".navbar .navmenu-brand small").remove()),$(window).width()<576?startCarousel():$(".owl-dis").addClass("off"),$(".navmenu").on("show.bs.offcanvas",function(){$(window).width()<=992&&$(".overlay").fadeIn()}),$(".navmenu").on("hide.bs.offcanvas",function(){$(window).width()<=992&&$(".overlay").fadeOut()})}),$(window).resize(function(){if($(window).width()<576?($(".owl-dis").removeClass("off"),startCarousel()):stopCarousel(),$(window).width()>992&&($(".overlay").hide(0,!1),$("body").removeClass("bs.offcanvas"),$(".navbar .navmenu-brand").remove(),$(".navbar-nav .header__lang").remove()),$(window).width()<992){var e=$(".navbar .navmenu-brand"),a=$(".navbar-nav .header__lang");0==e.length&&(console.log("brandcheck.length"),$(brandFull).clone().appendTo(".navbar"),$(".navbar .navmenu-brand small").remove()),0==a.length&&$(language).clone().prependTo(".navbar-nav")}});