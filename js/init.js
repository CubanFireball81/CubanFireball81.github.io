/*
 * Copyright (c) 2019 - 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";

	// here all ready functions

	arlo_tm_cursor();
	arlo_tm_kenburn_slider();
	arlo_tm_popupscroll();
	arlo_tm_scrollable();
	arlo_tm_nav_bg();
	arlo_tm_popup();
	arlo_tm_mobile_menu();
	arlo_tm_down();
	arlo_tm_imgtosvg();
	arlo_tm_data_images();
	arlo_tm_jarallax();
	arlo_tm_portfolio();
	arlo_tm_projects();
	arlo_tm_isotope();
	arlo_tm_location();
	arlo_tm_ripple();
	arlo_tm_videoplayer();
	arlo_tm_about_animation();
	arlo_tm_animate_text();

	jQuery(window).on('resize',function(){
		arlo_tm_isotope();
		arlo_tm_modalbox_news();
	});

	window.addEventListener("load", function (){
		setTimeout(function(){
			jQuery('.arlo_tm_preloader').addClass('loaded');
		}, 1000);
        arlo_tm_isotope();
	});

});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function arlo_tm_cursor(){

    "use strict";

	var myCursor	= jQuery('.mouse-cursor');

	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function arlo_tm_kenburn_slider(){

	"use strict";

		jQuery(function() {
			jQuery('.arlo_tm_hero .overlay_slider').vegas({
			timer:false,
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpg' },
				{ src: 'img/slider/3.jpg' },
			]

		});
	});
}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function arlo_tm_popupscroll(){

	"use strict";

	var WW				= jQuery(window).width();
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.arlo_tm_modalbox_news .scrollable');

	var popupBox		= jQuery('.arlo_tm_modalbox_news .description_wrap');

	if(WW >= 1200){
		popupBox.css({height:H-140});
	}else{
		popupBox.css({height:H});
	}

	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();

		element.css({height: wH-140});

		if(WW >= 1200){
			element.css({height: wH-140});
		}else{
			element.css({height: wH});
		}

		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function arlo_tm_nav_bg(){

	"use strict";

	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.arlo_tm_topbar');
		var WinOffset		= jQuery(window).scrollTop();

		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function arlo_tm_scrollable(){

	"use strict";

	var H				= jQuery(window).height();
	var scrollable		= jQuery('.arlo_tm_leftpart .inner .menu.scrollable');
	var verMenu			= jQuery('.arlo_tm_leftpart .inner .menu');
	var logoHeight		= jQuery('.arlo_tm_leftpart .inner .logo').outerHeight();
	var socialHeight	= jQuery('.arlo_tm_leftpart .inner .bottom').outerHeight()+100;

	verMenu.css({height:H-logoHeight-socialHeight});

	scrollable.each(function(){
		var element		= jQuery(this);

		element.css({height: H-logoHeight-socialHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function arlo_tm_animate_text(){

	"use strict";

	var animateSpan			= jQuery('.arlo_tm_animation_text_word');

	animateSpan.typed({
		strings: ["Entry Level Python Developer", "Entry Level Web Developer", "Experienced I.T. Professional"],
		loop: true,
		startDelay: 1e3,
		backDelay: 2e3
	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function arlo_tm_popup(){

	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function arlo_tm_mobile_menu(){

	"use strict";

	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.arlo_tm_mobile_menu .dropdown');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	jQuery('.arlo_tm_mobile_menu .dropdown .dropdown_inner ul li a').on('click',function(){
		hamburger.removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function arlo_tm_down(){

	"use strict";
	var topbar		= jQuery('.arlo_tm_topbar').outerHeight();
	jQuery('.arlo_tm_arrow_wrap a').on('click',function(){
		if($('.arlo_tm_topbar').length){
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+3
			}, 800);
		}
		}else{
			if($.attr(this, 'href') !== '#'){
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top
				}, 800);
			}
		}
		return false;
	});

	jQuery('.arlo_tm_certifications .lets_work a').on('click',function(){
		if($('.arlo_tm_topbar').length){
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+3
			}, 800);
		}
		}else{
			if($.attr(this, 'href') !== '#'){
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top
				}, 800);
			}
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function arlo_tm_imgtosvg(){

	"use strict";

	jQuery('img.svg').each(function(){

		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function arlo_tm_data_images(){

	"use strict";

	var data			= jQuery('*[data-img-url]');

	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function arlo_tm_jarallax(){

	"use strict";

	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');

		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}

		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable

function arlo_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.arlo_tm_portfolio .portfolio_list ul');
		var filter		 = jQuery('.arlo_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});
		}
	}
}

function arlo_tm_projects() {

	"use strict";

	jQuery('.arlo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function arlo_tm_isotope(){

	"use strict";

	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {

		}
	});
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function arlo_tm_location(){
	var button		= jQuery('.href_location');
	button.on('click',function(){
		var element		= jQuery(this);
		var address		= element.text();
		address			= address.replace(/\ /g,'+');
		var text		= 'https://maps.google.com?q=';
		window.open(text+address);
		return false;
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function arlo_tm_ripple(){

	"use strict";

	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
	destroy: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: "hue",
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100
});

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function arlo_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function arlo_tm_about_animation(){

	"use strict";

	if ($('.parallax').length > 0) {
	  var scene = $('.parallax').get(0);
	  var parallax = new Parallax(scene, {
		relativeInput: true,
		onReady: function() { console.log('ready!');
	  } });
	}
}
