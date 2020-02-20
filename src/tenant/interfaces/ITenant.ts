import { HouseStatus } from '../types';
export interface ITenant {
  id: number;
  name: string;
  surname: string;
  street: string;
  houseNumber: number;
  landLordName: string;
  deposit: number;
  rent: number;
  moveInPrice: number;
  moveInDate: string;
  status: HouseStatus;
  furnished: boolean;
  isActive: boolean;
}
