//import './styles.css';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './person.js';
$(document).ready(function(){
  $("#ageForm").submit(function(){
    event.preventDefault();


    let day = $("#day").val();
    let month = $("#month").val();
    let year = $("#year").val();
    let birthdate = new Date(year, ++month, day);
    let person = new Person(birthdate);

    //$("#"+solarSystem.planets[i]).text(solarSystem.planets[i].name);


  });
});
