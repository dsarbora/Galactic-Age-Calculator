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
    expect(solarSystem.planets[0].name).toEqual("mercury");

  });
})
