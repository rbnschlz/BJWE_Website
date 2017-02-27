require("../less/main.less");
require("../js/plugins.js");

(function($) {


	//Slideshow Preload
	$(document).on( 'cycle-initialized', function(e, opts) {
	    var key = 'cycle-look-ahead';
	    opts.container.on( 'cycle-before', function( e, opts, outgoing, incoming, fwd ) {
	        var index = fwd ? (opts.nextSlide + 1) : (opts.nextSlide - 1),
	            slide = $( opts.slides[ index ] ),
	            images;

	        if ( slide.length && ! slide.data( key ) ) {
	            slide.data( key, true );
	            images = slide.is( 'div[data-style]' ) ? slide : slide.find( 'div[data-style]' );
	            images.each(function() {
	                var img = $(this);
	                img.attr( 'style', img.attr('data-style') );
	                // img.removeAttr( 'data-style' );
	            });
	        }
	    });
	});

	//Caption Position
	var clickclickclick = function(){
		var capt = $(".getcaption").attr("data-caption");
		var width = $(window).width();
		var popwidth = $('#popup').outerWidth();
		var x = event.pageX;
		console.log(width);
		console.log(popwidth);
		console.log(x);
		if(width - x < popwidth + 10) {
			var x = x - popwidth - 20;
		}
		var y = event.pageY;
		$('#popup').removeClass("opacityzero").css('left', x).css('top', y);
	}


	var caption = function(){
		$('#img_wrapper').bind('click', function (event) {
			clickclickclick();	
		});
	}

	var iosHeight = function(){
		var height = $(window).height();
		console.log(height);
		if($(window).width() < 500){
			$('.left.small, .right.small').css("height", height/2 - 40 + "px");
			$('.left.single, .right.single').css("height", height - 60 + "px");
			console.log(height/2 + 'px');
		}
	}

	//Intro
	var captionint = function() {
		$('#intro_wrapper').bind('click', function (event) {
			clickclickclick();	
			$('#intro_wrapper').hide();
			$('#title_wrapper').removeClass("noclick");
			// $('.img_wrapper_inner').removeClass('blur');
			// var capt = $(".cycle-slide-active").children(".getcaption").attr("data-caption");
			// var color = $(".cycle-slide-active").attr("data-color");
	        // $('.caption').text(capt);
	        // if(color == "black") {
	        // 	$('#title_wrapper').addClass("ftype");
	        // 	$('#popup').addClass("ftype");
	        // }
		});
	}

	//Info Popup
	var title = function(){
		$('#title_wrapper, .info_wrapper').bind('click', function (event) {
			$('#popup').toggleClass("opacityzero");
			// $('.info_background').toggleClass('hidden');
			$('.info_wrapper').toggleClass('hidden');
			// $('.img_wrapper_inner').toggleClass('blur');

			var img = $(".cycle-slide-active").children(".getcaption");
			$('.info_background').attr( 'style', img.attr('data-style') );
			// var colors = ['pink', 'CornflowerBlue', 'GoldenRod'];
			// $(".info_background").css("background-color", colors[Math.floor(Math.random() * colors.length)]);

			// var color = $(".cycle-slide-active").attr("data-color");
			// var ovcolor = $(".cycle-slide-active").attr("data-ovcolor");
			// if(color === "black") {
			// 	$('#title_wrapper').toggleClass("ftype");
			// 	$('#popup').toggleClass("ftype");
			// }
			// if(ovcolor === "white") {
			// 	$('#title_wrapper').toggleClass("ftype");
			// 	$(".info_wrapper").toggleClass("ftype");
			// 	$('#popup').toggleClass("ftype");
			// }
		});
	}

	//Imprint
	var info = function(){
		$('.headline').bind('click', function (event) {
			event.stopPropagation();
		    $(".info_imprint_inner").toggleClass('opacityzero');
		});	
		$('.info_wrapper a').bind('click', function (event) {
			event.stopPropagation();
		});
	}

	//Slideshow
	var slideit= function(){
			$(".img_wrapper_inner").cycle({
				slides:".img_slide",
				timeout: 0,
				next: "> .control_next",
				speed: 1,
				swipe: true,
			});
			var first = $(".cycle-slide").first().children().first();
	            first.attr( 'style', first.attr('data-style') );
	            first = $(".cycle-slide").first().children().eq(1);
	            first.attr( 'style', first.attr('data-style') );
	       	var next = $(".cycle-slide-active").next().children().first();
	            next.attr( 'style', next.attr('data-style') );
	        var next = $(".cycle-slide-active").next().children().eq(1);
	            next.attr( 'style', next.attr('data-style') );

	        $( '#img_wrapper' ).on( 'cycle-next', function( event, opts ) {
	        	var capt = $(".cycle-slide-active").children(".getcaption").attr("data-caption");
	        	$('#popup').text(capt);
	        	iosHeight();

	        	// var color = $(".cycle-slide-active").attr("data-color");
	        	// $('.caption').text(capt);
		        // if(color == "black") {
		        // 	$('#title_wrapper').addClass("ftype");
		        // 	$('#popup').addClass("ftype");
		        // } else {
		        // 	$('#title_wrapper').removeClass("ftype");
		        // 	$('#popup').removeClass("ftype");
		        // }

			});
	};

	//window load
	$(window).on('load', function() {
		captionint();
		caption();
		title();
		info();
		slideit();
		iosHeight();
	}); 

	//document ready
	$(document).ready(function(){
	});

	//keypresses
	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
	        break;

	        case 38: // up
	        case 33: // page up
	        break;

	        case 39: // right
	        break;

	        case 40: // down
	        case 34: // page down
	        break;

	        case 36: // home
	        break;

	        case 35: // end
			break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});


})(jQuery);


