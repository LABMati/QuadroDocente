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
//add to array all the query results find
while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
    $nome = $row['nome_professor'];
    array_push($responses, $nome);
}
if($responses==NULL){
    $responses = ["Sem sugestões"];
}
echo json_encode($responses);