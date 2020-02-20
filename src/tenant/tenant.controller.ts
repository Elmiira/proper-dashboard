import {
  Controller,
  Post,
  Delete,
  Param,
  Query,
  Put,
  Body,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { IPagination } from './interfaces';
import { QueryDto, TenantDTO } from './types';

@Controller('/tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post('/search')
  getTenants(@Body() query: QueryDto, @Query() pagination: IPagination): any {
    const { page, pageSize } = pagination;
    return this.tenantService.find(query, page, pageSize);
  }

  @Post()
  addTenants(@Body() tenant: any): boolean {
    return this.tenantService.insert(tenant);
  }

  @Put('/:id')
  editTenant(@Param('id') tenantId: string, @Body() newTenant: TenantDTO): boolean {
    return this.tenantService.update(tenantId, newTenant);
  }

  @Delete('/:id')
  removeTenants(@Param('id') tenantId: string): any {
    return this.tenantService.delete(tenantId);
  }
}
