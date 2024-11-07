create database escola;

use escola;
create table professor(
idprofessor int not null primary key identity,
nomeprofessor varchar(100) not null,
nascimentoprof date,
disciplina varchar(40),
periodo varchar (40)
);

insert into professor(nomeprofessor, nascimentoprof, disciplina, periodo) values('Joilson', '1976-03-31', 'matemática', 'noturno'); 

select * from professor;

update professor 
set nomeprofessor = 'Fran', nascimentoprof='1989-05-24', disciplina = 'Biologia_ambiental'
where idprofessor=3;

update professor
set nascimentoprof = '1994-04-12'
where idprofessor = 2;

select * from professor
order by nascimentoprof desc

delete from professor 
where idprofessor= 2