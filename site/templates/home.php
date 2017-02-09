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

<div id="title_wrapper" class="toggleupdown"><a>
	<!-- <span class="donthidethis">B</span><span 
	class="hidethis">e</span><span 
	class="hidethis">n</span><span 
	class="hidethis">j</span><span 
	class="hidethis">a</span><span 
	class="hidethis">m</span><span 
	class="hidethis">i</span><span 
	class="hidethis">n</span><span 
	class="hidethis">&nbsp;</span><span 
	class="donthidethis">W</span><span 
	class="hidethis">e</span><span 
	class="hidethis">r</span><span 
	class="hidethis">n</span><span 
	class="hidethis">e</span><span 
	class="hidethis">r</span> -->
	BW
</a></div>

<div id="img_wrapper" class="blur">

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
<!-- 		    <div 
		    	v-if= "previmg[Math.abs(currentNumber) % images.length] == 'true'"
		    	class="img_slide_inner_2"
		    	:style="{ backgroundImage: 'url(' + images[Math.abs(currentNumber) % images.length -1] + ')' }"
		    	:class="[size[Math.abs(currentNumber) % images.length -1], pos[Math.abs(currentNumber) % images.length -1]]"
		    ></div> -->
	    </div>
	</transition-group>
</div>

<div class="info_wrapper hidden">
<!-- <a class="info_back toggleupdown">Go Back</a> -->
<div class="info_about">
	<span class="headline">About</span>
	<?php echo $contact->about()->kirbytext(); ?>
</div>
<div class="info_contact">
	<span class="headline">Contact</span><br>
	<span><a href="mailto:<?php echo $contact->mail(); ?>"><?php echo $contact->mail(); ?></a>, </span>
	<span><?php echo $contact->phone(); ?></span>
</div>
<div class="info_adress">
	<span><?php echo $contact->street(); ?>, </span>
	<span><?php echo $contact->city(); ?></span>
</div>
<div class="info_disclaimer">
	<span class="headline">Copyright</span><br>
	<p>All images and texts are copyrighted and owned by Benjamin Werner. Under no circumstances shall these digital files, 
	images, videos and texts be used, copied, displayed or pulled from this site without the expressed written agreement of Benjamin Werner.
	Benjamin Werner is not responsible for the content of any linked external website.</p>
	<?php echo $site->copyright()->kirbytext(); ?>
</div>
<div class="info_credits">
	<span class="headline">Credit</span>
	<span>Art Direction by <a href="http://www.offoffice.de" target="_blank">OFF OFFICE</a></span>
	<span>Design and Development by <a href="http://www.robinscholz.com" target="_blank">Robin Scholz</a></span>
	<!-- <span>Typeface by <a href="http://www.abcdinamo.com" target="_blank">Dinamo</a></span> -->
</div>
</div>






<?php snippet('footer') ?>