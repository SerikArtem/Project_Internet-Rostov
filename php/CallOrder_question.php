<?php
$name_client = $_POST[data_1];
$phone_client = $_POST[data_2];

$message= "Заказ: ВОПРОС У КЛИЕНТА\nИмя клиента: ".$name_client."\nТелефон клиента: ".$phone_client;
 
mail('rnd-4g@yandex.ru', 'ЗАКАЗ С САЙТА', $message);

?>