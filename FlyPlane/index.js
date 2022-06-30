// Le problème à résoudre lesVous devez organiser une conférence qui se tiendra à Londres du 28 juillet au 3 août 2010
// Les 9 participants viennent respectivement de:
// Berlin (BER)
// Paris (CDG)
// Marseille (MRS)
// Lyon (LYS)
// Manchester (MAN)
// Bilbao (BIO)
// New York (JFK)
// Tunis (TUN)
// Milan (MXP)


// La conférence Se déroule du
// Du 27 juillet à 18h00 au 3 août à 14h00
// Tout le monde doit être présent à ces heures
// Se tient à 50 kilomètres de Londres
// Le trajet prend une heure aller, une heure retour
// Un mini bus prend tout le monde à l’aller et au retour
// Les coûts sont de 
// 1 € par kilomètre
// 150 € si le véhicule est rendu avant 18h00, après 18h00, une pénalité de 100 € est appliquée.
// Le loueur est à l’aéroport


// Objectif :
// Trouver les meilleurs vols (allers et retours) afin que:
// Cela vous coûte le moins possible
// Les gens voyagent le moins de temps possible
// Le temps d’attente d’une personne soit le plus petit possible
// Une personne qui a beaucoup attendu à l’aller ne doit pas attendre beaucoup au retour
const fs = require('fs');
const person = { BER: {}, BIO: {}, CDG: {}, JFK: {}, LYS: {}, MAN: {}, MRS: {}, MXP: {}, TUN: {} }
let flightsJson = {};

const createBigJson = () => {
    const folder = fs.readdirSync('./json-2010');

    folder.forEach(subFolder => {
        if (subFolder.startsWith(".")) return;
        const subF = fs.readdirSync(`./json-2010/${subFolder}`);
        subF.forEach(jsonFile => {
            if (jsonFile.startsWith(".")) return;
            const json = require(`./json-2010/${subFolder}/${jsonFile}`)
            const flights = json.flights.flight
            const key = jsonFile.split('.')[0]

            flightsJson[key] = {...flightsJson[key], flights };

        })
    })
}



createBigJson()

console.log("log", flightsJson)