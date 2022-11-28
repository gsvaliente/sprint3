class Score {
  static instance;
  scores = [];
  constructor() {
    if (Score.instance instanceof Score) {
      return Score.instance;
    }
    Score.instance = this;
  }

  addToScore(game) {
    const hasGame = this.scores.includes(game);
    if (!hasGame) {
      this.scores.push(game);
    }
  }

  compareScore(a, b) {
    return b.pts - a.pts;
  }

  orderScore() {
    this.scores.forEach((game) => {
      game.playerList.sort(this.compareScore);
    });
  }

  showScore() {
    this.orderScore();
    console.log(`SCOREBOARD`);
    this.scores.forEach((game) => {
      console.log(`${game.name.toUpperCase()}`);
      game.playerList.forEach((player) => {
        console.log(`${player.name}: ${player.pts}`);
      });
    });
  }

  showWinner() {
    console.log(`----------`);
    console.log(`WINNERS`);
    console.log(`----------`);
    this.scores.forEach((game) => {
      console.log(`${game.name}: ${game.playerList[0].name}`);
    });
  }
}

module.exports = Score;
