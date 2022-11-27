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
}

module.exports = Score;
