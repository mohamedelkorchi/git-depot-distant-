
DROP DATABASE IF EXISTS `empdep`;
CREATE DATABASE `empdep`;
USE `empdep`;

CREATE TABLE Departements (
	dep_id 		INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	dep_nom 	VARCHAR(50) NOT NULL,
	dep_region 	VARCHAR(50) NOT NULL
);

CREATE TABLE Employes (
	emp_id 			INT PRIMARY KEY NOT NULL PRIMARY KEY AUTO_INCREMENT,
	emp_matricule 	INT NOT NULL,
	emp_nom 		VARCHAR(50) NOT NULL,
	emp_prenom 		VARCHAR(50) NOT NULL,
	emp_embauche 	DATETIME NOT NULL,
	emp_superieur 	INT,
	emp_poste 		VARCHAR(50) NOT NULL,
	emp_dep 		INT NOT NULL,
	emp_salaire 	DECIMAL(6,2),
    FOREIGN KEY (emp_dep) REFERENCES Departements (dep_id),
    FOREIGN KEY (emp_superieur) REFERENCES Employes (emp_id)
);

INSERT INTO Departements (dep_id, dep_nom, dep_region)
VALUES
(10, 'finance', 1),
(20, 'accueil', 2),
(30, 'atelier', 3),
(31, 'vente', 1),
(32, 'vente', 2),
(33, 'vente', 3),
(34, 'vente', 4),
(35, 'vente', 5),
(41, 'distribution', 1),
(42, 'distribution', 2),
(43, 'distribution', 3),
(44, 'distribution', 4),
(45, 'distribution', 5),
(48, 'distribution', 5),
(50, 'administration', 1);


INSERT INTO Employes (emp_matricule, emp_nom, emp_prenom, emp_embauche, emp_superieur, emp_poste, emp_dep, emp_salaire)
VALUES
(140, 'TIFIET', 'Tarek', '2022-02-10', NULL, 'secrétaire', 30, 2100),
(152, 'CONDA', 'Anna', '2022-02-26', NULL, 'représentant', 41, NULL),
(567, 'BAMBEL', 'Lary', '2022-01-05', NULL, 'président', 43, NULL),
(666, 'FER', 'Lucie', '2022-03-03', NULL, 'président', 42, 2130),
(42, 'MATIK', 'Otto', '2021-12-10', NULL, 'président', 50, NULL),
(72, 'PATAMOB', 'Adhémar', '2000-03-26', NULL, 'président', 50, 5000),
(73, 'ZEUBLOUSE', 'Agathe', '2000-04-15', 1, 'dir.distrib', 41, 3500),
(74, 'KUZBIDON', 'Alex', '2000-05-05', 1, 'dir.vente', 31, 3400),
(75, 'LOCALE', 'Anasthasie', '2000-05-25', 1, 'dir.finance', 10, 3600),
(212, 'TEUTMARONNE', 'Armand', '2000-06-14', 1, 'dir.administratif', 50, 3600),
(213, 'ZOUDANLKOU', 'Debbie', '2000-07-04', 2, 'chef entrepot', 41, 2500),
(4, 'RIVENBUS', 'Elsa', '2000-07-24', 2, 'chef entrepot', 42, 2400),
(52, 'ARDELPIC', 'Helmut', '2000-08-13', 2, 'chef entrepot', 43, 2300),
(333, 'PEURSKONLA', 'Humphrey', '2000-09-02', 2, 'chef entrepot', 44, 2200),
(345, 'VRANTE', 'Helena', '2000-09-22', 2, 'chef entrepot', 45, 2100),
(685, 'MELUSINE', 'Enfaillite', '2000-10-12', 3, 'représentant', 31, 25),
(404, 'EUKTUMEME', 'Odile', '2000-11-01', 3, 'représentant', 32, 26),
(522, 'HOTDEGOU', 'Olaf', '2000-11-21', 3, 'représentant', 32, 27),
(113, 'ODLAVIEILLE', 'Pacome', '2000-12-11', 3, 'représentant', 34, 25),
(26, 'AMARTAKALDIRE', 'Quentin', '2000-12-21', 3, 'représentant', 35, 23),
(99, 'TRAIBIEN', 'Samira', '2000-12-31', 6, 'secrétaire', 41, 1500),
(200, 'FONFEC', 'Sophie', '2001-01-10', 6, 'secrétaire', 41, 1400),
(456, 'FAIRENT', 'Teddy', '2001-01-20', 7, 'secrétaire', 41, 1300),
(321, 'BLAIREUR', 'Terry', '2001-02-09', 7, 'secrétaire', 42, 1300),
(320, 'AJERRE', 'Tex', '2001-02-09', 8, 'secrétaire', 43, 1300),
(322, 'CHMONFISSE', 'Thierry', '2001-02-19', 8, 'secrétaire', 43, 1200),
(323, 'PHOTOTETEDEMORT', 'Thomas', '2001-02-19', 9, 'secrétaire', 44, 2250),
(550, 'KAECOUTE', 'Xavier', '2001-03-01', 9, 'secrétaire', 34, 1150),
(429, 'ADROUILLE-TOULTAN', 'Yves', '2001-03-11', 10, 'secrétaire', 45, 1100),
(10, 'ANCHIER', 'Yvon', '2001-03-21', 10, 'secrétaire', 45, 1000);








SELECT * FROM Employes

SELECT * from departements

SELECT emp_nom, emp_salaire FROM Employes

SELECT UPPER(emp_nom), ROUND(emp_salaire * 100, 0),'cts'
FROM Employes

SELECT UPPER(emp_nom) AS 'NOM employ�', ROUND(emp_salaire * 100, 0) AS 'Salaire', 'centimes' AS 'Unit� salaire'
FROM Employes

SELECT DISTINCT emp_poste FROM Employes

SELECT DISTINCT emp_dep, emp_poste FROM Employes

SELECT emp_nom, emp_prenom
FROM Employes
LIMIT 5;

SELECT emp_nom, emp_prenom, emp_salaire, emp_dep, dep_nom
FROM Employes
INNER JOIN Departements  ON emp_dep = dep_id;

SELECT emp_nom, emp_prenom, emp_salaire, emp_dep, dep_nom FROM Employes RIGHT JOIN Departements /* RIGHT qui prend ce qu'il y a droite de JOIN */
ON emp_dep = dep_id;

SELECT Employes.emp_nom, Employes.emp_prenom, Superieurs.emp_nom, Superieurs.emp_prenom
FROM Employes
LEFT JOIN Employes AS Superieurs ON Superieurs.emp_id  = Employes.emp_superieur 
/*WHERE Employes.emp_nom <> Superieurs.emp_nom*/

SELECT COUNT(*) AS 'Nb employ�s'
FROM Employes

SELECT emp_dep, AVG(emp_salaire), MIN(emp_salaire) /* (AVG) calcul de moyenne */
FROM Employes
GROUP BY emp_dep 

SELECT emp_dep, AVG(emp_salaire), MIN(emp_salaire)
FROM Employes
WHERE emp_matricule > 10
GROUP BY emp_dep
HAVING AVG(emp_salaire) <= 1600 /* pas bien compris le having */

SELECT *
FROM Employes
ORDER BY emp_dep DESC, emp_nom ASC

SELECT emp_nom, emp_prenom, emp_salaire * 100, emp_dep
FROM Employes
ORDER BY 3 DESC, emp_dep

