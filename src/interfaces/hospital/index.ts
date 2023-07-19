import { AppointmentInterface } from 'interfaces/appointment';
import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HospitalInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    service?: number;
  };
}

export interface HospitalGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
