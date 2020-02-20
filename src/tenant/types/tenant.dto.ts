import { HouseStatus } from '.';

export class TenantDTO {
  readonly id: number;
  readonly name: string;
  readonly surname: string;
  readonly street: string;
  readonly houseNumber: number;
  readonly landLordName: string;
  readonly moveInDate: string;
  readonly moveInPrice: number;
  readonly deposit: number;
  readonly rent: number;
  readonly status: HouseStatus;
  readonly furnished: boolean;
  readonly isActive: boolean;
}
