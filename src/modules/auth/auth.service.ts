import { Injectable } from '@nestjs/common';
import { UserService, User } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && password === user.password) {
      const { password, ...res } = user;
      return res;
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.username, sub: user.userId };
    return {
      token: this.jwtService.sign(payload)
    };
  }

  async register(user: User): Promise<any> {
    return this.userService.register(user);
  }
}
