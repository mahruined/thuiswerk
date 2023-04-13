<?php
date_default_timezone_set('Europe/Amsterdam');

$current_time = date('H:i');

if ($current_time >= '06:00' && $current_time < '12:00') {
  $greeting = 'Goedemorgen!';
  $background = 'morning.png';
} elseif ($current_time >= '12:00' && $current_time < '18:00') {
  $greeting = 'Goedemiddag!';
  $background = 'afternoon.png';
} elseif ($current_time >= '18:00' && $current_time < '00:00') {
  $greeting = 'Goedeavond!';
  $background = 'evening.png';
} else {
  $greeting = 'Goedenacht!';
  $background = 'night.png';
}

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Dynamische webpagina</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <style>
      body {
        background-image: url(<?php echo $background; ?>);
      }
    </style>
  </head>
