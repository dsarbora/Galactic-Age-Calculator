import Planet from './planet.js';
// Unnecessary classes like this one were for more practice testing.
export default class SolarSystem{
  constructor(planets){
    this.planets =[];
  }

  createPlanets(){
    const planetFacts = [["mercury", .24], ["venus", .62], ["earth", 1], ["mars", 1.88], ["jupiter", 11.86]];
    for(let i=0; i<planetFacts.length; i++){
      let newPlanet = new Planet(planetFacts[i][0], planetFacts[i][1]);
      //newPlanet.setSolarSystem(this);
      newPlanet.index=this.planets.length;
      this.planets.push(newPlanet);
    }
  }
  clearAll(){
    this.planets = [];
  }

  getPlanet(planet){
    planet.index = this.planets.length;
    this.planets.push(planet);
  }
  //  Allows for
  eject(planet){
    this.planets.splice(planet.index, 1);
  }
}
