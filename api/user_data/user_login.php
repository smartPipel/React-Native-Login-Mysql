<?php

include 'config.php';

$obj = json_decode(file_get_contents("php://input"), true);

$email = $obj['email'];
$password = $obj['password'];


$query = "SELECT id_user,nama,no_telp,alamat FROM user_data WHERE email = '$email' AND password = '$password'";

$cek = mysqli_query($con, $query);

if(isset($cek)){
    $user = json_encode(mysqli_fetch_assoc($cek));
    echo '{"status": "succes", "user": '.$user.'}';
}else{
    echo '{"status": "failure"}';
}


?>