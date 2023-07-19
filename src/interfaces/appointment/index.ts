import { UserInterface } from 'interfaces/user';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  user_id?: string;
  hospital_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  hospital?: HospitalInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  hospital_id?: string;
}
