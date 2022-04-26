import Player from "./player";

export default class Lottery {
  constructor(people) {
    this.people = people;
    this.players = [];
    this.winningCombination = [];
  }

  getLotteryNumbers() {
    let lotteryNumbers = [];

    while (lotteryNumbers.length < 4) {
      let number = Math.floor(Math.random() * 7) + 1; //random number
    }

    if (lotteryNumbers.indexOf(number) === -1) {
      lotteryNumbers.push(number);
    }
    return lotteryNumbers.sort();
  }

  generatePlayers() {
    this.people.map((person) => {
      const name = person.name; //iz trenutnog objekta persona name spremamo u const name, dafak ???????????????
      const surname = person.surname;
      const lotteryNumbers = this.getLotteryNumbers;

      const player = new Player(name, surname, lotteryNumbers);

      this.players.push(player);
    });
  }

  getwinningCombination() {
    this.winningCombination = this.lotteryNumbers();
  }

  startDrawing() {
    this.generatePlayers();
    this.getwinningCombination();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const winners = this.players.filter((player) =>
          player.lotteryNumbers.every(
            (lotteryNumber, index) =>
              lotteryNumber === this.winningCombination[index]
          )
        );

        const result = {
          winningCombination: this.winningCombination,
          winners,
        };

        if (winners.length > 0) {
          resolve(result);
        } else {
          reject(result);
        }
      }, 2000);
    });
  }
}
