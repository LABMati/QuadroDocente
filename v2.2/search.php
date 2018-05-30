<?php

//connect to db
$connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_lab", "labmatii", 'u535468846_quad');

//use the send GET parameters
$professor = $_GET["p"];
$campus = $_GET["c"];

//query for the related names
//get the professors with the user search and the chosen campus
if($campus!="Todos os Campi"){ //if there is some selected campus
    $query = mysqli_query($connect,
        "SELECT p.nome_professor FROM professor AS p
        INNER JOIN professor_campus AS pc
            ON p.id_professor = pc.id_professor
        INNER JOIN campus AS c
            ON pc.id_campus = c.id_campus 
        AND c.cidade_campus = '$campus'
        AND p.nome_professor LIKE '%$professor%'");
}else{ //if is "All Campus" selected
    $query = mysqli_query($connect,
        "SELECT p.nome_professor FROM professor AS p
        WHERE p.nome_professor LIKE '%$professor%'     
    ");
}
//create an array for all the query results
$responses =[];

//add to array all the query results find
while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
    $nome = $row['nome_professor'];
    array_push($responses, $nome);
}
//Add "No suggestion" if there's no query results
if($responses==NULL){
    $responses = ["Sem sugestões"];
}

//Send the results as a JSON array
echo json_encode($responses);
