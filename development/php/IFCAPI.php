<?php

class IFCAPI{
    function __construct(){
        $this->connection = new PDO("mysql:host=localhost;dbname=quadrodocente", "root", "my28@if#658", 
            [
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
            ]
        );
    }

    function getCampusInfo($KEYS){
        try{
            $response = $this->connection->prepare(
                'SELECT cidade_campus as nome, telefone_campus as telefone, site_campus as site, endereco_campus as endereco, link_endereco as maps FROM campus
                WHERE id_campus = ?');
            $response->bindParam(1, $KEYS['campus']);
            $response->execute();

            if ($response->rowCount() > 0) {
                $response = $response->fetch(PDO::FETCH_ASSOC);
                die(json_encode($response));
            }
            die(json_encode(['error' => 'Não encontrado', 'msg' => 'Campus não consta no banco de dados']));
        }catch(Exception $e){

        }
    }

    function listAll($KEYS){
        try{
            $response = $this->connection->prepare("SELECT pr.nome_professor, pr.email_professor, pr.lattes_professor, h.link_horario
            FROM professor AS pr
            INNER JOIN horario_professor AS hp
                ON pr.id_professor = hp.id_professor
            INNER JOIN horario AS h
                ON hp.id_horario = h.id_horario
            INNER JOIN professor_campus AS pc
                ON pr.id_professor = pc.id_professor
            INNER JOIN campus AS c
                ON pc.id_campus = c.id_campus
            WHERE c.id_campus = ?");

            $response->bindParam(1, $KEYS['campus']);
            $response->execute();
            die(json_encode($response->fetchAll(PDO::FETCH_ASSOC)));
        }catch(Exception $e){

        }
    }

    function getProfessor($KEYS){
        try{
            $KEYS['professor'] = '%'.$KEYS['professor'].'%';
            $query = "SELECT p.nome_professor as nome, p.email_professor as email, p.lattes_professor as lattes, h.link_horario as horario FROM professor p
                    INNER JOIN horario_professor hp
                        ON p.id_professor = hp.id_professor
                    INNER JOIN horario h
                        ON hp.id_horario = h.id_horario
                    INNER JOIN professor_campus pc
                        ON p.id_professor = pc.id_professor
                    INNER JOIN campus c
                    ON pc.id_campus = c.id_campus
                        WHERE p.nome_professor LIKE ?";
            if ($KEYS['campus'] != 0) {
                $response = $this->connection->prepare($query." AND c.id_campus = ? ORDER BY p.nome_professor");
                $response->bindParam(1, $KEYS['professor']);
                $response->bindParam(2, $KEYS['campus']);
                $response->execute();
                if ($response->rowCount() > 0) {
                    $response = $response->fetchAll(PDO::FETCH_ASSOC);
                    die(json_encode($response));
                }else{
                    die(json_encode(['error' => true, 'msg' => 'Nenhum professor encontrado']));
                }
            }else{
                $response = $this->connection->prepare($query. " ORDER BY p.nome_professor");
                $response->bindParam(1, $KEYS['professor']);
                $response->execute();
                
                if ($response->rowCount() > 0) {
                    $response = $response->fetchAll(PDO::FETCH_ASSOC);
                    die(json_encode($response));
                }else{
                    die(json_encode(['error' => true, 'msg' => 'Nenhum professor encontrado']));
                }
            }
        }catch(Exception $e){
            die(json_encode(['error' => true, 'msg' => $e->getMessage()]));
        }
    }
}