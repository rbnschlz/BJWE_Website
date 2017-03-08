<?php snippet('header') ?>
<body>
<div id="intro_wrapper">
	<div class="white_bc"></div>
	<?php 
	if($page->files()->sortBy('sort', 'asc')->first()->type() == "image") {
		$block = "<div id='intro_wrapper_img' class='blur' style='background-image:url(";
		$block .= $page->files()->sortBy('sort', 'asc')->first()->resize(3000, 3000)->url();
		$block .= ")'></div>";
	} else if($page->files()->sortBy('sort', 'asc')->first()->type() == "video") {
		$block = "<video id='intro_wrapper_video' class='blur' src='";
		$block .= $page->files()->sortBy('sort', 'asc')->first()->url();
		$block .= "' autoplay loop muted playsinline type='video/mp4'></video>";
	}

	echo $block;
	?>
</div>


<div id="title_wrapper" class="noclick">
	<a>Benjamin Werner</a>
</div>

<span id="popup" class="opacityzero">
	<?php echo $page->files()->sortBy('sort', 'asc')->first()->caption(); ?>
</span>

<div id="img_wrapper">

	<div class="img_wrapper_inner">

	    <div class="control_next"></div>
	    <?php 
	   	$i = 0;
	    $images = $page->files()->sortBy('sort', 'asc');
	    foreach($images as $image) {
	    	if($image->hideslide() != "hidden") {
		    	$block = "<div class='img_slide'>";
		    	//Prev
		    	$prev  = $images->nth($i-1);
	    		if($prev && $image->keepprev() == "include") {
	    			if($prev->type() == "image") {
				    	$block .= "<div class='img_slide_inner";
				    	$block .= $prev->position() ? " {$prev->position()}" : "";
				    	$block .= $prev->sizing() ? " {$prev->sizing()}" : "";
				    	$block .= "' data-style='url(";
				    	$block .= $prev->resize(3000, 3000)->url();
				    	$block .= ")' data-caption='";
				    	$block .= $prev->caption();
				    	$block .= "'></div>";
			    	} else if ($prev->type() == "video") {
				    	$block .= "<video playsinline muted loop class='img_slide_inner prevvideo";
				    	$block .= $prev->position() ? " {$prev->position()}" : "";
				    	$block .= $prev->sizing() ? " {$prev->sizing()}" : "";
	  					$block .= "' data-src='";
	  					$block .= $prev->url();
						$block .= "' type='video/mp4'></video>";
				    };
			    };

		   		//Current
		   		if($image->type() == "image") {
			    	$block .= "<div class='img_slide_inner getcaption";
			    	$block .= $image->position() ? " {$image->position()}" : "";
			    	$block .= $image->sizing() ? " {$image->sizing()}" : "";
			    	$block .= $prev && $image->keepprev() == "include" ? "" : " single";
			    	$block .= "' data-style='url(";
			    	$block .= $image->resize(3000, 3000)->url();
			    	$block .= ")' data-caption='";
			    	$block .= $image->caption();
			    	$block .= "'></div>";
			    } else if ($image->type() == "video") {
			    	$block .= "<video playsinline muted loop class='img_slide_inner currvideo getcaption";
			    	$block .= $image->position() ? " {$image->position()}" : "";
			    	$block .= $image->sizing() ? " {$image->sizing()}" : "";
			    	$block .= $prev && $image->keepprev() == "include" ? "" : " single";
			    	$block .= "' data-caption='";
			    	$block .= $image->caption();
  					$block .= "' data-src='";
  					$block .= $image->url();
					$block .= "' type='video/mp4'></video>";
			    };

		    	$block .= "</div>";
		    	echo $block;
	    	}
	    	$i++;
	    }
		?>
	</div>
</div>

<div id="info_background" class="hidden">
	<div class="white_bc"></div>
	<?php 
	if($page->files()->sortBy('sort', 'asc')->first()->type() == "image") {
		$block = "<div id='info_background_img' class='blur' style='background-image:url(";
		$block .= $page->files()->sortBy('sort', 'asc')->first()->resize(3000, 3000)->url();
		$block .= ")'></div>";
	} else if($page->files()->sortBy('sort', 'asc')->first()->type() == "video") {
		$block = "<video id='info_background_video' class='blur' src='";
		$block .= $page->files()->sortBy('sort', 'asc')->first()->url();
		$block .= "' loop muted playsinline type='video/mp4'></video>";
	}

	echo $block;
	?>
</div>

<!-- SVG filter for Firefox  -->
<!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
    <filter id="blurry">
     	<feGaussianBlur stdDeviation="5"/>
    </filter>
    <filter id="drop-shadow">
	    <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
	    <feOffset dx="5" dy="5" result="offsetblur"/>
	    <feFlood flood-color="#000000"/>
	    <feComposite in2="offsetblur" operator="in"/>
	    <feMerge>
		    <feMergeNode/>
		    <feMergeNode in="SourceGraphic"/>
	    </feMerge>
	</filter>
</defs>
</svg>	 -->

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
				$block .= "<span>Represented";
				$block .= $agent->location()->isNotEmpty() ? " in {$agent->location()} by " : " by ";
				$block .= "<a href='";
				$block .= $agent->url();
				$block .= "' target='_blank'>";
				$block .= "<span class='nobr'>{$agent->name()}</span>";
				$block .= "</a></span>";
			}
			$block .= "</div>";

			echo $block;
			};
			if ($contact->instagram()->isNotEmpty()) { 
				$block = "<a class='headline' href='";
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
		</div>
	</div>
</div>

<?php snippet('footer') ?>