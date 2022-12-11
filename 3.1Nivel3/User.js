class User {
  constructor(name) {
    this.name = name;
  }

  showUser(name) {
    console.log(`${name} has been added to `);
  }
}

module.exports = User;
