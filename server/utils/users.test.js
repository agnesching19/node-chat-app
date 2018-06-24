const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  beforeEach(()=> {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Agnes',
      room: 'Nevitt House'
    }, {
      id: '2',
      name: 'Ele',
      room: 'Hoxton Hall'
    }, {
      id: '3',
      name: 'Simon',
      room: 'Nevitt House'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Simon',
      room:'Nevitt House'
    };

    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '3';
    const user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = '7';
    const user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const userId = '5';
    const user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for Nevitt House', () => {
    const userList = users.getUserList('Nevitt House');
    expect(userList).toEqual(['Agnes', 'Simon']);
  });

  it('should return names for Hoxton Hall', () => {
    const userList = users.getUserList('Hoxton Hall');
    expect(userList).toEqual(['Ele']);
  });
});