import { Data as Lifting, Item as LiftingItem } from './typeLifting';
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
import { Data as Lifering, Item as LiferingItem } from './typeLifering';
import { Data as Lifevest, Item as LifevestItem } from './typeLifevest';
import { Data as Welding, Item as WeldingItem } from './typeWelding';
import { Data as Cable, Item as CableItem } from './typeCable';
import { Data as Fan, Item as FanItem } from './typeFan';
import { Data as Light, Item as LightItem } from './typeLight';
import { Data as Cctv, Item as CctvItem } from './typeCctv';
import { Data as Equipment, Item as EquipmentItem } from './typeEquipment';
import { Data as Rescue, Item as RescueItem } from './typeRescue';

export type Machine =
  | Lifting
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
  | Lifeline
  | Lifering
  | Lifevest
  | Welding
  | Cable
  | Fan
  | Light
  | Cctv
  | Equipment
  | Rescue;

export type MachineItem =
  | LiftingItem
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
  | LifelineItem
  | LiferingItem
  | LifevestItem
  | WeldingItem
  | CableItem
  | FanItem
  | LightItem
  | CctvItem
  | EquipmentItem
  | RescueItem;

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
  | 'Lifting'
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
  | 'Lifeline'
  | 'Lifering'
  | 'Lifevest'
  | 'Welding'
  | 'Cable'
  | 'Fan'
  | 'Light'
  | 'Cctv'
  | 'Equipment'
  | 'Rescue';

export const isValidDetailType = (id: string): id is DetailTypes => {
  return [
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
    'Lifering',
    'Lifevest',
    'Welding',
    'Cable',
    'Fan',
    'Light',
    'Cctv',
    'Equipment',
    'Rescue',
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
  url?: string;
};

export type DetailType = {
  field: string;
  label: string;
};

// Constances
export const sites = ['All sites', 'HONC', 'THIV', 'CATL', 'HIEP', 'CANT'];

export const machineTitles: { [key: string]: string } = {
  vnLifting: 'Kiểm định thiết bị nâng / Lifting Equipment',
  vnForklift: 'Kiểm định thiết bị nâng / Forklift',
  vnMobile: 'Kiểm tra thiết bị di động / Mobile Equipment',
  vnVehicle: 'Kiểm tra xe cơ giới / Vehicle',
  vnExtinguisher: 'Kiểm tra bình chữa cháy / Fire Extinguisher',
  vnHydrant: 'Kiểm tra trụ nước cứu hỏa / Fire Hydrant',
  vnFoam: 'Kiểm tra Foam chữa cháy / Foam Tank',
  vnPump: 'HƯỚNG DẪN KIỂM TRA BƠM NƯỚC CHỮA CHÁY / Water Pump',
  vnValve: 'HƯỚNG DẪN KIỂM TRA VAN NGUỒN NƯỚC / Water Valve',
  vnHarness: 'HƯỚNG DẪN KIỂM TRA DÂY AN TOÀN / Safety Harness',
  vnPortable: 'HƯỚNG DẪN KIỂM TRA SÀN DI ĐỘNG / Portable Platform',
  vnLifeline: 'HƯỚNG DẪN KIỂM TRA DÂY AN TOÀN / Safety Lifeline',
  vnLifering: 'Hướng dẫn kiểm tra phao cứu sinh / Safety Life Ring',
  vnLifevest: 'Hướng dẫn kiểm tra áo phao cứu sinh / Safety Life Vest',
  vnWelding: 'Hướng dẫn kiểm tra máy hàn / Welding Machine',
  vnCable: 'Hướng dẫn kiểm tra dây nguồn / Power Cable',
  vnFan: 'Hướng dẫn kiểm tra quạt thông gió / Ventilation Fan',
  vnLight: 'Hướng dẫn kiểm tra đèn chiếu sáng di động / Mobile Light',
  vnCctv: 'Hướng dẫn kiểm tra hệ thống camera giám sát / Plant CCTV',
  vnEquipment: 'Hướng dẫn kiểm tra thiết bị di động / Portable Equipment',
  vnSocket: 'Hướng dẫn kiểm tra trung tâm ổ cắm / Socket Center',
  vnElectric: 'Hướng dẫn kiểm tra văn phòng điện / Electrical Office',
  vnElectrical: 'Hướng dẫn kiểm tra văn phòng điện / Electrical Office',
  vnSlope: 'Hướng dẫn kiểm tra đường, dốc, thùng / Road, Slope, Hopper',
  vnStock: 'Hướng dẫn kiểm tra bãi tập kết / Stockpiles',
  vnFirstaid: 'Hướng dẫn kiểm tra tủ thuốc / First Aid',
  vnAlert: 'Cảnh Báo An Toàn',

  vnlifting: 'Lifting Equipment',
  vnforklift: 'Forklift',
  vnmobile: 'Mobile Equipment',
  vnvehicle: 'Vehicle',
  vnextinguisher: 'Fire Extinguisher',
  vnhydrant: 'Fire Hydrant',
  vnfoam: 'Foam Tank',
  vnpump: 'Water Pump',
  vnvalve: 'Water Valve',
  vnharness: 'Safety Harness',
  vnportable: 'Portable Platform',
  vnlifeline: 'Safety Lifeline',
  vnlifering: 'Safety Life Ring',
  vnlifevest: 'Safety Life Vest',
  vnwelding: 'Welding Machine',
  vncable: 'Power Cable',
  vnfan: 'Ventilation Fan',
  vnlight: 'Mobile Light',
  vncctv: 'Plant CCTV',
  vnequipment: 'Portable Equipment',
  vnrescue: 'Gangway, Rescue Boat',
  vnsocket: 'Socket Center',
  vnelectrical: 'Electrical Office',
  vnslope: 'Road, Slope, Hopper',
  vnstock: 'Stockpiles',
  vnfirstaid: 'First Aid',

  //CMIC
  cmicBulk: 'ការត្រួតពិនិត្យរថយន្តមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmicbulk: 'Bulk Truck',
  cmicLoader: 'ការត្រួតពិនិត្យរថយន្តមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmicloader: 'Wheel Loader',
  cmicForklift: 'ការត្រួតពិនិត្យរថយន្តមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmicforklift: 'Forklift',
  cmicDump: 'ការត្រួតពិនិត្យរថយន្តមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmicdump: 'Dump Truck',
  cmicExcavator: 'ការត្រួតពិនិត្យរថយន្តមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmicexcavator: 'Excavator',
  cmicCrane: 'ការត្រួតពិនិត្យឧបករណ៍ជើងយកឬក្រេនមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmiccrane: 'Mobile Crane',
  cmicExtinguisher:
    'ការត្រួតពិនិត្យបំពង់ពន្លត់អគ្គីភ័យមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmicextinguisher: 'Fire Extinguisher',
  cmicHydrant:
    'ការត្រួតពិនិត្យប្រព័ន្ធទឹកបាញ់អគ្គីភ័យមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmichydrant: 'Fire Hydrant',
  cmicVehicle: 'ការត្រួតពិនិត្យយានជំនិះស្រាលមុនពេលប្រើប្រាស់ប្រចាំថ្ងៃ',
  cmicvehicle: 'Light Vehicle',
  //BD
  bdBulk: 'Bulk Truck inspection form',
  bdbulk: 'Bulk Truck',

  //LK
  lkheavy: 'Heavy Vehicle',
  lkforklift: 'Forklift',
  lkForklift: 'Forklift Inspection Form',
  lkextinguisher: 'Fire Extinguisher',
  //TH
  thTruck: 'แบบตรวจเช็ครถบรรทุกก่อนใช้งานประจำวัน',
  thCar: 'แบบตรวจเช็ครถเล็กก่อนใช้งานประจำวัน',
  thMixer: 'แบบตรวจเช็ครถโม่ก่อนใช้งาน',
  thMotorbike: 'แบบตรวจเช็คมอเตอร์ไซด์ก่อนใช้งานประจำวัน',
  thBulk: 'แบบตรวจเช็ครถซีเมนต์ผงก่อนใช้งานประจำวัน',
  thBag: 'แบบตรวจเช็ครถซีเมนต์ถุงก่อนใช้งานประจำวัน',
  thPlant: 'Daily (FM-SCCO-PROD-003 Production)',
  thAed: 'แบบตรวจเช็คเครื่อง AED ประจำเดือน',
  thAlert: 'ยืนยันการเข้าใจ Safety Alert',
  thEmergency:
    'แบบตรวจสอบป้ายทางหนีไฟ แผนผังเส้นทางหนีไฟ และจุดรวมพล F-SFF-013 ( V. 3.0;  09-09-2564)',
  thFireexit:
    'แบบตรวจสอบป้ายทางหนีไฟ แผนผังเส้นทางหนีไฟ และจุดรวมพล F-SFF-013 ( V. 3.0;  09-09-2564)',
  thtruck: 'Truck',
  thtruckact: 'ACT Truck',
  thcar: 'Car',
  thmixer: 'Mixer',
  thmotorbike: 'Motor Bike',
  thbulk: 'Bulk Cement',
  thbag: 'Bag Cement',
  thaed: 'AED',
  themergency: 'Emergency Exit',
  thfireexit: 'Fire Exit',

  thforklift: 'Forklift',
  thfrontend: 'Frontend Loader',
  thextinguisher: 'Fire Extinguisher',
  thplant: 'RMX Plant',
};

export const dailyEquipment = [
  { id: 'Lifting' },
  { id: 'Forklift' },
  { id: 'Mobile' },
  { id: 'Vehicle' },
  //LK
  { id: 'Heavy' },
];

export const monthlyEquipment = [
  { id: 'Extinguisher' },
  { id: 'Hydrant' },
  { id: 'Foam' },
  { id: 'Pump' },
  { id: 'Valve' },
];

export const quarterlyEquipment = [
  { id: 'Harness' },
  { id: 'Portable' },
  { id: 'Lifeline' },
  { id: 'Lifering' },
  { id: 'Lifevest' },
  { id: 'Welding' },
  { id: 'Cable' },
  { id: 'Fan' },
  { id: 'Light' },
  { id: 'Cctv' },
  { id: 'Equipment' },
  { id: 'Rescue' },
  { id: 'Socket' },
  { id: 'Electric' },
];

export const dailyMethod = [{ id: 'Permit' }];

export const allEquipment = [
  { id: 'Lifting' },
  { id: 'Forklift' },
  { id: 'Mobile' },
  { id: 'Vehicle' },
  { id: 'Extinguisher' },
  { id: 'Hydrant' },
  { id: 'Foam' },
  { id: 'Pump' },
  { id: 'Valve' },
  { id: 'Harness' },
  { id: 'Portable' },
  { id: 'Lifeline' },
  { id: 'Lifering' },
  { id: 'Lifevest' },
  { id: 'Welding' },
  { id: 'Cable' },
  { id: 'Fan' },
  { id: 'Light' },
  { id: 'Cctv' },
  { id: 'Equipment' },
  { id: 'Rescue' },
  { id: 'Socket' },
  { id: 'Electric' },
  //
  { id: 'Heavy' },
];

// export type ChoiceType = {
//   value: string;
//   text: string;
//   colorClass: string;
// };

// export const choices: ChoiceType[] = [
//   { value: 'Pass', text: 'Đã có', colorClass: 'bg-green-500' },
//   { value: 'NotPass', text: 'Chưa có', colorClass: 'bg-rose-500' },
//   { value: 'N/A', text: 'Không áp', colorClass: 'bg-yellow-500' },
// ];

// export const choicesLK: ChoiceType[] = [
//   { value: 'Pass', text: 'ඇත', colorClass: 'bg-green-500' },
//   { value: 'NotPass', text: 'නැත', colorClass: 'bg-rose-500' },
//   { value: 'N/A', text: 'අදාල නැත', colorClass: 'bg-yellow-500' },
// ];
