export const questions = [
  {
    id: '1',
    name: 'tyre',
    question: 'น็อตล้อ ลมยาง สภาพยาง',
    howto: 'ตรวจสภาพยาง ดอกยาง และลมยาง',
    accept:
      'ลมยางปกติ ยางไม่มีรอยบาด ฉีกยาวเกิน 2 ซ.ม. ยางไม่มีรอยบวมนูน ดอกยางลึกไม่น้อยกว่า 1.6 ม.ม. (ไม่ถึงสะพานยาง)',
  },
  {
    id: '2',
    name: 'engine',
    question: 'เครื่องยนต์ และท่อไอเสีย',
    howto:
      'การรอยรั่วซึมของน้ำมันเครื่อง และน้ำมันต่างๆ, เสียงเครื่องยนต์ไม่ดังผิดปกติ และตรวจสอบสภาพควัน และเสียงที่ท่อไอเสียรถ',
    accept:
      'ไม่มีรอยน้ำมันต่างๆรั่วซึมออกมา, ไม่มีเสียงดังผิดปกติจากเครื่องยนต์/ท่อไอเสีย, และไม่มีควันขาวจากท่อไอเสียรถ',
  },
  {
    id: '3',
    name: 'battery',
    question: 'แบตเตอรี่',
    howto: 'ตรวจสภาพของขั้วแบตเตอรี่',
    accept: 'ไม่มีคราบเกลือที่ขั้วแบตเตอรี่, แบตเตอรี่ไม่บวม',
  },
  {
    id: '4',
    name: 'guage',
    question: 'มาตรวัดความเร็ว และระบบไฟเตือน',
    howto:
      'ตรวจสภาพมาตรวัด, เมื่อหมุนสวิตซ์กุญแจไปยังตำแหน่ง ON หรือเมื่อกดปุ่ม Push Start ไฟแสงสว่างสำหรับอ่านค่า และไฟสัญญาณเตือนที่แผงหน้าปัทม์ต่างๆ ปรากฏครบเป็นปกติ',
    accept:
      'ไม่ชำรุด ทำงานได้ตามปกติ และไฟสัญญาณที่แผงหน้าปัทม์ติดแสดงเครื่องหมายต่างๆครบ',
  },
  {
    id: '5',
    name: 'whipper',
    question: 'เครื่องปัดน้ำฝน',
    howto: 'ตรวจสอบสภาพอุปกรณ์และการทำงาน / ระดับน้ำกระบอกฉีดกระจก',
    accept:
      'สวิตช์ทำงานได้ตามปกติ สามารถปัดและฉีดน้ำได้ / ยางปัดน้ำฝนสามารถปาดได้เรียบ / ระดับน้ำในกระบอกน้ำฉีดกระจกอยู่ในระดับปกติ',
  },
  {
    id: '6',
    name: 'horn',
    question: 'แตร/กริ่งสัญญาณ',
    howto: 'กดแตร/กริ่งสัญญาณ',
    accept: 'มีเสียงดังชัดเจน',
  },
  {
    id: '7',
    name: 'lamp',
    question: 'ไฟส่องสว่าง(ไฟหน้า)',
    howto: 'ตรวจสภาพโคมไฟ ตรวจการทำงานโดยการเปิดสวิตช์',
    accept:
      'มีภาพดี ไม่แตกร้าว หรือชำรุด สวิตช์ควบคุมการทำงาน และโคมไฟทำงานได้ตามปกติ',
  },
  {
    id: '8',
    name: 'tail',
    question: 'ไฟถอยหลัง ไฟท้าย ไฟเบรค',
    howto: 'ตรวจสภาพโคมไฟ ตรวจการทำงานโดยการเปิดสวิตช์',
    accept:
      'มีภาพดี ไม่แตกร้าว หรือชำรุด สวิตช์ควบคุมการทำงาน และโคมไฟทำงานได้ตามปกติ',
  },
  {
    id: '9',
    name: 'turn',
    question: 'สัญญาณ(ไฟเลี้ยว,ไฟเบรค,ไฟฉุกเฉิน)',
    howto: 'เปิดสวิชท์ไฟเลี้ยว,ไฟเบรค,ไฟฉุกเฉิน*',
    accept: 'แสงไฟกระพริบเป็นจังหวะปกติทุกดวง',
  },
  {
    id: '10',
    name: 'mirror',
    question: 'กระจกหน้า, กระจกมองหลัง และ กระจกมองข้าง',
    howto:
      'ดูสภาพความสะอาด ไม่มีรอยแตกร้าวหรือมีอุปสรรคในการมองเห็น ของกระจกทุกบาน และการปรับทิศทางของกระจกมองข้าง',
    accept:
      'กระจกทุกบาน สะอาด ไม่มีรอยแตกร้าวหรือมีอุปสรรคในการมองเห็น, กระจกมองข้างไม่หลวมและปรับมองตำแหน่งได้ชัดเจน',
  },
  {
    id: '11',
    name: 'belt',
    question: 'อุปกรณ์ป้องกันภัยเข็มขัดนิรภัย',
    howto: 'ดึงและกระตุก',
    accept: 'เลื่อนได้สะดวกและล็อคเมื่อมีแรงกระชาก',
  },
  {
    id: '12',
    name: 'bump',
    question: 'สภาพโดยรวมทั่วไป และกันชน',
    howto:
      'ดูสภาพโดยรวมไม่มีสิ่งใดเป็นอุปสรรคต่อการขับขี่ และตรวจสภาพกันชนและการติดตั้งต้องมั่นคงแข็งแรง ไม่ชำรุด ผุกร่อน หรือฉีกขาด',
    accept:
      'สะอาด,สภาพโดยรวมสามารถใช้งานได้อย่างปลอดภัยในการขับขี่ และกันชนไม่ชำรุด ผุกร่อน ฉีกขาด ติดตั้งได้อย่างมั่นคงแข็งแรง',
  },
  {
    id: '13',
    name: 'breakSys',
    question: 'ระบบเบรค',
    howto: 'เหยียบแป้นเบรคและ/หรือบีบเบรคมือ',
    accept: 'มีแรงดันตอบสนองการเบรคโดยทันที',
  },
  {
    id: '14',
    name: 'camera',
    question: 'กล้องบันทึกภาพหน้ารถ',
    howto: 'เปิดดูไฟล์วีดีโอย้อนหลังจากเครื่องบันทึก',
    accept: 'มีไฟล์วีดีโอบันทึกไว้ตลอดเวลา',
  },
  {
    id: '15',
    name: 'extinguisher',
    question: 'ถังดับเพลิง',
    howto: 'ตรวจสอบมาตรวัด/สลักและดูสภาพโดยรวม',
    accept: 'เข็มอยู่ในโซนสีเขียว, สลักอยู่ครบ, มีสารเคมีภายใน',
  },
  {
    id: '16',
    name: 'reverseCam',
    question: 'กล้องมองถอยหลัง',
    howto: 'เมื่อเข้าเกียร์ถอยหลัง(R) กล้องสามารถแสดงภาพด้านหลังรถได้ตามปกติ',
    accept: 'สามารถใช้งานได้ปกติ ภาพที่ปรากฏบนจอแสดงผลชัดเจน',
  },
  {
    id: '17',
    name: 'sensor',
    question: 'สัญญาณถอยหลัง (Sensor)',
    howto:
      'เมื่อถอยหลังเข้าใกล้สิ่งกีดขวาง มีเสียงสัญญาณเตือนปกติ ไม่มีเสียงสัญญาณดังเตือนค้าง',
    accept:
      'มีเสียงสัญญาณเตือนดังปกติ และไม่มีเสียงสัญญาณเตือนดังค้างเมื่อถอยรถ',
  },
];

export const detailFields = [
  { field: 'inspector', label: 'পরিদর্শক - Inspector' },
  { field: 'date', label: 'তারিখঃ - Date' },
  { field: 'runningMeter', label: 'রানিং মিটার রিডিং - Running Meter Reading' },
  {
    field: 'steeringCondition',
    label: 'স্টিয়ারিং অবস্থা - Steering Condition',
  },
  { field: 'steeringConditionR', label: '' },
  { field: 'tyreCondition', label: 'টায়ারের অবস্থা - Tyre Condition' },
  { field: 'tyreConditionR', label: '' },
  { field: 'seatBelts', label: 'সীট বেল্ট - Seat Belts' },
  { field: 'seatBeltsR', label: '' },
  { field: 'mirrors', label: 'মিরর - Mirrors' },
  { field: 'mirrorsR', label: '' },
  { field: 'waterOilLevel', label: 'ওয়াটার/অয়েল লেভেল - Water/Oil Level' },
  { field: 'waterOilLevelR', label: '' },
  { field: 'brakeFluid', label: 'ব্রেক ফ্লুইড - Brake Fluid' },
  { field: 'brakeFluidR', label: '' },
  {
    field: 'powerSteeringFluid',
    label: 'পাওয়ার স্টিয়ারিং ফ্লুইড - Power Steering Fluid',
  },
  { field: 'powerSteeringFluidR', label: '' },
  { field: 'gaugesWorking', label: 'গেজস কাজ করছে - Gauges Working' },
  { field: 'gaugesWorkingR', label: '' },
  { field: 'indicators', label: 'ইন্ডিকেটরস - Indicators' },
  { field: 'indicatorsR', label: '' },
  { field: 'headParkLights', label: 'হেড/পার্ক লাইটস - Head/Park Lights' },
  { field: 'headParkLightsR', label: '' },
  { field: 'tailStopLights', label: 'টেইল/স্টপ লাইটস - Tail/Stop Lights' },
  { field: 'tailStopLightsR', label: '' },
  { field: 'brakesHandFoot', label: 'হাত/পায়ের ব্রেক - Brakes Hand/Foot' },
  { field: 'brakesHandFootR', label: '' },
  { field: 'wipersWasher', label: 'ওয়াইপার/ওয়াশার - Wipers/Washer' },
  { field: 'wipersWasherR', label: '' },
  { field: 'horn', label: 'হর্ন - Horn' },
  { field: 'hornR', label: '' },
  { field: 'firstAidKit', label: 'ফার্স্ট এইড কিট - First Aid Kit' },
  { field: 'firstAidKitR', label: '' },
  { field: 'safetyTriangle', label: 'সেফটি ট্রায়াঙ্গল - Safety Triangle' },
  { field: 'safetyTriangleR', label: '' },
  { field: 'jack', label: 'জ্যাক - Jack' },
  { field: 'jackR', label: '' },
  { field: 'wheelSpanner', label: 'হুইল স্প্যানার - Wheel Spanner' },
  { field: 'wheelSpannerR', label: '' },
  { field: 'jackHandle', label: 'জ্যাক হ্যান্ডেল - Jack Handle' },
  { field: 'jackHandleR', label: '' },
  {
    field: 'rotaryFlashLamp',
    label: 'রোটারি/ফ্ল্যাশ ল্যাম্প - Rotary/Flash Lamp',
  },
  { field: 'rotaryFlashLampR', label: '' },
  { field: 'reflectiveStrip', label: 'রিফ্লেক্টিভ স্ট্রিপ - Reflective Strip' },
  { field: 'reflectiveStripR', label: '' },
  { field: 'vehicleNumbers', label: 'যানবাহন নম্বর - Vehicle Numbers' },
  { field: 'vehicleNumbersR', label: '' },
  {
    field: 'communicationRadio',
    label: 'কমিউনিকেশন রেডিও - Communication Radio',
  },
  { field: 'communicationRadioR', label: '' },
  {
    field: 'diesel',
    label: 'ডিজেলের পরিমান - Diesel quantity',
  },
  { field: 'remark', label: 'মন্তব্য - Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
