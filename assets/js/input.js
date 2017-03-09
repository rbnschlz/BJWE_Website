require("../less/main.less");
require("../js/plugins.js");

//Preloader
var mediaload = function() {
	var next = $(".cycle-slide-active").next().children();
	var prev = $(".cycle-slide-active").prev().children();
	var first = $(".cycle-slide").first().children();
	var last = $(".cycle-slide").last().children();
	next.each(function() {
		source = $(this);
		if($(this).is("video") && !(this).hasAttribute("src")){
			source.attr( 'src', source.attr('data-src'));
		} else {
			source.css('background-image', source.attr('data-style'));
		};
	});
	prev.each(function() {
		source = $(this);
		if($(this).is("video") && !(this).hasAttribute("src")){
			source.attr( 'src', source.attr('data-src'));
		} else {
			source.css('background-image', source.attr('data-style'));
		};
	});
	first.each(function() {
		source = $(this);
		if($(this).is("video") && !(this).hasAttribute("src")){
			source.attr( 'src', source.attr('data-src'));
		} else {
			source.css('background-image', source.attr('data-style'));
		};
	});
	last.each(function() {
		source = $(this);
		if($(this).is("video") && !(this).hasAttribute("src")){
			source.attr( 'src', source.attr('data-src'));
		} else {
			source.css('background-image', source.attr('data-style'));
		};
	});
};

//Video Play
function playme () {
	video = $(".cycle-slide-active").find("video").get(0);
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

//White Info Text
var white = function() {
	if($(".cycle-slide-active").attr("data-color") == "white") {
		$(".info_wrapper, #title_wrapper").toggleClass("white");
	}
}

//Caption Position
function clickclickclick (event) {
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
	var img = $(".cycle-slide-active").children(".capt");
	var imgurl = img.attr('data-style');
	var vidurl = img.attr('src');
	var vidposter = img.attr('poster');
	var structurevid = "<video loop muted playsinline id='info_background_video' class='blur' src='" + vidurl + "' type='video/mp4' poster='" + vidposter + "'></video>"
	var structureimg = "<div id='info_background_img' class='blur' style='background-image:" + imgurl + "'></div>"

	if($(".cycle-slide-active").children("video").length) {
		$('#info_background_img, #info_background_video').replaceWith(structurevid);
	} else {
		$('#info_background_img, #info_background_video').replaceWith(structureimg);
	};
}

//iOS Fix
var iosHeight = function(){
	var height = $(window).height();
	if($(window).width() < 600){
		$('.left.small, .right.small, .left.large, .right.large, .left.full, .right.full').css("height", height/2 - 40 + "px");
		$('.left.single, .right.single, .center.large, .center.small').css("height", height - 60 + "px");
		if($(window).width() < $(window).height()) {
			$('video').css("height", "auto");
		}
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
		$('#title_wrapper, .info_wrapper').toggleClass('scroll');
		$('#popup').toggleClass("opacityzero");
		$('.info_wrapper').toggleClass('hidden');
		$('#info_background').toggleClass('hidden');
		playmetoo();
		white();
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
			log: false,
		});

        //Next Callback
        $( '.img_wrapper_inner' ).on( 'cycle-next', function( event, opts ) {
        	var capt = $(".cycle-slide-active").children(".capt").attr("data-caption");
        	$('#popup').text(capt);
        	changeme();
        	mediaload();
		});

		//Prev Callback
		$( '.img_wrapper_inner' ).on( 'cycle-prev', function( event, opts ) {
        	var capt = $(".cycle-slide-active").children(".capt").attr("data-caption");
        	$('#popup').text(capt);
        	changeme();
        	mediaload();
		});

		//Before Callback
		$( '.img_wrapper_inner' ).on( 'cycle-before', function( event, opts ) {
        	video = $(".cycle-slide-active").find("video").get(0);
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
	mediaload();
	$("body").on('swipeleft',  function(){
		if($("#intro_wrapper").hasClass("hidden") && $(".info_wrapper").hasClass("hidden")) {
			$(".img_wrapper_inner").cycle("next");
			playme();
		}
	});

	$("body").on('swiperight',  function(){
		if($("#intro_wrapper").hasClass("hidden") && $(".info_wrapper").hasClass("hidden")) {
			$(".img_wrapper_inner").cycle("prev");
			playme();
		}
	});
}); 

//keypresses
$(document).keydown(function(event) {
    switch(event.which) {
        case 37: // left
        if($("#intro_wrapper").hasClass("hidden") && $(".info_wrapper").hasClass("hidden")) {
        	$('.img_wrapper_inner').cycle('prev');
        	playme();
        }
        break;

        case 39: // right
        if($("#intro_wrapper").hasClass("hidden") && $(".info_wrapper").hasClass("hidden")) {
        	$('.img_wrapper_inner').cycle('next');
        	playme();
        }
        break;

        case 32: // spacebar
        if($("#intro_wrapper").hasClass("hidden")) {
	        $('#popup').toggleClass("opacityzero");
			$('.info_wrapper').toggleClass('hidden');
			$('#info_background').toggleClass('hidden');
		}
		break;

        default: return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
});


