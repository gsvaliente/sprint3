const Game = require("./Game");

// creating the games
const game = new Game("game1");
const game2 = new Game("game2");

// creating player
const p1 = game.addPlayer("player1");
const p2 = game.addPlayer("player2");
const p3 = game2.addPlayer("player3");
const p4 = game2.addPlayer("player4");

// adding scores
game.modifyScore(p1, 30);
game.modifyScore(p2, 30);
game.modifyScore(p1, -15);
game2.modifyScore(p3, 100);
game2.modifyScore(p4, 70);

// showing scores
game.showScore();

// showing winner
game.showWinner();
