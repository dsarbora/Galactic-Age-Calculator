import Person from './../src/person.js';
import Planet from './../src/planet.js';
import SolarSystem from './../src/solar-system.js';

describe('Person', function(){
  let day;
  let month;
  let year;
  let date;
  let me;
  beforeEach(function(){
    day=9
    month = 9;
    year = 1988;
    date = new Date(year, month, day)
    me = new Person(date)
  });
  it('Constructor assigns age.', function(){
    expect(parseInt(me.age)).toEqual(30);
  });

  it('Constructor assigns birthdate.', function(){
    expect(me.birthdate).toEqual(date);
  });

  it('yearsLeft correctly calculates death date.', function(){
    expect(me.yearsLeft).toEqual(70);
  });

  it('ageOnOtherPlanet returns correct value.', function(){
    let planet = new Planet("planet x", 2);
    expect(me.ageOnOtherPlanet(planet.ratio)).toEqual(15);
  });

  it('yearsLeftOnOtherPlanet returns correct value.', function(){
    let planet = new Planet("planet x", 2);
    expect(me.yearsLeftOnOtherPlanet(planet.ratio)).toEqual(35);
  });

  it('Person can have a home planet.', function(){
    let solarSystem = new SolarSystem();
    solarSystem.createPlanets();
    let earth = solarSystem.planets[2];
    me.setPlanet(earth);
    expect(me.planet).toEqual(earth);
  });

  // it('person can have a solar system', function(){
  //   let solarSystem = new SolarSystem();
  //   solarSystem.createPlanets();
  //   let earth = solarSystem.planets[2];
  //   me.setPlanet(earth)
  //   expect(me.solarSystem).toEqual(solarSystem);
  // });

});
