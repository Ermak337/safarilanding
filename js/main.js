$(function(){


	$('.about-popup_link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});




    $('.photos-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:'<button type="button" class="slick-photo_btn slick-prev"><img src="img/arrow_left.png" alt=""></button>',
        nextArrow:'<button type="button" class="slick-photo_btn slick-next"><img src="img/arrow_right.png" alt=""></button>'
      });


      $('.photos-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},

	});

	$('.header-arrow_link').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#book').offset().top }, 1000);
		e.preventDefault();
	  });


	  $('.menu__btn').on('click', function(){
		$('.header-inner_mobile').toggleClass('header-inner_active');
	});
	

	$('.menu__btn').on('click', function(){
		$('.header-arrow').toggleClass('header-arrow_index');
	});
	


	$('.menu__btn').on('click', function(){
		$('html').toggleClass('html-hidden');
	});
	

	
	

	

	$(".content-block").each(function() {
		let more = $(this).find(".show-more");
		let hide = $(this).find(".hide-content");
		hide.hide();
		more.click(function() {
			hide.slideToggle();
			more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
		});
	});
	
	

	  


	class MenuHandler {
		constructor() {
			this.menuTrigger = $('#menu-trigger');
	
			this.toggleMenu();
		}
	
		toggleMenu() {
			this.menuTrigger.on('click', ()=> {
				this.menuTrigger.toggleClass('is-open');
				this.menu.toggleClass('is-open');
			});
		}
	}
	
	$(document).ready(function ($) {
		var menuHandler = new MenuHandler('.menu');
	});
	

});