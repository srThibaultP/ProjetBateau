const date_interne = new Date();                                                // Prendr la date actuelle
const date_affihage_jours = date_interne.getDate();                             // Prendre les jours
const date_affihage_mois = date_interne.getMonth() + 1;                         // Prendre les mois + 1 (1 à 12)
const date_affihage_mois_historique = date_interne.getMonth();                  // Prendre les mois (0 à 11)
const date_affihage_annees = date_interne.getFullYear();                        // Prendre l'année



if (date_affihage_mois_historique == "0") {

        var date_affihage_mois_historique_zero = date_affihage_mois_historique + 12;
        var date_affihage_annees_douze = date_affihage_annees - 1;
        var date_nouvel_an = date_affihage_annees_douze + "-" + date_affihage_mois_historique_zero + "-" + date_affihage_jours;

        var date_mise_a_jour = date_affihage_annees + "-0" + date_affihage_mois + "-" + date_affihage_jours;

        var date_mise_a_jour_historique = date_nouvel_an;

 } else {

//===========================Pour la date actuelle==============================
              if (date_affihage_mois < 10) {

                    var date_mise_a_jour = date_affihage_annees + "-0" + date_affihage_mois + "-" + date_affihage_jours;

               } else {

                    var date_mise_a_jour = date_affihage_annees + "-" + date_affihage_mois + "-" + date_affihage_jours;

              }
//==============================================================================

//==========================Pour la date minimum================================
              if (date_affihage_mois_historique < 10) {

                    var date_mise_a_jour_historique = date_affihage_annees + "-0" + date_affihage_mois_historique + "-" + date_affihage_jours;

               } else {

                    var date_mise_a_jour_historique = date_affihage_annees + "-" + date_affihage_mois_historique + "-" + date_affihage_jours;

              }
//==============================================================================
}
document.getElementById("date_today").value = date_mise_a_jour;
document.getElementById("date_today").setAttribute("max", date_mise_a_jour);
document.getElementById("date_today").setAttribute("min", date_mise_a_jour_historique);
