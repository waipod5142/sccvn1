export const questions = [
  {
    id: 1,
    name: 'emerMixerDay',
    question: 'ตรวจสอบสวิตช์ฉุกเฉิน / Limit สวิทซ์ ฝา Mixer เปิด-ปิด',
    howto: '1.เปิดเครื่องจักร 2.เปิด/ปิดฝา Mixer',
    accept: 'Mixer หยุดการทำงาน',
  },
  {
    id: 2,
    name: 'bearing',
    question: 'ตรวจสอบ Bearing housing',
    howto: 'สังเกตที่แกนเพลาและจุดอัดจาระบี,ฟังเสียง',
    accept: 'ไม่มีน้ำปูนไหลต้องมีจาระบีที่หัวอัด, ไม่เกิดเสียงดังผิดปกติ',
  },
  {
    id: 3,
    name: 'gearDragline',
    question:
      'ตรวจสภาพ เฟืองขับ/เฟืองตาม/รอก/Pulley/การ์ดป้องกันมอเตอร์ Pulley',
    howto: 'ตรวจสอบความสะอาด, การสึกหรอ, ลองขยับการ์ด, ฟังเสียง',
    accept: 'อยู่ในสภาพปกติ, ไม่เกิดเสียงดังผิดปกติ',
  },
  {
    id: 4,
    name: 'slingDay',
    question: 'Hopper/สภาพสลิงหรือโซ่',
    howto:
      'ตรวจสอบความสะอาด, รอยแตกร้าวสึกหรอ, มีน้ำมันหล่อลื่น, ความตึงหย่อน, ฟังเสียง',
    accept:
      'ไม่มีรอยแตก,ผุ/ระยะยึดปกติ อายุการใช้งานไม่เกิน 10,000 ลบ.ม., ไม่เกิดเสียงดังผิดปกติ',
  },
  {
    id: 5,
    name: 'container',
    question: 'ตรวจสภาพกระบะ/คานตาชั่ง/ยางกันกระแทกกระบะ',
    howto:
      'ตรวจสอบจากการฟังเสียง, ความยุบตัวจากด้านนอก โดยห้ามเข้าภายในเด็ดขาด',
    accept: 'สภาพปกติ/สมดุล/ไม่พบรอยฉีกขาด',
  },
  {
    id: 6,
    name: 'sign',
    question:
      'ตรวจบริเวณพื้นที่ทำงาน/การ์ดป้องกัน/ป้ายเตือน ""อันตรายห้ามเข้า""',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ตัวอักษรชัดเจน, ลองขยับการ์ด',
    accept: 'สะอาด/มี/สภาพดี',
  },
  {
    id: 7,
    name: 'emerDoor',
    question: 'ตรวจสอบ Emergency switch / Limit switch ประตู',
    howto: '1.เปิดเครื่องจักร 2.เปิด/ปิดประตู กดปุ่ม Emergency',
    accept: 'เครื่องจักรหยุดทำงาน',
  },
  {
    id: 8,
    name: 'emerCord',
    question: 'ตรวจสอบ Emergency switch / Pull cord',
    howto: 'เปิดเครื่องจักร, ดึงสลิง/กดปุ่ม Emergency',
    accept: 'เครื่องจักรหยุดทำงาน',
  },
  {
    id: 9,
    name: 'comOil',
    question: 'ระดับน้ำมัน compressor',
    howto: 'สังเกตระดับน้ำมันที่ตาแมว',
    accept: 'ไม่ต่ำกว่าครึ่งของระดับ',
  },
  {
    id: 10,
    name: 'pressureUnit',
    question: 'ตรวจปรับแรงดันที่ service unit',
    howto: 'สะอาด, ดูระดับแรงดันที่เกรดวัด',
    accept: 'ที่ระดับ 6-8 bar',
  },
  {
    id: 11,
    name: 'ladder',
    question: 'ปิดล็อค',
    howto: 'ล็อกด้วยกุญแจ',
    accept: 'สภาพปกติ',
  },
  {
    id: 12,
    name: 'mould',
    question: 'ตรวจสอบบริเวณพื้นที่ทำงาน/การจัดเก็บอุปกรณ์/การวางแบบหล่อลูกปูน',
    howto: 'สะอาด จัดเรียงเป็นระเบียบ ถังน้ำยาทาแบบหล่อปิดมิดชิด',
    accept: 'สะอาด/เรียบร้อย/วางอย่างถูกต้อง',
  },
  {
    id: 13,
    name: 'partition',
    question: 'ตรวจสอบตัวสเปรย์น้ำ และรอบๆกองสต็อค',
    howto: 'การกระจายของน้ำไปทั่วกองวัตถุดิบ ',
    accept: 'ทิศทาง/การทำงาน/สะอาด',
  },
  {
    id: 14,
    name: 'couplingWaterPump',
    question:
      'ตรวจเช็คสภาพ couping ตรวจดูรอยรั่ว/ประเก็น/ตรวจเช็คท่อน้ำ/วาวล์น้ำ',
    howto: 'ตรวจสอบการแกว่งของยอยโดยการฟังเสียง, ดูรอยรั่วซึม',
    accept: 'ไม่แกว่ง/เสียงปกติ/ไม่มีน้ำซึม',
  },
  {
    id: 15,
    name: 'guardWater',
    question: 'การ์ดป้องกัน',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ชัดเจน, ลองขยับการ์ด',
    accept: 'สะอาด/มี/สภาพดี',
  },
  {
    id: 16,
    name: 'surge',
    question: 'ตรวจสอบ Surge Protection',
    howto: 'สังเกตไฟว่าติดหรือไม่ติด',
    accept: 'ไฟสถานะถูกต้อง',
  },
  {
    id: 17,
    name: 'upsDay',
    question: 'ตรวจสอบ Manual station/UPS/Stabilizer',
    howto: 'เช็คสถานะไฟที่ปุ่ม On/Off, กุญแจ, ปุ่ม On/Offปิดได้หรือไม่',
    accept: 'สภาพปกติ',
  },
  {
    id: 18,
    name: 'batchCom',
    question: 'ตรวจสอบ Batching computer',
    howto: 'เปิดติด, ไม่มี Error ล็อกเข้าเครื่องได้',
    accept: 'ไม่มี error/ปกติ',
  },
  {
    id: 19,
    name: 'emerComDay',
    question: 'ตรวจสอบ Emergency switch, Hold Skip, Hold Discharge',
    howto: 'สถานะปุ่มกดค้างและไฟติด',
    accept: 'เครื่องจักรหยุดทำงาน',
  },
  {
    id: 20,
    name: 'loadCenter',
    question: 'ตรวจสอบอุปกรณ์ป้องกันไฟกระชากที่ Load Center',
    howto: 'ตรวจสอบไฟแสดงสถานะของอุปกรณ์',
    accept: 'ไฟแสดงสถานะขึ้นสีเขียว ไม่เป็นสีแดงหรือไม่ติด',
  },
  {
    id: 21,
    name: 'mccDay',
    question: 'ตรวจสอบอุปกรณ์ป้องกันไฟกระชากที่ I/O Box และ/หรือ MCC',
    howto: 'ตรวจสอบไฟแสดงสถานะของอุปกรณ์',
    accept: 'ไฟแสดงสถานะขึ้นสีเขียว ไม่เป็นสีแดงหรือไม่ติด',
  },
];

export const questionsWeek = [
  {
    id: 1,
    name: 'gearMixerWeek',
    question: 'ตรวจเฟือง/โซ่/สายพาน/coupling/ฝาหลังของ Mixer/ยางกันฝุ่น',
    howto: 'สังเกตที่แกนเพลาและจุดอัดจารบี',
    accept: 'ไม่มีน้ำปูนไหลต้องมีจาระบีที่หัวอัด',
  },
  {
    id: 2,
    name: 'greaseMixer',
    question: 'ตรวจสอบระดับน้ำมันมอเตอร์เกียร์/หล่อลื่นด้วยจาระบี',
    howto: 'สังเกตระดับน้ำมันที่ตาแมวและรอยรั่วซึม',
    accept: 'ระดับปกติ/มีการหล่อลื่น',
  },
  {
    id: 3,
    name: 'hoseWater',
    question: 'ตรวจเช็คสภาพสายลม/ท่อยาง',
    howto: 'เปิดน้ำและลมเข้าระบบ และตรวจสอบรอยรั่ว, รอยแตกร้าว',
    accept: 'ไม่รั่ว,แตก,รอยขาด',
  },
  {
    id: 4,
    name: 'hoseCement',
    question: 'ตรวจเช็คสภาพสายลม',
    howto: 'เปิดลมเข้าระบบ และตรวจสอบรอยรั่ว, รอยแตกร้าว',
    accept: 'ไม่รั่ว,แตก',
  },
  {
    id: 5,
    name: 'bagCement',
    question: 'ตรวจเช็คถุงผ้าใบ',
    howto: 'ตรวจเช็ครอยฉีกขาด, รอยรั่ว',
    accept: 'ไม่มีรอยขาด',
  },
  {
    id: 6,
    name: 'weigherCement',
    question: 'ตรวจเช็คสภาพตาชั่ง',
    howto: 'ตรวจสอบความสะอาด, รอยรั่ว, แตกร้าว',
    accept: 'ไม่ผุ,แตก',
  },
  {
    id: 7,
    name: 'chainDraglineWeek',
    question: 'ตรวจสภาพ คันชัก/คันส่ง/โซ่/คลัทช์/เบรก',
    howto: 'ตรวจสอบความสะอาด, การสึกหรอ, ลองขยับการ์ด, ฟังเสียงขณะทำงาน',
    accept: 'มี/อยู่ในสภาพปกติ, ไม่เกิดเสียงดังผิดปกติ',
  },
  {
    id: 8,
    name: 'sling',
    question: 'ตรวจสภาพสลิง',
    howto: 'ตรวจสอบความสะอาด, รอยแตกร้าวของสลิง',
    accept: 'อายุการใช้งานไม่เกิน 3,000 ลบ.ม.',
  },
  {
    id: 9,
    name: 'lubDragline',
    question: 'หล่อลื่นด้วยจาระบี/ระดับน้ำมันหล่อลื่น',
    howto: 'ตรวจสอบจุดอัดจาระบี, ระดับน้ำมันที่ตาแมว',
    accept: 'มีการหล่อลื่น/ระดับปกติ',
  },
  {
    id: 10,
    name: 'couplingRoller',
    question: 'ตรวจสภาพ couping/Roller/Pulley ต่างๆ',
    howto: 'ตรวจสอบการแกว่งของยอยโดยการฟังเสียง, ดูรอยรั่วซึม, ดูสภาพราง',
    accept: 'ไม่แกว่ง/แตก,สะอาด/หมุนสวนกับสายพาน, รางมีสภาพปกติ ไม่เสียรูป',
  },
  {
    id: 11,
    name: 'rollerWbc',
    question: 'ตรวจสอบสภาพ/Roller/Pulley ต่างๆ/แปรงทำความสะอาด',
    howto: 'ความสะอาด, การแกว่ง, การหมุน, เสียงการทำงาน',
    accept: 'ไม่แกว่ง/แตก,สะอาด/หมุนสวนกับสายพาน',
  },
  {
    id: 12,
    name: 'hopperWbc',
    question: 'ตรวจสอบสภาพของ Hopper/Vibrator',
    howto: 'ตรวจสอบความสะอาด, รอยรั่ว, แตกร้าว, ระยะเปิดปิด',
    accept: 'ไม่ผุ,ระยะปิดปกติ /แปรงทำความสะอาด',
  },
  {
    id: 13,
    name: 'pistalWbc',
    question: 'ตรวจสภาพกระบอกสูบลมสายลมอัด',
    howto: 'ตรวจสอบรอยรั่ว, การซึมของน้ำมัน, การเคลื่อนที่',
    accept: 'ไม่รั่ว/เคลื่อนที่เป็นปกติ',
  },
  {
    id: 14,
    name: 'rubberWbc',
    question: 'ตรวจสอบยางขอบด้าน Hopper/ขอบข้างกันตกสายพาน',
    howto: 'ตรวจสอบสภาพการสึกหลอ, ระยะแนบกับสายพาน',
    accept: 'แนบกับสายพาน',
  },
  {
    id: 15,
    name: 'beltWbc',
    question: 'สายพานลำเลียงสะอาด/ด้านใต้ weigher belt/หล่อลื่นด้วยจาระบี',
    howto: 'การกระจายของน้ำไปทั่วกองวัตถุดิบ',
    accept: 'ทำสะอาด/ไม่มีเศษวัสดุ/มีการหล่อลื่น',
  },
  {
    id: 16,
    name: 'beltFeed',
    question: 'ตรวจสอบสภาพ Roller/ Pulley ต่างๆ/Hopper/Vibrator',
    howto: 'ตรวจสอบการสึกหลอ, การสึกกร่อน, รอยรั่ว',
    accept: 'ปกติ/ไม่ผุ,แตกระยะปิดปกติ',
  },
  {
    id: 17,
    name: 'rubberFeed',
    question: 'ตรวจสอบยางขอบด้าน Hopper/ขอบสายพาน',
    howto: 'ตรวจสอบสภาพการสึกหลอ, ระยะแนบกับสายพาน',
    accept: 'แนบกับสายพาน',
  },
  {
    id: 18,
    name: 'pistalFeed',
    question: 'สภาพกระบอกสูบ/สายลมอัด/สภาพของเกียร์ขับสายพาน',
    howto: 'ตรวจสอบรอยรั่ว, การซึมของน้ำมัน, การเคลื่อนที่',
    accept: 'ปกติ/ไม่รั่ว/ไม่มีเสียงดัง-สั่น',
  },
  {
    id: 19,
    name: 'lubFeed',
    question: 'ตรวจเช็คความสะอาดสายพานลำเลียง/การหล่อลื่นด้วยจาระบี',
    howto: 'ทำความสะอาดสายพานลำเลียงและอัดจาระบี',
    accept: 'ทำสะอาด/ไม่มีเศษวัสดุ/มีการหล่อลื่น',
  },
  {
    id: 20,
    name: 'rollerSeparator',
    question: 'ตรวจสอบสภาพ Roller/ Pulley ต่างๆ/Hopper/Vibrator',
    howto: 'ตรวจสอบการสึกหลอ, การสึกกร่อน, รอยรั่ว',
    accept: 'ปกติ/ไม่ผุ,แตกระยะปิดปกติ',
  },
  {
    id: 21,
    name: 'pistalSeparator',
    question: 'ตรวจสภาพกระบอกสูบ/สายลมอัด',
    howto: 'ตรวจสอบรอยรั่ว, การซึมของน้ำมัน, การเคลื่อนที่',
    accept: 'ไม่รั่ว/เคลื่อนที่เป็นปกติ',
  },
  {
    id: 22,
    name: 'ruberSeparator',
    question: 'ตรวจสอบยางป้องกันหินทรายที่ขอบสายพาน/กรวยรองรับวัสดุ',
    howto: 'ตรวจสอบระยะแนบกับสายพาน, รอยฉีกขาด, กันสึก',
    accept: 'แนบกับสายพาน/ไม่ผุ-รั่ว',
  },
  {
    id: 23,
    name: 'lubSeparator',
    question: 'ตรวจเช็คความสะอาดฐานสวิง/สายพานลำเลียง/หล่อลื่นด้วยจาระบี',
    howto: 'ทำความสะอาดสายพานลำเลียงและอัดจาระบี',
    accept: 'ทำสะอาด/ไม่มีเศษวัสดุ/มีการหล่อลื่น',
  },
  {
    id: 24,
    name: 'gearSeparator',
    question: 'เช็คลิมิตสวิตช์ควบคุมปริมาณหินทราย/สภาพเกียร์ขับสายพาน',
    howto: 'เปิดเครื่องจักร, โยกลิมิต , ฟังเสียงเกียร์',
    accept: 'สายพานหยุดการทำงาน, ไม่เกิดเสียงผิดปกติ',
  },
  {
    id: 25,
    name: 'filterAir',
    question: 'ทำความสะอาดกรองอากาศ',
    howto: 'ตรวจสอบโดยการเป่าเครื่องกรอง',
    accept: 'สะอาด',
  },
  {
    id: 26,
    name: 'confineSilo',
    question: 'ป้ายเตือน สถานที่อับอากาศ/สวมใส่เข็มขัดนิรภัย/อันตรายห้ามเข้า',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ตัวอักษรชัดเจน',
    accept: 'มี/สภาพดี/มีการปิดล็อค',
  },
  {
    id: 27,
    name: 'filterSilo',
    question: 'ตรวจสอบตัวกรองฝุ่น และไส้กรอง',
    howto: 'ไส้กรองฝุ่นไม่ตัน, ไม่ฉีกขาด',
    accept: 'สะอาด/ทำงานได้',
  },
  {
    id: 28,
    name: 'legSilo',
    question: 'ขาต่อ/เสื้อ ไซโล,ไดเวอร์เตอร์พอท',
    howto: 'ไม่มีรอยแตกร้าว, ไม่ผุ',
    accept: 'ไม่แตก/สนิม',
  },
  {
    id: 29,
    name: 'vibratorCement',
    question: 'butterfly,ชุดขับ/ Vibrator cement/สภาพถังปูน',
    howto: 'ความสะอาด, ไม่แตก, ไม่ผุ',
    accept: 'สภาพดี/แท่นไม่แตก/ไม่ผุ',
  },
  {
    id: 30,
    name: 'bagFilterWeek',
    question: 'ราวแขวนถุง/ขาถังกรอง/หางปลาไหล',
    howto: 'เปิดฝาโยกดูสภาพขอเกี่ยว,ยึดสนิท,หางปลาไหลไม่ร้าว,แตก',
    accept: 'ปกติ/ไม่บุบ,สนิม',
  },
  {
    id: 31,
    name: 'solenoidAdmix',
    question: 'ตรวจเช็คการทำงานของ Check valve, Solenoid Valve',
    howto: 'น้ำยาไม่ลดระดับลงหรือเพิ่มขึ้น',
    accept: 'ทำงานปกติ',
  },
  {
    id: 38,
    name: 'confineWater',
    question: 'ตรวจสอบป้ายเตือน/พื้นและรั้วป้องกันรอบแท้งค์',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ตัวอักษรชัดเจน',
    accept: 'มี/อยู่ในสภาพดี/ไม่มีน้ำขัง',
  },
  {
    id: 39,
    name: 'wastePit',
    question: 'ตรวจสอบขอบคอนกรีต/รั้วกั้น/ตะกอนในบ่อทุกบ่อ',
    howto: 'ความสะอาด, รอยแตก, รอยรั่ว',
    accept: 'มีขอบ,รั้ว/สภาพดี/เศษคอนกรีตไม่เกินขอบ',
  },
  {
    id: 40,
    name: 'wastePump',
    question: 'สภาพปั๊มน้ำ Water Reuse/การ์ดป้องกัน/สภาพของสายไฟ',
    howto: 'ตรวจสอบความสะอาด, การยึดของตัวปั๊ม, รอยรั่ว, แตกร้าว',
    accept: 'ไม่รั่ว/มีการ์ด /สภาพดี/มีสายดิน',
  },
  {
    id: 41,
    name: 'ppe',
    question: 'ตรวจสอบอุปกรณ์PPE เข็มขัดนิรภัย หน้ากากกันฝุ่น ถุงมือ ฯลฯ',
    howto: 'ตรวจสอบความสะอาด อายุการใช้งาน, รอยฉีกขาด',
    accept: 'สภาพดี/มีการใช้งาน/มีเพียงพอ',
  },
];

export const questionsMonth = [
  {
    id: 1,
    name: 'confineMixer',
    question: 'ตรวจป้ายเตือน"สถานที่อับอากาศ"/ถังดับเพลิงชนิดผงเคมีแห้ง',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ตัวอักษรชัดเจน',
    accept: 'มี/สภาพดี/มีบันทึกการตรวจ',
  },
  {
    id: 2,
    name: 'gearMixerWeek',
    question: 'ตรวจเฟือง/โซ่/สายพาน/coupling/ฝาหลังของ Mixer/ยางกันฝุ่น',
    howto: 'สังเกตที่แกนเพลาและจุดอัดจารบี',
    accept: 'ไม่มีน้ำปูนไหลต้องมีจาระบีที่หัวอัด',
  },
  {
    id: 3,
    name: 'bladeMixer',
    question: 'ตรวจสอบใบกวน/แขนใบกวน/เพลา/แผ่น Liner plate',
    howto: 'ตรวจสอบความสะอาด, การสึกหรอ, ลองขยับการ์ด',
    accept: 'ไม่มีรอยแตกหัก-รอยสึก',
  },
  {
    id: 4,
    name: 'motorMixerMonth',
    question: 'ตรวจสภาพของมอเตอร์ไฟฟ้า/สายไฟ',
    howto: 'ความสะอาด, สายไฟต้องไม่มีรอยชำรุดและแตกหัก, ฟังเสียงขณะทำงาน',
    accept: 'สะอาดและสมบูรณ์, ไม่เกิดเสียงดังผิดปกติ',
  },
  {
    id: 5,
    name: 'greaseMixer',
    question: 'ตรวจสอบระดับน้ำมันมอเตอร์เกียร์/หล่อลื่นด้วยจาระบี',
    howto: 'สังเกตระดับน้ำมันที่ตาแมวและรอยรั่วซึม',
    accept: 'ระดับปกติ/มีการหล่อลื่น',
  },
  {
    id: 6,
    name: 'hoseWater',
    question: 'ตรวจเช็คสภาพสายลม/ท่อยาง',
    howto: 'เปิดน้ำและลมเข้าระบบ และตรวจสอบรอยรั่ว, รอยแตกร้าว',
    accept: 'ไม่รั่ว,แตก,รอยขาด',
  },
  {
    id: 7,
    name: 'weigherWater',
    question: 'ตรวจเช็คสภาพตาชั่ง',
    howto: 'ตรวจสอบความสะอาด, รอยรั่ว, แตกร้าว',
    accept: 'ไม่ผุ,แตก',
  },
  {
    id: 8,
    name: 'hoseCement',
    question: 'ตรวจเช็คสภาพสายลม',
    howto: 'เปิดลมเข้าระบบ และตรวจสอบรอยรั่ว, รอยแตกร้าว',
    accept: 'ไม่รั่ว,แตก',
  },
  {
    id: 9,
    name: 'bagCement',
    question: 'ตรวจเช็คถุงผ้าใบ',
    howto: 'ตรวจเช็ครอยฉีกขาด, รอยรั่ว',
    accept: 'ไม่มีรอยขาด',
  },
  {
    id: 10,
    name: 'weigherCement',
    question: 'ตรวจเช็คสภาพตาชั่ง',
    howto: 'ตรวจสอบความสะอาด, รอยรั่ว, แตกร้าว',
    accept: 'ไม่ผุ,แตก',
  },
  {
    id: 11,
    name: 'chainDraglineWeek',
    question: 'ตรวจสภาพ คันชัก/คันส่ง/โซ่/คลัทช์/เบรก',
    howto: 'ตรวจสอบความสะอาด, การสึกหรอ, ลองขยับการ์ด, ฟังเสียงขณะทำงาน',
    accept: 'มี/อยู่ในสภาพปกติ, ไม่เกิดเสียงดังผิดปกติ',
  },
  {
    id: 12,
    name: 'sling',
    question: 'ตรวจสภาพสลิง',
    howto: 'ตรวจสอบความสะอาด, รอยแตกร้าวของสลิง',
    accept: 'อายุการใช้งานไม่เกิน 3,000 ลบ.ม.',
  },
  {
    id: 13,
    name: 'lubDragline',
    question: 'หล่อลื่นด้วยจาระบี/ระดับน้ำมันหล่อลื่น',
    howto: 'ตรวจสอบจุดอัดจาระบี, ระดับน้ำมันที่ตาแมว',
    accept: 'มีการหล่อลื่น/ระดับปกติ',
  },
  {
    id: 14,
    name: 'couplingRoller',
    question: 'ตรวจสภาพ couping/Roller/Pulley ต่างๆ',
    howto: 'ตรวจสอบการแกว่งของยอยโดยการฟังเสียง, ดูรอยรั่วซึม, ดูสภาพราง',
    accept: 'ไม่แกว่ง/แตก,สะอาด/หมุนสวนกับสายพาน, รางมีสภาพปกติ ไม่เสียรูป',
  },
  {
    id: 15,
    name: 'confineMcc',
    question: 'ตรวจสอบป้ายเตือน"อันตรายห้ามเข้า"/ป้ายเตือน"ระวังอันตราย"',
    howto: 'ตรวจสอบสภาพสีซีดจาง ตัวอักษรชัดเจน',
    accept: 'มีป้ายเตือน/สภาพดี',
  },
  {
    id: 16,
    name: 'cabinMcc',
    question: 'สภาพตู้/ความสะอาดภายในและรอบๆ MCC./อุปกรณ์, สายไฟ',
    howto: 'ตรวจสอบความสะอาด, สังเกตจุดต่อกาว',
    accept: 'สะอาด/ปิดฝาตู้/สภาพปกติ',
  },
  {
    id: 17,
    name: 'rollerWbc',
    question: 'ตรวจสอบสภาพ/Roller/Pulley ต่างๆ/แปรงทำความสะอาด',
    howto: 'ความสะอาด, การแกว่ง, การหมุน, เสียงการทำงาน',
    accept: 'ไม่แกว่ง/แตก,สะอาด/หมุนสวนกับสายพาน',
  },
  {
    id: 18,
    name: 'hopperWbc',
    question: 'ตรวจสอบสภาพของ Hopper/Vibrator',
    howto: 'ตรวจสอบความสะอาด, รอยรั่ว, แตกร้าว, ระยะเปิดปิด',
    accept: 'ไม่ผุ,ระยะปิดปกติ /แปรงทำความสะอาด',
  },
  {
    id: 19,
    name: 'pistalWbc',
    question: 'ตรวจสภาพกระบอกสูบลมสายลมอัด',
    howto: 'ตรวจสอบรอยรั่ว, การซึมของน้ำมัน, การเคลื่อนที่',
    accept: 'ไม่รั่ว/เคลื่อนที่เป็นปกติ',
  },
  {
    id: 20,
    name: 'rubberWbc',
    question: 'ตรวจสอบยางขอบด้าน Hopper/ขอบข้างกันตกสายพาน',
    howto: 'ตรวจสอบสภาพการสึกหลอ, ระยะแนบกับสายพาน',
    accept: 'แนบกับสายพาน',
  },
  {
    id: 21,
    name: 'beltWbc',
    question: 'สายพานลำเลียงสะอาด/ด้านใต้ weigher belt/หล่อลื่นด้วยจาระบี',
    howto: 'การกระจายของน้ำไปทั่วกองวัตถุดิบ',
    accept: 'ทำสะอาด/ไม่มีเศษวัสดุ/มีการหล่อลื่น',
  },
  {
    id: 22,
    name: 'beltFeed',
    question: 'ตรวจสอบสภาพ Roller/ Pulley ต่างๆ/Hopper/Vibrator',
    howto: 'ตรวจสอบการสึกหลอ, การสึกกร่อน, รอยรั่ว',
    accept: 'ปกติ/ไม่ผุ,แตกระยะปิดปกติ',
  },
  {
    id: 23,
    name: 'rubberFeed',
    question: 'ตรวจสอบยางขอบด้าน Hopper/ขอบสายพาน',
    howto: 'ตรวจสอบสภาพการสึกหลอ, ระยะแนบกับสายพาน',
    accept: 'แนบกับสายพาน',
  },
  {
    id: 24,
    name: 'pistalFeed',
    question: 'สภาพกระบอกสูบ/สายลมอัด/สภาพของเกียร์ขับสายพาน',
    howto: 'ตรวจสอบรอยรั่ว, การซึมของน้ำมัน, การเคลื่อนที่',
    accept: 'ปกติ/ไม่รั่ว/ไม่มีเสียงดัง-สั่น',
  },
  {
    id: 25,
    name: 'lubFeed',
    question: 'ตรวจเช็คความสะอาดสายพานลำเลียง/การหล่อลื่นด้วยจาระบี',
    howto: 'ทำความสะอาดสายพานลำเลียงและอัดจาระบี',
    accept: 'ทำสะอาด/ไม่มีเศษวัสดุ/มีการหล่อลื่น',
  },
  {
    id: 26,
    name: 'rollerSeparator',
    question: 'ตรวจสอบสภาพ Roller/ Pulley ต่างๆ/Hopper/Vibrator',
    howto: 'ตรวจสอบการสึกหลอ, การสึกกร่อน, รอยรั่ว',
    accept: 'ปกติ/ไม่ผุ,แตกระยะปิดปกติ',
  },
  {
    id: 27,
    name: 'pistalSeparator',
    question: 'ตรวจสภาพกระบอกสูบ/สายลมอัด',
    howto: 'ตรวจสอบรอยรั่ว, การซึมของน้ำมัน, การเคลื่อนที่',
    accept: 'ไม่รั่ว/เคลื่อนที่เป็นปกติ',
  },
  {
    id: 28,
    name: 'ruberSeparator',
    question: 'ตรวจสอบยางป้องกันหินทรายที่ขอบสายพาน/กรวยรองรับวัสดุ',
    howto: 'ตรวจสอบระยะแนบกับสายพาน, รอยฉีกขาด, กันสึก',
    accept: 'แนบกับสายพาน/ไม่ผุ-รั่ว',
  },
  {
    id: 29,
    name: 'lubSeparator',
    question: 'ตรวจเช็คความสะอาดฐานสวิง/สายพานลำเลียง/หล่อลื่นด้วยจาระบี',
    howto: 'ทำความสะอาดสายพานลำเลียงและอัดจาระบี',
    accept: 'ทำสะอาด/ไม่มีเศษวัสดุ/มีการหล่อลื่น',
  },
  {
    id: 30,
    name: 'gearSeparator',
    question: 'เช็คลิมิตสวิตช์ควบคุมปริมาณหินทราย/สภาพเกียร์ขับสายพาน',
    howto: 'เปิดเครื่องจักร, โยกลิมิต , ฟังเสียงเกียร์',
    accept: 'สายพานหยุดการทำงาน, ไม่เกิดเสียงผิดปกติ',
  },
  {
    id: 31,
    name: 'filterAir',
    question: 'ทำความสะอาดกรองอากาศ',
    howto: 'ตรวจสอบโดยการเป่าเครื่องกรอง',
    accept: 'สะอาด',
  },
  {
    id: 32,
    name: 'beltAir',
    question: 'ตรวจสอบสภาพของสายพาน',
    howto: 'ความตึงหย่อน, แตกร้าว, สึกหรอของสายพาน',
    accept: 'ระยะหย่อนไม่เกิน 15 มม.',
  },
  {
    id: 33,
    name: 'confineSilo',
    question: 'ป้ายเตือน สถานที่อับอากาศ/สวมใส่เข็มขัดนิรภัย/อันตรายห้ามเข้า',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ตัวอักษรชัดเจน',
    accept: 'มี/สภาพดี/มีการปิดล็อค',
  },
  {
    id: 34,
    name: 'fallSilo',
    question: 'ตัวกันระเบิด/แนวเชื่อม,น๊อต/บันได - ไซโล/ราวกันตก',
    howto: 'การอุดตันของท่อ, เช็ตวาล์ว, บันได ไม่ชำรุด',
    accept: 'สภาพปกติ/แข็งแรง',
  },
  {
    id: 35,
    name: 'filterSilo',
    question: 'ตรวจสอบตัวกรองฝุ่น และไส้กรอง',
    howto: 'ไส้กรองฝุ่นไม่ตัน, ไม่ฉีกขาด',
    accept: 'สะอาด/ทำงานได้',
  },
  {
    id: 36,
    name: 'legSilo',
    question: 'ขาต่อ/เสื้อ ไซโล,ไดเวอร์เตอร์พอท',
    howto: 'ไม่มีรอยแตกร้าว, ไม่ผุ',
    accept: 'ไม่แตก/สนิม',
  },
  {
    id: 37,
    name: 'hoseSilo',
    question: 'ท่อเป่าปูน/บริเวณโดยรอบ/หัวปลาไหล/หางปลาไหล',
    howto: 'สังเกตสภาพรอยแตกร้าว, รอยรั่ว, บ่าไม่สึก',
    accept: 'สะอาด/มีปิดล็อค',
  },
  {
    id: 38,
    name: 'signAgg',
    question: 'ตรวจสอบสภาพแผงหินทราย และป้ายเตือน',
    howto: 'สีซีดจาง,ตัวอักษรชัดเจน,แผงหินทรายไม่แตก พัง เอียง ทรุด',
    accept: 'มี/แข็งแรง/วัตถุดิบไม่ปนกัน',
  },
  {
    id: 39,
    name: 'vibratorCement',
    question: 'butterfly,ชุดขับ/ Vibrator cement/สภาพถังปูน',
    howto: 'ความสะอาด, ไม่แตก, ไม่ผุ',
    accept: 'สภาพดี/แท่นไม่แตก/ไม่ผุ',
  },
  {
    id: 40,
    name: 'lightConductor',
    question: 'ตรวจสอบสภาพตัวล่อ/สายนำ/การยึดติดกับไซโล',
    howto: 'Visual',
    accept: 'สภาพปกติ',
  },
  {
    id: 41,
    name: 'ground',
    question: 'ตรวจสอบการยึดติดของสายนำกับสายกราวด์',
    howto: 'ตรวจสอบการยึดแน่ของสายและจุดต่อ',
    accept: 'มั่นคง/แข็งแรง',
  },
  {
    id: 42,
    name: 'bagFilterWeek',
    question: 'ราวแขวนถุง/ขาถังกรอง/หางปลาไหล',
    howto: 'เปิดฝาโยกดูสภาพขอเกี่ยว,ยึดสนิท,หางปลาไหลไม่ร้าว,แตก',
    accept: 'ปกติ/ไม่บุบ,สนิม',
  },
  {
    id: 43,
    name: 'cabinMdb',
    question: 'ตรวจทางเข้า/สภาพตู้/ปิดล็อค/ความสะอาดภายในและรอบๆ MDB',
    howto:
      'ความสะอาดบริเวณโดยรอบตู้ ปริมาณหินรองพื้น ไม่มีวัชพืชและไม่มีน้ำขัง สายกาวอยู่ในสภาพปกติ',
    accept: 'ปิดล็อคกุญแจ/ไม่มีวัชพืช',
  },
  {
    id: 44,
    name: 'confineMdb',
    question: 'ตรวจสอบป้ายเตือน "อันตรายห้ามเข้า"/ป้ายเตือน "ระวังอันตราย"',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ตัวอักษรชัดเจน',
    accept: 'มีป้ายเตือน/สภาพดี',
  },
  {
    id: 45,
    name: 'outsideMdb',
    question: 'ตรวจสภาพภายนอกของหม้อแปลงไฟฟ้า/อุปกรณ์และสายไฟ',
    howto:
      'เช็คความสะอาด, สายไฟไม่มีรอยชำรุดแตกหัก ไม่มีการรั่วซึมของน้ำมัน สีเฟรมต้องเป็นสีเทา',
    accept: 'สภาพปกติ',
  },
  {
    id: 46,
    name: 'solenoidAdmix',
    question: 'ตรวจเช็คการทำงานของ Check valve, Solenoid Valve',
    howto: 'น้ำยาไม่ลดระดับลงหรือเพิ่มขึ้น',
    accept: 'ทำงานปกติ',
  },
  {
    id: 53,
    name: 'admixLife',
    question: 'ตรวจสอบน้ำยาที่รับมาไม่เกิน 6 เดือน',
    howto: 'ดูวันหมดอายุที่ข้างถังน้ำยาหรือใบรับรองคุณภาพน้ำยา',
    accept: 'ตาม WM-PRO-01',
  },
  {
    id: 54,
    name: 'admixFiber',
    question: 'ตรวจสอบน้ำยาลักษณะแห้งหรือไมโครไฟเบอร์ที่รับมาไม่เกิน 1 ปี',
    howto: 'ดูวันหมดอายุที่ข้างถังน้ำยาหรือใบรับรองคุณภาพน้ำยา',
    accept: 'ตาม WM-PRO-01',
  },
  {
    id: 55,
    name: 'confineWater',
    question: 'ตรวจสอบป้ายเตือน/พื้นและรั้วป้องกันรอบแท้งค์',
    howto: 'ตรวจสอบสภาพสีซีดจาง, ตัวอักษรชัดเจน',
    accept: 'มี/อยู่ในสภาพดี/ไม่มีน้ำขัง',
  },
  {
    id: 56,
    name: 'wastePit',
    question: 'ตรวจสอบขอบคอนกรีต/รั้วกั้น/ตะกอนในบ่อทุกบ่อ',
    howto: 'ความสะอาด, รอยแตก, รอยรั่ว',
    accept: 'มีขอบ,รั้ว/สภาพดี/เศษคอนกรีตไม่เกินขอบ',
  },
  {
    id: 57,
    name: 'wastePump',
    question: 'สภาพปั๊มน้ำ Water Reuse/การ์ดป้องกัน/สภาพของสายไฟ',
    howto: 'ตรวจสอบความสะอาด, การยึดของตัวปั๊ม, รอยรั่ว, แตกร้าว',
    accept: 'ไม่รั่ว/มีการ์ด /สภาพดี/มีสายดิน',
  },
  {
    id: 58,
    name: 'lightOffice',
    question: 'ตรวจสอบการระบายอากาศ/แสงสว่าง',
    howto: 'ใช้เครื่องมือวัดแสง',
    accept: 'มี/อยู่ในสภาพปกติ',
  },
  {
    id: 59,
    name: 'safeTcut',
    question: 'ตรวจสอบสภาพสายไฟ/สายดิน/อุปกรณ์กันไฟฟ้ารั่ว (Safe-T-Cut)',
    howto: 'กดปุ่ม Test',
    accept: 'สภาพดี/มีครบ/ทดสอบเป็นประจำ',
  },
  {
    id: 60,
    name: 'ppe',
    question: 'ตรวจสอบอุปกรณ์PPE เข็มขัดนิรภัย หน้ากากกันฝุ่น ถุงมือ ฯลฯ',
    howto: 'ตรวจสอบความสะอาด อายุการใช้งาน, รอยฉีกขาด',
    accept: 'สภาพดี/มีการใช้งาน/มีเพียงพอ',
  },
];

export const questionsMtnd = [
  {
    id: 1,
    name: 'couplingWater',
    question: 'ตรวจเช็ค coupling',
    howto: 'สายตา/ หูฟัง',
    accept: 'ไม่แกว่งหนีศูนย์/ ไม่มีเสียงดัง',
  },
  {
    id: 2,
    name: 'motorWater',
    question: 'ตรวจเช็คมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'อยู่ในสภาพปกติตาม name plate',
  },
  {
    id: 3,
    name: 'rpmWater',
    question: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจวัดรอบตาม name plate',
  },
  {
    id: 4,
    name: 'vibrationWater',
    question: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจสภาพการสั่นสะเทือน',
  },
  {
    id: 5,
    name: 'terminalWater',
    question: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ terminal',
    howto: 'Meter/ สายตา',
    accept: 'ขันแน่น, จุดต่อขันแน่น',
  },
  {
    id: 6,
    name: 'beltCom',
    question: 'ตรวจเช็คสายพาน',
    howto: 'เครื่องมือช่าง',
    accept: 'ไม่มีรอยแตก, ระยะหย่อน 15-20 mm',
  },
  {
    id: 7,
    name: 'filterCom',
    question: 'ตรวจเช็คชุด service unit/filter',
    howto: 'เครื่องมือช่าง',
    accept: 'ทำงานปกติ/ไม่แตก/สะอาด',
  },
  {
    id: 8,
    name: 'switchCom',
    question: 'ตรวจเช็ค/ปรับตั้ง pressure switch และ megnatics',
    howto: 'เครื่องมือช่าง',
    accept: 'ทำงานปกติ/แรงดัน 8-10 bar',
  },
  {
    id: 9,
    name: 'rpmCom',
    question: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจวัดรอบตาม name plate',
  },
  {
    id: 10,
    name: 'vibrationCom',
    question: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจสภาพการสั่นสะเทือน',
  },
  {
    id: 11,
    name: 'suctionCom',
    question: 'ตรวจสอบแรงดูดลูกสูบ',
    howto: 'สัมผัส',
    accept: 'มีการดูด',
  },
  {
    id: 12,
    name: 'noiseCom',
    question: 'ตรวจสอบเสียงการทำงาน',
    howto: 'หูฟัง',
    accept: 'อยู่ในระดับปกติ',
  },
  {
    id: 13,
    name: 'lubCom',
    question: 'ตรวจเช็คสภาพน้ำมัน compressor',
    howto: 'เครื่องมือช่าง',
    accept: 'อยู่ในระดับปกติ',
  },
  {
    id: 14,
    name: 'gearOilWeigher',
    question: 'ตรวจระดับน้ำมันเกียร์',
    howto: 'เครื่องมือช่าง',
    accept: 'อยู่ในระดับปกติ',
  },
  {
    id: 15,
    name: 'brakeWeigher',
    question: 'ตรวจเช็คการทำงานของเบรค',
    howto: 'เครื่องมือช่าง',
    accept: 'ปกติ, ระยะเบรค 0.1-0.2 mm',
  },
  {
    id: 16,
    name: 'solenoidWeigher',
    question: 'ตรวจเช็ค solenoids valve',
    howto: 'สายตา',
    accept: 'ทำงานปกติ/ไม่มีการรั่ว',
  },
  {
    id: 17,
    name: 'motorWeigher',
    question: 'ตรวจเช็คมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ปกติ,วัดกระแสได้ตาม name plate',
  },
  {
    id: 18,
    name: 'rpmWeigher',
    question: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจวัดรอบตาม name plate',
  },
  {
    id: 19,
    name: 'vibrationWeigher',
    question: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจสภาพการสั่นสะเทือน',
  },
  {
    id: 20,
    name: 'hopper',
    question: 'ตรวจสอบปากhopper',
    howto: 'สายตา',
    accept: 'อยู่ในสภาพปกติ',
  },
  {
    id: 21,
    name: 'suctionWeigher',
    question: 'ตรวจสอบกระบอกลม',
    howto: 'สายตา',
    accept: 'อยู่ในสภาพปกติ,ไม่มีลมรั่ว',
  },
  {
    id: 22,
    name: 'springWeigher',
    question: 'ตรวจเช็คและปรับตั้งสลิง/โซ่/สายพาน',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'อยู่ในสภาพปกติ',
  },
  {
    id: 23,
    name: 'loadCellWeigher',
    question: 'ตรวจเช็คสาย Load cell',
    howto: 'Meter',
    accept: 'มีสภาพเรียบร้อย',
  },
  {
    id: 24,
    name: 'pulleyWeigher',
    question: 'ตรวจเช็ค roller และ pulley',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ไม่แกว่ง/ไม่แตก,ทำงานปกติ',
  },
  {
    id: 25,
    name: 'emerWeigher',
    question: 'ตรวจเช็ค limit sw./ proximity sw./ snap sw./ emer. stop',
    howto: 'สายตา/  Meter',
    accept: 'ทำงานปกติ, ทดสอบ',
  },
  {
    id: 26,
    name: 'blade',
    question: 'ตรวจตั้งใบกวน ใบปาดและตรวจสภาพ',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ระยะห่าง 3 mm.จากถัง mixer',
  },
  {
    id: 27,
    name: 'gearMixer',
    question: 'ตรวจตั้งเฟืองขับ/coupling/สายพาน',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'อยู่ในสภาพปกติ',
  },
  {
    id: 28,
    name: 'emerMixer',
    question: 'ตรวจเช็ค limit sw./proximity sw./ emer. stop',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ทดสอบแล้ว มีการทำงานปกติ',
  },
  {
    id: 29,
    name: 'motorMixer',
    question: 'ตรวจเช็คมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ปกติ,วัดกระแสได้ตาม name plate',
  },
  {
    id: 30,
    name: 'rpmMixer',
    question: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจวัดรอบตาม name plate',
  },
  {
    id: 31,
    name: 'vibrationMixer',
    question: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
    howto: 'Meter',
    accept: 'ตรวจสภาพการสั่นสะเทือน',
  },
  {
    id: 32,
    name: 'hydraulicMixer',
    question: 'ตรวจเช็ค hydraulic system/pneumatic system',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ทำงานปกติ, ไม่มีการรั่ว',
  },
  {
    id: 33,
    name: 'gearOilDragline',
    question: 'ตรวจระดับน้ำมันเกียร์',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'อยู่ในระดับปกติ',
  },
  {
    id: 34,
    name: 'chainDragline',
    question: 'ตรวจเช็คโซ่',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ระยะหย่อนไม่เกิน 30 mm.',
  },
  {
    id: 35,
    name: 'scraper',
    question: 'ตรวจเช็คการทำงานของเครื่องโกย',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'อยูในระยะปกติ',
  },
  {
    id: 36,
    name: 'clutch',
    question: 'ตรวจเช็คระยะคลัท',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'อยูในระยะปกติ',
  },
  {
    id: 37,
    name: 'conveyor',
    question: 'ตรวจเช็คสายพานลำเลียง',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'อยู่ในสภาวะปกติ',
  },
  {
    id: 38,
    name: 'airSystemDragline',
    question: 'ตรวจเช็คระบบลม',
    howto: 'สายตา',
    accept: 'อยู่ในสภาพปกติ พร้อมใช้งาน',
  },
  {
    id: 39,
    name: 'pulleyDragline',
    question: 'ตรวจเช็ค roller และ pulley',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ไม่สึกหรือแตก, หมุนปกติ ไม่แกว่ง',
  },
  {
    id: 40,
    name: 'winch',
    question: 'ตรวจเช็คระยะสึกของวิ้น',
    howto: 'สายตา',
    accept: 'ต้องไม่สึก',
  },
  {
    id: 41,
    name: 'terminalDragline',
    question: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ terminal',
    howto: 'สายตา / Meter',
    accept: 'ปกติ, วัดกระแสได้ตาม name plate, จุดต่อขันแน่น',
  },
  {
    id: 42,
    name: 'soleniodCement',
    question: 'ตรวจเช็ค soleniod valve',
    howto: 'สายตา',
    accept: 'ทำงานปกติ, ไม่มีการรั่ว',
  },
  {
    id: 43,
    name: 'stopValve',
    question: 'ตรวจเช็ค stop valve',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ทำงานปกติ',
  },
  {
    id: 44,
    name: 'limitSwitchCement',
    question: 'ตรวจเช็ค limit sw./ proximity sw.',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ทำงานปกติ',
  },
  {
    id: 45,
    name: 'loadCellCement',
    question: 'ตรวจเช็ค Load cell และ สาย Load cell',
    howto: 'Meter',
    accept: 'มีสภาพปกติ',
  },
  {
    id: 46,
    name: 'butterflyCement',
    question: 'ตรวจเช็ค butter fly valve',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'ไม่รั่ว',
  },
  {
    id: 47,
    name: 'motorScrew',
    question: 'ตรวจเช็คอุปกรณ์ไฟฟ้าและมอเตอร์',
    howto: 'Meter',
    accept: 'ปกติ, วัดกระแสได้ตาม name plate',
  },
  {
    id: 48,
    name: 'emerScrew',
    question: 'ตรวจสอบการทำงานของ Emergency sw',
    howto: 'สายตา',
    accept: 'ใช้งานได้ปกติ',
  },
  {
    id: 49,
    name: 'screwCement',
    question: 'ตรวจเช็คการหมุนของไส้สกรูและท่อสกรู',
    howto: 'ฟังเสียง',
    accept: 'ไม่แกว่ง, ไม่มีเสียงดัง, สภาพท่อปกติ',
  },
  {
    id: 50,
    name: 'mdb',
    question: 'ตรวจสภาพอุปกรณ์ไฟฟ้าในตู้',
    howto: 'สายตา',
    accept: 'ไม่ชำรุดเสียหาย, ทำงานปกติ',
  },
  {
    id: 51,
    name: 'volt',
    question: 'เช็คมิเตอร์ Volt และ Amp',
    howto: 'สายตา',
    accept: 'อ่านค่าได้ปกติ',
  },
  {
    id: 52,
    name: 'loadCellMain',
    question: 'ตรวจเช็ค LoadCell',
    howto: 'Meter',
    accept: 'ค่าแรงดันอยู่ในย่านปกติ',
  },
  {
    id: 53,
    name: 'emerCom',
    question:
      'ตรวจสอบการทำงานของ Emergency sw. และแสดงสถานะของ limit sw. บน manual station',
    howto: 'สายตา',
    accept: 'ทำงานในสภาวะปกติ ไฟสัญญาณติด',
  },
  {
    id: 54,
    name: 'ups',
    question: 'ตรวจสอบ UPS',
    howto: 'สายตา',
    accept: 'ดู Display มีสภาพปกติ, ถอดปลั๊ก',
  },
  {
    id: 55,
    name: 'mcc',
    question: 'ตรวจเช็ค teminal สาย control รางสายไฟ สายไฟ',
    howto: 'สายตา/ เครื่องมือช่าง',
    accept: 'อยู่ในสภาวะปกติ, จุดต่อขันแน่น',
  },
  {
    id: 56,
    name: 'gearOilBelt',
    question: 'ตรวจเช็คระดับน้ำมันเกียร์/น้ำมัน Hydrolic',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'อยู่ในระดับปกติ',
  },
  {
    id: 57,
    name: 'hydraulicBelt',
    question: 'ตรวจเช็คการทำงานของ ปั้ม Hydrolic/กระบอก Hydrolic',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'ไม่มีรอยรั่ว, ทำงานปกติ',
  },
  {
    id: 58,
    name: 'loadConveyorBelt',
    question: 'ตรวจเช็คสายพานลำเลียง',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'อยู่ในสภาวะปกติ',
  },
  {
    id: 59,
    name: 'pulleyBelt',
    question: 'ตรวจเช็ค Roller และ Pulley',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'ไม่แกว่ง,ไม่แตก,ทำงานปกติ',
  },
  {
    id: 60,
    name: 'motorBelt',
    question: 'ตรวจเช็ค Motor gear ขับสายพาน',
    howto: 'Meter',
    accept: 'อยู่ในสภาพปกติ ตามเนมเพลท',
  },
  {
    id: 61,
    name: 'generator',
    question: 'ตรวจเช็ค Generator',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'อยูในสภาวะปกติ',
  },
  {
    id: 62,
    name: 'cementTank',
    question: 'ตรวจเช็คสถาพถัง Cement / Fly ash',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'อยูในสภาวะปกติ',
  },
  {
    id: 63,
    name: 'soleniodTank',
    question: 'ตรวจเช็ค soliniod valve',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'ทำงานปกติ,ไม่มีลมรั่ว',
  },
  {
    id: 64,
    name: 'buterflyTank',
    question: 'ตรวจเช็ค Butter fly valve',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'ทำงานปกติ, ไม่รั่ว',
  },
  {
    id: 65,
    name: 'screwTank',
    question: 'ตรวจเช็ค ท่อสกรู',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'ไม่แกว่ง,ไม่มีเสียงดัง, สภาพท่อปกติ',
  },
  {
    id: 66,
    name: 'airSystemTank',
    question: 'ตรวจเช็ค ข้อต่อ, สายลม',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'ไม่มีลมรั่ว, แตกชำรุด',
  },
  {
    id: 67,
    name: 'bagFilter',
    question: 'ตรวจเช็คถังกรองฝุ่น',
    howto: 'เครื่องมือช่าง',
    accept: 'สะอาด, ถุงกรองไม่ตัน',
  },
  {
    id: 68,
    name: 'motorTank',
    question: 'ตรวจเช็ค Motor /gear',
    howto: 'Meter/เครื่องมือช่าง',
    accept: 'อยู่ในสภาพปกติ ตามเนมเพลท',
  },
  {
    id: 69,
    name: 'gearOilTank',
    question: 'ตรวจเช็คระดับน้ำมันเกียร์',
    howto: 'เครื่องมือช่าง',
    accept: 'อยูในสภาวะปกติ',
  },
  {
    id: 70,
    name: 'terminalTank',
    question: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ Therminal',
    howto: 'สายตา/เครื่องมือช่าง',
    accept: 'ขันแน่น, ไม่สกปรก',
  },
];

export const detailFields = [
  { field: 'inspector', label: 'ผู้ตรวจสอบ Inspector' },
  { field: 'date', label: 'วันที่ Date' },
  { field: 'type', label: 'ประเภทการตรวจ Type' },
  {
    field: 'emerMixerDay',
    label: 'ตรวจสอบสวิตช์ฉุกเฉิน / Limit สวิทซ์ ฝา Mixer เปิด-ปิด',
  },
  { field: 'emerMixerDayR', label: '' },
  {
    field: 'bearing',
    label: 'ตรวจสอบ Bearing housing',
  },
  { field: 'bearingR', label: '' },
  {
    field: 'gearDragline',
    label: 'ตรวจสภาพ เฟืองขับ/เฟืองตาม/รอก/Pulley/การ์ดป้องกันมอเตอร์ Pulley',
  },
  { field: 'gearDraglineR', label: '' },
  {
    field: 'slingDay',
    label: 'Hopper/สภาพสลิงหรือโซ่',
  },
  { field: 'slingDayR', label: '' },
  {
    field: 'container',
    label: 'ตรวจสภาพกระบะ/คานตาชั่ง/ยางกันกระแทกกระบะ',
  },
  { field: 'containerR', label: '' },
  {
    field: 'sign',
    label: 'ตรวจบริเวณพื้นที่ทำงาน/การ์ดป้องกัน/ป้ายเตือน "อันตรายห้ามเข้า"',
  },
  { field: 'signR', label: '' },
  {
    field: 'emerDoor',
    label: 'ตรวจสอบ Emergency switch / Limit switch ประตู',
  },
  { field: 'emerDoorR', label: '' },
  {
    field: 'emerCord',
    label: 'ตรวจสอบ Emergency switch / Pull cord',
  },
  { field: 'emerCordR', label: '' },
  {
    field: 'comOil',
    label: 'ระดับน้ำมัน compressor',
  },
  { field: 'comOilR', label: '' },
  {
    field: 'pressureUnit',
    label: 'ตรวจปรับแรงดันที่ service unit',
  },
  { field: 'pressureUnitR', label: '' },
  {
    field: 'ladder',
    label: 'ปิดล็อค',
  },
  { field: 'ladderR', label: '' },
  {
    field: 'mould',
    label: 'ตรวจสอบบริเวณพื้นที่ทำงาน/การจัดเก็บอุปกรณ์/การวางแบบหล่อลูกปูน',
  },
  { field: 'mouldR', label: '' },
  {
    field: 'partition',
    label: 'ตรวจสอบตัวสเปรย์น้ำ และรอบๆกองสต็อค',
  },
  { field: 'partitionR', label: '' },
  {
    field: 'couplingWaterPump',
    label: 'ตรวจเช็คสภาพ couping ตรวจดูรอยรั่ว/ประเก็น/ตรวจเช็คท่อน้ำ/วาวล์น้ำ',
  },
  { field: 'couplingWaterPumpR', label: '' },
  {
    field: 'guardWater',
    label: 'การ์ดป้องกัน',
  },
  { field: 'guardWaterR', label: '' },
  {
    field: 'surge',
    label: 'ตรวจสอบ Surge Protection',
  },
  { field: 'surgeR', label: '' },
  {
    field: 'upsDay',
    label: 'ตรวจสอบ Manual station/UPS/Stabilizer',
  },
  { field: 'upsDayR', label: '' },
  {
    field: 'batchCom',
    label: 'ตรวจสอบ Batching computer',
  },
  { field: 'batchComR', label: '' },
  {
    field: 'emerComDay',
    label: 'ตรวจสอบ Emergency switch, Hold Skip, Hold Discharge',
  },
  { field: 'emerComDayR', label: '' },
  {
    field: 'loadCenter',
    label: 'ตรวจสอบอุปกรณ์ป้องกันไฟกระชากที่ Load Center',
  },
  { field: 'loadCenterR', label: '' },
  {
    field: 'mccDay',
    label: 'ตรวจสอบอุปกรณ์ป้องกันไฟกระชากที่ I/O Box และ/หรือ MCC',
  },
  { field: 'mccDayR', label: '' },

  {
    field: 'confineMixer',
    label: 'ตรวจป้ายเตือน""สถานที่อับอากาศ""/ถังดับเพลิงชนิดผงเคมีแห้ง ',
  },
  {
    field: 'confineMixerR',
    label: '',
  },
  {
    field: 'gearMixerWeek',
    label: 'ตรวจเฟือง/โซ่/สายพาน/coupling/ฝาหลังของ Mixer/ยางกันฝุ่น',
  },
  {
    field: 'gearMixerWeekR',
    label: '',
  },
  {
    field: 'bladeMixer',
    label: 'ตรวจสอบใบกวน/แขนใบกวน/เพลา/แผ่น Liner plate',
  },
  {
    field: 'bladeMixerR',
    label: '',
  },
  {
    field: 'motorMixerMonth',
    label: 'ตรวจสภาพของมอเตอร์ไฟฟ้า/สายไฟ',
  },
  {
    field: 'motorMixerMonthR',
    label: '',
  },
  {
    field: 'greaseMixer',
    label: 'ตรวจสอบระดับน้ำมันมอเตอร์เกียร์/หล่อลื่นด้วยจาระบี',
  },
  {
    field: 'greaseMixerR',
    label: '',
  },
  {
    field: 'hoseWater',
    label: 'ตรวจเช็คสภาพสายลม/ท่อยาง',
  },
  {
    field: 'hoseWaterR',
    label: '',
  },
  {
    field: 'weigherWater',
    label: 'ตรวจเช็คสภาพตาชั่ง',
  },
  {
    field: 'weigherWaterR',
    label: '',
  },
  {
    field: 'hoseCement',
    label: 'ตรวจเช็คสภาพสายลม',
  },
  {
    field: 'hoseCementR',
    label: '',
  },
  {
    field: 'bagCement',
    label: 'ตรวจเช็คถุงผ้าใบ',
  },
  {
    field: 'bagCementR',
    label: '',
  },
  {
    field: 'weigherCement',
    label: 'ตรวจเช็คสภาพตาชั่ง',
  },
  {
    field: 'weigherCementR',
    label: '',
  },
  {
    field: 'chainDraglineWeek',
    label: 'ตรวจสภาพ คันชัก/คันส่ง/โซ่/คลัทช์/เบรก',
  },
  {
    field: 'chainDraglineWeekR',
    label: '',
  },
  {
    field: 'sling',
    label: 'ตรวจสภาพสลิง',
  },
  {
    field: 'slingR',
    label: '',
  },
  {
    field: 'lubDragline',
    label: 'หล่อลื่นด้วยจาระบี/ระดับน้ำมันหล่อลื่น',
  },
  {
    field: 'lubDraglineR',
    label: '',
  },
  {
    field: 'couplingRoller',
    label: 'ตรวจสภาพ couping/Roller/Pulley ต่างๆ',
  },
  {
    field: 'couplingRollerR',
    label: '',
  },

  {
    field: 'confineMcc',
    label: 'ตรวจสอบป้ายเตือน""อันตรายห้ามเข้า""/ป้ายเตือน""ระวังอันตราย"" ',
  },
  {
    field: 'confineMccR',
    label: '',
  },
  {
    field: 'cabinMcc',
    label: 'สภาพตู้/ความสะอาดภายในและรอบๆ MCC./อุปกรณ์, สายไฟ',
  },
  {
    field: 'cabinMccR',
    label: '',
  },
  {
    field: 'rollerWbc',
    label: 'ตรวจสอบสภาพ/Roller/Pulley ต่างๆ/แปรงทำความสะอาด',
  },
  {
    field: 'rollerWbcR',
    label: '',
  },
  {
    field: 'hopperWbc',
    label: 'ตรวจสอบสภาพของ Hopper/Vibrator',
  },
  {
    field: 'hopperWbcR',
    label: '',
  },
  {
    field: 'pistalWbc',
    label: 'ตรวจสภาพกระบอกสูบลมสายลมอัด',
  },
  {
    field: 'pistalWbcR',
    label: '',
  },
  {
    field: 'rubberWbc',
    label: 'ตรวจสอบยางขอบด้าน Hopper/ขอบข้างกันตกสายพาน',
  },
  {
    field: 'rubberWbcR',
    label: '',
  },
  {
    field: 'beltWbc',
    label: 'สายพานลำเลียงสะอาด/ด้านใต้ weigher belt/หล่อลื่นด้วยจาระบี',
  },
  {
    field: 'beltWbcR',
    label: '',
  },
  {
    field: 'beltFeed',
    label: 'ตรวจสอบสภาพ Roller/ Pulley ต่างๆ/Hopper/Vibrator',
  },
  {
    field: 'beltFeedR',
    label: '',
  },
  {
    field: 'rubberFeed',
    label: 'ตรวจสอบยางขอบด้าน Hopper/ขอบสายพาน',
  },
  {
    field: 'rubberFeedR',
    label: '',
  },
  {
    field: 'pistalFeed',
    label: 'สภาพกระบอกสูบ/สายลมอัด/สภาพของเกียร์ขับสายพาน',
  },
  {
    field: 'pistalFeedR',
    label: '',
  },
  {
    field: 'lubFeed',
    label: 'ตรวจเช็คความสะอาดสายพานลำเลียง/การหล่อลื่นด้วยจาระบี',
  },
  {
    field: 'lubFeedR',
    label: '',
  },
  {
    field: 'rollerSeparator',
    label: 'ตรวจสอบสภาพ Roller/ Pulley ต่างๆ/Hopper/Vibrator',
  },
  {
    field: 'rollerSeparatorR',
    label: '',
  },
  {
    field: 'pistalSeparator',
    label: 'ตรวจสภาพกระบอกสูบ/สายลมอัด',
  },
  {
    field: 'pistalSeparatorR',
    label: '',
  },
  {
    field: 'ruberSeparator',
    label: 'ตรวจสอบยางป้องกันหินทรายที่ขอบสายพาน/กรวยรองรับวัสดุ',
  },
  {
    field: 'ruberSeparatorR',
    label: '',
  },
  {
    field: 'lubSeparator',
    label: 'ตรวจเช็คความสะอาดฐานสวิง/สายพานลำเลียง/หล่อลื่นด้วยจาระบี',
  },
  {
    field: 'lubSeparatorR',
    label: '',
  },
  {
    field: 'gearSeparator',
    label: 'เช็คลิมิตสวิตช์ควบคุมปริมาณหินทราย/สภาพเกียร์ขับสายพาน',
  },
  {
    field: 'gearSeparatorR',
    label: '',
  },
  {
    field: 'filterAir',
    label: 'ทำความสะอาดกรองอากาศ',
  },
  {
    field: 'filterAirR',
    label: '',
  },
  {
    field: 'beltAir',
    label: 'ตรวจสอบสภาพของสายพาน',
  },
  {
    field: 'beltAirR',
    label: '',
  },
  {
    field: 'confineSilo',
    label: 'ป้ายเตือน สถานที่อับอากาศ/สวมใส่เข็มขัดนิรภัย/อันตรายห้ามเข้า',
  },
  {
    field: 'confineSiloR',
    label: '',
  },
  {
    field: 'fallSilo',
    label: 'ตัวกันระเบิด/แนวเชื่อม,น๊อต/บันได - ไซโล/ราวกันตก',
  },
  {
    field: 'fallSiloR',
    label: '',
  },
  {
    field: 'filterSilo',
    label: 'ตรวจสอบตัวกรองฝุ่น และไส้กรอง ',
  },
  {
    field: 'filterSiloR',
    label: '',
  },
  {
    field: 'legSilo',
    label: 'ขาต่อ/เสื้อ ไซโล,ไดเวอร์เตอร์พอท',
  },
  {
    field: 'legSiloR',
    label: '',
  },
  {
    field: 'hoseSilo',
    label: 'ท่อเป่าปูน/บริเวณโดยรอบ/หัวปลาไหล/หางปลาไหล',
  },
  {
    field: 'hoseSiloR',
    label: '',
  },
  {
    field: 'signAgg',
    label: 'ตรวจสอบสภาพแผงหินทราย และป้ายเตือน',
  },
  {
    field: 'signAggR',
    label: '',
  },
  {
    field: 'vibratorCement',
    label: 'butterfly,ชุดขับ/ Vibrator cement/สภาพถังปูน',
  },
  {
    field: 'vibratorCementR',
    label: '',
  },
  {
    field: 'lightConductor',
    label: 'ตรวจสอบสภาพตัวล่อ/สายนำ/การยึดติดกับไซโล',
  },
  {
    field: 'lightConductorR',
    label: '',
  },
  {
    field: 'ground',
    label: 'ตรวจสอบการยึดติดของสายนำกับสายกราวด์',
  },
  {
    field: 'groundR',
    label: '',
  },
  {
    field: 'bagFilterWeek',
    label: 'ราวแขวนถุง/ขาถังกรอง/หางปลาไหล',
  },
  {
    field: 'bagFilterWeekR',
    label: '',
  },
  {
    field: 'cabinMdb',
    label: 'ตรวจทางเข้า/สภาพตู้/ปิดล็อค/ความสะอาดภายในและรอบๆ MDB',
  },
  {
    field: 'cabinMdbR',
    label: '',
  },
  {
    field: 'confineMdb',
    label: 'ตรวจสอบป้ายเตือน ""อันตรายห้ามเข้า""/ป้ายเตือน ""ระวังอันตราย"" ',
  },
  {
    field: 'confineMdbR',
    label: '',
  },
  {
    field: 'outsideMdb',
    label: 'ตรวจสภาพภายนอกของหม้อแปลงไฟฟ้า/อุปกรณ์และสายไฟ',
  },
  {
    field: 'outsideMdbR',
    label: '',
  },
  {
    field: 'solenoidAdmix',
    label: 'ตรวจเช็คการทำงานของ Check valve, Solenoid Valve',
  },
  {
    field: 'solenoidAdmixR',
    label: '',
  },

  {
    field: 'admix1',
    label: 'น้ำยา 1',
  },
  {
    field: 'admix1R',
    label: '',
  },
  {
    field: 'admix2',
    label: 'น้ำยา 2',
  },
  {
    field: 'admix2R',
    label: '',
  },
  {
    field: 'admix3',
    label: 'น้ำยา 3',
  },
  {
    field: 'admix3R',
    label: '',
  },
  {
    field: 'admix4',
    label: 'น้ำยา 4',
  },
  {
    field: 'admix4R',
    label: '',
  },
  {
    field: 'admix5',
    label: 'น้ำยา 5',
  },
  {
    field: 'admix5R',
    label: '',
  },
  {
    field: 'admix6',
    label: 'น้ำยา 6',
  },
  {
    field: 'admix6R',
    label: '',
  },
  {
    field: 'admixLife',
    label: 'ตรวจสอบน้ำยาที่รับมาไม่เกิน 6 เดือน',
  },
  {
    field: 'admixLifeR',
    label: '',
  },
  {
    field: 'admixFiber',
    label: 'ตรวจสอบน้ำยาลักษณะแห้งหรือไมโครไฟเบอร์ที่รับมาไม่เกิน 1 ปี',
  },
  {
    field: 'admixFiberR',
    label: '',
  },
  {
    field: 'confineWater',
    label: 'ตรวจสอบป้ายเตือน/พื้นและรั้วป้องกันรอบแท้งค์',
  },
  {
    field: 'confineWaterR',
    label: '',
  },
  {
    field: 'wastePit',
    label: 'ตรวจสอบขอบคอนกรีต/รั้วกั้น/ตะกอนในบ่อทุกบ่อ',
  },
  {
    field: 'wastePitR',
    label: '',
  },
  {
    field: 'wastePump',
    label: 'สภาพปั๊มน้ำ Water Reuse/การ์ดป้องกัน/สภาพของสายไฟ',
  },
  {
    field: 'wastePumpR',
    label: '',
  },
  {
    field: 'lightOffice',
    label: 'ตรวจสอบการระบายอากาศ/แสงสว่าง',
  },
  {
    field: 'lightOfficeR',
    label: '',
  },
  {
    field: 'safeTcut',
    label: 'ตรวจสอบสภาพสายไฟ/สายดิน/อุปกรณ์กันไฟฟ้ารั่ว (Safe-T-Cut)',
  },
  {
    field: 'safeTcutR',
    label: '',
  },
  {
    field: 'ppe',
    label: 'ตรวจสอบอุปกรณ์PPE เข็มขัดนิรภัย หน้ากากกันฝุ่น ถุงมือ ฯลฯ',
  },
  {
    field: 'ppeR',
    label: '',
  },

  // These are 80 objects for Maintenace
  {
    field: 'couplingWater',
    label: 'ตรวจเช็ค coupling',
  },
  {
    field: 'couplingWaterR',
    label: '',
  },
  {
    field: 'motorWater',
    label: 'ตรวจเช็คมอเตอร์ไฟฟ้า',
  },
  {
    field: 'motorWaterR',
    label: '',
  },
  {
    field: 'rpmWater',
    label: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
  },
  {
    field: 'rpmWaterR',
    label: '',
  },
  {
    field: 'vibrationWater',
    label: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
  },
  {
    field: 'vibrationWaterR',
    label: '',
  },
  {
    field: 'terminalWater',
    label: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ terminal',
  },
  {
    field: 'terminalWaterR',
    label: '',
  },
  {
    field: 'beltCom',
    label: 'ตรวจเช็คสายพาน',
  },
  {
    field: 'beltComR',
    label: '',
  },
  {
    field: 'filterCom',
    label: 'ตรวจเช็คชุด service unit/filter',
  },
  {
    field: 'filterComR',
    label: '',
  },
  {
    field: 'switchCom',
    label: 'ตรวจเช็ค/ปรับตั้ง pressure switch และ megnatics',
  },
  {
    field: 'switchComR',
    label: '',
  },
  {
    field: 'rpmCom',
    label: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
  },
  {
    field: 'rpmComR',
    label: '',
  },
  {
    field: 'vibrationCom',
    label: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
  },
  {
    field: 'vibrationComR',
    label: '',
  },
  {
    field: 'suctionCom',
    label: 'ตรวจสอบแรงดูดลูกสูบ',
  },
  {
    field: 'suctionComR',
    label: '',
  },
  {
    field: 'noiseCom',
    label: 'ตรวจสอบเสียงการทำงาน',
  },
  {
    field: 'noiseComR',
    label: '',
  },
  {
    field: 'lubCom',
    label: 'ตรวจเช็คสภาพน้ำมัน compressor',
  },
  {
    field: 'lubComR',
    label: '',
  },
  {
    field: 'gearOilWeigher',
    label: 'ตรวจระดับน้ำมันเกียร์',
  },
  {
    field: 'gearOilWeigherR',
    label: '',
  },
  {
    field: 'brakeWeigher',
    label: 'ตรวจเช็คการทำงานของเบรค',
  },
  {
    field: 'brakeWeigherR',
    label: '',
  },
  {
    field: 'solenoidWeigher',
    label: 'ตรวจเช็ค solenoids valve',
  },
  {
    field: 'solenoidWeigherR',
    label: '',
  },
  {
    field: 'motorWeigher',
    label: 'ตรวจเช็คมอเตอร์ไฟฟ้า',
  },
  {
    field: 'motorWeigherR',
    label: '',
  },
  {
    field: 'rpmWeigher',
    label: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
  },
  {
    field: 'rpmWeigherR',
    label: '',
  },
  {
    field: 'vibrationWeigher',
    label: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
  },
  {
    field: 'vibrationWeigherR',
    label: '',
  },
  {
    field: 'hopper',
    label: 'ตรวจสอบปากhopper',
  },
  {
    field: 'hopperR',
    label: '',
  },
  {
    field: 'suctionWeigher',
    label: 'ตรวจสอบกระบอกลม',
  },
  {
    field: 'suctionWeigherR',
    label: '',
  },
  {
    field: 'springWeigher',
    label: 'ตรวจเช็คและปรับตั้งสลิง/โซ่/สายพาน',
  },
  {
    field: 'springWeigherR',
    label: '',
  },
  {
    field: 'loadCellWeigher',
    label: 'ตรวจเช็คสาย Load cell',
  },
  {
    field: 'loadCellWeigherR',
    label: '',
  },
  {
    field: 'pulleyWeigher',
    label: 'ตรวจเช็ค roller และ pulley',
  },
  {
    field: 'pulleyWeigherR',
    label: '',
  },
  {
    field: 'emerWeigher',
    label: 'ตรวจเช็ค limit sw./ proximity sw./ snap sw./ emer. stop',
  },
  {
    field: 'emerWeigherR',
    label: '',
  },
  {
    field: 'blade',
    label: 'ตรวจตั้งใบกวน ใบปาดและตรวจสภาพ',
  },
  {
    field: 'bladeR',
    label: '',
  },
  {
    field: 'gearMixer',
    label: 'ตรวจตั้งเฟืองขับ/coupling/สายพาน',
  },
  {
    field: 'gearMixerR',
    label: '',
  },
  {
    field: 'emerMixer',
    label: 'ตรวจเช็ค limit sw./proximity sw./ emer. stop',
  },
  {
    field: 'emerMixerR',
    label: '',
  },
  {
    field: 'motorMixer',
    label: 'ตรวจเช็คมอเตอร์ไฟฟ้า',
  },
  {
    field: 'motorMixerR',
    label: '',
  },
  {
    field: 'rpmMixer',
    label: 'ตรวจสอบความเร็วรอบมอเตอร์ไฟฟ้า',
  },
  {
    field: 'rpmMixerR',
    label: '',
  },
  {
    field: 'vibrationMixer',
    label: 'ตรวจสอบการสั่นสะเทือนมอเตอร์ไฟฟ้า',
  },
  {
    field: 'vibrationMixerR',
    label: '',
  },
  {
    field: 'hydraulicMixer',
    label: 'ตรวจเช็ค hydraulic system/pneumatic system',
  },
  {
    field: 'hydraulicMixerR',
    label: '',
  },
  {
    field: 'gearOilDragline',
    label: 'ตรวจระดับน้ำมันเกียร์',
  },
  {
    field: 'gearOilDraglineR',
    label: '',
  },
  {
    field: 'chainDragline',
    label: 'ตรวจเช็คโซ่',
  },
  {
    field: 'chainDraglineR',
    label: '',
  },
  {
    field: 'scraper',
    label: 'ตรวจเช็คการทำงานของเครื่องโกย',
  },
  {
    field: 'scraperR',
    label: '',
  },
  {
    field: 'clutch',
    label: 'ตรวจเช็คระยะคลัท',
  },
  {
    field: 'clutchR',
    label: '',
  },
  {
    field: 'conveyor',
    label: 'ตรวจเช็คสายพานลำเลียง',
  },
  {
    field: 'conveyorR',
    label: '',
  },
  {
    field: 'airSystemDragline',
    label: 'ตรวจเช็คระบบลม',
  },
  {
    field: 'airSystemDraglineR',
    label: '',
  },
  {
    field: 'pulleyDragline',
    label: 'ตรวจเช็ค roller และ pulley',
  },
  {
    field: 'pulleyDraglineR',
    label: '',
  },
  {
    field: 'winch',
    label: 'ตรวจเช็คระยะสึกของวิ้น',
  },
  {
    field: 'winchR',
    label: '',
  },
  {
    field: 'terminalDragline',
    label: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ terminal',
  },
  {
    field: 'terminalDraglineR',
    label: '',
  },
  {
    field: 'soleniodCement',
    label: 'ตรวจเช็ค soleniod valve',
  },
  {
    field: 'soleniodCementR',
    label: '',
  },
  {
    field: 'stopValve',
    label: 'ตรวจเช็ค stop valve',
  },
  {
    field: 'stopValveR',
    label: '',
  },
  {
    field: 'limitSwitchCement',
    label: 'ตรวจเช็ค limit sw./ proximity sw.',
  },
  {
    field: 'limitSwitchCementR',
    label: '',
  },
  {
    field: 'loadCellCement',
    label: 'ตรวจเช็ค Load cell และ สาย Load cell',
  },
  {
    field: 'loadCellCementR',
    label: '',
  },
  {
    field: 'butterflyCement',
    label: 'ตรวจเช็ค butter fly valve',
  },
  {
    field: 'butterflyCementR',
    label: '',
  },
  {
    field: 'motorScrew',
    label: 'ตรวจเช็คอุปกรณ์ไฟฟ้าและมอเตอร์',
  },
  {
    field: 'motorScrewR',
    label: '',
  },
  {
    field: 'emerScrew',
    label: 'ตรวจสอบการทำงานของ Emergency sw',
  },
  {
    field: 'emerScrewR',
    label: '',
  },
  {
    field: 'screwCement',
    label: 'ตรวจเช็คการหมุนของไส้สกรูและท่อสกรู',
  },
  {
    field: 'screwCementR',
    label: '',
  },
  {
    field: 'mdb',
    label: 'ตรวจสภาพอุปกรณ์ไฟฟ้าในตู้',
  },
  {
    field: 'mdbR',
    label: '',
  },
  {
    field: 'volt',
    label: 'เช็คมิเตอร์ Volt และ Amp',
  },
  {
    field: 'voltR',
    label: '',
  },
  {
    field: 'loadCellMain',
    label: 'ตรวจเช็ค LoadCell',
  },
  {
    field: 'loadCellMainR',
    label: '',
  },
  {
    field: 'emerCom',
    label:
      'ตรวจสอบการทำงานของ Emergency sw. และแสดงสถานะของ limit sw. บน manual station',
  },
  {
    field: 'emerComR',
    label: '',
  },
  {
    field: 'ups',
    label: 'ตรวจสอบ UPS',
  },
  {
    field: 'upsR',
    label: '',
  },
  {
    field: 'mcc',
    label: 'ตรวจเช็ค teminal สาย control รางสายไฟ สายไฟ',
  },
  {
    field: 'mccR',
    label: '',
  },
  {
    field: 'gearOilBelt',
    label: 'ตรวจเช็คระดับน้ำมันเกียร์/น้ำมัน Hydrolic',
  },
  {
    field: 'gearOilBeltR',
    label: '',
  },
  {
    field: 'hydraulicBelt',
    label: 'ตรวจเช็คการทำงานของ ปั้ม Hydrolic/กระบอก Hydrolic',
  },
  {
    field: 'hydraulicBeltR',
    label: '',
  },
  {
    field: 'loadConveyorBelt',
    label: 'ตรวจเช็คสายพานลำเลียง',
  },
  {
    field: 'loadConveyorBeltR',
    label: '',
  },
  {
    field: 'pulleyBelt',
    label: 'ตรวจเช็ค Roller และ Pulley',
  },
  {
    field: 'pulleyBeltR',
    label: '',
  },
  {
    field: 'motorBelt',
    label: 'ตรวจเช็ค Motor gear ขับสายพาน',
  },
  {
    field: 'motorBeltR',
    label: '',
  },
  {
    field: 'generator',
    label: 'ตรวจเช็ค Generator',
  },
  {
    field: 'generatorR',
    label: '',
  },
  {
    field: 'cementTank',
    label: 'ตรวจเช็คสถาพถัง Cement / Fly ash',
  },
  {
    field: 'cementTankR',
    label: '',
  },
  {
    field: 'soleniodTank',
    label: 'ตรวจเช็ค soliniod valve',
  },
  {
    field: 'soleniodTankR',
    label: '',
  },
  {
    field: 'buterflyTank',
    label: 'ตรวจเช็ค Butter fly valve',
  },
  {
    field: 'buterflyTankR',
    label: '',
  },
  {
    field: 'screwTank',
    label: 'ตรวจเช็ค ท่อสกรู',
  },
  {
    field: 'screwTankR',
    label: '',
  },
  {
    field: 'airSystemTank',
    label: 'ตรวจเช็ค ข้อต่อ, สายลม',
  },
  {
    field: 'airSystemTankR',
    label: '',
  },
  {
    field: 'bagFilter',
    label: 'ตรวจเช็คถังกรองฝุ่น',
  },
  {
    field: 'bagFilterR',
    label: '',
  },
  {
    field: 'motorTank',
    label: 'ตรวจเช็ค Motor /gear',
  },
  {
    field: 'motorTankR',
    label: '',
  },
  {
    field: 'gearOilTank',
    label: 'ตรวจเช็คระดับน้ำมันเกียร์',
  },
  {
    field: 'gearOilTankR',
    label: '',
  },
  {
    field: 'terminalTank',
    label: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ Therminal',
  },
  {
    field: 'terminalTankR',
    label: '',
  },

  // Ice Crusher
  // {
  //   field: 'motorIce',
  //   label: 'ตรวจเช็คมอเตอร์',
  // },
  // {
  //   field: 'motorIceR',
  //   label: '',
  // },
  // {
  //   field: 'screwIce',
  //   label: 'ตรวจเช็คการหมุนของใส้สกรู และท่อสกรู',
  // },
  // {
  //   field: 'screwIceR',
  //   label: '',
  // },
  // {
  //   field: 'terminalIce',
  //   label: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ Therminal',
  // },
  // {
  //   field: 'terminalIceR',
  //   label: '',
  // },
  // {
  //   field: 'structureLift',
  //   label: 'ตรวจเช็คโครงสร้างภายนอก',
  // },
  // {
  //   field: 'structureLiftR',
  //   label: '',
  // },
  // {
  //   field: 'pulleyLift',
  //   label: 'ตรวจเช็คการทำงานของรอกไฟฟ้า ',
  // },
  // {
  //   field: 'pulleyLiftR',
  //   label: '',
  // },
  // {
  //   field: 'motorPulleyLift',
  //   label: 'ตรวจเช็ค มอเตอร์รอกไฟฟ้า',
  // },
  // {
  //   field: 'motorPulleyLiftR',
  //   label: '',
  // },
  // {
  //   field: 'emerLift',
  //   label: 'ตรวจเช็คLimit SW/Poximity SW/Emer.SW/ไฟสัญญาณ',
  // },
  // {
  //   field: 'emerLiftR',
  //   label: '',
  // },
  // {
  //   field: 'chainLift',
  //   label: 'ตรวจเช็คโซ่, และตะขอ',
  // },
  // {
  //   field: 'chainLiftR',
  //   label: '',
  // },
  // {
  //   field: 'weigherLift',
  //   label: 'ตรวจเช็คราง และกระบะตาชั่ง',
  // },
  // {
  //   field: 'weigherLiftR',
  //   label: '',
  // },
  // {
  //   field: 'terminalLift',
  //   label: 'ตรวจเช็คชุดควบคุมไฟฟ้า จุดต่อสาย สภาพ Therminal',
  // },
  // {
  //   field: 'terminalLiftR',
  //   label: '',
  // },

  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
