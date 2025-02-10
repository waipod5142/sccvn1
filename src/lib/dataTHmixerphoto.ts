export const questions = [
  {
    id: 1,
    name: 'gps',
    question: 'ระบบ GPS ใช้งานได้ปกติ',
    type: 'Safety',
    score: 0,
    howto:
      'หน้าจอGPSเปิดติดทุกหน้าจอ\nหน้าจอGPSสามารถทำการกดเข้าและออกงานได้จากหน้าจอที่ของรถ',
    accept: 'สภาพอุปกรณ์ใช้งานได้ปกติ',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'email', label: 'ผู้รับผิดชอบ - Responsible person' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'type', label: 'ประเภทการตรวจ' },
  { field: 'responder', label: 'Responder' },
  { field: 'frontP', label: 'รูปหน้ารถ' },
  { field: 'rightP', label: 'รูปด้านขวารถ' },
  { field: 'backP', label: 'รูปหลังรถ' },
  { field: 'leftP', label: 'รูปด้านซ้ายรถ' },
  { field: 'lat', label: '' },
];
