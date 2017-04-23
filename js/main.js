$(document).ready(function() {
	$(".menu-trigger").click(function() {
		$(this).toggleClass("active");
        $("#nav_1862808").toggleClass("active");
	});
	
    $("a.smoothscroll").click(function(e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
    
	$('.careers .accordion-item .close').click(function(){
		$(".careers .accordion-item").removeClass('active');
		$('.careers .accordion-item .trigger').removeClass('active').next().slideUp();
		return false;
	});
	
	$('.accordion-content.files .accordion-item .trigger').click(function(){
		var itemA = $('.accordion-content .accordion-item .trigger');
		var thisTrigger = $(this);
		var container = $(this).next().find(".container");
		if( $(this).next().is(':hidden') ) {
			itemA.removeClass('active').next().slideUp().parent().removeClass('active');
			if (thisTrigger.hasClass("loaded")) {
				thisTrigger.toggleClass('active').next().slideDown().parent().toggleClass('active');
			} else {
				container.load(container.attr("data-url")+" #jobdescription", function() {
					thisTrigger.toggleClass('active').next().slideDown().parent().toggleClass('active');
					container.find("a:last").addClass("button-default black");
					thisTrigger.addClass("loaded");
				});
			};
		} else {
			$(this).toggleClass('active').next().slideUp().parent().toggleClass('active');
		}
		return false;
	});
	
	$('.accordion-content.normal .accordion-item .trigger').click(function(){
		var itemA = $('.accordion-content .accordion-item .trigger');
		if( $(this).next().is(':hidden') ) {
			itemA.removeClass('active').next().slideUp().parent().removeClass('active');
			$(this).toggleClass('active').next().slideDown().parent().toggleClass('active');
		} else {
			$(this).toggleClass('active').next().slideUp().parent().toggleClass('active');
		}
        

		return false;
	});
});