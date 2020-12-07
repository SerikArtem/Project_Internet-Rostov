<?php

$name = $_POST[name];
$phone = $_POST[phone];
$wifi = $_POST[wifi];
$modem = $_POST[modem];
$install = $_POST[install];
$dop_kit = "";

if(empty($wifi) && empty($modem) && empty($install)){
    $dop_kit = "отсутствуют.";
}else{
    if(!empty($wifi)){
        $dop_kit .= "\n".$wifi;
    }
    if(!empty($modem)){
        $dop_kit .= "\n".$modem;
    }
    if(!empty($install)){
        $dop_kit .= "\n".$install;
    }
}

$message= "Заказ: комплект №1\nИмя клиента: ".$name."\nТелефон клиента: ".$phone."\nДоп. оборудование и услуги: ".$dop_kit;

mail('rnd-4g@yandex.ru', 'ЗАКАЗ С САЙТА', $message);

?>