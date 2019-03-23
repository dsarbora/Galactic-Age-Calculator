import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './person.js';
import Planet from './planet.js';
import SolarSystem from './solar-system.js';

let solarSystem = new SolarSystem();
solarSystem.createPlanets();

$(document).ready(function(){
  $("#ageForm").submit(function(){
    event.preventDefault();
    if(($("#day").val()>0&&$("#day").val()<32)&&($("#month").val()>0&&$("#month").val()<13))
    {
      let day = $("#day").val();
      let month = $("#month").val();
      let year = $("#year").val();
      const birthdate = new Date(year, --month, day);
      const person = new Person(birthdate);

      solarSystem.planets.forEach(function(planet){
        $("#"+planet.name).text(person.ageOnOtherPlanet(planet.ratio));
        $("#"+planet.name+"Death").text(person.yearsLeftOnOtherPlanet(planet.ratio));

      })
    }
    else{
      alert("Please enter a valid date")
    }


  });
});
