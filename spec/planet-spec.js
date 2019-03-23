import Planet from './../src/planet.js'

describe('Planet', function(){
  let planetName;
  let planetRatio;
  let planet;
  beforeEach(function(){
    planetName = "new Planet";
    planetRatio = 5;
    planet = new Planet(planetName, planetRatio);

  });
    it('planet constructor gives planet a name', function(){
      expect(planet.name).toEqual(planetName);
    });

    it('planet constructor gives planet a ratio', function(){
      expect(planet.ratio).toEqual(planetRatio);
    });
    it('planet can have people', function(){
      let date = new Date(1988, 9, 9);
      let person = new Person(date);
      planet.addPerson(person);
      expect(planet.people[0]).toEqual(person);
    })
});
