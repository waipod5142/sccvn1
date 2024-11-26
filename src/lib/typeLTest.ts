export interface Data {
  _id: string;
  site: string;
  id: string;
  kind: string;
  area: string;
  swl: string;
  lastInspected: string;
  nextInspection: string;
  installDiameter: string;
  actualDiameter: string;
  tolerance: string;
  result: string;
  internalInspector: string;
  remarks: string;
  owner: string;
  trans: Item[];
}

export interface HeaderProps {
  data: {
    _id: string;
    site: string;
    id: string;
    kind: string;
    area: string;
    swl: string;
    lastInspected: string;
    nextInspection: string;
    installDiameter: string;
    actualDiameter: string;
    tolerance: string;
    result: string;
    internalInspector: string;
    remarks: string;
    owner: string;
  };
}

export interface DetailProps {
  dataTr: Item[];
}

//Change only these Items
export interface Item {
  _id: string;
  id: string;
  date: string;
  inspector: string;
  responder?: string;
  horn: string;
  hornR: string;
  lights: string;
  lightsR: string;
  isolator: string;
  isolatorR: string;
  limitSwitch: string;
  limitSwitchR: string;
  loadLimit: string;
  loadLimitR: string;
  safetyLatch: string;
  safetyLatchR: string;
  loadChart: string;
  loadChartR: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
  tag?: string;
  status?: string;
  collection?: string;
}

export interface Trans {
  _id: string;
  id: string;
  date: string;
  restaurant: string;
  token: string;
  name: string;
  location: string;
  place: string;
}
