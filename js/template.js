jQuery(function($) {

	/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("header .codeniacs_search, #codeniacs_searchForm .codeniacs_close").click(function(){
		$("#codeniacs_searchForm").toggleClass("open");
	});

	/* =============== SHOW / HIDE GOOGLE MAP =============== */
	$("#codeniacs_contact .codeniacs_sectionHeading").click(function(){
		$("#codeniacs_contact").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

	/* =============== TESTIMONIAL SLIDER =============== */
	$('.codeniacs_testimonialSlider').unslider({
		nav: false,
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="unslider-arrow prev"><i class="mdi mdi-chevron-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="mdi mdi-chevron-right"></i></a>',
		}
	});

	/* =============== CUSTOM SCROLLBAR STYLE =============== */
	$("#codeniacs_whatWeDo .panel-body").mCustomScrollbar({
		theme:"default"
	});

	/* =============== MAKE MAIN MENU STICKED ON TOP WHEN SCROLL =============== */
	$(window).scroll(function () {
		if ($(this).scrollTop() == $('#codeniacs_header').height() || $(this).scrollTop() > $('#codeniacs_header').height()) {
			$('body').addClass("codeniacs_fixed-nav");
			$('body').css('padding-top', $('#codeniacs_navbar').height() + 'px');
		} else {
			$('body').removeClass("codeniacs_fixed-nav");
			$('body').css('padding-top', 0);
		}
	});
	
	/* =============== ISOTOP =============== */	
	$(window).load(function(){
		$portfolio = $('.codeniacs_whoItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'masonry'
		});
	});
	
	/* =============== PORTFOLIO HOVER EFFECT =============== */
	$('.codeniacs_whoItems > li').each( function() { $(this).hoverdir(); } );
	
	/* =============== PERTTYPHOTO =============== */
	$("a.codeniacs_prettyPhoto").prettyPhoto();
	
	/* =============== SMOOTH SCROOL EFFECT =============== */
	$('#codeniacs_navbar ul li a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#codeniacs_scrollToTop').fadeIn();
		} else {
			$('#codeniacs_scrollToTop').fadeOut();
		}
	});
	/* Click event to scroll to top */
	$('#codeniacs_scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});