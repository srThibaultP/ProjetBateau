CREATE DATABASE BDDProjetDataBateau;

CREATE TABLE BDDProjetDataBateau.Localisation(
                        ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        date_heure DATETIME NOT NULL,
                        lat FLOAT NOT NULL,
                        lon FLOAT NOT NULL)
CREATE TABLE BDDProjetDataBateau.Vent(
                        ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        date_heure DATETIME NOT NULL,
                        Vitesse FLOAT NOT NULL,
                        Direction FLOAT NOT NULL)
CREATE TABLE BDDProjetDataBateau.Compas(
                        ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                        date_heure DATETIME NOT NULL,
                        Angle FLOAT NOT NULL)
                        
INSERT INTO BDDProjetDataBateau.Localisation
(date_heure, lat, lon)
VALUES('2022-04-14 19:00:30', 45.66, 32.242);

INSERT INTO BDDProjetDataBateau.Compas
(date_heure, Angle)
VALUES('2022-04-14 19:00:30', 45);

INSERT INTO BDDProjetDataBateau.Vent
(date_heure, Vitesse, Direction)
VALUES('2022-04-14 19:00:30', 60.3, 23);

INSERT INTO BDDProjetDataBateau.Localisation
(date_heure, lat, lon)
VALUES('2022-04-14 20:00:30', 46.66, 44);

INSERT INTO BDDProjetDataBateau.Compas
(date_heure, Angle)
VALUES('2022-04-14 20:00:30', -12);

INSERT INTO BDDProjetDataBateau.Vent
(date_heure, Vitesse, Direction)
VALUES('2022-04-14 20:00:30', 55.3, 12);

