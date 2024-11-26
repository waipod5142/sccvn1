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
  location: string;
  taskDescription: string;
  hazards: string;
  eliminateHazard: string;
  substituteHazard: string;
  guardsInPlace: string;
  proceduresRequired: string;
  extraPPE: string;
  fatigue: string;
  illness: string;
  rushing: string;
  distraction: string;
  eyesOnPath: string;
  eyesOnHands: string;
  lineOfFire: string;
  taskSafe: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
}
