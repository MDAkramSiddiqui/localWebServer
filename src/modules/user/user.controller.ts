import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/shared/gaurds/jwt-auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('/')
  async getProfile(@Request() req): Promise<any> {
    return req.user;
  }
}
