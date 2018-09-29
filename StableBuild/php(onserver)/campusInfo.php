<?php
//connect to db
if($_SERVER['REQUEST_METHOD']!='GET') die('Erro');
$dbh = include("pdo.php");

//query for the campus info
$sth = $dbh->prepare(
    "SELECT cidade_campus, telefone_campus, site_campus FROM campus WHERE id_campus = ?"
);
$sth->bindParam(1,$_GET['campusInfo'],PDO::PARAM_INT);
$sth->execute();

if($sth->rowCount()==0){
    die('Erro');
}
//add all query results to an array and return it
$results = $sth->fetch(PDO::FETCH_ASSOC);
die(json_encode($results));