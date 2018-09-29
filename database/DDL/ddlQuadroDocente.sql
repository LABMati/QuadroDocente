CREATE TABLE campus (
    id_campus INT AUTO_INCREMENT NOT NULL,
    cidade_campus VARCHAR(40) NOT NULL,
    telefone_campus VARCHAR(20) NOT NULL,
    site_campus VARCHAR(200) NOT NULL,
    endereco_campus VARCHAR(200) NOT NULL,
    link_endereco TEXT NOT NULL,
    PRIMARY KEY (id_campus)
);

CREATE TABLE professor (
    id_professor INT AUTO_INCREMENT NOT NULL,
    id_campus INT NOT NULL,
    nome_professor VARCHAR(64) NOT NULL,
    email_professor VARCHAR(128) NOT NULL,
    lattes_professor VARCHAR(200) NOT NULL,
    PRIMARY KEY (id_professor)
);

CREATE TABLE horario (
    id_horario INT AUTO_INCREMENT NOT NULL,
    id_professor INT NOT NULL,
    link_horaro VARCHAR(200) NOT NULL,
    PRIMARY KEY (id_horario)
);

CREATE TABLE ria (
    id_ria INT AUTO_INCREMENT NOT NULL,
    id_professor INT NOT NULL,
    link_ria VARCHAR(200) NOT NULL,
    PRIMARY KEY (id_ria)
);

CREATE TABLE ptd (
    id_ptd INT AUTO_INCREMENT NOT NULL,
    id_professor INT NOT NULL,
    link_ptd VARCHAR(200) NOT NULL,
    PRIMARY KEY (id_ptd)
);

ALTER TABLE professor ADD CONSTRAINT campus_professor_fk
FOREIGN KEY (id_campus)
REFERENCES campus (id_campus)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE ptd ADD CONSTRAINT professor_ptd_fk
FOREIGN KEY (id_professor)
REFERENCES professor (id_professor)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE ria ADD CONSTRAINT professor_ria_fk
FOREIGN KEY (id_professor)
REFERENCES professor (id_professor)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE horario ADD CONSTRAINT professor_horario_fk
FOREIGN KEY (id_professor)
REFERENCES professor (id_professor)
ON DELETE NO ACTION
ON UPDATE NO ACTION;