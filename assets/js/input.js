require("../less/main.less");

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

		// console.log(urls);
		// console.log(captions);
		// console.log(sizes);

		//Initialize Vue Slider
		var slider = new Vue({
		    el: '#img_wrapper',
		    data: {
		    	images: urls,
		    	size: sizes,
		    	capt: captions,
		        currentNumber: 0,
		    },
		    methods: {
		        next: function() {
		            this.currentNumber += 1
		        },
		        prev: function() {
		            this.currentNumber -= 1
		        }
		    }
		});
	});

});

//Old
(function($) {

	var example = function(){
	}

	//document ready
	$(document).ready(function(){


	});



	//on load
	$(window).load(function(){
		
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
