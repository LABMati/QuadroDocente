<?php

header('Access-Control-Allow-Origin: *');  

$professor = $_GET["p"];
$professor = "%$professor%";
$campus = (string)$_GET["c"];
$prof = [];
$responses = [];

if(!isset($_GET["p"]) || !isset($_GET["c"])){
    echo "alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')";
    die;
}

$mysqli = mysqli_connect("localhost", "labmatii", "my28@if#658", "quadrodocente");

if(mysqli_connect_errno()){
    printf("Conexão com o banco de dados falhou \n", mysqli_connect_error());
    exit();
}

if($campus != "Todos os Campi") {
    if($sth = mysqli_prepare($mysqli,  "SELECT professor.nome_professor, professor.email_professor, professor.lattes_professor, horario.link_horario FROM professor INNER JOIN horario_professor ON professor.id_professor = horario_professor.id_professor INNER JOIN horario  ON horario_professor.id_horario = horario.id_horario INNER JOIN professor_campus ON professor.id_professor = professor_campus.id_professor INNER JOIN campus ON professor_campus.id_campus = campus.id_campus WHERE campus.cidade_campus = ? AND professor.nome_professor LIKE ? ")){
       
        mysqli_stmt_bind_param($sth, "ss", $campus, $professor);
        mysqli_stmt_execute($sth);
        mysqli_stmt_bind_result($sth, $nome, $email, $lattes, $horario);
       
        while(mysqli_stmt_fetch($sth)){
            array_push($prof, $nome);
            array_push($prof, $email);
            array_push($prof, $lattes);
            array_push($prof, $horario);
            array_push($responses, $prof);
            $prof = [];
        }

        print_r(json_encode($responses));
        die;
    }else{
        print_f("alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')");
        die;
    }

}else{
    if($sth = mysqli_prepare($mysqli,  "SELECT professor.nome_professor, professor.email_professor, professor.lattes_professor, horario.link_horario FROM professor INNER JOIN horario_professor ON professor.id_professor = horario_professor.id_professor INNER JOIN horario ON horario_professor.id_horario = horario.id_horario WHERE professor.nome_professor LIKE ? ")){
       
        mysqli_stmt_bind_param($sth, "s", $professor);
        mysqli_stmt_execute($sth);
        mysqli_stmt_bind_result($sth, $nome, $email, $lattes, $horario);
       
        while(mysqli_stmt_fetch($sth)){
            array_push($prof, $nome);
            array_push($prof, $email);
            array_push($prof, $lattes);
            array_push($prof, $horario);
            array_push($responses, $prof);
            $prof = [];
        }
        
        print_r(json_encode($responses));
        die;
    }else{
        print_f("alert('Ocorreu um erro durante a execução, contate o laboratório pelo email labmatiii@gmail.com')");
        die;
    }

}
