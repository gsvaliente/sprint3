const Player = require("./Player");
const Score = require("./Score");

class Game {
  constructor(name) {
    this.name = name;
    this.playerList = [];
  }

  get score() {
    return new Score();
  }

  addPlayer(name) {
    const player = new Player(name);
    this.playerList.push(player);
    this.score.addToScore(this);
    return player;
  }

  modifyScore(player, amount) {
    const index = this.playerList.findIndex((name) => name === player);
    if (index !== -1) {
      this.playerList[index].pts = this.playerList[index].pts + amount;

      this.score.addToScore(this);
    }
  }

  showScore() {
    this.score.showScore();
  }

  showWinner() {
    this.score.showWinner();
  }
}

module.exports = Game;
