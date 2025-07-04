export const questions = [
  {
    id: 1,
    name: 'machinePlacement',
    question: 'พื้นที่วางเครื่อง / การติดตั้งประกอบ',
    howto: 'ตรวจสอบด้วยสายตา',
    accept: 'ติดตั้งถูกต้อง ไม่มีสิ่งกีดขวาง',
  },
  {
    id: 2,
    name: 'structure',
    question: 'โครงสร้างอุปกรณ์ ฝาปิด ประตู หูยก ตัวล็อค',
    howto: 'ตรวจสอบด้วยสายตา',
    accept: 'ไม่มีความเสียหาย',
  },
  {
    id: 3,
    name: 'wiring',
    question: 'ต่อสายไฟถูกต้องและติดตั้งสายดินทุกครั้ง',
    howto: 'ตรวจสอบการเดินสาย',
    accept: 'สายไฟต่อถูกต้องและมีสายดิน',
  },
  {
    id: 4,
    name: 'cableCondition',
    question: 'สภาพสายไฟ ขนาดสายไฟ การกวดขันแน่น',
    howto: 'ตรวจสอบด้วยสายตาและสัมผัส',
    accept: 'สายไฟไม่มีรอยชำรุด กวดขันแน่น',
  },
  {
    id: 5,
    name: 'switches',
    question: 'ปุ่มสวิตช์ต่างๆมีภาษาไทยกำกับ ไม่ชำรุด',
    howto: 'ทดสอบการใช้งาน',
    accept: 'ปุ่มใช้งานได้และมีฉลากภาษาไทย',
  },
  {
    id: 6,
    name: 'airLeak',
    question: 'จุดเชื่อมต่อลมจากเครื่องไม่มีจุดรั่วซึม',
    howto: 'ฟังเสียงรั่ว ตรวจสอบด้วยน้ำสบู่',
    accept: 'ไม่มีลมรั่วซึม',
  },
  {
    id: 7,
    name: 'controlScreen',
    question: 'หน้าจอควบคุม แสดง Parameter ปรกติ',
    howto: 'ตรวจสอบค่าบนหน้าจอ',
    accept: 'ค่าปรกติ ไม่ผิดพลาด',
  },
  {
    id: 8,
    name: 'oilLeak',
    question: 'ไม่มีการรั่วซึมของน้ำมัน Compressor',
    howto: 'ตรวจสอบรอยน้ำมัน',
    accept: 'ไม่มีน้ำมันรั่วซึม',
  },
  {
    id: 9,
    name: 'airInlet',
    question: 'ไม่มีการอุดตันจากสิ่งแปลกปลอมทางลมเข้า',
    howto: 'ตรวจสอบช่องลมเข้า',
    accept: 'ช่องลมสะอาด ไม่มีสิ่งอุดตัน',
  },
  {
    id: 10,
    name: 'pressure',
    question: 'Pressure อยู่ระหว่าง 0.7-0.8Mpa',
    howto: 'อ่านค่าจากเกจวัดแรงดัน',
    accept: 'แรงดันอยู่ในช่วงที่กำหนด',
  },
  {
    id: 11,
    name: 'safetyValve',
    question: 'ต้องติดตั้งวาล์วนิรภัย',
    howto: 'ตรวจสอบการติดตั้ง',
    accept: 'มีวาล์วนิรภัยติดตั้งถูกต้อง',
  },
  {
    id: 12,
    name: 'noiseVibration',
    question: 'ไม่มีเสียงดังและการสั่นที่ผิดปกติ',
    howto: 'สังเกตเสียงและแรงสั่นสะเทือน',
    accept: 'ไม่มีเสียงผิดปกติหรือสั่นแรง',
  },
  {
    id: 13,
    name: 'fireExtinguisher',
    question: 'มีถังดับเพลิงวางบริเวณที่ตั้งเครื่อง',
    howto: 'ตรวจสอบตำแหน่งถังดับเพลิง',
    accept: 'มีถังดับเพลิงและอยู่ในตำแหน่งเหมาะสม',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'email', label: 'ผู้รับผิดชอบ - Responsible person' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'machinePlacement',
    label: '1. พื้นที่วางเครื่อง / การติดตั้งประกอบ',
  },
  { field: 'machinePlacementR', label: '' },
  { field: 'machinePlacementP', label: '' },
  { field: 'machinePlacementA', label: 'Respond to defect' },
  { field: 'machinePlacementF', label: '' },
  { field: 'structure', label: '2. โครงสร้างอุปกรณ์ ฝาปิด ประตู หูยก ตัวล็อค' },
  { field: 'structureR', label: '' },
  { field: 'structureP', label: '' },
  { field: 'structureA', label: 'Respond to defect' },
  { field: 'structureF', label: '' },
  { field: 'wiring', label: '3. ต่อสายไฟถูกต้องและติดตั้งสายดินทุกครั้ง' },
  { field: 'wiringR', label: '' },
  { field: 'wiringP', label: '' },
  { field: 'wiringA', label: 'Respond to defect' },
  { field: 'wiringF', label: '' },
  { field: 'cableCondition', label: '4. สภาพสายไฟ ขนาดสายไฟ การกวดขันแน่น' },
  { field: 'cableConditionR', label: '' },
  { field: 'cableConditionP', label: '' },
  { field: 'cableConditionA', label: 'Respond to defect' },
  { field: 'cableConditionF', label: '' },
  { field: 'switches', label: '5. ปุ่มสวิตช์ต่างๆมีภาษาไทยกำกับ ไม่ชำรุด' },
  { field: 'switchesR', label: '' },
  { field: 'switchesP', label: '' },
  { field: 'switchesA', label: 'Respond to defect' },
  { field: 'switchesF', label: '' },
  { field: 'airLeak', label: '6. จุดเชื่อมต่อลมจากเครื่องไม่มีจุดรั่วซึม' },
  { field: 'airLeakR', label: '' },
  { field: 'airLeakP', label: '' },
  { field: 'airLeakA', label: 'Respond to defect' },
  { field: 'airLeakF', label: '' },
  { field: 'controlScreen', label: '7. หน้าจอควบคุม แสดง Parameter ปรกติ' },
  { field: 'controlScreenR', label: '' },
  { field: 'controlScreenP', label: '' },
  { field: 'controlScreenA', label: 'Respond to defect' },
  { field: 'controlScreenF', label: '' },
  { field: 'oilLeak', label: '8. ไม่มีการรั่วซึมของน้ำมัน Compressor' },
  { field: 'oilLeakR', label: '' },
  { field: 'oilLeakP', label: '' },
  { field: 'oilLeakA', label: 'Respond to defect' },
  { field: 'oilLeakF', label: '' },
  { field: 'airInlet', label: '9. ไม่มีการอุดตันจากสิ่งแปลกปลอมทางลมเข้า' },
  { field: 'airInletR', label: '' },
  { field: 'airInletP', label: '' },
  { field: 'airInletA', label: 'Respond to defect' },
  { field: 'airInletF', label: '' },
  { field: 'pressure', label: '10. Pressure อยู่ระหว่าง 0.7-0.8Mpa' },
  { field: 'pressureR', label: '' },
  { field: 'pressureP', label: '' },
  { field: 'pressureA', label: 'Respond to defect' },
  { field: 'pressureF', label: '' },
  { field: 'safetyValve', label: '11. ต้องติดตั้งวาล์วนิรภัย' },
  { field: 'safetyValveR', label: '' },
  { field: 'safetyValveP', label: '' },
  { field: 'safetyValveA', label: 'Respond to defect' },
  { field: 'safetyValveF', label: '' },
  { field: 'noiseVibration', label: '12. ไม่มีเสียงดังและการสั่นที่ผิดปกติ' },
  { field: 'noiseVibrationR', label: '' },
  { field: 'noiseVibrationP', label: '' },
  { field: 'noiseVibrationA', label: 'Respond to defect' },
  { field: 'noiseVibrationF', label: '' },
  {
    field: 'fireExtinguisher',
    label: '13. มีถังดับเพลิงวางบริเวณที่ตั้งเครื่อง',
  },
  { field: 'fireExtinguisherR', label: '' },
  { field: 'fireExtinguisherP', label: '' },
  { field: 'fireExtinguisherA', label: 'Respond to defect' },
  { field: 'fireExtinguisherF', label: '' },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
