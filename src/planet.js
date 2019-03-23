export default class Planet{
  constructor(name, ratio){
    this.name = name;
    this.ratio = ratio;
    this.people = [];
  }

  addPerson(person){
    this.people.push(person);
  }
}
