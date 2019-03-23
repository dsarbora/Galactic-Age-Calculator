export default class Person{
  constructor(birthdate){
    this.birthdate = birthdate;
    this.age = (new Date()-birthdate)/31557600000;
    this.yearsLeft = 100-Math.round(this.age);
    this.planet;
    //this.solarSystem;

  }

  ageOnOtherPlanet(ratio){
    return parseInt(this.age/ratio);
  }

  yearsLeftOnOtherPlanet(ratio){
    return parseInt(this.yearsLeft/ratio);
  }

  setPlanet(planet){
    //this.solarSystem = planet.solarSystem;
    this.planet = planet;


  }

}
