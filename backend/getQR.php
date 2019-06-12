<?php 
function url(){
    // output: /myproject/index.php
    $currentPath = $_SERVER['PHP_SELF']; 

    // output: Array ( [dirname] => /myproject [basename] => index.php [extension] => php [filename] => index ) 
    $pathInfo = pathinfo($currentPath); 

    // output: localhost
    $hostName = $_SERVER['HTTP_HOST']; 

    // output: http://
    $protocol = strtolower(substr($_SERVER["SERVER_PROTOCOL"],0,5))=='https'?'https':'http';

    // return: http://localhost/myproject/
    return 'http%3A%2F%2F'.$hostName."%2F";
}

    $size = "300x300";
    $url = "\"https://chart.googleapis.com/chart?chs=" . $size . "&cht=qr&chl=" . url() . "%3ftable=" . $_GET["table"] . "&choe=UTF-8\"";
// echo $url;
?>
<html>
   <head>
      <meta name="viewport" content="width=device-width, minimum-scale=0.1">
      <title>chart (300×300)</title>
   </head>
   <body style="margin: 0px; background: #0e0e0e;"><img style="-webkit-user-select: none;" src=<?php echo $url; ?>></body>
</html>