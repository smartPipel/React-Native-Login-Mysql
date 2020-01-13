<?php

    include "config.php";

    $obj = json_decode(file_get_contents('php://input'), true);

    $nama = $obj['nama'];
    $no_telp = $obj['no_telp'];
    $alamat = $obj['alamat'];
    $email = $obj['email'];
    $password = $obj['password'];

    $sql_query = "INSERT INTO user_data ( nama, no_telp, alamat, email, password) VALUES ('$nama', '$no_telp', '$alamat', '$email', '$password')";

    if(mysqli_query($con,$sql_query)){
        $message = "Berhasil Register";

        // $messagejson = json_encode($message);

        echo $message;
    }else{
        echo mysqli_error($con);
    }


?>