const Game = require("./Game");

// creating the game
const game = new Game("game1");

// creating player
const p1 = game.addPlayer("player1");
const p2 = game.addPlayer("player2");

// adding scores
game.modifyScore(p1, 30);
game.modifyScore(p2, 10);
game.modifyScore(p1, -15);

// showing scores
game.showScore();

// showing winner
game.showWinner();
