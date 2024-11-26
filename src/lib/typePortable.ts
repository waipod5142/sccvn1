export interface Data {
  _id: string;
  id: string;
  site: string;
  kind: string;
  area: string;
  swl: string;
  operateBy: string;
  latestInspection: string;
  nextInspection: string;
  installDiameter: string;
  actualDiameter: string;
  tolerance: string;
  result: string;
  internalInspector: string;
  remarks: string;
  owner: string;
  no: string;
  etype: string;
  esite: string;
  place: string;
  location: string;
  type: string;
  cableDiameter: string;
  email: string;
  name: string;
  defect: string;
  trans: Item[];
}

//Change only these Items
export interface Item {
  _id: string;
  id: string;
  date: string;
  email: string;
  inspector: string;
  responder?: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
  tag?: string;
  status?: string;
  collection?: string;
}
