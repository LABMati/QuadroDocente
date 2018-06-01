<?php

$professor = $_GET["p"];
$campus = $_GET["c"];

if(!isset($_GET["p"]) || !isset($_GET["p"])){
    echo "alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')";
    die;
}

$dbh = include('pdo.php');

if($campus != "Todos os Campi") {
    $sth = $dbh->prepare
    ("SELECT pr.nome_professor, pr.email_professor, pr.lattes_professor, h.link_horario
        FROM professor AS pr
            INNER JOIN horario_professor AS hp
                ON pr.id_professor = hp.id_professor
                    INNER JOIN horario AS h
                        ON hp.id_horario = h.id_horario
                            INNER JOIN professor_campus AS pc
                                ON p.id_professor = pc.id_professor
                                    INNER JOIN campus AS c
                                        ON pc.id_campus = c.id_campus
                                            WHERE c.cidade_campus = ?
                                                AND pr.nome_professor LIKE ' ? ' ");

    $params = array($campus, "%$professor%");
    $sth->execute($params);
}else{
    $sth = $dbh->prepare
    ("SELECT p.nome_professor, p.email_professor, p.lattes_professor, h.link_horario
        FROM professor AS p
            INNER JOIN horario_professor AS hp
                ON p.id_professor = hp.id_professor
                    INNER JOIN horario AS h
                        ON hp.id_horario = h.id_horario
                            WHERE p.nome_professor LIKE '%:p%'");    
    $sth->execute([
        "p" => $professor
    ]);
}

$responses = $sth->fetchAll(PDO::FETCH_ASSOC);


if($responses==NULL){
    $responses = ["Sem sugestões"];
}

print_r(json_encode($responses));
