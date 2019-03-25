import Planet from './../src/planet.js';
import Person from './../src/person.js';
import SolarSystem from './../src/solar-system.js'

describe('Planet', function(){
  let solarSystem;
  let planetName;
  let planetRatio;
  let planet;
  beforeEach(function(){
    planetName = "new Planet";
    planetRatio = 5;
    planet = new Planet(planetName, planetRatio);
    solarSystem = new SolarSystem();
    solarSystem.createPlanets();

  });

    it('Planet constructor gives planet a name.', function(){
      expect(planet.name).toEqual(planetName);
    });

    it('Planet constructor gives planet a ratio.', function(){
      expect(planet.ratio).toEqual(planetRatio);
    });

    it('Planet can have people.', function(){
      const date = new Date(1988, 9, 9);
      let person = new Person(date);
      planet.addPerson(person);
      expect(planet.people[0]).toEqual(person);
      expect(planet.people.length).toEqual(1);
    });

    it('Planet can lose people.', function(){
      const date = new Date(1988, 9, 9);
      let person = new Person(date);
      planet.addPerson(person);
      planet.removePerson(person);
      expect(planet.people.length).toEqual(0);
    })


    it('Planets are ordered by index.', function(){
      expect(solarSystem.planets[2].index).toEqual(2);
    });

    it('getPopulation returns population.', function(){
      const date = new Date(1988, 9, 9);
      let person = new Person(date);
      planet.addPerson(person);
      expect(planet.getPopulation()).toEqual(1);
    });
});
