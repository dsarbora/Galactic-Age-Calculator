import SolarSystem from './../src/solar-system.js';
import Planet from './../src/planet.js';
import Person from './../src/person.js';

describe('SolarSystem', function(){
  let solarSystem = new SolarSystem();
  solarSystem.createPlanets();
  beforeEach(function(){
    solarSystem.createPlanets();
  });
  afterEach(function(){
    solarSystem.clearAll();
  })
  it('Solar system is an object.', function(){
    expect(typeof solarSystem).toEqual('object');
  });

  it('Solar system has all the right planets.', function(){
    const listOfPlanets = ["mercury", "venus", "earth", "mars", "jupiter"];
    const listOfRatios = [.24, .62, 1, 1.88, 11.86];
    for(let i=0; i<solarSystem.planets.length; i++){
      expect(solarSystem.planets[i].name).toEqual(listOfPlanets[i]);
      expect(solarSystem.planets[i].ratio).toEqual(listOfRatios[i]);
    }
    expect(solarSystem.planets.length).toEqual(5);
 });

  it('Solar system can eject a planet.', function(){
    solarSystem.eject(solarSystem.planets[2]);
    expect(solarSystem.planets.length).toEqual(4);
    expect(solarSystem.planets[1].name).toEqual("venus");
    expect(solarSystem.planets[2].name).toEqual("mars");
  });

  it('Solar system can get planet.', function(){
    solarSystem.getPlanet(new Planet("Planet X", 18520));
    expect(solarSystem.planets[5].name).toEqual("Planet X");
    expect(solarSystem.planets.length).toEqual(6);
  });


})
