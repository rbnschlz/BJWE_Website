require("../less/main.less");

var caption = function(){
	$('#img_wrapper').bind('click', function (event) {
		$('#popup').removeClass("opacityzero");
		$('#popup').css('left',event.pageX)
		$('#popup').css('top',event.pageY);
	});
}

var captionint = function() {
	$('#intro_wrapper').bind('click', function (event) {
		$('#intro_wrapper').hide();
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
		$('.img_wrapper_inner').toggleClass('blur');
		$('#title_wrapper').toggleClass('whitetype');
		var text = $('#title_wrapper a').text();
	});
}

var info = function(){
	$('.headline').bind('click', function (event) {
		event.stopPropagation();
	    $(".info_imprint_inner").toggleClass('opacityzero');
	});	
}

$(window).on('load', function() {
	captionint();
	title();
	info();
}); 

//Slideshow
$(document).ready(function(){
	$('#popup').hide();
	//Get JSON
	var imgarray = $.getJSON( "api", function(images) {

		//Convert URLs to Array
	    var urls = images.map(function (el) {
	  		return el.url;
		});

		//Convert Captions to Array
		var captions = images.map(function (el) {
	  		return el.caption;
		});

		//Convert Sizing to Array
		var sizes = images.map(function (el) {
	  		return el.sizing;
		});

		//Convert Positions to Array
		var positions = images.map(function (el) {
	  		return el.position;
		});

		//Convert Keep Prev to Array
		var keepprevs = images.map(function (el) {
	  		return el.keepprev;
		});

		//Convert Background Color to Array
		var bgcolors = images.map(function (el) {
	  		return el.bgcolor;
		});

		//Convert Caption Color to Array
		var textcolors = images.map(function (el) {
	  		return el.textcolor;
		});

		//Initialize Vue Slider
		var slider = new Vue({
		    el: '#img_wrapper',
		    data: {
		    	images: urls,
		    	size: sizes,
		    	pos: positions,
		    	capt: captions,
		    	bg: bgcolors,
		    	col: textcolors,
		    	previmg: keepprevs,
		        currentNumber: 0,
		    },

		    created: function () {
		    	//Show Caption after it has loaded
        		$('#popup').css('display','inline');
    		},

		    methods: {
		        next: function(event) {
		        	//Move forward in array
		            this.currentNumber += 1;

		        },
		        prev: function() {
		        	//Move backward in array
		            this.currentNumber -= 1
		        },
		    },

		    beforeUpdate: function() {
		    },

		    updated: function () {
				caption();
				console.log(slider.currentCapt);
				console.log(slider.nextCapt);
    		},
		})
	});
});







	// var spanwidth = $('#popup').outerWidth();
	// var spanheight = $('#popup').outerHeight();
	// var posx = (Math.random() * ($(document).width() - spanwidth));
	// var posy = (Math.random() * ($(document).height() - spanheight));
	// 	$('#popup').css('left',posx);
	// 	$('#popup').css('top',posy);
















//Old
(function($) {

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
