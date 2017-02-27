<?php snippet('header') ?>
<body>
<div id="intro_wrapper">
	<div class="white_bc"></div>
	<div id="intro_wrapper_img" class="blur" style="background-image:url(<?php echo $page->images()->sortBy('sort', 'asc')->first()->resize(3000, 3000)->url() ?>)"></div>
</div>


<div id="title_wrapper" class="noclick">
	<a>Benjamin Werner</a>
	<!-- <span class="caption"></span> -->
</div>

<span id="popup" class="opacityzero">
	<?php echo $page->images()->sortBy('sort', 'asc')->first()->caption(); ?>
</span>

<div id="img_wrapper">

	<div class="img_wrapper_inner">

	    <div class="control_next"></div>
	    <!-- <div class="control_prev"></div> -->
	    <?php 
	   	$i = 0;
	    $images = $page->images()->sortBy('sort', 'asc');
	    foreach($images as $image) {
	    	if($image->hideslide() != "hidden") {
		    	$block = "<div class='img_slide'";
		    	// $block .= $image->bgcolor() ? " style='background-color: {$image->bgcolor()}'" : "";
		    	// $block .= $image->bgcolor() == "black" ? " data-color='black'" : "";
		    	// $block .= $image->overlaycolor() == "white" ? " data-ovcolor='white'" : "";
		    	$block .= ">";
		    	//Prev
		    	$prev  = $images->nth($i-1);
	    		if($prev && $image->keepprev() == "include") {
			    	$block .= "<div class='img_slide_inner";
			    	$block .= $prev->position() ? " {$prev->position()}" : "";
			    	$block .= $prev->sizing() ? " {$prev->sizing()}" : "";
			    	$block .= "' data-style='background-image: url(";
			    	$block .= $prev->resize(3000, 3000)->url();
			    	$block .= ")' data-caption='";
			    	$block .= $prev->caption();
			    	$block .= "'></div>";
			    };

		   		//Current
		    	$block .= "<div class='img_slide_inner getcaption";
		    	$block .= $image->position() ? " {$image->position()}" : "";
		    	$block .= $image->sizing() ? " {$image->sizing()}" : "";
		    	$block .= $prev && $image->keepprev() == "include" ? "" : " single";
		    	$block .= "' data-style='background-image: url(";
		    	$block .= $image->resize(3000, 3000)->url();
		    	$block .= ")' data-caption='";
		    	$block .= $image->caption();
		    	$block .= "'></div>";

		    	$block .= "</div>";
		    	echo $block;
	    	}
	    	$i++;
	    }
		?>
	</div>
</div>

<div class="info_background hidden">
	<div class="white_bc"></div>
	<div class="info_background_img blur" style="background-image:url(<?php echo $page->images()->sortBy('sort', 'asc')->first()->resize(3000, 3000)->url() ?>)"></div>
</div>
<div class="info_wrapper hidden">
	<div class="info_contact">
		<span><a href="mailto:<?php echo $contact->mail(); ?>"><?php echo $contact->mail(); ?></a>, </span>
		<span class="nobr"><a href="tel:<?php echo $contact->phone(); ?>"><?php echo $contact->phone(); ?></a></span>
		<div class="info_adress">
			<span><?php echo $contact->street(); ?>, </span>
			<span><?php echo $contact->city(); ?></span>
		</div>
		<?php if ($contact->represent()->isNotEmpty()) {
			$block = "<div class='info_represent'>";
			foreach($contact->represent()->toStructure() as $agent) {
				$block .= "<li>Represented";
				$block .= $agent->location()->isNotEmpty() ? " in {$agent->location()} by " : " by ";
				$block .= "<a href='";
				$block .= $agent->url();
				$block .= "' target='_blank'>";
				$block .= "<span class='nobr'>{$agent->name()}</span>";
				$block .= "</a></li>";
			}
			$block .= "</div>";

			echo $block;
			};
			if ($contact->instagram()->isNotEmpty()) { 
				$block = "<a href='";
				$block .= $contact->instagram()->html();
				$block .= "' target='_blank'>Instagram</a>";

				echo $block;
			} ?>
	</div>
	<div class="info_imprint">
		<a class="headline">Imprint</a>
		<div class="info_imprint_inner opacityzero">
			<p>All images and texts are copyrighted and owned by Benjamin Werner. Under no circumstances shall these digital files, images and videos be used, copied, displayed or pulled from this site without the expressed written agreement of Benjamin Werner.
			Benjamin Werner is not responsible for the content of any linked external website.</p>
			<span>Site by <a href="http://www.offoffice.de" target="_blank">OFF</a></span>
			<span>Johannes von Gross, Markus Lingemann</span>
			<span>Assistance and Development: <a href="http://www.robinscholz.com" target="_blank" class="nobr">Robin Scholz</a></span>
<!-- 			<span>Typeface by <a href="https://bold-decisions.biz/" target="_blank">Bold Decisions</a></span>
			<?php echo $site->copyright()->kirbytext(); ?> -->
		</div>
	</div>
</div>

<?php snippet('footer') ?>