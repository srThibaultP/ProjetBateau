//---------------------------INITIALISATION MAP---------------------------------//
map = L.map('map', {
  'center': [46.227638, 2.213749],
  'zoom': 5,
  'layers': [
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      'attribution': 'Map data &copy; OpenStreetMap contributors'
    })
  ]
});
//------------------------------------------------------------------------------//


function update_historique(historique_map_data){
//---------------------------------DEBUG----------------------------------------//
  //console.log(historique_map_data);
  // console.log(historique_map_data[0]);
  // console.log(historique_map_data[1]);
  // console.log(historique_map_data[2]);

  // console.log("GPS : "+historique_map_data[0].length);
  // console.log("VENT : "+historique_map_data[1].length);
  // console.log("COMPAS : :"+historique_map_data[2].length);
//------------------------------------------------------------------------------//

if(Object.keys(historique_map_data[0]).length == 0 || Object.keys(historique_map_data[1]).length == 0 || Object.keys(historique_map_data[2]).length == 0) {
      console.log("Aucune données disponible");
      document.getElementById('OnVerraPlusTard2').innerHTML = "Aucune données disponible";
        deleting();

    }else {

        if(areEqual(historique_map_data[0].length,historique_map_data[1].length,historique_map_data[2].length)){
            console.log("Les tables sont égales");

            var value_min = historique_map_data[0].length;
            document.getElementById('OnVerraPlusTard2').innerHTML = value_min;
              mappin(historique_map_data,value_min);

        }else {
            console.log("Les valeurs des tables sont disparates");
            var value_min = Math.min(historique_map_data[0].length,historique_map_data[1].length,historique_map_data[2].length);
            document.getElementById('OnVerraPlusTard2').innerHTML = value_min;
              mappin(historique_map_data,value_min);
        }
  }
}

function mappin(historique_map_data,value_min){
//----------------------------------MAP-----------------------------------------//
marker = new Array(); //Tableau en var globale
polyline = new Array(); //Tableau en var globale

for(i=0;i<value_min;i++){

    var date_heure = historique_map_data[0][1].date_heure;// Prendre la date ("2021-01-11 17:00:10")
    var removeT = date_heure.replace('T',' ');
    var removeZ = removeT.replace('.000Z','');
    const horaire = removeZ.split(' ');// créer un tableau avec ("2021-01-11 17:00:10") séparer a partir de l'espace

    var LamMarker = new L.marker([historique_map_data[0][i].lat, historique_map_data[0][i].lon]);
    LamMarker.bindPopup("Date : "+horaire[0]+"<br>Horaire : "+horaire[1]+"<br>Lat : "+historique_map_data[0][i].lat+"<br>Lon : "+historique_map_data[0][i].lon+"<br>Vitesse : "+historique_map_data[1][i].Vitesse+"<br>Direction : "+historique_map_data[1][i].Direction+"<br>Angle : "+historique_map_data[2][i].Angle);
    marker.push(LamMarker);
    map.addLayer(marker[i]);

    var LamPolyline = new L.polyline(historique_map_data[0].slice(0, i+1), {color: 'red'})
    polyline.push(LamPolyline);
    map.addLayer(polyline[i]);
    }
//------------------------------------------------------------------------------//
}


function deleting() {
for(i=0;i<marker.length;i++) {
    map.removeLayer(marker[i]);
    map.removeLayer(polyline[i]);
    }
}


function areEqual(){
   var len = arguments.length;
   for (var i = 1; i< len; i++){
      if (arguments[i] === null || arguments[i] !== arguments[i-1])
         return false;
   }
   return true;
}

























// //----------------------------------MAP-----------------------------------------//
// var macarte = null;
// // Fonction d'initialisation de la carte
// function initMap() {
//     // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
//     macarte = L.map('map').setView([gps_historique[0].lat,gps_historique[0].lon], 6);
//     // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
//     L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
//         // Il est toujours bien de laisser le lien vers la source des données
//         //attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
//         minZoom: 1,
//         maxZoom: 20
//     }).addTo(macarte);
// //------------------------------- VERIFICATION ---------------------------------//
//
//       //------------------------ BASE HISTORIQUE ( WORKING )--------------------------//
//           var n = 0;                                                  //Incrémentation pour savoir a quel valeur du "tableau" nous somme !
//
//           for (const property in gps_historique) {
//
//              var date_heure = gps_historique[n].date_heure;           // Prendre la date ("2021-01-11 17:00:10")
//              const horaire = date_heure.split(' ');                                   // créer un tableau avec ("2021-01-11 17:00:10") séparer a partir de l'espace
//
//       	 	   var marker = L.marker([gps_historique[n].lat,gps_historique[n].lon]).addTo(macarte);
//              // Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
//       	     marker.bindPopup("Date : "+horaire[0]+"<br>Horaire : "+horaire[1]+"<br>Lat : "+gps_historique[n].lat+"<br>Lon : "+gps_historique[n].lon+"<br>Vitesse : "+vent_historique[n].Vitesse+"<br>Direction : "+vent_historique[n].Direction+"<br>Angle : "+compas_historique[n].Angle);
//              var polyline = L.polyline(gps_historique, {color: 'red'}).addTo(macarte);
//
//              n++;
//       	  }
//       //------------------------------------------------------------------------------//
// //------------------------------------------------------------------------------//
// }
// window.onload = function(){
// // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
// initMap();
// };
// //------------------------------------------------------------------------------//
