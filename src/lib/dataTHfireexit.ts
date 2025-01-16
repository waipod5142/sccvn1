export const questions = [
  {
    id: 1,
    name: 'lampIn',
    question: 'ป้ายหนีไฟ: Lamp AC. ติดขณะเสียบปลั๊ก',
    howto: 'สายตา /ประเมิน',
    accept: 'มีไฟติดมองเห็นได้',
  },
  {
    id: 2,
    name: 'lampOut',
    question: 'ป้ายหนีไฟ: Lamp DC. ติดขณะถอดปลั๊ก',
    howto: 'ทดสอบ / สายตา /ประเมิน',
    accept: 'เมื่อถอดปลั๊กออกแล้วยังมีไฟติดสว่างชัดเจน',
  },
  {
    id: 3,
    name: 'lampVisible',
    question:
      'ป้ายหนีไฟ: ขนาดตัวหนังสือสูงไม่น้อยกว่า 10 เซนติเมตร หรือสามารถมองเห็นได้อย่างชัดเจน',
    howto: 'สายตา',
    accept: 'สามารถมองเห็นได้ชัดเจน',
  },
  {
    id: 4,
    name: 'routeMap',
    question:
      'แผนผังเส้นทางหนีไฟ และจุดรวมพล: มีแผนผังเส้นทางหนีไฟที่แสดงทางไปจุดรวมพลติดในบริเวณเส้นทางอพยพหรือประตูทางออก',
    howto: 'สายตา / ประเมิน',
    accept: 'มีแผนผังเส้นทางหนีไฟชัดเจน ติดไว้ที่บริเวณเส้นทางอพยพหรือทางออก',
  },
  {
    id: 5,
    name: 'routeWI',
    question:
      'แผนผังเส้นทางหนีไฟ และจุดรวมพล: มีขั้นตอนปฏิบัติเมื่อเกิดเหตุฉุกเฉิน',
    howto: 'สายตา / ประเมิน',
    accept: 'มีขั้นตอนปฏิบัติเมื่อเกิดเหตุฉุกเฉิน',
  },
  {
    id: 6,
    name: 'routeVisible',
    question:
      'แผนผังเส้นทางหนีไฟ และจุดรวมพล: มีป้ายชี้บ่งจุดรวมพล มองเห็นได้อย่างชัดเจน',
    howto: 'สายตา',
    accept: 'สามารถมองเห็นได้ชัดเจน',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  { field: 'lampIn', label: '1 ป้ายหนีไฟ: Lamp AC. ติดขณะเสียบปลั๊ก' },
  { field: 'lampInR', label: '' },
  { field: 'lampInP', label: '' },
  { field: 'lampInA', label: 'Respond to defect' },
  { field: 'lampInF', label: '' },
  { field: 'lampOut', label: '2 ป้ายหนีไฟ: Lamp DC. ติดขณะถอดปลั๊ก' },
  { field: 'lampOutR', label: '' },
  { field: 'lampOutP', label: '' },
  { field: 'lampOutA', label: 'Respond to defect' },
  { field: 'lampOutF', label: '' },
  {
    field: 'lampVisible',
    label:
      '3 ป้ายหนีไฟ: ขนาดตัวหนังสือสูงไม่น้อยกว่า 10 เซนติเมตร หรือสามารถมองเห็นได้อย่างชัดเจน',
  },
  { field: 'lampVisibleR', label: '' },
  { field: 'lampVisibleP', label: '' },
  { field: 'lampVisibleA', label: 'Respond to defect' },
  { field: 'lampVisibleF', label: '' },
  {
    field: 'routeMap',
    label:
      '4 แผนผังเส้นทางหนีไฟ และจุดรวมพล: มีแผนผังเส้นทางหนีไฟที่แสดงทางไปจุดรวมพลติดในบริเวณเส้นทางอพยพหรือประตูทางออก',
  },
  { field: 'routeMapR', label: '' },
  { field: 'routeMapP', label: '' },
  { field: 'routeMapA', label: 'Respond to defect' },
  { field: 'routeMapF', label: '' },
  {
    field: 'routeWI',
    label:
      '5 แผนผังเส้นทางหนีไฟ และจุดรวมพล: มีขั้นตอนปฏิบัติเมื่อเกิดเหตุฉุกเฉิน',
  },
  { field: 'routeWIR', label: '' },
  { field: 'routeWIP', label: '' },
  { field: 'routeWIA', label: 'Respond to defect' },
  { field: 'routeWIF', label: '' },
  {
    field: 'routeVisible',
    label:
      '6 แผนผังเส้นทางหนีไฟ และจุดรวมพล: มีป้ายชี้บ่งจุดรวมพล มองเห็นได้อย่างชัดเจน',
  },
  { field: 'routeVisibleR', label: '' },
  { field: 'routeVisibleP', label: '' },
  { field: 'routeVisibleA', label: 'Respond to defect' },
  { field: 'routeVisibleF', label: '' },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
