export const questions = [
  {
    id: 1,
    name: 'generalCheck',
    question:
      'ข้อกำหนดทั่วไป* - รอบปากถังดับเพลิงมีสิ่งกีดขวางหรือไม่? มีหญ้าขึ้นปกคลุมหรือไม่? - สภาพทั่วไปของปากถังดับเพลิงปกติ ไม่มีสนิม ไม่เสียหาย - ป้ายตรวจสอบบนตัวถังชัดเจน - ไม่มีน้ำรั่ว',
    howto: 'สังเกต',
    accept:
      'ไม่มีสิ่งกีดขวาง ไม่มีหญ้าขึ้นปกคลุม - ปกติ ไม่มีสนิม ไม่เสียหาย - ป้ายตรวจสอบชัดเจน - ไม่มีน้ำรั่ว',
  },
  {
    id: 2,
    name: 'valveCheck',
    question:
      'ชุดวาล์วเปิดปิด - ไม่มีสนิม ไม่แตกหัก อยู่ในตำแหน่งปิดปกติ ไม่ติดขัดหรือค้าง?',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'ไม่มีสนิม ไม่แตกหัก อยู่ในตำแหน่งที่ถูกต้อง ไม่ติดขัดหรือค้าง',
  },
  {
    id: 3,
    name: 'capCheck',
    question:
      'ฝาปิด - ฝาปิดต้องอยู่ในตำแหน่งปิดหัวเสาน้ำ/โฟม และต้องถอดออกได้ง่าย ไม่ติดขัด - ยังมีซีลของปากถังครบ',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'อยู่ในตำแหน่งที่ถูกต้อง ถอดออกได้ง่าย ไม่ติดขัด มีซีลครบ',
  },
  {
    id: 4,
    name: 'hydrantHeadCheck',
    question: 'หัวเสาน้ำ - ยังสมบูรณ์ ไม่แตกหัก',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'สมบูรณ์ ไม่แตกหัก',
  },
  {
    id: 5,
    name: 'inspectionTagCheck',
    question:
      'ป้ายตรวจสอบ - ป้ายตรวจสอบยังสมบูรณ์ ไม่ฉีกขาด ไม่ซีดจาง - ป้ายถูกเจาะรูทุกครั้งที่ตรวจสอบ',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'สมบูรณ์ ไม่ฉีกขาด ไม่ซีดจาง ถูกเจาะรู',
  },
  {
    id: 6,
    name: 'hydrantBodyCheck',
    question:
      'ตัวเสาน้ำ - ตัวเสาน้ำต้องมีสีแดงที่ถูกต้อง ไม่ซีดจาง ไม่มีดินโคลนเกาะ - จุดต่อท่อต้องมีน็อตครบและขันแน่น',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'มีสีแดงที่ถูกต้อง ไม่ซีดจาง ไม่มีดินโคลนเกาะ มีน็อตครบและขันแน่น',
  },
  {
    id: 7,
    name: 'waterPressureCheck',
    question:
      'ความดันน้ำดับเพลิง - เกจวัดความดันน้ำต้องแสดงความดันน้ำที่ถูกต้อง (7-8 bar) และต้องทดสอบการปล่อยน้ำจากเสาน้ำเพื่อให้แน่ใจว่าความดันน้ำที่ปล่อยออกมามีความดันที่ต้องการ',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'ความดันน้ำถูกต้อง น้ำที่ปล่อยออกมามีความดันที่ต้องการ',
  },
  {
    id: 8,
    name: 'fireHoseCheck',
    question: 'สายดับเพลิง - อยู่ในสภาพดี ไม่เปื่อยขาด มีซีลยางที่ทั้งสองปลาย',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'สภาพดี ไม่เปื่อยขาด มีซีลยาง',
  },
  {
    id: 9,
    name: 'fireNozzleCheck',
    question: 'หัวฉีดดับเพลิง - ถูกติดตั้งอย่างเหมาะสม อยู่ในสภาพดี มีซีลยาง',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'ติดตั้งอย่างเหมาะสม อยู่ในสภาพดี มีซีลยาง',
  },
  {
    id: 10,
    name: 'hoseCabinetCheck',
    question: 'ตู้เก็บสายและหัวฉีด - สภาพตู้เก็บสายและหัวฉีดยังดี',
    howto: 'สังเกตและตรวจสอบ',
    accept: 'สภาพดี',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่' },
  { field: 'email', label: 'ผู้รับผิดชอบ' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ' },
  { field: 'responder', label: 'ผู้ตอบกลับ' },
  {
    field: 'generalCheck',
    label:
      '1. ข้อกำหนดทั่วไป* - รอบปากถังดับเพลิงมีสิ่งกีดขวางหรือไม่? มีหญ้าขึ้นปกคลุมหรือไม่? - สภาพทั่วไปของปากถังดับเพลิงปกติ ไม่มีสนิม ไม่เสียหาย - ป้ายตรวจสอบบนตัวถังชัดเจน - ไม่มีน้ำรั่ว',
  },
  { field: 'generalCheckR', label: '' },
  { field: 'generalCheckP', label: '' },
  { field: 'generalCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'generalCheckF', label: '' },
  {
    field: 'valveCheck',
    label:
      '2. ชุดวาล์วเปิดปิด - ไม่มีสนิม ไม่แตกหัก อยู่ในตำแหน่งปิดปกติ ไม่ติดขัดหรือค้าง?',
  },
  { field: 'valveCheckR', label: '' },
  { field: 'valveCheckP', label: '' },
  { field: 'valveCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'valveCheckF', label: '' },
  {
    field: 'capCheck',
    label:
      '3. ฝาปิด - ฝาปิดต้องอยู่ในตำแหน่งปิดหัวเสาน้ำ/โฟม และต้องถอดออกได้ง่าย ไม่ติดขัด - ยังมีซีลของปากถังครบ',
  },
  { field: 'capCheckR', label: '' },
  { field: 'capCheckP', label: '' },
  { field: 'capCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'capCheckF', label: '' },
  {
    field: 'hydrantHeadCheck',
    label: '4. หัวเสาน้ำ - ยังสมบูรณ์ ไม่แตกหัก',
  },
  { field: 'hydrantHeadCheckR', label: '' },
  { field: 'hydrantHeadCheckP', label: '' },
  { field: 'hydrantHeadCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'hydrantHeadCheckF', label: '' },
  {
    field: 'inspectionTagCheck',
    label:
      '5. ป้ายตรวจสอบ - ป้ายตรวจสอบยังสมบูรณ์ ไม่ฉีกขาด ไม่ซีดจาง - ป้ายถูกเจาะรูทุกครั้งที่ตรวจสอบ',
  },
  { field: 'inspectionTagCheckR', label: '' },
  { field: 'inspectionTagCheckP', label: '' },
  { field: 'inspectionTagCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'inspectionTagCheckF', label: '' },
  {
    field: 'hydrantBodyCheck',
    label:
      '6. ตัวเสาน้ำ - ตัวเสาน้ำต้องมีสีแดงที่ถูกต้อง ไม่ซีดจาง ไม่มีดินโคลนเกาะ - จุดต่อท่อต้องมีน็อตครบและขันแน่น',
  },
  { field: 'hydrantBodyCheckR', label: '' },
  { field: 'hydrantBodyCheckP', label: '' },
  { field: 'hydrantBodyCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'hydrantBodyCheckF', label: '' },
  {
    field: 'waterPressureCheck',
    label:
      '7. ความดันน้ำดับเพลิง - เกจวัดความดันน้ำต้องแสดงความดันน้ำที่ถูกต้อง (7-8 bar) และต้องทดสอบการปล่อยน้ำจากเสาน้ำเพื่อให้แน่ใจว่าความดันน้ำที่ปล่อยออกมามีความดันที่ต้องการ',
  },
  { field: 'waterPressureCheckR', label: '' },
  { field: 'waterPressureCheckP', label: '' },
  { field: 'waterPressureCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'waterPressureCheckF', label: '' },
  {
    field: 'fireHoseCheck',
    label: '8. สายดับเพลิง - อยู่ในสภาพดี ไม่เปื่อยขาด มีซีลยางที่ทั้งสองปลาย',
  },
  { field: 'fireHoseCheckR', label: '' },
  { field: 'fireHoseCheckP', label: '' },
  { field: 'fireHoseCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'fireHoseCheckF', label: '' },
  {
    field: 'fireNozzleCheck',
    label: '9. หัวฉีดดับเพลิง - ถูกติดตั้งอย่างเหมาะสม อยู่ในสภาพดี มีซีลยาง',
  },
  { field: 'fireNozzleCheckR', label: '' },
  { field: 'fireNozzleCheckP', label: '' },
  { field: 'fireNozzleCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'fireNozzleCheckF', label: '' },
  {
    field: 'hoseCabinetCheck',
    label: '10. ตู้เก็บสายและหัวฉีด - สภาพตู้เก็บสายและหัวฉีดยังดี',
  },
  { field: 'hoseCabinetCheckR', label: '' },
  { field: 'hoseCabinetCheckP', label: '' },
  { field: 'hoseCabinetCheckA', label: 'ตอบกลับข้อบกพร่อง' },
  { field: 'hoseCabinetCheckF', label: '' },
  { field: 'remark', label: 'หมายเหตุ' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
