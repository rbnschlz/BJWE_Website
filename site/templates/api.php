<?php
header('Content-type: application/json; charset=utf-8');

	$data = $pages->find('home')->images()->sortBy('sort', 'asc');
	$json = array();

	foreach($data as $image) {
		// $json[] = (string)$image->url();
		$json[] = array(
    		'url'   => (string)$image->url(),
    		'caption' => (string)$image->caption(),
    		'sizing' => (string)$image->sizing(),
    		'position' => (string)$image->position(),
    		'keepprev' => (string)$image->keepprev(),
    		'bgcolor'  => (string)$image->bgcolor(),
    		'textcolor'  => (string)$image->textcolor(),
  		);
	}

	
	$json =  json_encode($json);
	$json = str_replace("\/", "/", $json);


	echo $json;
?>