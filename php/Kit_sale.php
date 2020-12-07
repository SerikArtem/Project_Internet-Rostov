<?php

$name = $_POST[name];
$phone = $_POST[phone];
$install = $_POST[install];
$dop_kit = "";

if(empty($wifi) && empty($modem) && empty($install)){
    $dop_kit = "отсутствуют.";
}else{
    if(!empty($install)){
        $dop_kit .= "\n".$install;
    }
}

$message= "Заказ: комплект по АКЦИИ\nИмя клиента: ".$name."\nТелефон клиента: ".$phone."\nДоп. оборудование и услуги: ".$dop_kit;

mail('rnd-4g@yandex.ru', 'ЗАКАЗ С САЙТА', $message);

?>