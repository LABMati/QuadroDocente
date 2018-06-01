<?php
    return new PDO("mysql:host=mysql.hostinger.com.br;dbname=u535468846_quad", "u535468846_lab", "labmatii", [
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
    ]);
?>