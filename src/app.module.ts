import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { FileModule } from './modules/file/file.module';
import { DashboardController } from './modules/dashboard/dashboard.controller';
import { AuthController } from './modules/auth/auth.controller';
import { UserController } from './modules/user/user.controller';
import { FileController } from './modules/file/file.controller';

@Module({
  imports: [DashboardModule, UserModule, AuthModule, FileModule],
  controllers: [AppController, AuthController, UserController, DashboardController, FileController],
  providers: [AppService]
})
export class AppModule {}
