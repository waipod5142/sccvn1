export interface Data {
  _id: string;
  id: string;
  fullname: string;
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
  alertNo: string;
  typeAccident: string;
  learn: string;
  understand: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
}
