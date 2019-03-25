export default class Planet{
  constructor(name, ratio){

    this.name = name;
    this.ratio = ratio;
    this.people = [];
    this.index;
  }

  addPerson(person){
    this.people.push(person);
  }

  removePerson(person){
    let counter=0;
    while(this.people[counter]!=person)
    {
      counter++;
    }
    this.people.splice(counter, 1);
  }

  getPopulation()
  {
    return this.people.length;
  }

  // setSolarSystem(solarSystem){
  //   if(this.solarSystem!=null){
  //     this.solarSystem.planets.splice(this.index, 1);
  //   }
  //   solarSystem.planets.push(this);
  //   this.index = solarSystem.planets.length;
  //
  //
  // }
}
