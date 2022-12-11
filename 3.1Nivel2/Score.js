class Score {
  // THIS ALLOWS ONLY ONE INSTANCE OF THE CLASS.
  // IF IT DOESN'T EXIST IT CREATES ONE, IF IT EXISTS IT RETURNS THE SAME ONE
  static instance;
  scores = [];
  constructor() {
    if (Score.instance instanceof Score) {
      return Score.instance;
    }
    Score.instance = this;
  }

  // THIS ALLOWS A GAME TO BE ADDED TO THE SCORES ARRAY
  addToScore(game) {
    const hasGame = this.scores.includes(game);
    if (!hasGame) {
      this.scores.push(game);
    }
  }

  // COMPARES EACH SCORE IN EACH GAME LIST TO SORT THE HIGHEST ONE
  compareScore(a, b) {
    return b.pts - a.pts;
  }

  // PASSES THE compareScore AS A CALLBACK TO ACTUALLY SORT THE SCORES
  orderScore() {
    this.scores.forEach((game) => {
      game.playerList.sort(this.compareScore);
    });
  }

  // SHOWS THE SCORES ON CONSOLE
  showScore() {
    this.orderScore();
    console.log(`CURRENT SCOREBOARD`);
    this.scores.forEach((game) => {
      console.log();
      console.log(`${game.name.toUpperCase()}`);
      game.playerList.forEach((player) => {
        console.log(`${player.name}: ${player.pts}`);
      });
    });
  }

  // SHOWS THE WINNER OR WINNERS ON CONSOLE
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
