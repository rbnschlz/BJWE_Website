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
	                img.css("background-image", img.attr('data-style'));
	            });
	        }
	    });
	});

	var videoload = function() {
		var next = $(".cycle-slide-active").next().children().first();
    	if(next.is("video")) {
        	next.attr( 'src', next.attr('data-src'));
    	}
    	next = $(".cycle-slide-active").next().children().eq(1);
    	if(next.is("video")) {
        	next.attr( 'src', next.attr('data-src'));
    	}
    	var prev = $(".cycle-slide-active").prev().children().first();
    	if(prev.is("video")) {
        	prev.attr( 'src', prev.attr('data-src'));
    	}
    	prev = $(".cycle-slide-active").prev().children().eq(1);
    	if(prev.is("video")) {
        	prev.attr( 'src', prev.attr('data-src'));
    	}
    	var first = $(".cycle-slide").first().children().first();
    	if(first.is("video")) {
        	first.attr( 'src', first.attr('data-src'));
    	}
    	first = $(".cycle-slide").first().children().eq(1);
    	if(first.is("video")) {
        	first.attr( 'src', first.attr('data-src'));
    	}
	};

	//Video Play
	function playme () {
		if($(".cycle-slide-active").find("video").length) {
			var video = $(".cycle-slide-active").find("video").get(0);
				video.play();
		};
	}

	function playmetoo () {
		if($("#info_background").find("video").length) {
			var video = $("#info_background").find("video").get(0);
			if (!video.paused) {
				video.pause();
				var video2 = $(".cycle-slide-active").find("video").get(0);
				video2.play();
			}  else {
				video.play();
			}
		};
	}

	//Caption Position
	function clickclickclick (event) {
		var capt = $(".getcaption").attr("data-caption");
		var width = $(window).width();
		var popwidth = $('#popup').outerWidth();
		var x = event.pageX;
		if(width - x < popwidth + 50) {
			var x = x - popwidth - 20;
		}
		var y = event.pageY;
		$('#popup').removeClass("opacityzero").css('left', x).css('top', y);
	}

	var caption = function(){
		$('#img_wrapper').bind('click', function (event) {
			clickclickclick(event);	
			playme();
		});
	}

	//Info Background
	function changeme () {
		var img = $(".cycle-slide-active").children(".getcaption");
		var imgurl = img.attr('data-style');
		var vidurl = img.attr('src');
		var structurevid = "<video loop muted playsinline id='info_background_video' class='blur' src='" + vidurl + "' type='video/mp4'></video>"
		var structureimg = "<div id='info_background_img' class='blur' style='background-image:" + imgurl + "'></div>"

		if($(".cycle-slide-active").find(".currvideo").length) {
			$('#info_background_img, #info_background_video').replaceWith(structurevid);
			// $('#info_background_video').play();
		} else {
			$('#info_background_img, #info_background_video').replaceWith(structureimg);
		};
	}

	//iOS Fix
	var iosHeight = function(){
		var height = $(window).height();
		if($(window).width() < 500){
			$('.left.small, .right.small, .left.large, .right.large, .left.full, .right.full').css("height", height/2 - 40 + "px");
			$('.left.single, .right.single, .center.large, .center.small').css("height", height - 60 + "px");
			console.log("heights");
		}
	}

	//Intro
	var captionint = function() {
		$('#intro_wrapper').bind('click', function (event) {
			clickclickclick(event);	
			$('#intro_wrapper').addClass("hidden").hide();
			$('#title_wrapper').removeClass("noclick");
		 	playme();
		});
	}

	//Info Popup
	var title = function(){
		$('#title_wrapper, .info_wrapper').bind('click', function (event) {
			$('#popup').toggleClass("opacityzero");
			$('.info_wrapper').toggleClass('hidden');
			$('#info_background').toggleClass('hidden');
			playmetoo();
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
				swipe: false,
			});

			//Load First Images
			var first = $(".cycle-slide").first().children().first();
	            first.css('background-image', first.attr('data-style'));
	            first = $(".cycle-slide").first().children().eq(1);
	            first.css( 'background-image', first.attr('data-style'));
	        var last = $(".cycle-slide").last().children().last();
	            last.css( 'background-image', last.attr('data-style'));
	            last = $(".cycle-slide").last().children().eq(1);
	            last.css( 'background-image', last.attr('data-style'));
	       	var next = $(".cycle-slide-active").next().children().first();
	            next.css( 'background-image', next.attr('data-style'));
	        var next = $(".cycle-slide-active").next().children().eq(1);
	            next.css( 'background-image', next.attr('data-style'));

	        //Next Callback
	        $( '#img_wrapper' ).on( 'cycle-next', function( event, opts ) {
	        	var capt = $(".cycle-slide-active").children(".getcaption").attr("data-caption");
	        	$('#popup').text(capt);
	        	changeme();
	        	videoload();
			});

			//Prev Callback
			$( '#img_wrapper' ).on( 'cycle-prev', function( event, opts ) {
	        	var capt = $(".cycle-slide-active").children(".getcaption").attr("data-caption");
	        	$('#popup').text(capt);
	        	changeme();
	        	videoload();
			});

			$( '#img_wrapper' ).on( 'cycle-before', function( event, opts ) {
				if($(".cycle-slide-active").find("video").length) {
					var video = $(".cycle-slide-active").find("video").get(0);
					video.pause();
				};
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
		videoload();
	}); 

	//keypresses
	$(document).keydown(function(event) {
	    switch(event.which) {
	        case 37: // left
	        if($("#intro_wrapper").hasClass("hidden")) {
	        	$('.img_wrapper_inner').cycle('prev');
	        }
	        break;

	        case 39: // right
	        if($("#intro_wrapper").hasClass("hidden")) {
	        	$('.img_wrapper_inner').cycle('next');
	        }
	        break;

	        case 32: // spacebar
	        if($("#intro_wrapper").hasClass("hidden")) {
		        $('#popup').toggleClass("opacityzero");
				$('.info_wrapper').toggleClass('hidden');
				$('#info_background').toggleClass('hidden');
			}

	        default: return; // exit this handler for other keys
	    }
	    event.preventDefault(); // prevent the default action (scroll / move caret)
	});


})(jQuery);


