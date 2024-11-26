// src/lib/typesMachine.ts
import { Data as Permit, Item as PermitItem } from './typePermit';
import {
  Data as Extinguisher,
  Item as ExtinguisherItem,
} from './typeExtinguisher';
import { Data as Hydrant, Item as HydrantItem } from './typeHydrant';
import { Data as Foam, Item as FoamItem } from './typeFoam';
import { Data as Pump, Item as PumpItem } from './typePump';
import { Data as Valve, Item as ValveItem } from './typeValve';
import { Data as Forklift, Item as ForkliftItem } from './typeForklift';
import { Data as Mobile, Item as MobileItem } from './typeMobile';
import { Data as Vehicle, Item as VehicleItem } from './typeVehicle';
import { Data as Harness, Item as HarnessItem } from './typeHarness';
import { Data as Portable, Item as PortableItem } from './typePortable';
import { Data as Lifeline, Item as LifelineItem } from './typeLifeline';

export type Machine =
  | Permit
  | Extinguisher
  | Hydrant
  | Foam
  | Pump
  | Valve
  | Forklift
  | Mobile
  | Vehicle
  | Harness
  | Portable
  | Lifeline;

export type MachineItem =
  | PermitItem
  | ExtinguisherItem
  | HydrantItem
  | FoamItem
  | PumpItem
  | ValveItem
  | ForkliftItem
  | MobileItem
  | VehicleItem
  | HarnessItem
  | PortableItem
  | LifelineItem;

export interface FilteredMachineItem {
  _id: string;
  id: string;
  date: string;
  inspector: string;
  responder?: string;
  remark: string;
  lat: number;
  lng: number;
  url?: string;
  horn?: string;
  lights?: string;
  isolator?: string;
  limitSwitch?: string;
  loadLimit?: string;
  safetyLatch?: string;
  loadChart?: string;
  email?: string;
}

export type DetailTypes =
  | 'Permit'
  | 'Extinguisher'
  | 'Hydrant'
  | 'Foam'
  | 'Pump'
  | 'Valve'
  | 'Forklift'
  | 'Mobile'
  | 'Vehicle'
  | 'Harness'
  | 'Portable'
  | 'Lifeline';

export const isValidDetailType = (id: string): id is DetailTypes => {
  return [
    'Permit',
    'Lifting',
    'Extinguisher',
    'Hydrant',
    'Foam',
    'Pump',
    'Valve',
    'Forklift',
    'Mobile',
    'Vehicle',
    'Harness',
    'Portable',
    'Lifeline',
  ].includes(id);
};

export interface MachineProps {
  dataTr: Machine[];
  item: string;
}

// Share both Machine and Man
export type MapItem = {
  lat: number | undefined;
  lng: number | undefined;
  id: string;
  inspector: string;
  responder?: string;
  date: string | number;
};

export type DetailType = {
  field: string;
  label: string;
};
