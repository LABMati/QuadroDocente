<?php
    //connect to db
    $dbh = include("pdo.php");

    //get campus parameter
    $campus = $_GET['campusInfo'];

    //query for the campus info
    $sth = $dbh->prepare(
        "SELECT cidade_campus, telefone_campus, site_campus FROM campus WHERE id_campus = ?"
    );
    $params = array($campus);
    $test = $sth->execute($params);
    
    //test if error in query
    if(!$test){
        echo "alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')";
        die;
    }

    //add all query results to an array and return it
    $results = $sth->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);
