
# Projet Bateau

Le campus des métiers et des qualifications du nautisme des Sables d’olonne en partenariat avec l’entreprise Bénéteau souhaite développer un bateau autonome avec des foils.

Pour faire les tests, nous utiliserons un bateau image d’un imoca (bateau de course du vendée globe).

L’objectif pour cette année sera de réaliser une gestion radiocommandée du bateau

Préparer au mieux le transfert vers un bateau autonome :

- Comparaison cap bateau mesuré et cap bateau réel pour mettre en œuvre le capteur de cap.
- Positionnement du bateau pour voir l’évolution de ce dernier sur un plan d’eau
- Réaliser un historique de l’évolution de la navigation.

Ma partie étant les étapes 2 et 3 je me suis occuper du coté 'visuel' des data via la création d'un site web.

## Documentation
CONFIGURATION :
```bash
  Les modifications de connexion MYSQL se font sur le fichier config.json
```
[Diapositive [Google Slide]](https://docs.google.com/presentation/d/10VwbyRFjuF6Ki-SiaJML8OxZ5xKJOEbo5QIlrghB-JM/edit?usp=sharing)


## Déploiement

Le déploiement de ce projet sur cette dernière version se fait via les commande suivant a executer dans un systeme Linux ou via wsl (sur windows).

NodeJS :
```bash
  sudo apt install nodejs
  sudo apt install npm
```

NodeJS :
```bash
  sudo apt install mysql-server
  sudo npm install mysql
  sudo service mysql start
```

Express :
```bash
  sudo npm install express
```

Socket.io :
```bash
  sudo npm install socket.io
```


Création de la base de donnée :
```bash
CREATE DATABASE BDDProjetDataBateau;
```
Création des tables :
```bash
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
```
Ajout des data :
```bash
INSERT INTO BDDProjetDataBateau.Localisation
(date_heure, lat, lon)
VALUES('2022-04-14 19:00:30', 45.66, 32.242);

INSERT INTO BDDProjetDataBateau.Compas
(date_heure, Angle)
VALUES('2022-04-14 19:00:30', 45);

INSERT INTO BDDProjetDataBateau.Vent
(date_heure, Vitesse, Direction)
VALUES('2022-04-14 19:00:30', 60.3, 23);
```



## Authors

- [@Yukkitio](https://www.github.com/yukkitio)

