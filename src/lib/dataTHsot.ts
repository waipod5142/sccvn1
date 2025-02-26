export const questions = [];

export const questionSets: {
  [key: string]: { id: number; name: string; question: string }[];
} = {
  vn: [
    {
      id: 1,
      name: 'topic',
      question:
        'Tôi đã hiểu và nhận biết cảnh báo an toàn này I understand and topic this accident',
    },
  ],
  th: [
    {
      id: 1,
      name: 'report',
      question:
        'โปรดเลือกประเภทการรายงานของท่านในวันนี้ /Please select your reporting type today.',
    },
  ],
  cmic: [
    {
      id: 1,
      name: 'topic',
      question:
        'ខ្ញុំបានយល់ និងទទួលស្គាល់ការព្រមានសុវត្ថិភាពនេះ I understand and topic this accident',
    },
  ],
  lk: [
    {
      id: 1,
      name: 'topic',
      question:
        'මම මේ අනතුරු ඇඟවීම තේරුම් ගනිමි සහ පිළිගනිමි I understand and topic this accident',
    },
  ],
  bd: [
    {
      id: 1,
      name: 'topic',
      question:
        'আমি এই সতর্কতাটি বুঝি এবং স্বীকার করি I understand and topic this accident',
    },
  ],
};

export const choicesSets: {
  [key: string]: { value: string; text: string }[];
} = {
  vn: [
    { value: 'understand', text: 'Hiểu' },
    { value: 'notUnderstand', text: 'Không hiểu' },
  ],
  th: [
    { value: 'sot', text: 'Safety Observation Tour (SOT)' },
    { value: 'vfl', text: 'Visible Felt Leadership (VFL)' },
  ],
  cmic: [
    { value: 'understand', text: 'យល់' },
    { value: 'notUnderstand', text: 'មិនយល់' },
  ],
  lk: [
    { value: 'understand', text: 'පිළිගන්නවා' },
    { value: 'notUnderstand', text: 'පිළිගන්නෙ නැහැ' },
  ],
  bd: [
    { value: 'understand', text: 'বোঝা' },
    { value: 'notUnderstand', text: 'বোঝা যায়নি' },
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
    field: 'safe',
    label:
      '4. การชมเชย: การกระทำ/สิ่งที่ปลอดภัย (Positive reinforcement: Safe Action or Safe Condition)',
  },
  {
    field: 'care',
    label:
      '5. ความห่วงใย: การกระทำ/สิ่งที่ไม่ปลอดภัย (Safety care : Unsafe Action or Unsafe Condition) และข้อตกลงความร่วมมือ (Agreement) ร่วมกัน',
  },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
