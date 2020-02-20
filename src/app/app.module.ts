import { Module } from '@nestjs/common';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { TenantController } from '../tenant/tenant.controller';
import { TenantService } from '../tenant/tenant.service';


@Module({
  controllers: [AuthController,TenantController],
  providers: [AuthService, TenantService],
})
export class AppModule {}
