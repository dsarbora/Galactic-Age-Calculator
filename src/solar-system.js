import Planet from './planet.js';

export default class SolarSystem{
  constructor(planets){
    this.planets =[];
  }

  createPlanets(){
    const planetFacts = [["mercury", .24], ["venus", .62], ["earth", 1], ["mars", 1.88], ["jupiter", 11.86]];
    for(let i=0; i<planetFacts.length; i++){
      let newPlanet = new Planet(planetFacts[i][0], planetFacts[i][1]);
      this.planets.push(newPlanet);
    }
  }
}
