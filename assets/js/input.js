require("../less/main.less");
require("../js/plugins.js");

(function($) {

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
	                img.removeAttr( 'data-style' );
	            });
	        }
	    });
	});

	var caption = function(){
		var capt = $(".cycle-slide-active").children().first().attr("data-caption");
		$('#img_wrapper').bind('click', function (event) {
			$('#popup').removeClass("opacityzero").css('left',event.pageX).css('top',event.pageY);
		});
	}

	var captionint = function() {
		$('#intro_wrapper').bind('click', function (event) {
			$('#intro_wrapper').hide();
			$('#title_wrapper').removeClass("noclick");
			$('#popup').removeClass("opacityzero");
			$('.img_wrapper_inner').removeClass('blur');
			$('#popup').css('left',event.pageX)
			$('#popup').css('top',event.pageY);
		});
	}

	var title = function(){
		$('#title_wrapper, .info_wrapper').bind('click', function (event) {
			$('#popup').toggleClass("opacityzero");
			$('.info_menu').toggleClass("opacityzero");
			$('.info_wrapper').toggleClass('hidden');
			$('.info_background').toggleClass('hidden');
			$('.img_wrapper_inner').toggleClass('blur');
			var text = $('#title_wrapper a').text();
		});
	}

	var info = function(){
		$('.headline').bind('click', function (event) {
			event.stopPropagation();
		    $(".info_imprint_inner").toggleClass('opacityzero');
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
			var first = $(".cycle-slide").first().children().first(); //Find first slide
	            first.attr( 'style', first.attr('data-style') ); //Load background image
	            first.removeAttr( 'data-style' ); //Clean up code
			var active = $(".cycle-slide-active").children().first(); //Find active slide
	            active.attr( 'style', active.attr('data-style') ); //Load background image
	            active.removeAttr( 'data-style' ); //Clean up code
	        var next = $(".cycle-slide-active").next().children().first(); //Find next slide
	            next.attr( 'style', next.attr('data-style') ); //Load background image
	            next.removeAttr( 'data-style' ); //Clean up code

	        $( '#img_wrapper' ).on( 'cycle-next', function( event, opts ) {
	        	var capt = $(".cycle-slide-active").children().first().attr("data-caption");
	        	$('#popup').text(capt);
	    		caption();
			});
	};

	//window load
	$(window).on('load', function() {
		captionint();
		title();
		info();
		slideit();
		caption();
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


