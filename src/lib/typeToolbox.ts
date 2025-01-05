export interface Data {
  _id: string;
  id: string;
  name: string;
  position: string;
  department: string;
  site: string;
  type: string;
  eSite: string;
  status: string;
  company: string;
  trans: Item[];
}

//Change only these Items
export interface Item {
  _id: string;
  id: string;
  date: string;
  alertNo?: string;
  area?: string;
  presenter: string;
  subject: string;
  learn: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
}
