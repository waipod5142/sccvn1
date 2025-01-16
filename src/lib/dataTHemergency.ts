export const questions = [
  {
    id: 1,
    name: 'switch',
    question: 'ตรวจสอบสัญญาณไฟของอุปกรณ์ - Lamp Switch (สวิตช์ไฟ)',
    howto: 'สายตา / สัมผัส / กดปุ่มทดสอบ',
    accept: 'อยู่ในสภาพที่สมบูรณ์พร้อมใช้งาน, ไม่มีฝุ่น หรือคราบสกปรก',
  },
  {
    id: 2,
    name: 'ac',
    question: 'ตรวจสอบสัญญาณไฟของอุปกรณ์ - Lamp AC. (หลอดไฟ AC)',
    howto: 'สายตา / สัมผัส / กดปุ่มทดสอบ',
    accept: 'อยู่ในสภาพที่สมบูรณ์พร้อมใช้งาน, ไม่มีฝุ่น หรือคราบสกปรก',
  },
  {
    id: 3,
    name: 'charge',
    question: 'ตรวจสอบสัญญาณไฟของอุปกรณ์ - Lamp Charge (ไฟสถานะการชาร์จ)',
    howto: 'สายตา / สัมผัส / กดปุ่มทดสอบ',
    accept: 'อยู่ในสภาพที่สมบูรณ์พร้อมใช้งาน, ไม่มีฝุ่น หรือคราบสกปรก',
  },
  {
    id: 4,
    name: 'batt',
    question: 'ตรวจสอบสัญญาณไฟของอุปกรณ์ - Full Charge (แบตเตอร์รี่)',
    howto: 'สายตา / สัมผัส / กดปุ่มทดสอบ',
    accept: 'อยู่ในสภาพที่สมบูรณ์พร้อมใช้งาน, ไม่มีฝุ่น หรือคราบสกปรก',
  },
  {
    id: 5,
    name: 'light',
    question: 'ตรวจสอบสัญญาณไฟของอุปกรณ์ - โคมไฟติดสว่างทุกดวง',
    howto: 'สายตา / สัมผัส / กดปุ่มทดสอบ',
    accept: 'อยู่ในสภาพที่สมบูรณ์พร้อมใช้งาน, ไม่มีฝุ่น หรือคราบสกปรก',
  },
  {
    id: 6,
    name: 'light30',
    question:
      'ไฟส่องสว่างหลังจากถอดปลั๊กใช้งานได้ไม่น้อยกว่า 30 นาที (ทุก 3 เดือน)',
    howto: 'สายตา / สัมผัส / กดปุ่มทดสอบ',
    accept:
      'มีสภาพปกติ ไฟสว่าง ใช้งานได้ และต้องสามารถพร้อมใช้งานได้ไม่น้อยกว่า 30 นาที',
  },
  {
    id: 7,
    name: 'light90',
    question:
      'ไฟส่องสว่างหลังจากถอดปลั๊กใช้งานได้ไม่น้อยกว่า 90 นาที (ตรวจสอบรายปี)',
    howto: 'สายตา / สัมผัส / กดปุ่มทดสอบ',
    accept:
      'มีสภาพปกติ ไฟสว่าง ใช้งานได้ และต้องสามารถพร้อมใช้งานได้ไม่น้อยกว่า 90 นาที',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'switch',
    label: '1 ตรวจสอบสัญญาณไฟของอุปกรณ์ - Lamp Switch (สวิตช์ไฟ)',
  },
  { field: 'switchR', label: '' },
  { field: 'switchP', label: '' },
  { field: 'switchA', label: 'Respond to defect' },
  { field: 'switchF', label: '' },
  { field: 'ac', label: '2 ตรวจสอบสัญญาณไฟของอุปกรณ์ - Lamp AC. (หลอดไฟ AC)' },
  { field: 'acR', label: '' },
  { field: 'acP', label: '' },
  { field: 'acA', label: 'Respond to defect' },
  { field: 'acF', label: '' },
  {
    field: 'charge',
    label: '3 ตรวจสอบสัญญาณไฟของอุปกรณ์ - Lamp Charge (ไฟสถานะการชาร์จ)',
  },
  { field: 'chargeR', label: '' },
  { field: 'chargeP', label: '' },
  { field: 'chargeA', label: 'Respond to defect' },
  { field: 'chargeF', label: '' },
  {
    field: 'batt',
    label: '4 ตรวจสอบสัญญาณไฟของอุปกรณ์ - Full Charge (แบตเตอร์รี่)',
  },
  { field: 'battR', label: '' },
  { field: 'battP', label: '' },
  { field: 'battA', label: 'Respond to defect' },
  { field: 'battF', label: '' },
  {
    field: 'light',
    label: '5 ตรวจสอบสัญญาณไฟของอุปกรณ์ - โคมไฟติดสว่างทุกดวง',
  },
  { field: 'lightR', label: '' },
  { field: 'lightP', label: '' },
  { field: 'lightA', label: 'Respond to defect' },
  { field: 'lightF', label: '' },
  {
    field: 'light30',
    label:
      '6 ไฟส่องสว่างหลังจากถอดปลั๊กใช้งานได้ไม่น้อยกว่า 30 นาที (ทุก 3 เดือน)',
  },
  { field: 'light30R', label: '' },
  { field: 'light30P', label: '' },
  { field: 'light30A', label: 'Respond to defect' },
  { field: 'light30F', label: '' },
  {
    field: 'light90',
    label:
      '7 ไฟส่องสว่างหลังจากถอดปลั๊กใช้งานได้ไม่น้อยกว่า 90 นาที (ตรวจสอบรายปี)',
  },
  { field: 'light90R', label: '' },
  { field: 'light90P', label: '' },
  { field: 'light90A', label: 'Respond to defect' },
  { field: 'light90F', label: '' },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
