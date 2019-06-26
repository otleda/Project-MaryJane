   <?php
//CONEXAO
require_once ('conexao.php');

//INICIANDO A SESSÃO
session_start();

if(isset($_POST['button-send'])){
   $name = mysqli_escape_string($connect, $_POST['name']);
   $email = mysqli_escape_string($connect, $_POST['email']);
   $tel = mysqli_escape_string($connect, $_POST['tel']);

   $error = false;

   // VALIDAÇÃO
   if(empty($name)){
        $_SESSION['mensage'] = "Por favor, o campo precisa ser preenchido com nome";
        header('Location: ../index.php#form');
        $error = true;
   }

   if(empty($email)){
         $_SESSION['mensage'] = "Por favor, o campo precisa ser preenchido com seu email";
        header('Location: ../index.php#form');
        $error = true;
   }

   if(empty($tel)){
         $_SESSION['mensage'] = "Por favor, o campo precisa ser preenchido com seu Telefone";
        header('Location: ../index.php#form');
        $error = true;
   }

   if($error === false){

      $sql = "INSERT INTO alunos (nome, email, tel) VALUES ('$name', '$email', '$tel')";

      if(mysqli_query($connect, $sql)){

         $_SESSION['mensage'] = "Enviado com Sucesso!, entraremos em contato !";
         header('Location: ../index.php#form');
      }else{
         $_SESSION['mensage'] = "Não foi possível enviar os dados, tente novamente !";
         header('Loaction: ../index.php#form');
      }
   }
}