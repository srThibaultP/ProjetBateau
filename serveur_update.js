const config = require("./config.json");// configuration du fichier NodeJs.
const express = require('express');// Serveur web , comme apache2 mais pour websocket ( récupération des requètes et envoie).
const mysql = require('mysql');// Pour me connecter au serveur Mysql.
const MySQLEvents = require('@rodrigogs/mysql-events');// Detection de changement dans la base de données.
const http = require('http');
const app = express();
const server = http.createServer(app);// Set-up du serveur socket (démarrage via fichier nodejs).
const io = require('socket.io')(server, config.cors);// Set-up la connexion (Traitement des requètes).
var pool = mysql.createPool(config.mysql);// Set-up de la connexion a Mysql (createPool = ouverture/fermeture de la connexion actuelle).

const { Server } = require("socket.io");

//----------------------------------SITE WEB----------------------------------//
app.use(express.static(`${__dirname}/public`));
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/html/index.html`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});
//----------------------------------------------------------------------------//

server.listen(config.port, function () {
  console.log('Serveur WebSocket disponible sur localhost:' + config.port)
})

const dbevent = async () => {
  const instance = new MySQLEvents(pool, {
    startAtEnd: true
  });

  await instance.start();

  instance.addTrigger({
    name: 'monitoring all statments',
    expression: config.mysql.database,
    statement: MySQLEvents.STATEMENTS.ALL,
    onEvent: e => {
      console.log(e);
      clientwebupdate();
    }
  })

  instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
  instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);

}

dbevent().catch(console.error);

io.on('connection', (socket) => {
  console.log(`Connecté au client ${socket.id}`)
  io.emit('status', 'Connecté au serveur WebSocket');

  clientwebupdate();

  socket.on('SelectDateData', function (data) {
    //console.log(data);
      recherchedate(data,socket.id);
  });
})

function clientwebupdate() {
  pool.getConnection(function (err, connection) {
    if (err) throw err; //Pas de connection

//----------------------------------LIVE MYSQL----------------------------------//
        connection.query('SELECT * FROM BDDProjetDataBateau.Localisation ORDER BY ID DESC LIMIT 1; SELECT * FROM BDDProjetDataBateau.Vent ORDER BY ID DESC LIMIT 1; SELECT * FROM BDDProjetDataBateau.Compas ORDER BY ID DESC LIMIT 1', [1, 2, 3], function(err, index_data) {
          io.emit('page_index', index_data);
          connection.release(); // apres reseption des données fermer la connexion car Mysql a un nombre max d'utilisateur a la fois (10 en meme temps) (modifier à 30)
          if (err) throw err;
          //console.log(JSON.stringify(index_data, null, '\t'));
        });
//------------------------------------------------------------------------------//
  })
}


function recherchedate(data,identifiant) {
  //console.log(data);
pool.getConnection(function (err, connection) {
  if (err) throw err; //Pas de connection = log error dans le cmd
//-----------------------------Reponse selon la date-----------------------------//
  //console.log(data);

      connection.query("SELECT * FROM BDDProjetDataBateau.Localisation WHERE date_heure LIKE '"+data+"%' ORDER BY ID; SELECT * FROM BDDProjetDataBateau.Vent WHERE date_heure LIKE '"+data+"%' ORDER BY ID; SELECT * FROM BDDProjetDataBateau.Compas WHERE date_heure LIKE '"+data+"%' ORDER BY ID", [1, 2, 3], function(err, historique_data) {
        io.to(identifiant).emit('page_historique', historique_data); // ENvoie en Broadcast
        //io.to(socket.id).emit('page_historique', historique_data); // Envoie a un client spécifique
        connection.release(); // apres reseption des données fermer la connexion car Mysql a un nombre max d'utilisateur a la fois (10 en meme temps) (modifier à 30)
        if (err) throw err;
        console.log(JSON.stringify(historique_data, null, '\t'));
      });
//------------------------------------------------------------------------------//
})
}