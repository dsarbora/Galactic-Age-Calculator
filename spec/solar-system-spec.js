import SolarSystem from './../src/solar-system.js';
import Planet from './../src/planet.js';

describe('SolarSystem', function(){
  let solarSystem;
  beforeEach(function(){
    solarSystem = new SolarSystem("hi");
    solarSystem.createPlanets();

  });
  it('solar system is object', function(){
    expect(typeof solarSystem).toEqual('object');
  });

  it('solar system can have planets', function(){
    expect(solarSystem.planets.length).toEqual(5);
 });

  it('solar system has right planets', function(){
    const listOfPlanets = ["mercury", "venus", "earth", "mars", "jupiter"];
    const listOfRatios = [.24, .62, 1, 1.88, 11.86];
    for(let i=0; i<solarSystem.planets.length; i++){
      expect(solarSystem.planets[i].name).toEqual(listOfPlanets[i]);
      expect(solarSystem.planets[i].ratio).toEqual(listOfRatios[i]);
    }
  });


})
