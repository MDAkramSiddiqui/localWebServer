import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get('/')
  async dashboard(): Promise<any> {
    return 'in the dashboard';
  }
}
