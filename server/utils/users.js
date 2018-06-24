[{
    id: 'qrhoi0phwjlgyfwfd',
    name: 'Agnes',
    room: 'Hooray Hoxton'
}]

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// const me = new Person();

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
}

module.exports = {Users};