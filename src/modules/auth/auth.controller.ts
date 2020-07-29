import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from './../../shared/gaurds/local-auth.gaurd';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any): Promise<any> {
    console.log(req.user);
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() bodyObj: { username: string; password: string }): Promise<any> {
    return this.authService.register(bodyObj);
  }
}
