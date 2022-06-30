const xml2js = require('xml2js');
const fs = require('fs');
const { throws } = require('assert');
const FOLDER_NAME = "json-2010"

/*
Vous devez organiser une conférence qui se tiendra à Londres du 28 juillet au 3 août 2010
Les 9 participants viennent respectivement de:
Berlin (BER)
Paris (CDG)
Marseille (MRS)
Lyon (LYS)
Manchester (MAN)
Bilbao (BIO)
New York (JFK)
Tunis (TUN)
Milan (MXP)
*/
class Participant {
    constructor(dest) {
        this.dest = dest;
    }
}


const event_start = new Date("2010-07-27T17:00:00")
const event_end = new Date("2010-08-03T13:00:00")


//read json file
const flightsData = {
    "flights": {
        "flight": [
            {
                "price": [
                    "96"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T16:40:00"
                ],
                "arrive": [
                    "2010-07-26T17:35:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "96"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T19:55:00"
                ],
                "arrive": [
                    "2010-07-26T20:55:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "96"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T07:20:00"
                ],
                "arrive": [
                    "2010-07-26T08:25:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "100"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T18:10:00"
                ],
                "arrive": [
                    "2010-07-26T19:05:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "100"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T21:20:00"
                ],
                "arrive": [
                    "2010-07-26T22:15:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "114"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T11:05:00"
                ],
                "arrive": [
                    "2010-07-26T12:05:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "114"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T14:25:00"
                ],
                "arrive": [
                    "2010-07-26T15:25:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "118"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T13:10:00"
                ],
                "arrive": [
                    "2010-07-26T14:05:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "137"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T12:20:00"
                ],
                "arrive": [
                    "2010-07-26T13:15:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "140"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T18:10:00"
                ],
                "arrive": [
                    "2010-07-26T19:05:00"
                ],
                "airline_display": [
                    "Lufthansa"
                ]
            },
            {
                "price": [
                    "140"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T21:20:00"
                ],
                "arrive": [
                    "2010-07-26T22:15:00"
                ],
                "airline_display": [
                    "Lufthansa"
                ]
            },
            {
                "price": [
                    "144"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T13:10:00"
                ],
                "arrive": [
                    "2010-07-26T14:05:00"
                ],
                "airline_display": [
                    "Lufthansa"
                ]
            },
            {
                "price": [
                    "159"
                ],
                "stops": [
                    "1"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T13:50:00"
                ],
                "arrive": [
                    "2010-07-26T16:55:00"
                ],
                "airline_display": [
                    "SAS"
                ]
            },
            {
                "price": [
                    "195"
                ],
                "stops": [
                    "1"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T15:45:00"
                ],
                "arrive": [
                    "2010-07-26T19:10:00"
                ],
                "airline_display": [
                    "SAS"
                ]
            },
            {
                "price": [
                    "217"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T07:25:00"
                ],
                "arrive": [
                    "2010-07-26T08:25:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            },
            {
                "price": [
                    "93"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T16:40:00"
                ],
                "arrive": [
                    "2010-07-26T17:35:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "93"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T19:55:00"
                ],
                "arrive": [
                    "2010-07-26T20:55:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "93"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T07:20:00"
                ],
                "arrive": [
                    "2010-07-26T08:25:00"
                ],
                "airline_display": [
                    "British Airways"
                ]
            },
            {
                "price": [
                    "100"
                ],
                "stops": [
                    "0"
                ],
                "orig": [
                    "TXL"
                ],
                "dest": [
                    "LHR"
                ],
                "depart": [
                    "2010-07-26T18:10:00"
                ],
                "arrive": [
                    "2010-07-26T19:05:00"
                ],
                "airline_display": [
                    "bmi"
                ]
            }]
    }
}


function getPointsArrivalRandom(flightsData) {
    let placeOfEl, flight, departure, arrival, cpt = 0

    do {
        placeOfEl = Math.floor(Math.random() * flightsData.flights.flight.length);
        flight = flightsData.flights.flight[placeOfEl]
    
        departure = new Date(flight.depart[0])
        arrival = new Date(flight.arrive[0])
        cpt++    
        if (cpt == 10) return
    } while (event_start < arrival);


    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.arrive[0]).getHours() > 17 ? 150 : 0


    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, placeOfEl }
}

function getPointsArrivalByPosition(flightsData, position) {
    let flight, departure, arrival
    flight = flightsData.flights.flight[position]

    departure = new Date(flight.depart[0])
    arrival = new Date(flight.arrive[0])
    if (event_start < arrival) return

    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.arrive[0]).getHours() > 17 ? 150 : 0

    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, position}
}

function getPointsDepartByPosition(flightsData, position) {
    let flight, departure, arrival
    flight = flightsData.flights.flight[position]

    departure = new Date(flight.depart[0])
    arrival = new Date(flight.arrive[0])
    if (event_end > departure) return

    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.depart[0]).getHours() > 17 ? 100 : 0

    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, position}
}





function getPointsDepartRandom(flightsData) {
    let placeOfEl, flight, departure, arrival, cpt = 0

    do {
        placeOfEl = Math.floor(Math.random() * flightsData.flights.flight.length);
        flight = flightsData.flights.flight[placeOfEl]
    
        departure = new Date(flight.depart[0])
        arrival = new Date(flight.arrive[0])
        cpt++    
        if (cpt == 10) return
    } while (event_end > departure);

    var hoursOfTravel = Math.abs(departure - arrival) / 36e5;

    let busPoint = new Date(flight.depart[0]).getHours() > 17 ? 100 : 0


    let hoursOfTravelPoints = hoursOfTravel * 50
    let pricePoint = parseInt(flight.price[0])
    let stopPoint = flight.stops[0] * 70
    let points = pricePoint + hoursOfTravelPoints + busPoint + stopPoint

    return { points, flight, placeOfEl}
}



console.log(getPointsArrivalRandom(flightsData));
console.log(getPointsDepartRandom(flightsData));
