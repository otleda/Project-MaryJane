<?php
//VARIAVEIS
$server_name ="localhost";
$user_name ="user";
$password_name ="";
$db_name ="contatos";

//CONEXAO COM A BASE DE DADOS
$connect = mysqli_connect($server_name, $user_name, $password_name, $db_name);
mysqli_set_charset($connect,"utf-8");
if(mysqli_connect_error()){
    echo "ERROR na conexao do banco: ".mysqli_connect_error();
}

?>