<?php

//connect to db
$connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_lab", "labmatii", 'u535468846_quad');

$dbh = new PDO("mysql:host=mysql.hostinger.com.br;dbname=u535468846_quad", "u535468846_lab", "labmatii",
        [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8']
);

//use the send GET parameters
$professor = $_GET["p"];
$campus = $_GET["c"];

//query for the related names 
if($campus!="Todos os Campi"){
    $sth = $dbh->prepare(
        "SELECT p.nome_professor, p.email_professor, p.lattes_professor, h.link_horario FROM professor AS p
        INNER JOIN horario_professor as hp
            ON p.id_professor = hp.id_professor
        INNER JOIN horario as h
            ON hp.id_horario = h.id_horario
        INNER JOIN professor_campus AS pc
            ON p.id_professor = pc.id_professor
        INNER JOIN campus AS c
            ON pc.id_campus = c.id_campus 
        AND c.cidade_campus = ':cidade'
        AND p.nome_professor LIKE '%:professor%'");

    $sth->execute([
        "cidade" => $campus,
        "professor" => $professor
        ]
    );
}else{
    $sth = $dbh->prepare(
        "SELECT p.nome_professor, p.email_professor, p.lattes_professor, h.link_horario FROM professor AS p
        INNER JOIN horario_professor as hp
            ON p.id_professor = hp.id_professor
        INNER JOIN horario as h
            ON hp.id_horario = h.id_horario
        WHERE p.nome_professor LIKE '%:professor%'     
    ");
    $sth->execute(
        ["professor" => $professor]
    );
}

$sth = $sth->fetchAll(PDO::FETCH_ASSOC);
//create an array for all the query results
// $responses =[];
// $professor =[];
//add to array all the query results find
// while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
//     $email = $row['email_professor'];
//     $lattes = $row['lattes_professor'];
//     $nome = $row['nome_professor'];
//     $horario = $row['link_horario'];
//     array_push($professor, $nome);
//     array_push($professor, $email);
//     array_push($professor, $lattes);
//     array_push($professor, $horario);
//     array_push($responses, $professor);
//     $professor =[];
// }

if($sth==NULL){
    $sth = ["Sem sugestões"];
}

print_r(json_encode($sth));