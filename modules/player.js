export default class Player {
  constructor(name, surname, lotteryNumber) {
    this.car = name;
    this.surname = surname;
    this.lotteryNumber = lotteryNumber;
  }
  //u objektu ne trebamo imati function, mozemo direktno
  getPlayerDetails() {
    return `${this.name} ${this.surname} [${this.lotteryNumber}]`;
  }
}
