export const questions = [
  {
    id: 1,
    name: "pumpLeakCheck",
    question: "ปั๊มอยู่ในสภาพเรียบร้อย ไม่มีรอยรั่วซึม",
    howto: "ตรวจสอบรอบตัวปั๊มด้วยสายตา หาจุดที่มีน้ำหรือของเหลวซึมออกมา",
    accept: "ไม่พบรอยรั่วซึม ปั๊มแห้งและสะอาด"
  },
  {
    id: 2,
    name: "pressureCheck",
    question: "ตรวจสอบแรงดันของระบบอยู่ในช่วงค่ามาตรฐาน",
    howto: "อ่านค่าจากเกจวัดแรงดันขณะเครื่องทำงาน",
    accept: "แรงดันอยู่ในช่วงที่กำหนด ไม่สูงหรือต่ำเกินไป"
  },
  {
    id: 3,
    name: "oilLevelCheck",
    question: "เช็คระดับน้ำมันเครื่อง (สำหรับปั๊มเครื่องยนต์ดีเซล)",
    howto: "ใช้ก้านวัดน้ำมันเครื่องหรือเกจระดับน้ำมัน",
    accept: "ระดับน้ำมันอยู่ในขีดกำหนด ไม่ขาดหรือเกิน"
  },
  {
    id: 4,
    name: "batteryCondition",
    question: "ตรวจสอบแบตเตอรี่ – สภาพดี, มีการชาร์จไฟ (สำหรับปั๊มดีเซล)",
    howto: "ใช้เครื่องวัดแรงดันหรือดูไฟสถานะที่แบตเตอรี่",
    accept: "แบตเตอรี่มีแรงดันเพียงพอและอยู่ในสภาพดี"
  },
  {
    id: 5,
    name: "controlPanelCheck",
    question: "ตรวจสอบแผงควบคุมไฟฟ้า – ไม่มีสัญญาณผิดปกติ",
    howto: "ตรวจสอบไฟสถานะ, error code หรือเสียงสัญญาณจากแผงควบคุม",
    accept: "ไม่มีไฟเตือนหรือสัญญาณผิดปกติ แผงควบคุมพร้อมใช้งาน"
  },
  {
    id: 6,
    name: "manualStartTest",
    question: "ทดสอบการทำงานแบบ Manual Start",
    howto: "กดปุ่มหรือสวิตช์สตาร์ตแบบแมนนวล แล้วสังเกตการทำงานของปั๊ม",
    accept: "เครื่องติดและทำงานได้ตามปกติเมื่อเริ่มแบบแมนนวล"
  },
  {
    id: 7,
    name: "autoStartTest",
    question: "ทดสอบการทำงานแบบ Auto Start",
    howto: "ตั้งค่าหรือจำลองเงื่อนไขให้ระบบเริ่มอัตโนมัติ",
    accept: "เครื่องทำงานได้ตามปกติเมื่อมีการสั่งเริ่มแบบอัตโนมัติ"
  },
  {
    id: 8,
    name: "noiseVibrationCheck",
    question: "ตรวจสอบเสียงและแรงสั่นสะเทือนระหว่างทำงาน",
    howto: "ใช้หูฟังและสัมผัสตัวปั๊มขณะทำงาน",
    accept: "เสียงราบเรียบ ไม่มีแรงสั่นสะเทือนหรือเสียงผิดปกติ"
  },
  {
    id: 9,
    name: "pipeCheck",
    question: "ตรวจสอบท่อน้ำเข้า-ออก – ไม่มีการอุดตันหรือรั่วซึม",
    howto: "ตรวจสอบท่อด้วยสายตา และสังเกตแรงดันน้ำระหว่างทำงาน",
    accept: "ไม่มีรอยรั่วซึมหรือการอุดตัน ท่ออยู่ในสภาพสมบูรณ์"
  },
  {
    id: 10,
    name: "coolingSystemCheck",
    question: "เช็คระบบระบายความร้อน (ถ้ามี)",
    howto: "ตรวจสอบหม้อน้ำ, พัดลม หรือระบบระบายความร้อนอื่น ๆ",
    accept: "ระบบระบายความร้อนทำงานได้ดี ไม่มีรั่วหรือความร้อนสะสม"
  },
  {
    id: 11,
    name: "alarmIndicatorCheck",
    question: "ตรวจสอบสัญญาณเตือน (Alarm/Indicator)",
    howto: "ตรวจสอบไฟเตือนหรือเสียงเตือนที่แผงควบคุมและอุปกรณ์",
    accept: "ไม่มีสัญญาณเตือนผิดปกติ สัญญาณเตือนทำงานเมื่อทดสอบ"
  }
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'วันที่ - Date' },
  { field: 'email', label: 'ผู้รับผิดชอบ - Responsible person' },
  { field: 'inspector', label: 'ผู้ตรวจสอบ - Inspector' },
  { field: 'responder', label: 'Responder' },
  { field: 'pumpLeakCheck', label: '1. ปั๊มอยู่ในสภาพเรียบร้อย ไม่มีรอยรั่วซึม' },
  { field: 'pumpLeakCheckR', label: '' },
  { field: 'pumpLeakCheckP', label: '' },
  { field: 'pumpLeakCheckA', label: 'Respond to defect' },
  { field: 'pumpLeakCheckF', label: '' },
  
  { field: 'pressureCheck', label: '2. ตรวจสอบแรงดันของระบบอยู่ในช่วงค่ามาตรฐาน' },
  { field: 'pressureCheckR', label: '' },
  { field: 'pressureCheckP', label: '' },
  { field: 'pressureCheckA', label: 'Respond to defect' },
  { field: 'pressureCheckF', label: '' },
  
  { field: 'oilLevelCheck', label: '3. เช็คระดับน้ำมันเครื่อง (สำหรับปั๊มเครื่องยนต์ดีเซล)' },
  { field: 'oilLevelCheckR', label: '' },
  { field: 'oilLevelCheckP', label: '' },
  { field: 'oilLevelCheckA', label: 'Respond to defect' },
  { field: 'oilLevelCheckF', label: '' },
  
  { field: 'batteryCondition', label: '4. ตรวจสอบแบตเตอรี่ – สภาพดี, มีการชาร์จไฟ (สำหรับปั๊มดีเซล)' },
  { field: 'batteryConditionR', label: '' },
  { field: 'batteryConditionP', label: '' },
  { field: 'batteryConditionA', label: 'Respond to defect' },
  { field: 'batteryConditionF', label: '' },
  
  { field: 'controlPanelCheck', label: '5. ตรวจสอบแผงควบคุมไฟฟ้า – ไม่มีสัญญาณผิดปกติ' },
  { field: 'controlPanelCheckR', label: '' },
  { field: 'controlPanelCheckP', label: '' },
  { field: 'controlPanelCheckA', label: 'Respond to defect' },
  { field: 'controlPanelCheckF', label: '' },
  
  { field: 'manualStartTest', label: '6. ทดสอบการทำงานแบบ Manual Start' },
  { field: 'manualStartTestR', label: '' },
  { field: 'manualStartTestP', label: '' },
  { field: 'manualStartTestA', label: 'Respond to defect' },
  { field: 'manualStartTestF', label: '' },
  
  { field: 'autoStartTest', label: '7. ทดสอบการทำงานแบบ Auto Start' },
  { field: 'autoStartTestR', label: '' },
  { field: 'autoStartTestP', label: '' },
  { field: 'autoStartTestA', label: 'Respond to defect' },
  { field: 'autoStartTestF', label: '' },
  
  { field: 'noiseVibrationCheck', label: '8. ตรวจสอบเสียงและแรงสั่นสะเทือนระหว่างทำงาน' },
  { field: 'noiseVibrationCheckR', label: '' },
  { field: 'noiseVibrationCheckP', label: '' },
  { field: 'noiseVibrationCheckA', label: 'Respond to defect' },
  { field: 'noiseVibrationCheckF', label: '' },
  
  { field: 'pipeCheck', label: '9. ตรวจสอบท่อน้ำเข้า-ออก – ไม่มีการอุดตันหรือรั่วซึม' },
  { field: 'pipeCheckR', label: '' },
  { field: 'pipeCheckP', label: '' },
  { field: 'pipeCheckA', label: 'Respond to defect' },
  { field: 'pipeCheckF', label: '' },
  
  { field: 'coolingSystemCheck', label: '10. เช็คระบบระบายความร้อน (ถ้ามี)' },
  { field: 'coolingSystemCheckR', label: '' },
  { field: 'coolingSystemCheckP', label: '' },
  { field: 'coolingSystemCheckA', label: 'Respond to defect' },
  { field: 'coolingSystemCheckF', label: '' },
  
  { field: 'alarmIndicatorCheck', label: '11. ตรวจสอบสัญญาณเตือน (Alarm/Indicator)' },
  { field: 'alarmIndicatorCheckR', label: '' },
  { field: 'alarmIndicatorCheckP', label: '' },
  { field: 'alarmIndicatorCheckA', label: 'Respond to defect' },
  { field: 'alarmIndicatorCheckF', label: '' },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
