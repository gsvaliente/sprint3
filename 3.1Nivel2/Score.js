class Score {
  static instance;
  scores = [];
  constructor() {
    if (Score.instance instanceof Score) {
      return Score.instance;
    }
    Score.instance = this;
  }

  refreshScore(game) {
    const index = this.scores.findIndex((item) => item.name === game.name);
    if (index === -1) {
      this.scores.push(game);
    } else {
      this.scores[index] = game;
    }
  }

  compareScore(a, b) {
    return b.pts - a.pts;
  }

  sortScore() {
    this.scores.forEach((game) => {
      game.players.sort(this.compareScore);
    });
  }

  showScore() {
    this.sortScore();
    this.scores.forEach((game) => {
      console.log(`${game.name}`);
      game.players.forEach((player) => {
        console.log(`${player.name}: ${player.pts}`);
      });
    });
  }
}

module.exports = Score;
