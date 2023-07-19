import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  hospital_id?: string;
  created_at?: any;
  updated_at?: any;

  hospital?: HospitalInterface;
  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  hospital_id?: string;
}
