require("../less/main.less");

var caption = function(){
	$('body').bind('click', function (event) {
		$('#popup').css('left',event.pageX)
		$('#popup').css('top',event.pageY);  
		// $("#popup").css("position", "fixed");
	});
}

var captionint = function() {
	var spanwidth = $('#popup').outerWidth();
	var spanheight = $('#popup').outerHeight();
	var posx = (Math.random() * ($(document).width() - spanwidth));
	var posy = (Math.random() * ($(document).height() - spanheight));
		$('#popup').css('left',posx);
		$('#popup').css('top',posy);
		// $('#popup').css('display','inline');
}

$(window).on('load', function() {
	captionint();
}); 

//Slideshow
$(document).ready(function(){
	//Get JSON
	var imgarray = $.getJSON( "/api", function(images) {

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
		    },
		    
		    created: function () {
        		$('#popup').css('display','inline');
    		},

		    methods: {
		        next: function() {
		            this.currentNumber += 1
		        },
		        prev: function() {
		            this.currentNumber -= 1
		        }
		    }
		})
	});

	caption();
});

	//Test Slider
	// new Vue({
 //    el: '#image-slider',
 //    data: {
 //        images: ['http://i.imgur.com/vYdoAKu.jpg', 'http://i.imgur.com/PUD9HQL.jpg', 'http://i.imgur.com/Lfv18Sb.jpg', 'http://i.imgur.com/tmVJtna.jpg', 'http://i.imgur.com/ZfFAkWZ.jpg'],
 //        currentNumber: 0,
 //        timer: null
 //    },

 //    created: function () {
 //        this.startRotation();
 //    },

 //    methods: {
 //        startRotation: function() {
 //            this.timer = setInterval(this.next, 3000);
 //        },

 //        stopRotation: function() {
 //            clearTimeout(this.timer);
 //            this.timer = null;
 //        },

 //        next: function() {
 //            this.currentNumber += 1
 //        },
 //        prev: function() {
 //            this.currentNumber -= 1
 //        }
 //    }
	// });


//Old
(function($) {

	// var caption = function(){
	// 	$('body').bind('click', function (event) {
	// 		$('#popup').css('left',event.pageX);      // <<< use pageX and pageY
	// 		$('#popup').css('top',event.pageY);
	// 		$('#popup').css('display','inline');     
	// 		$("#popup").css("position", "absolute");  // <<< also make it absolute!
	// 	});
	// }

	//document ready
	$(document).ready(function(){


	});



	//on load
	// $(window).on('load', function() {
	// var spanwidth = ('#popup').outerWidth();
	// var spanheight = ('#popup').outerHidth();
	// var posx = (Math.random() * ($(document).width() - spanwidth)).toFixed();
	// var posy = (Math.random() * ($(document).height() - spanheight)).toFixed()
	// $('#popup').css('left',posx);
	// $('#popup').css('top',posy);
	// }; 

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
