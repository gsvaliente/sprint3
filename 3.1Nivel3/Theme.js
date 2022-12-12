const User = require("./User");

class Theme {
  constructor(name) {
    this.name = name;
    this.userList = [];
  }

  addUser(user) {
    if (!this.userList.includes(user)) {
      this.userList.push(user);
      console.log(`${user.name} has been added to '${this.name}'`);
    } else {
      console.log(`${user.name} is already a member of '${this.name}'`);
    }
  }

  sendMessage(user, message, theme) {
    console.log(`${user.name} has sent ${message}`);
  }
}

module.exports = Theme;
