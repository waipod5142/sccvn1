export const questions = [
  {
    id: 1,
    name: 'sign',
    question: 'ตัวแสดงสถานะขึ้นเครื่องหมายพร้อมใช้งาน หรือ',
    howto: 'สายตา /ประเมิน',
    accept: 'มีไฟติดมองเห็นได้',
  },
  {
    id: 2,
    name: 'visible',
    question:
      'ติดตั้งในที่ที่สามารถมองเห็นได้ชัดเจน เข้าถึงได้เมื่อเกิดเหตุฉุกเฉิน',
    howto: 'ทดสอบ / สายตา /ประเมิน',
    accept:
      'ติดตั้งในที่ที่สามารถมองเห็นได้ชัดเจน เข้าถึงได้เมื่อเกิดเหตุฉุกเฉิน',
  },
  {
    id: 3,
    name: 'batt',
    question: 'แบตเตอรี่แสดงสถานะพร้อมใช้งาน',
    howto: 'สายตา',
    accept: 'สามารถมองเห็นได้ชัดเจน',
  },
  {
    id: 4,
    name: 'pad',
    question: 'แผ่นแปะนำฟฟ้า /Pads มีสภาพพร้อมใช้',
    howto: 'สายตา / ประเมิน',
    accept: 'แผ่นแปะนำฟฟ้า /Pads มีสภาพพร้อมใช้',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  { field: 'sign', label: '1 ตัวแสดงสถานะขึ้นเครื่องหมายพร้อมใช้งาน หรือ' },
  { field: 'signR', label: '' },
  { field: 'signP', label: '' },
  { field: 'signA', label: 'Respond to defect' },
  { field: 'signF', label: '' },
  {
    field: 'visible',
    label:
      '2 ติดตั้งในที่ที่สามารถมองเห็นได้ชัดเจน เข้าถึงได้เมื่อเกิดเหตุฉุกเฉิน',
  },
  { field: 'visibleR', label: '' },
  { field: 'visibleP', label: '' },
  { field: 'visibleA', label: 'Respond to defect' },
  { field: 'visibleF', label: '' },
  { field: 'batt', label: '3 แบตเตอรี่แสดงสถานะพร้อมใช้งาน' },
  { field: 'battR', label: '' },
  { field: 'battP', label: '' },
  { field: 'battA', label: 'Respond to defect' },
  { field: 'battF', label: '' },
  { field: 'pad', label: '4 แผ่นแปะนำฟฟ้า /Pads มีสภาพพร้อมใช้' },
  { field: 'padR', label: '' },
  { field: 'padP', label: '' },
  { field: 'padA', label: 'Respond to defect' },
  { field: 'padF', label: '' },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
