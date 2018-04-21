<?php
//connect to db
$connect = mysqli_connect("mysql.hostinger.com.br", "u535468846_lab", "labmatii", 'u535468846_quad');

//use the send GET parameters
$professor = $_GET["p"];
$campus = $_GET["c"];

//query for the related names 

if($campus!="Todos os Campi"){
    $query = mysqli_query($connect,
        "SELECT p.nome_professor, p.lattes_professor, p.email_professor  FROM professor AS p
        INNER JOIN professor_campus AS pc
            ON p.id_professor = pc.id_professor
        INNER JOIN campus AS c
            ON pc.id_campus = c.id_campus 
        AND c.cidade_campus = '$campus'
        AND p.nome_professor LIKE '%$professor%     
    ");
}else{
    $query = mysqli_query($connect,
        "SELECT p.nome_professor, p.lattes_professor, p.email_professor  FROM professor AS p
        WHERE p.nome_professor LIKE '%$professor%     
    ");
}
//create an array for all the query results
$responses =[];
$professorList =[];
//add to array all the query results find
while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
    array_push($professorList, $row['nome_professor']);
    array_push($professorList, $row['email_professor']);
    array_push($professorList, $row['lattes_professor']);
    array_push($responses, $professorList);
    $professorList = [];
}
if($responses==NULL){
    $responses = "Sem sugestões";
    echo $responses;
}else{
    echo json_encode($responses);
}