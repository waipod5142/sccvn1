export const questions = [];

export const questionSets: {
  [key: string]: { id: number; name: string; question: string }[];
} = {
  th: [
    {
      id: 1,
      name: 'report',
      question:
        'โปรดเลือกประเภทการรายงานของท่านในวันนี้ /Please select your reporting type today.',
    },
  ],
};

export const choicesSets: {
  [key: string]: { value: string; text: string }[];
} = {
  th: [
    { value: 'sot', text: 'Safety Observation Tour (SOT)' },
    { value: 'vfl', text: 'Visible Felt Leadership (VFL)' },
  ],
};

export const question4Sets: {
  [key: string]: { id: number; name: string; question: string }[];
} = {
  th: [
    {
      id: 4,
      name: 'topics',
      question:
        'ประเด็นความปลอดภัยที่ท่านได้ตรวจสอบ / The safety issues that you have observed',
    },
  ],
};

export const choices4Sets: {
  [key: string]: { value: string; text: string }[];
} = {
  th: [
    { value: 'ppe', text: 'อุปกรณ์คุ้มครองความปลอดภัยส่วนบุคคล (PPE)' },
    { value: 'workingAtHight', text: 'การทำงานบนที่สูง (Working at Height)' },
    {
      value: 'isolation',
      text: 'การตัดแยกแหล่งพลังงาน (Isolation of plant and equipment)',
    },
    {
      value: 'vehicles',
      text: 'ยานพาหนะและการจราจร (Vehicles and Traffic Safety)',
    },
    { value: 'electrical', text: 'การทำงานกับไฟฟ้า (Electrical Safety)' },
    { value: 'guarding', text: 'การ์ดของเครื่องจักร (Machine Guarding)' },
    {
      value: 'hotwork',
      text: 'การทำงานความร้อนและประกายไฟ (Hot Work and Permits)',
    },
    { value: 'lifting', text: 'การทำงานยก (Lifting Equipment)' },
    { value: 'quarries', text: 'การทำงานเกี่ยวกับเหมือง (Quarries)' },
    {
      value: 'hotMaterials',
      text: 'การทำงานกับวัสดุที่มีความร้อน (Hot Materials)',
    },
    { value: 'csm', text: 'การบริหารจัดการผู้รับเหมา (Contractor Management)' },
    {
      value: 'equipment',
      text: 'การใช้งานอุปกรณ์และเครื่องมือ (Portable Equipment)',
    },
    { value: 'generalWork', text: 'การทำงานทั่วไป (General Work Permits)' },
  ],
};
export const question7Sets: {
  [key: string]: { id: number; name: string; question: string }[];
} = {
  th: [
    {
      id: 7,
      name: 'riskLevel',
      question: 'ระดับความรุนแรงของความเสี่ยง / Risk Level',
    },
  ],
};

export const choices7Sets: {
  [key: string]: { value: string; text: string }[];
} = {
  th: [
    {
      value: 'low',
      text: 'ต่ำ (Low) - มีโอกาสเกิดขึ้นน้อย ไม่มีผลกระทบร้ายแรง (Low probability of occurrence with no significant impact)',
    },
    {
      value: 'mediumt',
      text: 'ปานกลาง (Medium) - มีโอกาสเกิดขึ้นและอาจส่งผลกระทบต่อความปลอดภัย (Moderate probability of occurrence that may impact safety)',
    },
    {
      value: 'high',
      text: 'สูง (High) - มีความเสี่ยงสูงที่อาจเกิดอุบัติเหตุหรือส่งผลร้ายแรง (High risk of accidents or severe consequences)',
    },
  ],
};

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Date' },
  {
    field: 'report',
    label:
      '1. โปรดเลือกประเภทการรายงานของท่านในวันนี้ /Please select your reporting type today.',
  },
  {
    field: 'area',
    label:
      '2. พื้นที่ที่สังเกตการณ์ความปลอดภัย /Area or Location for observing',
  },
  {
    field: 'talkwith',
    label: '3. ชื่อของบุคคลที่ท่านได้คุยด้วย/ Observee name',
  },
  {
    field: 'topics',
    label:
      '4. ประเด็นความปลอดภัยที่ท่านได้ตรวจสอบ / The safety issues that you have observed',
  },
  {
    field: 'safe',
    label:
      '5. การชมเชย: การกระทำ/สิ่งที่ปลอดภัย (Positive reinforcement: Safe Action or Safe Condition)',
  },
  {
    field: 'care',
    label:
      '6. ความห่วงใย: การกระทำ/สิ่งที่ไม่ปลอดภัย (Safety care : Unsafe Action or Unsafe Condition) และข้อตกลงความร่วมมือ (Agreement) ร่วมกัน',
  },
  { field: 'riskLevel', label: '7. ระดับความรุนแรงของความเสี่ยง / Risk Level' },
  {
    field: 'actionComment',
    label:
      '8. มาตรการแก้ไขและป้องกัน หรือความคิดเห็นอื่นที่มีต่อการดำเนินการครั้งนี้ / Process of action or General Comments.',
  },
  { field: 'remark', label: 'หมายเหตุ Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
