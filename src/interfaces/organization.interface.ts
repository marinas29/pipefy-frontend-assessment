import { IPipe } from './pipe.interface';

export interface IOrganization {
  name: string;
  pipes: [IPipe];
}
