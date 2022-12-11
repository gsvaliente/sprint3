const User = require("./User");

class Theme {
  constructor(name) {
    this.name = name;
    this.userList = [];
  }

  subscribeUser(user) {
    if (!this.userList.includes(user)) {
      this.userList.push(user);
      console.log(`${user.name} has been added to '${this.name}'`);
    } else {
      console.log(`${user.name} is already a member of '${this.name}'`);
    }
  }
}

const theme = new Theme("dogs");
const user = new User("Gabriel");
theme.subscribeUser(user);
theme.subscribeUser(user);
