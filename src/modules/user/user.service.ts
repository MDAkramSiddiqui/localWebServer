import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme'
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret'
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess'
      },
      {
        userId: 4,
        username: 'akram',
        password: '1234'
      }
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async register({ username, password }: { username: string; password: string }): Promise<any> {
    const userId: number = this.users[this.users.length - 1].userId + 1;
    const newUser: User = { userId, username };
    this.users.push({ password, ...newUser });
    return newUser;
  }
}
