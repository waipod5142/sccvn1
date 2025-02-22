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
  structure: string;
  structureR: string;
  structureP: string;
  structureA: string;
  structureF: string;
  hydraulicSystem: string;
  hydraulicSystemR: string;
  hydraulicSystemP: string;
  hydraulicSystemA: string;
  hydraulicSystemF: string;
  towingSystem: string;
  towingSystemR: string;
  towingSystemP: string;
  towingSystemA: string;
  towingSystemF: string;
  fluids: string;
  fluidsR: string;
  fluidsP: string;
  fluidsA: string;
  fluidsF: string;
  cabin: string;
  cabinR: string;
  cabinP: string;
  cabinA: string;
  cabinF: string;
  brakes: string;
  brakesR: string;
  brakesP: string;
  brakesA: string;
  brakesF: string;
  operationSystem: string;
  operationSystemR: string;
  operationSystemP: string;
  operationSystemA: string;
  operationSystemF: string;
  warnings: string;
  warningsR: string;
  warningsP: string;
  warningsA: string;
  warningsF: string;
  otherEquipment: string;
  otherEquipmentR: string;
  otherEquipmentP: string;
  otherEquipmentA: string;
  otherEquipmentF: string;
  sanitation: string;
  sanitationR: string;
  sanitationP: string;
  sanitationA: string;
  sanitationF: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
  tag?: string;
  status?: string;
  collection?: string;
}
