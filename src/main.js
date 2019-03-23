import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './person.js';
import Planet from './planet.js';
import SolarSystem from './solar-system.js';

$(document).ready(function(){
  $("#ageForm").submit(function(){
    event.preventDefault();
    let solarSystem = new SolarSystem();
    solarSystem.createPlanets();

    let day = $("#day").val();
    let month = $("#month").val();
    let year = $("#year").val();
    const birthdate = new Date(year, ++month, day);
    const person = new Person(birthdate);

    solarSystem.planets.forEach(function(planet){
      $("#"+planet.name).text(person.ageOnOtherPlanet(planet.ratio));
      $("#"+planet.name+"Death").text(person.yearsLeftOnOtherPlanet(planet.ratio));

    })


  });
});
