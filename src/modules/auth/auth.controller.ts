import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(
    @Body() bodyObj: { username: string; password: string }
  ): Promise<any> {
    if (bodyObj) return 'nothing';
    return 'something';
  }
}
