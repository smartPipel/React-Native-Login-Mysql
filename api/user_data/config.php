<?php

    define("DB_HOST", "localhost"); //host
    define("DB_USER", "root");  //user xampp
    define("DB_PASSWORD", ""); 
    define("DB_DATABASE", "react_test");


    $con = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    if (!$con) {
        die("tidak dapat terhubung ke database");
    }

?>