CREATE DATABASE IF NOT EXISTS BDDProjetDataBateau;

CREATE TABLE BDDProjetDataBateau.Localisation(ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,date_heure DATETIME NOT NULL,lat FLOAT NOT NULL,lon FLOAT NOT NULL);
CREATE TABLE BDDProjetDataBateau.Vent(ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,date_heure DATETIME NOT NULL,Vitesse FLOAT NOT NULL,Direction FLOAT NOT NULL);
CREATE TABLE BDDProjetDataBateau.Compas(ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,date_heure DATETIME NOT NULL,Angle FLOAT NOT NULL);

INSERT INTO BDDProjetDataBateau.Localisation(date_heure, lat, lon) VALUES(now(), 45, -1);
INSERT INTO BDDProjetDataBateau.Compas(date_heure, Angle )VALUES(now(), 45.1);
INSERT INTO BDDProjetDataBateau.Vent(date_heure, Vitesse, Direction) VALUES(now(), 15, 112);

INSERT INTO BDDProjetDataBateau.Localisation(date_heure, lat, lon) VALUES(now(), 45.5, -1.1);
INSERT INTO BDDProjetDataBateau.Compas(date_heure, Angle) VALUES(now(), 28);
INSERT INTO BDDProjetDataBateau.Vent(date_heure, Vitesse, Direction) VALUES(now(), 61.3, 30.2);

INSERT INTO BDDProjetDataBateau.Localisation(date_heure, lat, lon) VALUES(now(), 46, -1.5);
INSERT INTO BDDProjetDataBateau.Compas(date_heure, Angle) VALUES(now(), -39.6);
INSERT INTO BDDProjetDataBateau.Vent(date_heure, Vitesse, Direction) VALUES(now(), 5.2, -21.5);
