import { Injectable, Logger } from '@nestjs/common';
import { Tenant } from '../mock/index';
import { QueryDto } from './types/index';
import { ITenant } from './interfaces';

@Injectable()
export class TenantService {
  logger = new Logger();
  constructor() {}

  find(query: QueryDto, page: string, pageSize: string): any {
    try {
      // *** Backend Pagination ***
      // const to = parseInt(page) * parseInt(pageSize);
      // const from = to + parseInt(pageSize);
      // const tenants = Tenant.list.slice(to, from);
      const tenants = Tenant.list.filter(tenant => tenant.isActive);
      const totalTenants = Tenant.list.length;
      return { tenants, totalTenants };
    } catch (error) {}
  }

  insert(newTenant: ITenant): boolean {
    try {
      Tenant.list.push(newTenant);
      return true;
    } catch (error) {}
  }

  update(tenantId: string, newTenant: ITenant): boolean {
    try {
      const updatedIndex = Tenant.list.findIndex(
        tenant => tenant.id === parseInt(tenantId),
      );
      Tenant.list[updatedIndex] = newTenant;
      return true;
    } catch (error) {}
  }

  delete(tenantId: string): boolean {
    try {
      const updatedIndex = Tenant.list.findIndex(
        tenant => tenant.id === parseInt(tenantId),
      );
      Tenant.list[updatedIndex] = {
        ...Tenant.list[updatedIndex],
        isActive: false,
      };
      return true;
    } catch (error) {}
  }
}
