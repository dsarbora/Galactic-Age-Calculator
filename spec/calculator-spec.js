import Person from './../src/calculator.js';

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
  })
  it('constructor assigns age', function(){
    expect(me.age).toEqual(30);
  });
  it('constructor assigns birthdate', function(){
    expect(me.birthdate).toEqual(date);
  });
  it('yearsLeft correctly calculates death date', function(){
    expect(me.yearsLeft).toEqual(70);
  });
});
