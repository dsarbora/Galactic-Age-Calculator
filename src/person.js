export default class Person{
  constructor(birthdate){
    this.birthdate = birthdate;
    this.age = (new Date()-birthdate)/31557600000;
    this.yearsLeft = 100-Math.round(this.age);

  }

  ageOnOtherPlanet(ratio){
    return parseInt(this.age/ratio);
  }

  yearsLeftOnOtherPlanet(ratio){
    return parseInt(this.yearsLeft/ratio);
  }


}
