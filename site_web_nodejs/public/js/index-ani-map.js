i = 0;
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

function update_index (index_ani_map_data){
//---------------------------------DEBUG----------------------------------------//
  // console.log(index_ani_map_data);
  // console.log(index_ani_map_data[1][0].Vitesse);
  // console.log(index_ani_map_data[1][0].Direction);
  // console.log(index_ani_map_data[2][0].Angle);
  // console.log(index_ani_map_data[0].Voile1);
  // console.log(index_ani_map_data[0].Voile2);
  // console.log(index_ani_map_data[0].Safran);
  // console.log(index_ani_map_data[0][0].Vitesse);
  // console.log(index_ani_map_data[0][0].Direction);
  // console.log(index_ani_map_data[1][0].Angle);
  var voile_1 = "30";
  var voile_2 = "-30";
  var safran_tempo = "29";
  //
//------------------------------------------------------------------------------//
document.getElementById('valeur_vent_angle').innerHTML = index_ani_map_data[1][0].Direction+"°";
document.getElementById('valeur_vent_vitesse').innerHTML = index_ani_map_data[1][0].Vitesse+"Km/h";

//================================BATEAU========================================
    var bateau = document.getElementById('bateau_rotation');
        cap_angle = index_ani_map_data[2][0].Angle + 90;

    bateau.style.webkitTransform = 'rotate('+cap_angle+'deg)';

//================================VOILE 1=======================================
    var voiles = document.getElementById('voiles_rotation_1');
        voiles_angle = voile_1;

        var id_voiles_avant = document.getElementById('voile_avant');

        if ( voile_1 > 0){

          id_voiles_avant.style.webkitTransform = 'rotate(0.5turn)'

        }else {
          id_voiles_avant.style.webkitTransform = 'rotate(1turn)'
        }

    voiles.style.webkitTransform = 'rotate('+voiles_angle+'deg)';

//================================VOILE 2=======================================
    var voiles_2 = document.getElementById('voiles_rotation_2');
      voiles_angle2 = voile_2;

      var id_voiles_arriere = document.getElementById('voile_arriere');

      if (voile_2 > 0){

        id_voiles_arriere.style.webkitTransform = 'rotate(0.5turn)'

      }else {
        id_voiles_arriere.style.webkitTransform = 'rotate(1turn)'
      }

    voiles_2.style.webkitTransform = 'rotate('+voiles_angle2+'deg)';

//=================================SAFRAN=======================================
    var safran = document.getElementById('safran_rotation');
      safran_angle = safran_tempo;

    safran.style.webkitTransform = 'rotate('+safran_angle+'deg)';

//================================FLECHE COULEUR================================
var fleche_taille = document.getElementById('fleche_vent');

if (30 > index_ani_map_data[1][0].Vitesse && index_ani_map_data[1][0].Vitesse > 0) {
        fleche_taille.style.setProperty("-webkit-filter", "opacity(0.6) drop-shadow(0px 0px 0px green)");

} else if (60 > index_ani_map_data[1][0].Vitesse && index_ani_map_data[1][0].Vitesse > 29) {
        fleche_taille.style.setProperty("-webkit-filter", "opacity(0.6) drop-shadow(0px 0px 0px orange)");

} else if (90 > index_ani_map_data[1][0].Vitesse && index_ani_map_data[1][0].Vitesse > 59) {
        fleche_taille.style.setProperty("-webkit-filter", "opacity(0.6) drop-shadow(0px 0px 0px red)");
}

//=============================FLECHE DIRECTION=================================
    var fleche_direction = document.getElementById('fleche_vent');
        fleche_valeur_direction = index_ani_map_data[1][0].Direction + 90;

    fleche_direction.style.webkitTransform = 'rotate('+fleche_valeur_direction+'deg)';

//================================FLECHE FORCE==================================
    var fleche_taille = document.getElementById('fleche_vent');

    fleche_valeur_taille = (index_ani_map_data[1][0].Vitesse - 0) * (300 - 100) / (90 - 0) + 100;

    fleche_taille.style.width = fleche_valeur_taille+'px';

//------------------------------------------------------------------------------//
//------------------------------------------------------------------------------//
//------------------------------------------------------------------------------//

    var la_date = index_ani_map_data[0][0].date_heure.replace('.000Z', '');
    var la_date = la_date.replace('T', ' ');
    var la_date = la_date.split(' ');
//---------------------------------DEBUG----------------------------------------//
    // console.log(index_ani_map_data);
    // console.log(index_ani_map_data[0][0].date_heure);
    // console.log(la_date[0]);
    // console.log(la_date[1]);
    // console.log(index_ani_map_data[0][0].lat);
    // console.log(index_ani_map_data[0][0].lon);
    // console.log(index_ani_map_data[1][0].Vitesse);
    // console.log(index_ani_map_data[1][0].Direction);
    // console.log(index_ani_map_data[2][0].Angle);
//------------------------------------------------------------------------------//
if (i > 0) {
  deleting();
}
//------------------------------------------------------------------------------//
		marker = L.marker([index_ani_map_data[0][0].lat,index_ani_map_data[0][0].lon]).addTo(map);
		// Nous ajoutons la popup. A noter que son contenu (ici la variable ville) peut être du HTML
    marker.bindPopup("Date : "+la_date[0]+"<br>Horaire : "+la_date[1]+"<br>Lat : "+index_ani_map_data[0][0].lat+"<br>Lon : "+index_ani_map_data[0][0].lon+"<br>Vitesse : "+index_ani_map_data[1][0].Vitesse+"<br>Direction : "+index_ani_map_data[1][0].Direction+"<br>Angle : "+index_ani_map_data[2][0].Angle);
//------------------------------------------------------------------------------//
i++
}

function deleting() {
    map.removeLayer(marker);
}
