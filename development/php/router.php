<?php

header('Access-Control-Allow-Origin: *');

if(!isset($_GET['option']) || $_GET['option'] == '') die(json_encode(['error' => 'Parâmetro inválido', 'msg' => 'A opção selecionada é inválida']));

$data = json_decode(file_get_contents('php://input'),true);
if(!isset($data) || $data == '') die(json_encode(['error' => 'Parâmetro inválido', 'msg' => 'Os valores inseridos são inválidos']));

require_once 'IFCAPI.php';
try{
    $api = new IFCAPI();
    switch ($_GET['option']) {
        case 'getcampusinfo': die($api->getCampusInfo($data));
        case 'getprofessor': die($api->getProfessor($data));
        case 'listall': die($api->listAll($data));
        default: die(json_encode(['error' => 'Não encontrado', 'msg' => 'Opção selecionada não existe']));
    }

}catch(Exception $e){
    die(json_encode(['error' => 'Erro interno', 'msg' => 'O servidor não conseguiu responder a requisição']));
}