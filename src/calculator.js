export default class Person{
  constructor(birthdate){
    this.birthdate = birthdate;
    this.age = parseInt((new Date()-birthdate)/31557600000);
    this.yearsLeft = 100-this.age;
  }




}
