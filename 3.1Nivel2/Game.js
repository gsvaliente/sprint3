const Player = require("./Player");
const Score = require("./Score");

class Game {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  get score() {
    return new Score();
  }

  addPlayer(name) {
    const player = new Player(name);
    this.players.push(player);
    this.score.refreshScore(this);
    return player;
  }

  modifyScore(player, amount) {
    const index = this.players.findIndex((name) => name === player);
    if (index !== -1) {
      this.players[index].pts = this.players[index].pts + amount;

      this.score.refreshScore(this);
    }
  }

  showScore() {
    this.score.showScore();
  }

  showWinner() {
    this.score.showWinner();
  }
}

const game = new Game("game");
const gabriel = game.addPlayer("Gabriel");
const teo = game.addPlayer("Teo");
game.modifyScore(gabriel, 20);
// game.modifyScore(gabriel, -10);
game.modifyScore(teo, 40);
// console.log(game);
game.showScore();
game.showWinner();
