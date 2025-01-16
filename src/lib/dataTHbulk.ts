export const questions = [
  {
    id: 1,
    name: 'ppe',
    question: 'หมวกนิรภัย/รองเท้านิรภัย/เสื้อสะท้อนแสง/แว่นตานิรภัย',
    howto: 'สายตา /ประเมิน',
    accept:
      'หมวกนิรภัยมีสายรัดคาง/รองเท้าไม่ขาดชำรุด/เสื้อต้องมีแถบสะถ้อนแสง20%ของเสื้อทั้งด้านหน้าและหลังมองเห็นได้ชันเจน แว่นต้องใสไม่แตกร้าว',
  },
  {
    id: 2,
    name: 'engine',
    question: 'เครื่องยนต์',
    howto: 'ฟังเสียง/ประเมิน',
    accept: 'ไม่มีเสียงดังผิดปกติของเครื่องยนต์ทั้งหมด',
  },
  {
    id: 3,
    name: 'meter',
    question: 'มาตรวัด/ไฟเตือนหน้าปัด',
    howto: 'สายตา',
    accept: 'มาตรวัดทำงานได้ปกติ ไม่มีไฟแจ้งเตือนที่แผงหน้าปัด',
  },
  {
    id: 4,
    name: 'brake',
    question: 'เบรคเท้า/เบรคมือ',
    howto: 'เหยียบเบรกเท้า/ดึงเบรกมือ',
    accept:
      'เบรกเหยียบแล้วไม่ค้างไม่จมยกเบรกแล้วแป้นเบรกคืนกลับมาตามปกติ/เบรกมือมีเสียงเมื่อทำงาน',
  },
  {
    id: 5,
    name: 'safetyBelt',
    question: 'เข็มขัดนิรภัย',
    howto: 'ทดสอบดึงกระชาก',
    accept: 'สายเข็มขัดล็อคเมื่อถูกกระชาก',
  },
  {
    id: 6,
    name: 'wiper',
    question: 'ที่ปัดน้ำฝน/น้ำฉีดกระจก',
    howto: 'สายตา',
    accept: 'ใบปัดน้ำฝนทำงานปกติ และมีน้ำฉีดกระจก',
  },
  {
    id: 7,
    name: 'horn',
    question: 'สัญญาณแตร',
    howto: 'ฟังเสียง',
    accept: 'แตรมีเสียงเมื่อกด/ไม่ใช้แตรลม',
  },
  {
    id: 8,
    name: 'sideMirror',
    question: 'กระจกรอบรถ/มองข้าง',
    howto: 'สายตา',
    accept:
      'มองกระจกโดยรอบ/กระจกใสไม่มีคราบสกปรก/ม่านบังแดดหรือสติ๊กเตอร์ไม่บดบังทรรศนวิสัย',
  },
  {
    id: 9,
    name: 'oil',
    question: 'ระดับเชื้อเพลิง',
    howto: 'สายตา /ประเมิน',
    accept:
      'ตรวจสอบไฟเตือนน้ำมัน และแก๊ส เกจน้ำมัน/แก๊สใช้งานได้ และระดับที่เพียงพอ',
  },
  {
    id: 10,
    name: 'firstAid',
    question: 'ชุดประฐมพยาบาล',
    howto: 'สายตา /ประเมิน',
    accept:
      'ตรวจสอบจำนวนและวันหมดอายุ/ยาและอุปกรณ์ปฐมพยาบาลไม่หมดอายุมีครบเพียงพอต่อการปฐมพยาบาล',
  },
  {
    id: 11,
    name: 'light',
    question: 'ไฟส่องสว่างทั้งหมด',
    howto: 'สายตา',
    accept: 'เปิดไฟทั้งหมด ไฟติดสว่างมองเห็นได้ชัดเจนทุกดวง',
  },
  {
    id: 12,
    name: 'backSilent',
    question: 'เสียงถอยหลัง/ไฟถอย',
    howto: 'สายตา/ฟังเสียง',
    accept: 'ไฟถอยติดสว่างชัดเจน/มีเสียงสัญญานเตือนถอยหลังดังขณะใส่เกียร์ถอย',
  },
  {
    id: 13,
    name: 'wheel',
    question: 'ล้อและยาง',
    howto: 'สายตา /ประเมิน',
    accept:
      'ดอกยางไม่บวมไม่มีรอยปริแตกที่แก้มยาง ร่องยางลึกไม่น้อยกว่า2มม./มีน๊อตล้อครบ',
  },
  {
    id: 14,
    name: 'spareTire',
    question: 'ยางอะไหล่/ขอนรองล้อ',
    howto: 'สายตา / ประเมิน',
    accept:
      'มียางอะไหล่/มีขอนรองล้อมีขนาดอย่างน้อย6นิ้วสภาพสมบูรณ์อย่างน้อย2อัน รถพ่วง4อัน',
  },
  {
    id: 15,
    name: 'fireExtinguisher',
    question: 'ถังดับเพลิง(15ปอนด์)',
    howto: 'สายตา / ประเมิน',
    accept:
      'เกจวัดแรงดันอยู่ในช่องสีเขียวสภาพถังพร้อมใช้งานขนาดไม่ต่ำกว่า15ปอนด์',
  },
  {
    id: 16,
    name: 'trafficCone',
    question: 'กรวยจราจรหรือป้ายสะท้อนแสง',
    howto: 'สายตา / ประเมิน',
    accept:
      'กรวยจราจรมีความสูงไม่ต่ำกว่า50ซม.ไม่สกปรกแถบสะท้อนแสงสามารถมองเห็นได้',
  },
  {
    id: 17,
    name: 'airBrake',
    question: 'หม้อลมเบรค',
    howto: 'ดึงสลัก / สายตา / ประเมิณ',
    accept: 'ดึงสลักหม้อลมเบรคเพื่อเดรนน้ำออกจากหม้อพักลมสำรอง',
  },
  {
    id: 18,
    name: 'blowingHose',
    question: 'สายเป่าปูน/จุดต่อสายรัด',
    howto: 'สายตา /ประเมิน',
    accept:
      'ท่อเป่าปูนไม่แตกฉีกขาดพับหักงอ/เข็มขัดรัดท่อตามจุดต่อต้องมีอย่างน้อย3เส้นห้ามต่อสายเกิน1จุด',
  },
  {
    id: 19,
    name: 'connector',
    question: 'สลักยึดรอยต่อแม่-ลูก',
    howto: 'สายตา / ประเมิน',
    accept: 'สลักยึดไม่สึก ไม่หลวมคลอน',
  },
  {
    id: 20,
    name: 'lip',
    question: 'ลูกยางโดนัท/ฝาครอบปลายท่อจุดร้อยซีล',
    howto: 'สายตา /ประเมิน',
    accept:
      'ไม่ฉีกขาดเปื่อยยุ่ยยางไม่แข็งกรอบ/ฝาครอบท่อไม่ชารุดและมีรูร้อยซีล/ไม่สามารถเปิดหรือถอดฝาครอบได้เมื่อร้อยซึลแล้ว',
  },
  {
    id: 21,
    name: 'campLock',
    question: 'ก้ามปูล้อคท่อเป่าปูน',
    howto: 'สายตา / ประเมิน',
    accept:
      'สลักก้ามปูปากยึดไม่อ้าพินล็อคอยู่ในสภาพดีไม่หลวมคลอนจนเกินไป เกลียวเร่งอยู่ในสภาพดีเชือกอุปกรณ์รัดกล้ามปูไม่เปื่อยขาดรุ่ย',
  },
  {
    id: 22,
    name: 'shell',
    question: 'สสภาพถังปูน',
    howto: 'สายตา / ประเมิน',
    accept: 'สภาพถังปูนอยู่ในสภาพดีไม่บุบสึกกร่อนร้าวหรือรั่ว',
  },
  {
    id: 23,
    name: 'gauge',
    question: 'เกจวัดแรงดัน',
    howto: 'สายตา / ประเมิน',
    accept: 'กระจกหน้าปัดเกจวัดไม่เรือนราง อ่านค่าได้ชัดเจน',
  },
  {
    id: 24,
    name: 'butterflyValve',
    question: 'วาล์วปีกผีเสื้อ',
    howto: 'สายตา / ประเมิน',
    accept:
      'วาล์วระบายแรงดันพร้อมใช้งานไม่คดบิดงอระบายลมได้ดีไม่มีสิ่งกีดขวางอุดตันรูระบายลม',
  },
  {
    id: 25,
    name: 'releaseValve',
    question: 'เซฟตี้วาล์ว',
    howto: 'สายตา / ฟังเสียง / ประเมิน',
    accept:
      'วาล์วระบายแรงดันพร้อมใช้งานไม่คดบิดงอ ระบายลมได้ดีไม่มีสิ่งกีดขวางอุดตันรูระบายลม สปริงไม่ล้าอยู่ในสภาพพร้อมใช้งาน',
  },
  {
    id: 26,
    name: 'handrail',
    question: 'ตรวจสอบด้วยสายตา/กางราวกันตก',
    howto: 'สายตา / ประเมิน',
    accept:
      'โยกบันไดราวกันตกขึ้น/อยู่ในสภาพแข็งแรงไม่ผุกร่อนอุปกรณ์ล็อคแข็งแรง',
  },
  {
    id: 27,
    name: 'valve',
    question: 'วาล์วหลังถัง',
    howto: 'สายตา / ประเมิน',
    accept:
      'วาล์วระบายแรงดันพร้อมใช้งานไม่คดบิดงอ ระบายลมได้ดีไม่มีสิ่งกีดขวางอุดตันรูระบายลม',
  },
  {
    id: 28,
    name: 'sealHole',
    question: 'จุดร้อยซีล',
    howto: 'สายตา / ประเมิน',
    accept: 'มีรูคล้องซีลที่ฝาหลังถังรูไม่อุดตันหรือชารุด',
  },
  {
    id: 29,
    name: 'seal',
    question: 'ซีลยางฝาถังหลังถัง',
    howto: 'สายตา / ประเมิน',
    accept: 'ไม่ฉีกขาดเปื่อยยุ่ยยางไม่แข็งกรอบ/ไม่มีร่องรูที่ลมรั่วออกมาได้',
  },
  {
    id: 30,
    name: 'harness',
    question: 'เข็มขัดกันตกหลังถัง',
    howto: 'สายตา / สัมผัส / ประเมิน',
    accept: 'เข็มขัดกันตกหลังถัง มีสภาพสมบูรณ์พร้อมใช้งาน/มีอย่างน้อย1สาย',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'ppe',
    label: '1.1 หมวกนิรภัย/รองเท้านิรภัย/เสื้อสะท้อนแสง/แว่นตานิรภัย',
  },
  { field: 'ppeR', label: '' },
  { field: 'ppeP', label: '' },
  { field: 'ppeA', label: 'Respond to defect' },
  { field: 'ppeF', label: '' },
  { field: 'engine', label: '2. เครื่องยนต์' },
  { field: 'engineR', label: '' },
  { field: 'engineP', label: '' },
  { field: 'engineA', label: 'Respond to defect' },
  { field: 'engineF', label: '' },
  { field: 'meter', label: '3. มาตรวัด/ไฟเตือนหน้าปัด' },
  { field: 'meterR', label: '' },
  { field: 'meterP', label: '' },
  { field: 'meterA', label: 'Respond to defect' },
  { field: 'meterF', label: '' },
  { field: 'brake', label: '4. เบรคเท้า/เบรคมือ' },
  { field: 'brakeR', label: '' },
  { field: 'brakeP', label: '' },
  { field: 'brakeA', label: 'Respond to defect' },
  { field: 'brakeF', label: '' },
  { field: 'safetyBelt', label: '5. เข็มขัดนิรภัย' },
  { field: 'safetyBeltR', label: '' },
  { field: 'safetyBeltP', label: '' },
  { field: 'safetyBeltA', label: 'Respond to defect' },
  { field: 'safetyBeltF', label: '' },
  { field: 'wiper', label: '6. ที่ปัดน้ำฝน/น้ำฉีดกระจก' },
  { field: 'wiperR', label: '' },
  { field: 'wiperP', label: '' },
  { field: 'wiperA', label: 'Respond to defect' },
  { field: 'wiperF', label: '' },
  { field: 'horn', label: '7. สัญญาณแตร' },
  { field: 'hornR', label: '' },
  { field: 'hornP', label: '' },
  { field: 'hornA', label: 'Respond to defect' },
  { field: 'hornF', label: '' },
  { field: 'sideMirror', label: '8. กระจกรอบรถ/มองข้าง' },
  { field: 'sideMirrorR', label: '' },
  { field: 'sideMirrorP', label: '' },
  { field: 'sideMirrorA', label: 'Respond to defect' },
  { field: 'sideMirrorF', label: '' },
  { field: 'oil', label: '9. ระดับเชื้อเพลิง' },
  { field: 'oilR', label: '' },
  { field: 'oilP', label: '' },
  { field: 'oilA', label: 'Respond to defect' },
  { field: 'oilF', label: '' },
  { field: 'firstAid', label: '10. ชุดประฐมพยาบาล' },
  { field: 'firstAidR', label: '' },
  { field: 'firstAidP', label: '' },
  { field: 'firstAidA', label: 'Respond to defect' },
  { field: 'firstAidF', label: '' },
  { field: 'light', label: '11. ไฟส่องสว่างทั้งหมด' },
  { field: 'lightR', label: '' },
  { field: 'lightP', label: '' },
  { field: 'lightA', label: 'Respond to defect' },
  { field: 'lightF', label: '' },
  { field: 'backSilent', label: '12. เสียงถอยหลัง/ไฟถอย' },
  { field: 'backSilentR', label: '' },
  { field: 'backSilentP', label: '' },
  { field: 'backSilentA', label: 'Respond to defect' },
  { field: 'backSilentF', label: '' },
  { field: 'wheel', label: '13. ล้อและยาง' },
  { field: 'wheelR', label: '' },
  { field: 'wheelP', label: '' },
  { field: 'wheelA', label: 'Respond to defect' },
  { field: 'wheelF', label: '' },
  { field: 'spareTire', label: '14. ยางอะไหล่/ขอนรองล้อ' },
  { field: 'spareTireR', label: '' },
  { field: 'spareTireP', label: '' },
  { field: 'spareTireA', label: 'Respond to defect' },
  { field: 'spareTireF', label: '' },
  { field: 'fireExtinguisher', label: '15. ถังดับเพลิง(15ปอนด์)' },
  { field: 'fireExtinguisherR', label: '' },
  { field: 'fireExtinguisherP', label: '' },
  { field: 'fireExtinguisherA', label: 'Respond to defect' },
  { field: 'fireExtinguisherF', label: '' },
  { field: 'trafficCone', label: '16. กรวยจราจรหรือป้ายสะท้อนแสง' },
  { field: 'trafficConeR', label: '' },
  { field: 'trafficConeP', label: '' },
  { field: 'trafficConeA', label: 'Respond to defect' },
  { field: 'trafficConeF', label: '' },
  { field: 'airBrake', label: '17. หม้อลมเบรค' },
  { field: 'airBrakeR', label: '' },
  { field: 'airBrakeP', label: '' },
  { field: 'airBrakeA', label: 'Respond to defect' },
  { field: 'airBrakeF', label: '' },
  { field: 'blowingHose', label: '18. สายเป่าปูน/จุดต่อสายรัด' },
  { field: 'blowingHoseR', label: '' },
  { field: 'blowingHoseP', label: '' },
  { field: 'blowingHoseA', label: 'Respond to defect' },
  { field: 'blowingHoseF', label: '' },
  { field: 'connector', label: '19. สลักยึดรอยต่อแม่-ลูก' },
  { field: 'connectorR', label: '' },
  { field: 'connectorP', label: '' },
  { field: 'connectorA', label: 'Respond to defect' },
  { field: 'connectorF', label: '' },
  { field: 'lip', label: '20. ลูกยางโดนัท/ฝาครอบปลายท่อจุดร้อยซีล' },
  { field: 'lipR', label: '' },
  { field: 'lipP', label: '' },
  { field: 'lipA', label: 'Respond to defect' },
  { field: 'lipF', label: '' },
  { field: 'campLock', label: '21. ก้ามปูล้อคท่อเป่าปูน' },
  { field: 'campLockR', label: '' },
  { field: 'campLockP', label: '' },
  { field: 'campLockA', label: 'Respond to defect' },
  { field: 'campLockF', label: '' },
  { field: 'shell', label: '22. สสภาพถังปูน' },
  { field: 'shellR', label: '' },
  { field: 'shellP', label: '' },
  { field: 'shellA', label: 'Respond to defect' },
  { field: 'shellF', label: '' },
  { field: 'gauge', label: '23. เกจวัดแรงดัน' },
  { field: 'gaugeR', label: '' },
  { field: 'gaugeP', label: '' },
  { field: 'gaugeA', label: 'Respond to defect' },
  { field: 'gaugeF', label: '' },
  { field: 'butterflyValve', label: '24. วาล์วปีกผีเสื้อ' },
  { field: 'butterflyValveR', label: '' },
  { field: 'butterflyValveP', label: '' },
  { field: 'butterflyValveA', label: 'Respond to defect' },
  { field: 'butterflyValveF', label: '' },
  { field: 'releaseValve', label: '25. เซฟตี้วาล์ว' },
  { field: 'releaseValveR', label: '' },
  { field: 'releaseValveP', label: '' },
  { field: 'releaseValveA', label: 'Respond to defect' },
  { field: 'releaseValveF', label: '' },
  { field: 'handrail', label: '26. ตรวจสอบด้วยสายตา/กางราวกันตก' },
  { field: 'handrailR', label: '' },
  { field: 'handrailP', label: '' },
  { field: 'handrailA', label: 'Respond to defect' },
  { field: 'handrailF', label: '' },
  { field: 'valve', label: '27. วาล์วหลังถัง' },
  { field: 'valveR', label: '' },
  { field: 'valveP', label: '' },
  { field: 'valveA', label: 'Respond to defect' },
  { field: 'valveF', label: '' },
  { field: 'sealHole', label: '28. จุดร้อยซีล' },
  { field: 'sealHoleR', label: '' },
  { field: 'sealHoleP', label: '' },
  { field: 'sealHoleA', label: 'Respond to defect' },
  { field: 'sealHoleF', label: '' },
  { field: 'seal', label: '29. ซีลยางฝาถังหลังถัง' },
  { field: 'sealR', label: '' },
  { field: 'sealP', label: '' },
  { field: 'sealA', label: 'Respond to defect' },
  { field: 'sealF', label: '' },
  { field: 'harness', label: '30. เข็มขัดกันตกหลังถัง' },
  { field: 'harnessR', label: '' },
  { field: 'harnessP', label: '' },
  { field: 'harnessA', label: 'Respond to defect' },
  { field: 'harnessF', label: '' },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
