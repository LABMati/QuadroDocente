<?php
//connect to db
$connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_lab", "labmatii", 'u535468846_quad');
//use the send GET parameter
$search = $_GET["q"];
//query for the related names 
$query = mysqli_query($connect,
    "SELECT p.nome_professor, p.lattes_professor, p.email_professor from professor as p
        where p.nome_professor like '%$search%'
");
//create an array for all the query results
$responses =[];
$professor =[];
//add to array all the query results find
while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
    array_push($professor, $row['nome_professor']);
    array_push($professor, $row['email_professor']);
    array_push($professor, $row['lattes_professor']);
    array_push($responses, $professor);
    $professor = [];
}
if($responses==NULL){
    $responses = ["Sem sugestões"];
}
echo json_encode($responses);