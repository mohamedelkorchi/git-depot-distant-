drop database if exists hotel;
create database hotel;
use hotel;

create table station (
	num_station int primary key auto_increment,
	nom_station varchar(50)
);

create table Hotel(
	capacite_hotel int not null,
	categorie_hotel varchar(20) not null,
	nom_hotel varchar(30) not null,
	adresse_hotel varchar(50),
	num_hotel int primary key auto_increment,
	num_station int not null,
	foreign key (num_station) references station (num_station)
);

create table chambre(
	capacite_chambre int,
	degre_confort varchar(10),
	exposition varchar(15),
	type_chambre varchar(20),
	num_chambre int not null primary key auto_increment,
	num_hotel int not null,
	foreign key (num_hotel) references Hotel (num_hotel)
);

create table client (
	adresse_client varchar(50),
	nom_client varchar(20),
	prenom_client varchar(20),
	num_client int primary key auto_increment
);

create table reservation (
	num_chambre int not null,
	foreign key (num_chambre) references chambre (num_chambre),
	num_client int,
	foreign key (num_client) references client (num_client),
	date_debut date,
	date_fin date,
	date_reservation date,
	montant varchar(15),
	prix_total varchar(10)
);