// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter} </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src=${imageUrl}>
               `
};

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return 'Empty';
    } else if ((!isNaN(Number(testInput)))) {
        return 'Is a Number';
    } else {
        return 'Not a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById('fuelStatus');
   let launchStatus = document.getElementById('launchStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   list.style.visibility = "visible";

    let pilotInput = validateInput(pilot);
    let copilotInput = validateInput(copilot);
    let fuelInput = validateInput(fuelLevel);
    let cargoInput = validateInput(cargoLevel);

    if (pilotInput === "Empty" || copilotInput === "Empty" || fuelInput === "Empty" || cargoInput ==="Empty") {
        alert("Fields can not be left empty");
    } else if (pilotInput === "Is a Number" || copilotInput === "Is a Number") {     
        alert("Pilot or Copilot must be String")
    } else if (fuelInput === "Not a Number" || cargoInput === "Not a Number") {
        alert("Fuel and Cargo must be Number")
    } else {

        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
        list.style.visibility = 'hidden';
    } 

       if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = `Not enough fuel`;
        list.style.visibility = 'visible';
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = `red`;
    } else if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = `Cargo too heavy`;
        list.style.visibility = `visible`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = `red`;
    } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
        list.style.visibility = `visible`;
        fuelStatus.innerHTML = `Enough fuel`;
        cargoStatus.innerHTML = `Cargo light enough for takeoff`;
        launchStatus.innerHTML = `Shuttle ready for launch`;
        launchStatus.style.color = `green`;
    }

        
    }
    



async function myFetch() {
    let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let idx = Math.floor(Math.random() * planets.length);
    return planets[idx];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
