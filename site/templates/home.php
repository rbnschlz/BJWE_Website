<?php snippet('header') ?>
<body>

<script src="https://unpkg.com/vue/dist/vue.js"></script>

<?php
	// $data = $pages->find('home')->images()->sortBy('sort', 'asc');
	// $json = array();

	// foreach($data as $image) {
	// 	// $json[] = (string)$image->url();
	// 	$json[] = array(
 //    		'url'   => (string)$image->url(),
 //    		'caption' => (string)$image->caption(),
 //    		'sizing' => (string)$image->sizing(),
 //    		'position' => (string)$image->position(),
 //    		'keepprev' => (string)$image->keepprev(),
 //    		'bgcolor'  => (string)$image->bgcolor(),
 //  		);
	// }

	
	// $json =  json_encode($json);
	// $json = str_replace("\/", "/", $json);


	// echo $json;
?>


<div id="img_wrapper">
    <!-- <a class="control_prev" @click="prev"></a> -->
    <a class="control_next"  @click="next"></a>
    <span 
    		id="popup"
    		v-for="number in [currentNumber]" 
			v-bind:key="number"
    	>{{ capt[Math.abs(currentNumber) % images.length] }}</span>

    <transition-group name="fade" tag="div">
    	<div 
    		class="img_bg"
    		v-for="number in [currentNumber]" 
    		v-bind:key="number" 
    		:style="{ background: bg[Math.abs(currentNumber) % images.length] }"
    	></div>
    	<div 
    		class="img_slide"
    		v-for="number in [currentNumber]" 
		    v-bind:key="number" 
    	>
		    <div 
		    	class="img_slide_inner"
		    	:style="{ backgroundImage: 'url(' + images[Math.abs(currentNumber) % images.length] + ')' }"
		    	:class="[size[Math.abs(currentNumber) % images.length], pos[Math.abs(currentNumber) % images.length]]"
		    ></div>
		    <div 
		    	v-if= "previmg[Math.abs(currentNumber) % images.length] == 'true'"
		    	class="img_slide_inner_2"
		    	:style="{ backgroundImage: 'url(' + images[Math.abs(currentNumber) % images.length -1] + ')' }"
		    	:class="[size[Math.abs(currentNumber) % images.length -1], pos[Math.abs(currentNumber) % images.length -1]]"
		    ></div>
	    </div>
	</transition-group>

	<!-- Preloader -->
	<div 
    	class="img_slide_inner_2"
    	style="visibility: hidden"
    	:style="{ backgroundImage: 'url(' + images[Math.abs(currentNumber) % images.length -1] + ')' }"
    	:class="[size[Math.abs(currentNumber) % images.length +1], pos[Math.abs(currentNumber) % images.length +1]]"
    ></div>
</div>

<?php snippet('footer') ?>