class User {
  constructor(name) {
    this.name = name;
  }

  sendMessage(theme, message) {
    console.log(`${this.name} has posted: ${message}`);
  }
}

module.exports = User;
