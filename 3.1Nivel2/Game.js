const Player = require("./Player");

class Game {
  constructor(name) {
    this.name = name;
    this.score = [];
  }

  addPlayer(name) {
    const player = new Player(name);
    this.score.push(player);
  }
}

const game = new Game("game");
const gabriel = game.addPlayer("Gabriel");
console.log(game);
