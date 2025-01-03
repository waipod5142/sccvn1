export const questions = [
  {
    id: 1,
    name: 'weightSign',
    question: 'หมายเลขรถและป้ายบอกพิกัดน้ำหนักยก ต้องชัดเจน',
    howto: 'สายตา',
    accept: 'มองเห็นชัดเจนทั้งด้านข้างซ้าย-ขวา',
  },
  {
    id: 2,
    name: 'forkPanel',
    question: 'แผงงาด้านหน้า ด้านข้าง ไม่ชำรุด',
    howto: 'สายตา',
    accept: 'ไม่ชำรุด ไม่แตกร้าว',
  },
  {
    id: 3,
    name: 'fork',
    question: 'สภาพงาไม่ชำรุดและสลักล็อคงามั่นคงแข็งแรง',
    howto: 'สายตา / สัมผัส',
    accept: 'ไม่ชำรุด ล็อคแน่น แข็งแรง',
  },
  {
    id: 4,
    name: 'wheelNut',
    question: 'น็อตล้อทั้ง 4 ล้อ แข็งแรง ไม่หลวม ครบถ้วน',
    howto: 'สายตา / สัมผัส',
    accept: 'แข็งแรง ไม่หลวม จำนวนครบถ้วน',
  },
  {
    id: 5,
    name: 'tyre',
    question: 'ยางล้อรถอยู่ในสภาพดี ไม่ขาด ไม่บิ่น ไม่แตก',
    howto: 'ดูสภาพยาง',
    accept: 'ไม่ขาด ไม่บิ่น ไม่แตก ไม่ล่อน',
  },
  {
    id: 6,
    name: 'roof',
    question: 'โครงหลังคาและแผ่นปิดด้านบนต้องไม่ชำรุด',
    howto: 'สายตา / สัมผัส',
    accept: 'แข็งแรง ไม่ชำรุด',
  },
  {
    id: 7,
    name: 'mirror',
    question: 'กระจกมอง ซ้าย-ขวา-หลัง ใช้งานได้ปกติ',
    howto: 'สายตา',
    accept: 'สะอาดใส ไม่แตก ไม่ชำรุด ปรับตำแหน่งได้',
  },
  {
    id: 8,
    name: 'seat',
    question: 'เบาะนั่งอยู่ในสภาพไม่ชำรุด',
    howto: 'สายตา / สัมผัส',
    accept: 'ไม่ฉีกขาด ไม่ชำรุด ติดตั้งมั่นคง',
  },
  {
    id: 9,
    name: 'belt',
    question: 'เข็มขัดนิรภัยใช้งานได้ดี กระชับ',
    howto: 'สายตา / สัมผัส',
    accept: 'กระชับ ปรับได้ ล็อคและปลดล็อคได้',
  },
  {
    id: 10,
    name: 'hydraulic',
    question: 'ระบบไฮดรอลิค ข้อต่อต่างๆ ไม่รั่วซึม',
    howto: 'สายตา',
    accept: 'ไม่มีรั่วซึม',
  },
  {
    id: 11,
    name: 'breakRubber',
    question: 'แป้นเหยียบเบรก/คันเร่งมียางกันลื่น',
    howto: 'สายตา',
    accept: 'มียางกันลื่น',
  },
  {
    id: 12,
    name: 'extinguisher',
    question: 'สภาพถังดับเพลิงปกติ พร้อมใช้งาน',
    howto: 'สายตา / สัมผัส',
    accept: 'เกจชี้ในช่องสีเขียว มีเข็มขัดรัดสลัก พร้อมใช้',
  },
  {
    id: 13,
    name: 'fuel',
    question: 'ระดับน้ำมันเชื้อเพลิง/LPG พร้อมใช้งาน ไม่รั่วซึม',
    howto: 'สายตา / สัมผัส',
    accept: 'พร้อมใช้งาน ไม่รั่วซึม',
  },
  {
    id: 14,
    name: 'lub',
    question:
      'ระดับน้ำมันเบรค น้ำมันเครื่อง น้ำมันพาวเวอร์ และน้ำหม้อน้ำ พร้อมใช้งาน ไม่รั่วซึม',
    howto: 'สายตา / สัมผัส',
    accept: 'อยู่ระหว่างขีด Max-Min และไม่รั่วซึม',
  },
  {
    id: 15,
    name: 'engine',
    question: 'ห้องเครื่องยนต์สะอาด',
    howto: 'สายตา',
    accept: 'สะอาด ไม่มีวัสดุอื่นที่ติดไฟได้',
  },
  {
    id: 16,
    name: 'battery',
    question: 'ขั้วแบตเตอรี่สะอาด',
    howto: 'สายตา / สัมผัส',
    accept: 'สะอาด ไม่มีคราบสกปรก มีฝาครอบ',
  },
  {
    id: 17,
    name: 'lpg',
    question: 'ถัง LPG ติดตั้งถูกต้อง ล็อคแน่น (ถ้ามี)',
    howto: 'สายตา / สัมผัส',
    accept: 'ติดตั้งถูกต้อง ล็อคแน่น',
  },
  {
    id: 18,
    name: 'power',
    question: 'ระบบส่งกำลัง (ชุดคันเร่ง เกียร์) ใช้ได้ปกติ',
    howto: 'สัมผัส',
    accept: 'ใช้ได้ปกติ',
  },
  {
    id: 19,
    name: 'breakSystem',
    question: 'เบรกมือ เบรกเท้า ไฟเบรก ปกติ',
    howto: 'สัมผัส / สายตา',
    accept: 'หยุดนิ่ง รถไม่ไหล ไฟติดพร้อมกับเบรกเท้า',
  },
  {
    id: 20,
    name: 'steeringWheel',
    question: 'ระยะฟรีของพวงมาลัย ปกติ',
    howto: 'สัมผัส',
    accept: 'ไม่สั่นคลอน หมุนซ้าย ขวาบังคับล้อได้ปกติ',
  },
  {
    id: 21,
    name: 'balance',
    question: 'แรงตึงโซ่ 2 ข้างเท่ากัน',
    howto: 'สายตา',
    accept: 'ความตึงโซ่เท่ากันทั้ง 2 ข้าง',
  },
  {
    id: 22,
    name: 'headLight',
    question: 'ไฟหน้า ซ้าย-ขวา ปกติ',
    howto: 'สายตา',
    accept: 'ไฟติดชัดเจนทุกดวง',
  },
  {
    id: 23,
    name: 'turnLight',
    question: 'ไฟเลี้ยว ซ้าย-ขวา ปกติ',
    howto: 'สายตา',
    accept: 'ไฟติดชัดเจน กระพริบเป็นจังหวะทุกดวง',
  },
  {
    id: 24,
    name: 'flashLight',
    question: 'ไฟวับวาบ ใช้งานได้ปกติ',
    howto: 'สายตา',
    accept: 'ไฟติด หมุนกระพริบเป็นจังหวะ ไม่ติดค้าง',
  },
  {
    id: 25,
    name: 'reverseLight',
    question: 'ไฟถอยหลังปกติ',
    howto: 'สายตา',
    accept: 'ไฟติดชัดเจนทุกดวง อัตโนมัติขณะใช้เกียร์ถอย',
  },
  {
    id: 26,
    name: 'reverseSound',
    question: 'สัญญาณเสียงถอยหลังปกติ',
    howto: 'ฟังเสียง',
    accept: 'เสียงดังชัดเจน อัตโนมัติขณะใช้เกียร์ถอย',
  },
  {
    id: 27,
    name: 'horn',
    question: 'สัญญาณเสียงแตรดังชัดเจน',
    howto: 'ฟังเสียง',
    accept: 'ดังชัดเจน',
  },
  {
    id: 28,
    name: 'speedLimit',
    question: 'สัญญาณเสียง speed limit ดังปกติ (ถ้ามี)',
    howto: 'ฟังเสียง',
    accept: 'ดังปกติ',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'email', label: 'ผู้รับผิดชอบ - Responsible person' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'weightSign',
    label: '1. หมายเลขรถและป้ายบอกพิกัดน้ำหนักยก ต้องชัดเจน',
  },
  { field: 'weightSignR', label: '' },
  { field: 'weightSignP', label: '' },
  { field: 'weightSignA', label: 'Respond to defect' },
  { field: 'weightSignF', label: '' },
  { field: 'forkPanel', label: '2. แผงงาด้านหน้า ด้านข้าง ไม่ชำรุด' },
  { field: 'forkPanelR', label: '' },
  { field: 'forkPanelP', label: '' },
  { field: 'forkPanelA', label: 'Respond to defect' },
  { field: 'forkPanelF', label: '' },
  { field: 'fork', label: '3. สภาพงาไม่ชำรุดและสลักล็อคงามั่นคงแข็งแรง' },
  { field: 'forkR', label: '' },
  { field: 'forkP', label: '' },
  { field: 'forkA', label: 'Respond to defect' },
  { field: 'forkF', label: '' },
  { field: 'wheelNut', label: '4. น็อตล้อทั้ง 4 ล้อ แข็งแรง ไม่หลวม ครบถ้วน' },
  { field: 'wheelNutR', label: '' },
  { field: 'wheelNutP', label: '' },
  { field: 'wheelNutA', label: 'Respond to defect' },
  { field: 'wheelNutF', label: '' },
  { field: 'tyre', label: '5. ยางล้อรถอยู่ในสภาพดี ไม่ขาด ไม่บิ่น ไม่แตก' },
  { field: 'tyreR', label: '' },
  { field: 'tyreP', label: '' },
  { field: 'tyreA', label: 'Respond to defect' },
  { field: 'tyreF', label: '' },
  { field: 'roof', label: '6. โครงหลังคาและแผ่นปิดด้านบนต้องไม่ชำรุด' },
  { field: 'roofR', label: '' },
  { field: 'roofP', label: '' },
  { field: 'roofA', label: 'Respond to defect' },
  { field: 'roofF', label: '' },
  { field: 'mirror', label: '7. กระจกมอง ซ้าย-ขวา-หลัง ใช้งานได้ปกติ' },
  { field: 'mirrorR', label: '' },
  { field: 'mirrorP', label: '' },
  { field: 'mirrorA', label: 'Respond to defect' },
  { field: 'mirrorF', label: '' },
  { field: 'seat', label: '8. เบาะนั่งอยู่ในสภาพไม่ชำรุด' },
  { field: 'seatR', label: '' },
  { field: 'seatP', label: '' },
  { field: 'seatA', label: 'Respond to defect' },
  { field: 'seatF', label: '' },
  { field: 'belt', label: '9. เข็มขัดนิรภัยใช้งานได้ดี กระชับ' },
  { field: 'beltR', label: '' },
  { field: 'beltP', label: '' },
  { field: 'beltA', label: 'Respond to defect' },
  { field: 'beltF', label: '' },
  { field: 'hydraulic', label: '10. ระบบไฮดรอลิค ข้อต่อต่างๆ ไม่รั่วซึม' },
  { field: 'hydraulicR', label: '' },
  { field: 'hydraulicP', label: '' },
  { field: 'hydraulicA', label: 'Respond to defect' },
  { field: 'hydraulicF', label: '' },
  { field: 'breakRubber', label: '11. แป้นเหยียบเบรก/คันเร่งมียางกันลื่น' },
  { field: 'breakRubberR', label: '' },
  { field: 'breakRubberP', label: '' },
  { field: 'breakRubberA', label: 'Respond to defect' },
  { field: 'breakRubberF', label: '' },
  { field: 'extinguisher', label: '12. สภาพถังดับเพลิงปกติ พร้อมใช้งาน' },
  { field: 'extinguisherR', label: '' },
  { field: 'extinguisherP', label: '' },
  { field: 'extinguisherA', label: 'Respond to defect' },
  { field: 'extinguisherF', label: '' },
  {
    field: 'fuel',
    label: '13. ระดับน้ำมันเชื้อเพลิง/LPG พร้อมใช้งาน ไม่รั่วซึม',
  },
  { field: 'fuelR', label: '' },
  { field: 'fuelP', label: '' },
  { field: 'fuelA', label: 'Respond to defect' },
  { field: 'fuelF', label: '' },
  {
    field: 'lub',
    label:
      '14. ระดับน้ำมันเบรค น้ำมันเครื่อง น้ำมันพาวเวอร์ และน้ำหม้อน้ำ พร้อมใช้งาน ไม่รั่วซึม',
  },
  { field: 'lubR', label: '' },
  { field: 'lubP', label: '' },
  { field: 'lubA', label: 'Respond to defect' },
  { field: 'lubF', label: '' },
  { field: 'engine', label: '15. ห้องเครื่องยนต์สะอาด' },
  { field: 'engineR', label: '' },
  { field: 'engineP', label: '' },
  { field: 'engineA', label: 'Respond to defect' },
  { field: 'engineF', label: '' },
  { field: 'battery', label: '16. ขั้วแบตเตอรี่สะอาด' },
  { field: 'batteryR', label: '' },
  { field: 'batteryP', label: '' },
  { field: 'batteryA', label: 'Respond to defect' },
  { field: 'batteryF', label: '' },
  { field: 'lpg', label: '17. ถัง LPG ติดตั้งถูกต้อง ล็อคแน่น (ถ้ามี)' },
  { field: 'lpgR', label: '' },
  { field: 'lpgP', label: '' },
  { field: 'lpgA', label: 'Respond to defect' },
  { field: 'lpgF', label: '' },
  { field: 'power', label: '18. ระบบส่งกำลัง (ชุดคันเร่ง เกียร์) ใช้ได้ปกติ' },
  { field: 'powerR', label: '' },
  { field: 'powerP', label: '' },
  { field: 'powerA', label: 'Respond to defect' },
  { field: 'powerF', label: '' },
  { field: 'breakSystem', label: '19. เบรกมือ เบรกเท้า ไฟเบรก ปกติ' },
  { field: 'breakSystemR', label: '' },
  { field: 'breakSystemP', label: '' },
  { field: 'breakSystemA', label: 'Respond to defect' },
  { field: 'breakSystemF', label: '' },
  { field: 'steeringWheel', label: '20. ระยะฟรีของพวงมาลัย ปกติ' },
  { field: 'steeringWheelR', label: '' },
  { field: 'steeringWheelP', label: '' },
  { field: 'steeringWheelA', label: 'Respond to defect' },
  { field: 'steeringWheelF', label: '' },
  { field: 'balance', label: '21. แรงตึงโซ่ 2 ข้างเท่ากัน' },
  { field: 'balanceR', label: '' },
  { field: 'balanceP', label: '' },
  { field: 'balanceA', label: 'Respond to defect' },
  { field: 'balanceF', label: '' },
  { field: 'headLight', label: '22. ไฟหน้า ซ้าย-ขวา ปกติ' },
  { field: 'headLightR', label: '' },
  { field: 'headLightP', label: '' },
  { field: 'headLightA', label: 'Respond to defect' },
  { field: 'headLightF', label: '' },
  { field: 'turnLight', label: '23. ไฟเลี้ยว ซ้าย-ขวา ปกติ' },
  { field: 'turnLightR', label: '' },
  { field: 'turnLightP', label: '' },
  { field: 'turnLightA', label: 'Respond to defect' },
  { field: 'turnLightF', label: '' },
  { field: 'flashLight', label: '24. ไฟวับวาบ ใช้งานได้ปกติ' },
  { field: 'flashLightR', label: '' },
  { field: 'flashLightP', label: '' },
  { field: 'flashLightA', label: 'Respond to defect' },
  { field: 'flashLightF', label: '' },
  { field: 'reverseLight', label: '25. ไฟถอยหลังปกติ' },
  { field: 'reverseLightR', label: '' },
  { field: 'reverseLightP', label: '' },
  { field: 'reverseLightA', label: 'Respond to defect' },
  { field: 'reverseLightF', label: '' },
  { field: 'reverseSound', label: '26. สัญญาณเสียงถอยหลังปกติ' },
  { field: 'reverseSoundR', label: '' },
  { field: 'reverseSoundP', label: '' },
  { field: 'reverseSoundA', label: 'Respond to defect' },
  { field: 'reverseSoundF', label: '' },
  { field: 'horn', label: '27. สัญญาณเสียงแตรดังชัดเจน' },
  { field: 'hornR', label: '' },
  { field: 'hornP', label: '' },
  { field: 'hornA', label: 'Respond to defect' },
  { field: 'hornF', label: '' },
  { field: 'speedLimit', label: '28. สัญญาณเสียง speed limit ดังปกติ (ถ้ามี)' },
  { field: 'speedLimitR', label: '' },
  { field: 'speedLimitP', label: '' },
  { field: 'speedLimitA', label: 'Respond to defect' },
  { field: 'speedLimitF', label: '' },
  { field: 'remark', label: 'หมายเหตุ - Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
