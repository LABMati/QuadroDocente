<?php

$professor = $_GET["p"];
$campus = $_GET["c"];

if(!isset($_GET["c"]) || !isset($_GET["p"])){
    echo "alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')";
    die;
}

$dsn = 'mysql:host=mysql.hostinger.com.br;dbname=u535468846_quad;';
$user = 'u535468846_lab';
$password = 'labmatii';

try {
    $dbh = new PDO($dsn, $user, $password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

print_r($dbh);
die;

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
    ("SELECT nome_professor, email_professor, lattes_professor from professor");
    // $sth->bindParam(1 , $professor);
    $sth->execute();
}

$responses = $sth->fetch(PDO::FETCH_ASSOC);
	
if(empty($responses)){
    $responses = ["Sem sugestões"];
}

print_r(json_encode($responses));
