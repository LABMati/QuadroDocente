CREATE TABLE ria (
    id_ria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    link_ria VARCHAR(200) NOT NULL
    
);


CREATE TABLE ptd (
    id_ptd INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    link_ptd VARCHAR(200) NOT NULL
);


CREATE TABLE campus (
    id_campus INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cidade_campus VARCHAR(100) NOT NULL
);


CREATE TABLE bloco (
    id_bloco INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_campus INT NOT NULL,
    nome_bloco VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_campus) REFERENCES campus (id_campus)
);


CREATE TABLE local (
    id_local INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_bloco INT NOT NULL,
    nome_local VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_bloco) REFERENCES bloco (id_bloco)
);


CREATE TABLE dia (
    id_dia INT NOT NULL PRIMARY KEY,
    nome_dia VARCHAR(13) NOT NULL
);


CREATE TABLE turma (
    id_turma INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_turma VARCHAR(200) NOT NULL
);


CREATE TABLE disciplina (
    id_disciplina INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_disciplina VARCHAR(200) NOT NULL,
    carga_disciplina INT NOT NULL
);


CREATE TABLE professor (
    id_professor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_professor VARCHAR(150) NOT NULL,
    email_professor VARCHAR(200) NOT NULL,
    lattes_professor VARCHAR(200) NOT NULL
);


CREATE TABLE ria_professor (
	id_ria_professor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_ria INT NOT NULL,
    id_professor INT NOT NULL,
    FOREIGN KEY (id_ria) REFERENCES ria (id_ria),
    FOREIGN KEY (id_professor) REFERENCES professor (id_professor)
);


CREATE TABLE ptd_professor (
	id_ptd_professor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_professor INT NOT NULL,
    id_ptd INT NOT NULL,
    FOREIGN KEY (id_ptd) REFERENCES ptd (id_ptd),
    FOREIGN KEY (id_professor) REFERENCES professor (id_professor)
);


CREATE TABLE professor_campus (
	id_professor_campus INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_professor INT NOT NULL,
    id_campus INT NOT NULL,
    FOREIGN KEY (id_campus) REFERENCES campus (id_campus),
    FOREIGN KEY (id_professor) REFERENCES professor (id_professor)
);


CREATE TABLE aula (
    id_aula INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_turma INT NOT NULL,
    id_disciplina INT NOT NULL,
    id_professor INT NOT NULL,
    FOREIGN KEY (id_turma) REFERENCES turma (id_turma),
    FOREIGN KEY (id_disciplina) REFERENCES disciplina (id_disciplina),
    FOREIGN KEY (id_professor) REFERENCES professor (id_professor)
);


CREATE TABLE horario_aula (
    id_horario_aula INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_aula INT NOT NULL,
    id_local INT NOT NULL,
    id_dia INT NOT NULL,
    horario_inicio TIME NOT NULL,
    duracao_aula INT NOT NULL,
    FOREIGN KEY (id_local) REFERENCES local (id_local),
    FOREIGN KEY (id_dia) REFERENCES dia (id_dia),
    FOREIGN KEY (id_aula) REFERENCES aula (id_aula)
);