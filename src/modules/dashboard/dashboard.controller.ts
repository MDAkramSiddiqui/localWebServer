import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/shared/gaurds/jwt-auth.guard';

@Controller('dashboard')
export class DashboardController {
  @UseGuards(JwtGuard)
  @Get('/')
  async dashboard(): Promise<any> {
    return 'in the dashboard';
  }
}
