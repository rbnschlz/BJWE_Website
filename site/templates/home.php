<?php snippet('header') ?>

<script src="https://unpkg.com/vue/dist/vue.js"></script>

<?php
// header('Content-type: application/json; charset=utf-8');

	// $data = $pages->find('home')->images();
	// $json = array();

	// foreach($data as $image) {
	// 	// $json[] = (string)$image->url();
	// 	$json[] = array(
 //    		'url'   => (string)$image->url(),
 //    		'caption' => (string)$image->caption(),
 //  		);
	// }

	
	// $json =  json_encode($json);
	// $json = str_replace("\/", "/", $json);


	// echo $json;
?>

<div id="img_wrapper">
    <a class="control_prev" @click="prev"></a><a class="control_next"  @click="next"></a>
    <div v-for="number in [currentNumber]">
		<img
			:src="images[Math.abs(currentNumber) % images.length]"
			:class="size[Math.abs(currentNumber) % images.length]"
		/>
		<!-- <imgslide></imgslide> -->
		<!-- <div>{{ capt[Math.abs(currentNumber) % images.length] }}</div> -->
    </div>
</div>

<!-- <div id="app-7">
  <ol>
    <imgslide-item v-for="item in images" v-bind:imgslide="item"></imgslide-item>
  </ol>
</div> -->

<?php snippet('footer') ?>