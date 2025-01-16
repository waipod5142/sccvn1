export const questions = [
  {
    id: 1,
    name: 'aim',
    question:
      'มีการใช้สายตามองไกลไปข้างหน้าอย่างน้อย 15 วินาที (Aim high in steering)',
    howto:
      'เพื่อคาดการณ์ล่วงหน้า / แยกแยะส่วนที่เกี่ยวข้อง /ปรับสายตาตามสภาพถนนและความเร็ว',
  },
  {
    id: 2,
    name: 'picture',
    question: 'มีการมองภาพโดยรอบ (Get the Big picture)',
    howto:
      'การกะระยะคันข้างหน้าอย่างน้อย 4 วินาที / การมองกระจกทุกบานทุก 5-8 วินาที',
  },
  {
    id: 3,
    name: 'moving',
    question: 'มีการเคลื่อนไหวสายตาทุก 2-3 วินาที (Keep your eyes moving)',
    howto:
      'เหลือบมองกระจกส่องข้างบ่อยๆ / มองกระจกซ้าย-ขวา ก่อนชลอหรือหยุดรถไม่เพ่งมองจุดใดจุดหนึ่งมากกว่า 2 วินาที',
  },
  {
    id: 4,
    name: 'anout',
    question: 'มีการหาทางออกให้กับตัวเอง (Leave yourself an out)',
    howto:
      'ไม่ขับรถเกาะกลุ่ม / รักษาระยะห่างรอบๆตัวรถ / เมื่อหยุดรถให้เว้นระยะห่างจากคันหน้าพอสมควร / ปรับระยะห่างตลอดเวลาตามสภาพจราจร',
  },
  {
    id: 5,
    name: 'see',
    question: 'แน่ใจว่าเขาเห็นเรา (Make sure They see you)',
    howto: 'ส่งสัญญาณเสียงและแสงเตือน / อยู่ห่างจากจุดบอดของรถคันอื่นๆ',
  },
  {
    id: 6,
    name: 'fatigue',
    question:
      'มีสภาพร่างกายพร้อมก่อนและขณะขับขี่ (Health & Readiness for Driving)',
    howto: 'ไม่ง่วงนอน, ไม่แอลกอฮอล์, ไม่กินยา',
  },
  {
    id: 7,
    name: 'distraction',
    question: 'ไม่ทำพฤติกรรมที่เสียสมาธิในการขับรถ (Distraction)',
    howto: 'การใช้โทรศัพท์, การประชุม, การก้มหรือหาสิ่งของ และอื่นๆ',
  },
];

export const detailFields = [
  { field: 'date', label: 'วันที่ Date' },
  { field: 'inspector', label: 'ผู้ตรวจ Inspector' },
  { field: 'observer', label: 'Observer' },
  { field: 'observee', label: 'Observee' },
  {
    field: 'aim',
    label:
      '1. มีการใช้สายตามองไกลไปข้างหน้าอย่างน้อย 15 วินาที (Aim high in steering)',
  },
  { field: 'aimR', label: '' },
  { field: 'picture', label: '2. มีการมองภาพโดยรอบ (Get the Big picture)' },
  { field: 'pictureR', label: '' },
  {
    field: 'moving',
    label: '3. มีการเคลื่อนไหวสายตาทุก 2-3 วินาที (Keep your eyes moving)',
  },
  { field: 'movingR', label: '' },
  {
    field: 'anout',
    label: '4. มีการหาทางออกให้กับตัวเอง (Leave yourself an out)',
  },
  { field: 'anoutR', label: '' },
  { field: 'see', label: '5. แน่ใจว่าเขาเห็นเรา (Make sure They see you)' },
  { field: 'seeR', label: '' },
  {
    field: 'fatigue',
    label:
      '6. มีสภาพร่างกายพร้อมก่อนและขณะขับขี่ (Health & Readiness for Driving)',
  },
  { field: 'fatigueR', label: '' },
  {
    field: 'distraction',
    label: '7. ไม่ทำพฤติกรรมที่เสียสมาธิในการขับรถ (Distraction)',
  },
  { field: 'distractionR', label: '' },
  { field: 'admireR', label: 'ข้อดีของพนักงานที่พบ' },
  { field: 'adjustR', label: 'ข้อแนะนำในการปรับปรุง' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];

// Define the ChoiceType type
export type ChoiceType = {
  key: number;
  value: string;
  text: string;
  color: string;
};

export const choices: ChoiceType[] = [
  {
    key: 4,
    value: '4',
    text: '4',
    color: 'green',
  },
  {
    key: 3,
    value: '3',
    text: '3',
    color: 'rose',
  },
  {
    key: 2,
    value: '2',
    text: '2',
    color: 'yellow',
  },
  {
    key: 1,
    value: '1',
    text: '1',
    color: 'green',
  },
  {
    key: 0,
    value: '0',
    text: '0',
    color: 'rose',
  },
  {
    key: 5,
    value: 'N/A',
    text: 'N/A',
    color: 'yellow',
  },
];
