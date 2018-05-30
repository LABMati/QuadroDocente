<?php
    $campus = $_GET['campusInfo'];
    //connect to db
    
    $connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_lab", "labmatii", 'u535468846_quad');

    $query = mysqli_query($connect, "SELECT cidade_campus, telefone_campus, site_campus FROM campus where id_campus=".$campus);

    if (!$query) {
       echo "Erro";
    }else{
        $row = mysqli_fetch_array($query, MYSQLI_ASSOC);
        $campus = [];
        $responses = [];
        $cidade = $row['cidade_campus'];
        $telefone = $row['telefone_campus'];
        $site = $row['site_campus'];
        array_push($campus, $cidade);
        array_push($campus, $telefone);
        array_push($campus, $site);
        array_push($responses, $campus);
        print_r(json_encode($responses));
    }

?>