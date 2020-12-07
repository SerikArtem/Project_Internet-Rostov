//Функция распределения модальных окон
function Distribute_modal(mod_window){
    $("#ModKit_cont").append('<div id="ModButt_kit" class="ModButt" onclick='+mod_window+'();>Заказать комплект</div>');
}

function Distribute_modalA(mod_window){
    $("#ModKit_cont2").append('<div id="ModButt_kit" class="ModButt" onclick='+mod_window+'();>Заказать комплект</div>');
}



//Функции отправки форм
function Test_Speed(){
            var data_1 = $("#MName1").val();
            var data_2 = $("#MPhone1").val();
            var status = 0;
            
            $("#MName1").css('background-color', '#ffffff');        
            $("#MPhone1").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $("#MName1").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $("#MPhone1").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Test_Speed.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                $("#MName1").val('');
                $("#MPhone1").val('');
                $("#StartLink_mod").click();
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                $("#order_test_speed").click();
            }
		}

function Test_Speed_Mob(){
            var data_1 = $("#MName2").val();
            var data_2 = $("#MPhone2").val();
            var status = 0;
            
            $("#MName2").css('background-color', '#ffffff');        
            $("#MPhone2").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $("#MName2").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $("#MPhone2").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Test_Speed.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                $("#MName2").val('');
                $("#MPhone2").val('');
                $("#StartLink_mod").click();
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                $("#order_ts_mob").click();
            }
		}
            
function CallOrder_header(){
            var data_1 = $(".Mod2_Name").val();
            var data_2 = $(".Mod2_Phone").val();
            var status = 0;
            
            $(".Mod2_Name").css('background-color', '#ffffff');        
            $(".Mod2_Phone").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod2_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod2_Phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/CallOrder_header.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                //Очистка всех полей
                $(".Mod2_Name").val('');
                $(".Mod2_Phone").val('');
                //Показываем информацию в модальном окне
                $("#send_header").css("display","none");
                $(".M2_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".M2_info").css("display","none"); $("#send_header").css("display","block");', 2200);
                $("#order_call_header").click();
            }
        }
        
function CallOrder_question(){
            var data_1 = $(".F2_name").val();
            var data_2 = $(".F2_phone").val();
            var status = 0; 
            
            $(".F2_name").css('background-color', '#ffffff');        
            $(".F2_phone").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".F2_name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".F2_phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/CallOrder_question.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                $(".F2_name").val('');
                $(".F2_phone").val('');
                $("#StartLink_mod").click();
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                $("#form_before_results").click();
            }
        }  
        
function WantThis_result(){
            var data_1 = $(".Mod3_Name").val();
            var data_2 = $(".Mod3_Phone").val();
            var status = 0;
            
            $(".Mod3_Name").css('background-color', '#ffffff');        
            $(".Mod3_Phone").css('background-color', '#ffffff');
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod3_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod3_Phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/WantThis_result.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                //Очистка всех полей
                $(".Mod3_Name").val('');
                $(".Mod3_Phone").val('');
                //Показываем информацию в модальном окне
                $("#send_result").css("display","none");
                $(".M3_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".M3_info").css("display","none"); $("#send_result").css("display","block");', 2200);
                $("#want_this_result").click();
            }
        }
        
function WantThis_res_form(){
            var data_1 = $(".F3_name").val();
            var data_2 = $(".F3_phone").val();
            var status = 0; 
            
            $(".F3_name").css('background-color', '#ffffff');        
            $(".F3_phone").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".F3_name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".F3_phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/WantThis_res_form.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                $(".F3_name").val('');
                $(".F3_phone").val('');
                $("#StartLink_mod").click();
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                $("#form_after_result").click();
            }
        }
        
function CallOrder_reviews(){
            var data_1 = $(".F4_name").val();
            var data_2 = $(".F4_phone").val();
            var status = 0; 
            
            $(".F4_name").css('background-color', '#ffffff');        
            $(".F4_phone").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".F4_name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".F4_phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/CallOrder_reviews.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                $(".F4_name").val('');
                $(".F4_phone").val('');
                $("#StartLink_mod").click();
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                $("#form_after_reviews").click();
            }
        }

function WantOrder_cons(){
            var data_1 = $(".F6_name").val();
            var data_2 = $(".F6_phone").val();
            var status = 0; 
            
            $(".F6_name").css('background-color', '#ffffff');        
            $(".F6_phone").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".F6_name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".F6_phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/WantOrder_cons.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                $(".F6_name").val('');
                $(".F6_phone").val('');
                $("#StartLink_mod").click();
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                $("#form_after_catalog").click();
            }
        }
        
function MainFORM(){
            var data_1 = $(".F5_name").val();
            var data_2 = $(".F5_phone").val();
            var status = 0; 
            
            $(".F5_name").css('background-color', '#ffffff');        
            $(".F5_phone").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".F5_name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".F5_phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/MainFORM.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                $(".F5_name").val('');
                $(".F5_phone").val('');
                $("#StartLink_mod").click();
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                $("#main_form_funnel").click();
            }
        }
        
function CallOrder_footer(){
            var data_1 = $(".Mod4_Name").val();
            var data_2 = $(".Mod4_Phone").val();
            var status = 0;
            
            $(".Mod4_Name").css('background-color', '#ffffff');        
            $(".Mod4_Phone").css('background-color', '#ffffff');
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod4_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod4_Phone").css('background-color', '#f89898');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/CallOrder_footer.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                //Очистка всех полей
                $(".Mod4_Name").val('');
                $(".Mod4_Phone").val('');
                //Показываем информацию в модальном окне
                $("#send_footer").css("display","none");
                $(".M4_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".M4_info").css("display","none"); $("#send_footer").css("display","block");', 2200);
                $("#order_call_footer").click();
            }
        }

function Kit_sale(){
            var data_1 = $(".Mod6_Name").val();
            var data_2 = $(".Mod6_Phone").val();
            var status = 0;
            
            $(".Mod6_Name").css('background-color', '#ffffff');        
            $(".Mod6_Phone").css('background-color', '#ffffff');
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod6_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod6_Phone").css('background-color', '#f89898');
                }
            }
            else{
                var form_data = $("#send_kitA").serialize();
                $.ajax({
                    type: "POST",
                    url: "php/Kit_sale.php",
                    data: form_data
                });
                
                //Очистка всех полей
                $(".Mod6_Name").val('');
                $(".Mod6_Phone").val('');
                $("#ModKit_cont2 input:checkbox").removeAttr("checked");
                //Удаляем динамически созданную кнопку "Заказать комплект"
                $("#ModButt_kit").remove();
                //Показываем информацию в модальном окне
                $("#send_kitA").css("display","none");
                $(".Cat_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".Cat_info").css("display","none"); $("#send_kitA").css("display","block");', 2200);
                $("#order_kit_action").click();
            }
        }

function Kit_1(){
            var data_1 = $(".Mod5_Name").val();
            var data_2 = $(".Mod5_Phone").val();
            var status = 0;
            
            $(".Mod5_Name").css('background-color', '#ffffff');        
            $(".Mod5_Phone").css('background-color', '#ffffff');
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod5_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod5_Phone").css('background-color', '#f89898');
                }
            }
            else{
                var form_data = $("#send_kit").serialize();
                $.ajax({
                    type: "POST",
                    url: "php/Kit_1.php",
                    data: form_data
                });
                
                //Очистка всех полей
                $(".Mod5_Name").val('');
                $(".Mod5_Phone").val('');
                $("#ModKit_cont input:checkbox").removeAttr("checked");
                //Удаляем динамически созданную кнопку "Заказать комплект"
                $("#ModButt_kit").remove();
                //Показываем информацию в модальном окне
                $("#send_kit").css("display","none");
                $(".Cat_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".Cat_info").css("display","none"); $("#send_kit").css("display","block");', 2200);
                $("#order_kit").click();
            }
        }

function Kit_2(){
            var data_1 = $(".Mod5_Name").val();
            var data_2 = $(".Mod5_Phone").val();
            var status = 0;
            
            $(".Mod5_Name").css('background-color', '#ffffff');        
            $(".Mod5_Phone").css('background-color', '#ffffff');
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod5_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod5_Phone").css('background-color', '#f89898');
                }
            }
            else{
                var form_data = $("#send_kit").serialize();
                $.ajax({
                    type: "POST",
                    url: "php/Kit_2.php",
                    data: form_data
                });
                
                //Очистка всех полей
                $(".Mod5_Name").val('');
                $(".Mod5_Phone").val('');
                $("#ModKit_cont input:checkbox").removeAttr("checked");
                //Удаляем динамически созданную кнопку "Заказать комплект"
                $("#ModButt_kit").remove();
                //Показываем информацию в модальном окне
                $("#send_kit").css("display","none");
                $(".Cat_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".Cat_info").css("display","none"); $("#send_kit").css("display","block");', 2200);
                $("#order_kit").click();
            }
        }

function Kit_3(){
            var data_1 = $(".Mod5_Name").val();
            var data_2 = $(".Mod5_Phone").val();
            var status = 0;
            
            $(".Mod5_Name").css('background-color', '#ffffff');        
            $(".Mod5_Phone").css('background-color', '#ffffff');
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod5_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod5_Phone").css('background-color', '#f89898');
                }
            }
            else{
                var form_data = $("#send_kit").serialize();
                $.ajax({
                    type: "POST",
                    url: "php/Kit_3.php",
                    data: form_data
                });
                
                //Очистка всех полей
                $(".Mod5_Name").val('');
                $(".Mod5_Phone").val('');
                $("#ModKit_cont input:checkbox").removeAttr("checked");
                //Удаляем динамически созданную кнопку "Заказать комплект"
                $("#ModButt_kit").remove();
                //Показываем информацию в модальном окне
                $("#send_kit").css("display","none");
                $(".Cat_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".Cat_info").css("display","none"); $("#send_kit").css("display","block");', 2200);
                $("#order_kit").click();
            }
        }

function Kit_4(){
            var data_1 = $(".Mod5_Name").val();
            var data_2 = $(".Mod5_Phone").val();
            var status = 0;
            
            $(".Mod5_Name").css('background-color', '#ffffff');        
            $(".Mod5_Phone").css('background-color', '#ffffff');
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            if(status == 1){
                if(data_1 == ""){
                    $(".Mod5_Name").css('background-color', '#f89898');
                }
                if (data_2 == ""){
                    $(".Mod5_Phone").css('background-color', '#f89898');
                }
            }
            else{
                var form_data = $("#send_kit").serialize();
                $.ajax({
                    type: "POST",
                    url: "php/Kit_4.php",
                    data: form_data
                });
                
                //Очистка всех полей
                $(".Mod5_Name").val('');
                $(".Mod5_Phone").val('');
                $("#ModKit_cont input:checkbox").removeAttr("checked");
                //Удаляем динамически созданную кнопку "Заказать комплект"
                $("#ModButt_kit").remove();
                //Показываем информацию в модальном окне
                $("#send_kit").css("display","none");
                $(".Cat_info").css("display","block");
                //Закрывает модальное окно через 2 сек.
                setTimeout('$(".modal_close").click();', 2000);
                //Через 2,2 сек. скрываем информацию и показываем форму
                setTimeout('$(".Cat_info").css("display","none"); $("#send_kit").css("display","block");', 2200);
                $("#order_kit").click();
            }
        }






