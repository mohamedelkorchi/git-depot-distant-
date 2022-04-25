DROP DATABASE IF EXISTS hotel;

CREATE DATABASE hotel; 
USE hotel;

CREATE TABLE station (
	sta_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	sta_nom VARCHAR(50) NOT NULL,
	sta_altitude INT
);



CREATE TABLE hotel (
	hot_id 			INT AUTO_INCREMENT NOT NULL,
	hot_sta_id 		INT NOT NULL,
	hot_nom 		VARCHAR(50) NOT NULL,
	hot_categorie 	INT NOT NULL,
	hot_adresse		VARCHAR(50) NOT NULL,
	hot_ville 		VARCHAR(50) NOT NULL, 
	FOREIGN KEY (hot_sta_id) REFERENCES station(sta_id),
	PRIMARY KEY (hot_id)
);

CREATE TABLE chambre (
	cha_id INT NOT NULL AUTO_INCREMENT ,
	cha_hot_id INT NOT NULL,
	cha_numero INT NOT NULL,
	cha_capacite INT NOT NULL,
	cha_type INT NOT NULL,
	FOREIGN KEY (cha_hot_id) REFERENCES hotel(hot_id),
	PRIMARY KEY (cha_id)
);

CREATE TABLE client (
	cli_id INT NOT NULL AUTO_INCREMENT ,
	cli_nom VARCHAR(50),
	cli_prenom VARCHAR(50),
	cli_adresse VARCHAR(50),
	cli_ville VARCHAR(50),
	PRIMARY KEY (cli_id)
);

CREATE TABLE reservation (
	res_id INT NOT NULL AUTO_INCREMENT,
	res_cha_id INT NOT NULL ,
	res_cli_id INT NOT NULL ,
	res_date DATE NOT NULL,
	res_date_debut DATE NOT NULL,
	res_date_fin DATE NOT NULL,
	res_prix DECIMAL(6,2) NOT NULL,
	res_arrhes DECIMAL(6,2),
	FOREIGN KEY (res_cha_id) REFERENCES chambre(cha_id),
	FOREIGN KEY (res_cli_id) REFERENCES client(cli_id),
	PRIMARY KEY (res_id)
);

INSERT INTO station (sta_id, sta_nom, sta_altitude) VALUES (1, 'La Montagne', 2500);
INSERT INTO station (sta_id, sta_nom, sta_altitude) VALUES (2, 'Le Sud', 200);
INSERT INTO station (sta_id, sta_nom, sta_altitude) VALUES (3, 'La Plage', 10);

INSERT INTO hotel (hot_id, hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_ville) VALUES (1, 1, 'Le Magnifique', 3, 'rue du bas', 'Pralo');
INSERT INTO hotel (hot_id, hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_ville) VALUES (2, 1, 'Hotel du haut', 1, 'rue du haut', 'Pralo');
INSERT INTO hotel (hot_id, hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_ville) VALUES (3, 2, 'Le Narval', 3, 'place de la liberation', 'Vonten');
INSERT INTO hotel (hot_id, hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_ville) VALUES (4, 2, 'Les Pissenlis', 4, 'place du 14 juillet', 'Bretou');
INSERT INTO hotel (hot_id, hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_ville) VALUES (5, 2, 'RR Hotel', 5, 'place du bas', 'Bretou');
INSERT INTO hotel (hot_id, hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_ville) VALUES (6, 2, 'La Brique', 2, 'place du haut', 'Bretou');
INSERT INTO hotel (hot_id, hot_sta_id, hot_nom, hot_categorie, hot_adresse, hot_ville) VALUES (7, 3, 'Le Beau Rivage', 3, 'place du centre', 'Toras');

INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (001, 1, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (002, 1, 3, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (003, 1, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (101, 1, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (102, 1, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (103, 1, 3, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (201, 1, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (202, 1, 7, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (203, 1, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (001, 2, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (002, 2, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (003, 2, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (101, 2, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (102, 2, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (103, 2, 3, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (201, 2, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (202, 2, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (203, 2, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (001, 3, 3, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (002, 3, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (003, 3, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (101, 3, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (102, 3, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (103, 3, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (201, 3, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (202, 3, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (203, 3, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (001, 4, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (002, 4, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (003, 4, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (101, 4, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (102, 4, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (103, 4, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (201, 4, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (202, 4, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (203, 4, 3, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (001, 5, 3, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (002, 5, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (003, 5, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (101, 5, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (102, 5, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (103, 5, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (201, 5, 2, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (202, 5, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (203, 5, 4, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (001, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (002, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (003, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (101, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (102, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (103, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (201, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (202, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (203, 6, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (001, 7, 1, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (002, 7, 5, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (003, 7, 5, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (101, 7, 5, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (102, 7, 5, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (103, 7, 5, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (201, 7, 5, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (202, 7, 5, 1);
INSERT INTO chambre (cha_numero, cha_hot_id, cha_capacite, cha_type) VALUES (203, 7, 5, 1);

INSERT INTO client (cli_nom, cli_prenom, cli_adresse, cli_ville) VALUES ('Doe', 'John', '', 'LA');
INSERT INTO client (cli_nom, cli_prenom, cli_adresse, cli_ville) VALUES ('Homme', 'Josh', '', 'Palm Desert');
INSERT INTO client (cli_nom, cli_prenom, cli_adresse, cli_ville) VALUES ('Paul', 'Weller', '', 'Londre');
INSERT INTO client (cli_nom, cli_prenom, cli_adresse, cli_ville) VALUES ('White', 'Jack', '', 'Detroit');
INSERT INTO client (cli_nom, cli_prenom, cli_adresse, cli_ville) VALUES ('Claypool', 'Les', '', 'San Francisco');
INSERT INTO client (cli_nom, cli_prenom, cli_adresse, cli_ville) VALUES ('Squire', 'Chris', '', 'Londre');
INSERT INTO client (cli_nom, cli_prenom, cli_adresse, cli_ville) VALUES ('Wood', 'Ronnie', '', 'Londre');

INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (1, 1, '2017-01-10', '2017-07-01', '2017-07-15', 2400, 800);
INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (2, 2, '2017-01-10', '2017-07-01', '2017-07-15', 3400, 100);
INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (1, 3, '2017-01-10', '2017-07-01', '2017-07-15', 400, 50);
INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (2, 4, '2017-01-10', '2017-07-01', '2017-07-15', 7200, 1800);
INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (3, 5, '2017-01-10', '2017-07-01', '2017-07-15', 1400, 450);
INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (4, 6, '2017-01-10', '2017-07-01', '2017-07-15', 2400, 780);
INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (11, 6, '2017-01-10', '2017-07-01', '2017-07-15', 500, 80);
INSERT INTO reservation (res_cha_id, res_cli_id, res_date, res_date_debut, res_date_fin, res_prix, res_arrhes) VALUES (50, 1, '2017-01-10', '2017-07-01', '2017-07-15', 40, 0);



/* LOT 1 : SELECT - FROM - WHERE - AND */

select hot_nom, hot_ville from hotel;

select cli_nom, cli_prenom, cli_adresse from client  where cli_nom = "white";

select sta_nom, sta_altitude from station where sta_altitude > 1000;

select cha_numero, cha_capacite from chambre where cha_capacite > 1;

select cli_nom, cli_ville from client where cli_ville <> "Londre";

select hot_nom, hot_ville from hotel where hot_ville = "Bretou" and  hot_categorie > 3;


/* LOT 2 : JOIN */

select sta_nom, hot_nom, hot_categorie, hot_ville
from hotel
inner join station;

select hot_nom, hot_categorie, hot_ville, cha_numero
from hotel
inner join chambre;

select hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite
from hotel
inner join chambre 
where hot_ville = "Bretou" and cha_capacite > 1;

select cli_nom,hot_nom,res_date
from hotel
inner join chambre on chambre.cha_hot_id = hotel.hot_id 
inner join reservation on chambre.cha_id = reservation.res_cha_id 
inner join client on reservation.res_cli_id = client.cli_id; 
/* FAIRE LE CHEMIN ENTRE CLE PRIMAIRE ET SECONDAIRE POUR > 2 TABLES */

select sta_nom, hot_nom, cha_numero, cha_capacite
from station
inner join hotel on hotel.hot_sta_id = station.sta_id 
inner join chambre on chambre.cha_hot_id = hotel.hot_sta_id;
/* REUSSIIIII */

select cli_nom, hot_nom, res_date_debut, datediff(res_date_fin, res_date_debut) as  durée_sejour  , "jours" as Unité_Sejour
from hotel
inner join chambre on chambre.cha_hot_id = hotel.hot_id 
inner join reservation on chambre.cha_id = reservation.res_cha_id 
inner join client on reservation.res_cli_id = client.cli_id; 


/* LOT 3 : FONCTIONS D'AGREGATION */

select count(*), hot_sta_id from hotel 
group by hot_sta_id;

select sta_nom, cha_numero
from station
inner join hotel on hotel.hot_sta_id = station.sta_id 
inner join chambre on chambre.cha_hot_id = hotel.hot_sta_id;

select sta_nom, count(*) as "Nombre de chambres"
from station
inner join hotel on hotel.hot_sta_id = station.sta_id 
inner join chambre on chambre.cha_hot_id = hotel.hot_sta_id
group by sta_nom;   /* REVOIR */

select sta_nom, count(*) as "Nombre de chambres"
from station
inner join hotel on hotel.hot_sta_id = station.sta_id 
inner join chambre on chambre.cha_hot_id = hotel.hot_sta_id
where cha_capacite > 1
group by sta_nom; 

select distinct  hot_nom, cli_nom
from hotel
inner join chambre on chambre.cha_hot_id = hotel.hot_id 
inner join reservation on chambre.cha_id = reservation.res_cha_id 
inner join client on reservation.res_cli_id = client.cli_id
where cli_nom = "Squire"; 

select  sta_nom, avg (datediff(res_date_fin, res_date_debut)) as " moyenne sejour"
from station
inner join hotel on hotel.hot_sta_id = station.sta_id 
inner join chambre on chambre.cha_hot_id = hotel.hot_id
inner join reservation on reservation.res_cha_id = chambre.cha_id
group by sta_nom; 

select sta_nom, hot_nom, cha_numero, res_id,/* avg(*/datediff(res_date_fin, res_date_debut)  as sejour
from station
inner join hotel on hotel.hot_sta_id = station.sta_id 
inner join chambre on chambre.cha_hot_id = hotel.hot_id
inner join reservation on reservation.res_cha_id = chambre.cha_id
/*group by sta_nom*/; /* LE GOUP BY NE FONCTIONNE PAS ICI CAR ON DEMANDE A SORTIR LE NOM DES HOTELS */


/*select datediff(res_date_fin, res_date_debut) as 'duree moyenne du sejour', sta_id
from reservation
join chambre on reservation.res_id = chambre.cha_id
join hotel on chambre.cha_id = hotel.hot_id 
join station on hotel.hot_sta_id = station.sta_id*/







