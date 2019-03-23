import Person from './../src/person.js';
import Planet from './../src/planet.js';

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
  it('constructor assigns age', function(){
    expect(me.age).toEqual(30);
  });
  it('constructor assigns birthdate', function(){
    expect(me.birthdate).toEqual(date);
  });
  it('yearsLeft correctly calculates death date', function(){
    expect(me.yearsLeft).toEqual(70);
  });
  it('ageOnOtherPlanet returns correct value', function(){
    let planet = new Planet("planet x", 2);
    expect(me.ageOnOtherPlanet(planet.ratio)).toEqual(15);
  });
  it('yearsLeftOnOtherPlanet returns correct value', function(){
    let planet = new Planet("planet x", 2);
    expect(me.yearsLeftOnOtherPlanet(planet.ratio)).toEqual(35);
  });
});
