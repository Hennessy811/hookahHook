<?php
function file_get_contents_curl($url) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_HEADER, 0);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_URL, $url);
  $data = curl_exec($ch);
  curl_close($ch);
  return $data;
}

$staff = $_POST["staff"] ? $_POST["staff"]: "Ошибка";
$table = $_POST["table"] ? $_POST["table"]: "Ошибка";
$message = $staff . " вызывают за " . $table . " столик";
$chanel = "KultHookah";

$data = file_get_contents_curl(	"https://api.telegram.org/bot861344973:AAFgXuXeiWsiRBLLncZ6gU2sgVp-9YM6FTI/sendMessage?chat_type=private&chat_id=@" . $chanel . "&text=" . $message . "&disable_web_page_preview=false&disable_notification=false");

print_r($data);