<?php snippet('header') ?>
<body>

<div id="intro_wrapper"></div>

<!-- <div id="title_wrapper_pseudo">
	<a>Benjamin Werner</a>
</div> -->

<div id="title_wrapper" class="noclick">
	<a>Benjamin Werner</a>
</div>

<div id="img_wrapper">
	<!-- <div 
		class="img_bg" 
		:style="{ background: bg[Math.abs(currentNumber) % images.length] }"
	></div> -->

	<span id="popup" class="opacityzero">
	<?php echo $page->images()->sortBy('sort', 'asc')->first()->caption(); ?>
	</span>

	<div class="img_wrapper_inner blur">

	    <a class="control_next"></a>

	    <?php foreach($page->images()->sortBy('sort', 'asc') as $image) {
	    	$block = "<div class='img_slide'";
	    	$block .= $image->bgcolor() ? " style='background: {$image->bgcolor()}'>" : ">";
	    	$block .= "<div class='img_slide_inner ";
	    	$block .= $image->sizing();
	    	$block .= "' data-style='background-image: url(";
	    	$block .= $image->url();
	    	$block .= ")' data-caption='";
	    	$block .= $image->caption();
	    	$block .= "'></div></div>";
	    	echo $block;
	    }

		?>
	</div>
</div>

<div class="info_background hidden"></div>
<div class="info_wrapper hidden">
	<div class="info_contact">
		<span><a href="mailto:<?php echo $contact->mail(); ?>"><?php echo $contact->mail(); ?></a>, </span>
		<span><?php echo $contact->phone(); ?></span>
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
				$block .= $agent->name();
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
			<p>All images and texts are copyrighted and owned by Benjamin Werner. Under no circumstances shall these digital files, 
			images, videos and texts be used, copied, displayed or pulled from this site without the expressed written agreement of Benjamin Werner.
			Benjamin Werner is not responsible for the content of any linked external website.</p>
			<span>Art Direction by <a href="http://www.offoffice.de" target="_blank">OFF</a></span>
			<span>Design and Development by <a href="http://www.robinscholz.com" target="_blank">Robin Scholz</a></span>
			<span>Typeface by <a href="http://www.abcdinamo.com" target="_blank">Dinamo</a></span>
			<?php echo $site->copyright()->kirbytext(); ?>
		</div>
	</div>
</div>

<?php snippet('footer') ?>