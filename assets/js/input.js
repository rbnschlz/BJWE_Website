require("../less/main.less");

var caption = function(){
	$('#img_wrapper').bind('click', function (event) {
		$('#popup').css('left',event.pageX)
		$('#popup').css('top',event.pageY);
	});
}

var title = function(){
	$('#title_wrapper, .info_wrapper').bind('click', function (event) {
		$('.info_wrapper').toggleClass('hidden');
		$('#img_wrapper').toggleClass('blur');
		$('#title_wrapper').toggleClass('whitetype');
		var text = $('#title_wrapper a').text();
	});
}

var info = function(){
	$('.info_menu a').bind('click', function (event) {
		event.stopPropagation();
	    var showthis = $(this).attr('data-target');
	    $(showthis).siblings().addClass('hidden');
		$(showthis).toggleClass('hidden');
	});	
	$('#title_wrapper').bind('mouseenter', function (event) {
		$(".hideme").addClass('hidden');
	});	
}

var captionint = function() {
	$('#popup').hide();
	// var spanwidth = $('#popup').outerWidth();
	// var spanheight = $('#popup').outerHeight();
	// var posx = (Math.random() * ($(document).width() - spanwidth));
	// var posy = (Math.random() * ($(document).height() - spanheight));
	// 	$('#popup').css('left',posx);
	// 	$('#popup').css('top',posy);

	$('#intro_wrapper').bind('click', function (event) {
		$('#intro_wrapper').hide();
		$('#img_wrapper').removeClass('blur');
		$('#popup').css('left',event.pageX)
		$('#popup').css('top',event.pageY);
	});
}

$(window).on('load', function() {
	captionint();
	title();
	info();
}); 

//Slideshow
$(document).ready(function(){
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

		//Convert Keep Prev to Array
		var bgcolors = images.map(function (el) {
	  		return el.bgcolor;
		});

	$.each(imgarray, function (index, value) {
  		console.log("yes");
	});
// Vue.component('slideshow', {
// 			template: '\
// 			<transition-group>\
// 			    	<div class="img_slide">\
// 					    <div class="img_slide_inner"\
// 					    	style="{ backgroundImage: url(this.url) }"\
// 					    ></div>\
// 				</div>\
// 			</transition-group>\
// 			',
// 			methods: {
// 			}
// 		});

		//Initialize Vue Slider
		var slider = new Vue({
		    el: '#img_wrapper',
		    data: {
		    	images: urls,
		    	size: sizes,
		    	pos: positions,
		    	capt: captions,
		    	bg: bgcolors,
		    	previmg: keepprevs,
		        currentNumber: 0,
		        nextNumber: 1,
		        currentCapt: '',
		        nextCapt: '',
		    },

		    created: function () {
		    	//Show Caption after it has loaded
        		$('#popup').css('display','inline');
    		},

		    methods: {
		        next: function(event) {
		        	//Move forward in array
		            this.currentNumber += 1;
		            this.nextNumber += 1;
		        },
		        prev: function() {
		        	//Move backward in array
		            this.currentNumber -= 1
		        },
		    },

		    updated: function () {
				Vue.set(slider, 'currentCapt', this.capt[Math.abs(this.currentNumber) % this.images.length])
				Vue.set(slider, 'nextCapt', this.capt[Math.abs(this.nextNumber) % this.images.length])

				if (1 < 2) {
					caption();
				}
				console.log(slider.currentCapt);
				console.log(slider.nextCapt);
    		},
		})
	});
});



















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
