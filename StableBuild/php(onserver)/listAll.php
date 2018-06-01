<?php

//connect to db
$dbh = include('pdo.php');

//get GET parameter for campus
$campus = $_GET["c"];

//query for all the professors from the selected campus
$sth = $dbh->prepare(
    "SELECT pr.nome_professor, pr.email_professor, pr.lattes_professor, h.link_horario
        FROM professor AS pr
            INNER JOIN horario_professor AS hp
                ON pr.id_professor = hp.id_professor
                    INNER JOIN horario AS h
                        ON hp.id_horario = h.id_horario
                            INNER JOIN professor_campus AS pc
                                ON p.id_professor = pc.id_professor
                                    INNER JOIN campus AS c
                                        ON pc.id_campus = c.id_campus
                                            WHERE c.cidade_campus = ?"
);
$params = array($campus);
$test = $sth->execute($params);


if(!$test){
    echo "alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')";
    die;
}

//add to array all the query results found
$responses = $sth->fetchAll(PDO::FETCH_ASSOC);

//add "No suggestion" if there's no professor submited 
if(empty($responses)){
    $responses = ["Sem sugestões"];
}

//return query results
echo json_encode($responses);