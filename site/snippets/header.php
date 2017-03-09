<!DOCTYPE HTML>
<?php
$images = $page->images()->shuffle();
$img = $images->first()->url();
?>

<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title><?php echo html($site->title()) ?></title>

  <meta name="description" content="<?php echo html($site->description()) ?>" />
  <meta name="keywords" content="<?php echo html($site->keywords()) ?>" />
  <meta name="robots" content="index, follow" />
  <meta property="og:url" content="<?php echo html($site->url()) ?>/" />
  <meta property="og:description" content="<?php echo html($site->description()) ?>" />
  <meta property="og:image" content="<?php echo $img; ?>"" />
  <link rel="image_src" href="<?php echo $img; ?>" />

  <?php 
    echo css('assets/css/main.css');
  ?>
   
  <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png?v=5">
  <link rel="icon" type="image/png" href="assets/favicon/favicon-32x32.png?v=5" sizes="32x32">
  <link rel="icon" type="image/png" href="assets/favicon/favicon-16x16.png?v=5" sizes="16x16">
  <link rel="manifest" href="assets/favicon/manifest.json?v=5">
  <link rel="mask-icon" href="assets/favicon/safari-pinned-tab.svg?v=5" color="#ffffff">
  <link rel="shortcut icon" href="assets/favicon/favicon.ico?v=5">
  <meta name="msapplication-config" content="assets/favicon/browserconfig.xml?v=5">
  <meta name="theme-color" content="#ffffff">

</head>