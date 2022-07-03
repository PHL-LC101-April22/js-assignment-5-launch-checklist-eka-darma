// Write your JavaScript code here!

window.addEventListener("load", function () {
  console.log("It's loaded");

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
  }).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets);
    let name = planet.name;
    let diameter = planet.diameter;
    let star = planet.star;
    let distance = planet.distance;
    let imageUrl = planet.image;
    let moons = planet.moons;
    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let list = document.getElementById('faultyItems');
    list.style.visibility = "hidden";
    let form = document.querySelector("form");

    let pilotName = document.querySelector("[name=pilotName]");
    let pilot = pilotName.value;

    let copilotName = document.querySelector("[name=copilotName]");
    let copilot = copilotName.value;

    let fuelInput = document.querySelector("[name=fuelLevel]");
    let fuelLevel = fuelInput.value;

    let cargoInput = document.querySelector("[name=cargoMass]");
    let cargoLevel = cargoInput.value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });















});