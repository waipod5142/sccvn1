export const questions = [
  {
    id: 1,
    name: 'structure',
    question:
      'สภาพความมั่นคงแข็งแรง โครงสร้างหลัก/เนื้อวัสดุโดยรวม/วัสดุรองกันลื่น-พื้น',
    howto: 'ตรวจสอบด้วยสายตาและทดสอบความแข็งแรงของโครงสร้างและวัสดุ',
    accept:
      'โครงสร้างและวัสดุไม่มีรอยแตกร้าวหรือชำรุด ไม่มีการเสื่อมสภาพที่ส่งผลต่อความแข็งแรง',
  },
  {
    id: 2,
    name: 'lock',
    question:
      'สภาพความมั่นคงแข็งแรง อุปกรณ์ล็อค - ยึด - ห่วง - ตะขอ - จุดเลื่อน - ตะเข็บจุดเย็บ - สลักนิรภัย - สายรัดลำตัว - เชือกช่วยชีวิต - การ์ด Guard-Frame',
    howto: 'ตรวจสอบด้วยสายตาและทดสอบการใช้งานอุปกรณ์ล็อคและยึด',
    accept:
      'อุปกรณ์ล็อคและยึดทุกชิ้นอยู่ในสภาพดี ไม่มีรอยแตกร้าวหรือหลวม สามารถใช้งานได้อย่างปลอดภัย',
  },
  {
    id: 3,
    name: 'pressure',
    question:
      'สภาพอุปกรณ์ควบคุมแรงดัน-มาตรวัดปกติ ไม่มีการรั่วซึม, มีอุปกรณ์ป้องกันไฟย้อนกลับ 4 จุดครบ',
    howto: 'ตรวจสอบมาตรวัด แรงดัน และอุปกรณ์ป้องกันไฟย้อนกลับด้วยสายตา',
    accept:
      'มาตรวัดแรงดันทำงานปกติ ไม่มีรอยรั่วซึม อุปกรณ์ป้องกันไฟย้อนกลับมีครบทุกจุดและอยู่ในสภาพดี',
  },
  {
    id: 4,
    name: 'welding',
    question:
      'สภาพความปลอดภัยของ หัวตัด หัวเชื่อม จุดต่อ จุดเชื่อม ไม่มีการรั่วซึม/ปริ/แตก/ชำรุด',
    howto: 'ตรวจสอบสภาพของหัวตัด หัวเชื่อม และจุดเชื่อมโดยละเอียด',
    accept:
      'อุปกรณ์เชื่อมอยู่ในสภาพดี ไม่มีรอยรั่วซึม ปริ แตก หรือชำรุด พร้อมใช้งานอย่างปลอดภัย',
  },
  {
    id: 5,
    name: 'electric',
    question:
      'สภาพความปลอดภัยของอุปกรณ์ไฟฟ้า มีสายดิน, ELCB, CB สภาพเต้ารับ,เต้าเสียบ, Busbar',
    howto:
      'ตรวจสอบระบบไฟฟ้าและอุปกรณ์ที่เกี่ยวข้อง รวมถึงการทำงานของอุปกรณ์ป้องกันไฟฟ้ารั่ว',
    accept:
      'มีสายดินที่เชื่อมต่อถูกต้อง อุปกรณ์ป้องกันไฟฟ้ารั่ว (ELCB, CB) ทำงานปกติ ไม่มีรอยชำรุด',
  },
  {
    id: 6,
    name: 'length',
    question: 'ขนาด-ความยาว Length (m.)',
    howto: 'ตรวจสอบขนาดและความยาวของอุปกรณ์ให้ตรงตามมาตรฐานที่กำหนด',
    accept:
      'ขนาดและความยาวของอุปกรณ์ตรงตามมาตรฐานและสามารถใช้งานได้อย่างปลอดภัย',
  },
  {
    id: 7,
    name: 'safetyFactor',
    question: 'ความสามารถรับน้ำหนัก /ค่าความปลอดภัย Safety factor',
    howto: 'ตรวจสอบค่าความสามารถรับน้ำหนักและค่าความปลอดภัยตามมาตรฐานที่กำหนด',
    accept:
      'มีค่าความสามารถรับน้ำหนักที่ปลอดภัย และอยู่ภายในค่ามาตรฐานที่กำหนด',
  },
  {
    id: 8,
    name: 'doc',
    question: 'มีเอกสารคู่มือ มาตรฐาน แสดงขั้นตอนการใช้งาน',
    howto: 'ตรวจสอบว่ามีเอกสารคู่มือและมาตรฐานที่จำเป็นสำหรับการใช้งาน',
    accept:
      'มีเอกสารคู่มือและมาตรฐานแสดงขั้นตอนการใช้งานครบถ้วน และสามารถเข้าถึงได้ง่าย',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'email', label: 'ผู้รับผิดชอบ - Responsible person' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'structure',
    label:
      '1. สภาพความมั่นคงแข็งแรง โครงสร้างหลัก/เนื้อวัสดุโดยรวม/วัสดุรองกันลื่น-พื้น',
  },
  { field: 'structureR', label: '' },
  { field: 'structureP', label: '' },
  { field: 'structureA', label: 'Respond to defect' },
  { field: 'structureF', label: '' },
  {
    field: 'lock',
    label:
      '2. สภาพความมั่นคงแข็งแรง อุปกรณ์ล็อค - ยึด - ห่วง - ตะขอ - จุดเลื่อน - ตะเข็บจุดเย็บ - สลักนิรภัย - สายรัดลำตัว - เชือกช่วยชีวิต - การ์ด Guard-Frame',
  },
  { field: 'lockR', label: '' },
  { field: 'lockP', label: '' },
  { field: 'lockA', label: 'Respond to defect' },
  { field: 'lockF', label: '' },
  {
    field: 'pressure',
    label:
      '3. สภาพอุปกรณ์ควบคุมแรงดัน-มาตรวัดปกติ ไม่มีการรั่วซึม, มีอุปกรณ์ป้องกันไฟย้อนกลับ 4 จุดครบ',
  },
  { field: 'pressureR', label: '' },
  { field: 'pressureP', label: '' },
  { field: 'pressureA', label: 'Respond to defect' },
  { field: 'pressureF', label: '' },
  {
    field: 'welding',
    label:
      '4. สภาพความปลอดภัยของ หัวตัด หัวเชื่อม จุดต่อ จุดเชื่อม ไม่มีการรั่วซึม/ปริ/แตก/ชำรุด',
  },
  { field: 'weldingR', label: '' },
  { field: 'weldingP', label: '' },
  { field: 'weldingA', label: 'Respond to defect' },
  { field: 'weldingF', label: '' },
  {
    field: 'electric',
    label:
      '5. สภาพความปลอดภัยของอุปกรณ์ไฟฟ้า มีสายดิน, ELCB, CB สภาพเต้ารับ,เต้าเสียบ, Busbar',
  },
  { field: 'electricR', label: '' },
  { field: 'electricP', label: '' },
  { field: 'electricA', label: 'Respond to defect' },
  { field: 'electricF', label: '' },
  { field: 'length', label: '6. ขนาด-ความยาว Length (m.)' },
  { field: 'lengthR', label: '' },
  { field: 'lengthP', label: '' },
  { field: 'lengthA', label: 'Respond to defect' },
  { field: 'lengthF', label: '' },
  {
    field: 'safetyFactor',
    label: '7. ความสามารถรับน้ำหนัก /ค่าความปลอดภัย Safety factor',
  },
  { field: 'safetyFactorR', label: '' },
  { field: 'safetyFactorP', label: '' },
  { field: 'safetyFactorA', label: 'Respond to defect' },
  { field: 'safetyFactorF', label: '' },
  { field: 'doc', label: '8. มีเอกสารคู่มือ มาตรฐาน แสดงขั้นตอนการใช้งาน' },
  { field: 'docR', label: '' },
  { field: 'docP', label: '' },
  { field: 'docA', label: 'Respond to defect' },
  { field: 'docF', label: '' },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
