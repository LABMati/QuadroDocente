<?php

$professor = $_GET["p"];
$professor = "%$professor%";
$campus = $_GET["c"];

if(!isset($_GET["p"]) || !isset($_GET["p"])){
    echo "alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')";
    die;
}

$dbh = new PDO("mysql:host=mysql.hostinger.com.br;dbname=u535468846_quad", "u535468846_lab", "labmatii", [
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
]);

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
                                            WHERE c.cidade_campus = :camp
                                                AND pr.nome_professor LIKE"." '%$professor%' ");

    $sth->execute(["camp" => $campus]);






}else{
    $sth = $dbh->prepare
    ("SELECT p.nome_professor, p.email_professor, p.lattes_professor from professor where 1");
    // $sth->bindParam(1 , $professor);
    $sth->execute();
}

$responses = $sth->fetch(PDO::FETCH_ASSOC);

if(empty($responses)){
    $responses = ["Sem sugestões"];
}

print_r(json_encode($responses));
