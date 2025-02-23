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
      name: 'topic',
      question: 'เรื่องที่ท่านได้พูดคุยในครั้งนี้ /Topics to talk about',
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
    {
      value: 'communicate',
      text: 'สื่อสารกฎหลักความปลอดภัย นโยบาย ข้อบังคับ หรือจรรยาบรรณในการดำเนินงาน (Communicate to the Policies, Rules, Regulations)',
    },
    {
      value: 'risk',
      text: 'การชี้บ่งแหล่งอันตรายและจัดการความเสี่ยง (Risk Identification and management)',
    },
    { value: 'permit', text: 'การขออนุญาตและใบอนุญาตการทำงาน (Work Permit)' },
    {
      value: 'isolation',
      text: 'ตัดแยกแหล่งพลังงานและล็อคอุปกรณ์ (Isolation lockout and tagout)',
    },
    { value: 'ppe', text: 'การใช้อุปกรณ์คุ้มครองความปลอดภัยส่วนบุคคล (PPE)' },
    {
      value: 'wi',
      text: 'การใช้เครื่องมือและอุปกรณ์ และขั้นตอนการปฏิบัติงาน (Procedure, Work Instruction)',
    },
    {
      value: 'health',
      text: 'สุขภาพ ความปลอดภัย และโรคจากการทำงาน (Occupational Health and Safety)',
    },
    { value: 'other', text: 'อื่นๆ' },
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
    field: 'topic',
    label: '1. เรื่องที่ท่านได้พูดคุยในครั้งนี้ /Topics to talk about',
  },
  {
    field: 'talkDetail',
    label: '2. เนื้อหาที่พูดคุยโดยสังเขป/Briefly discussed topic',
  },
  {
    field: 'place',
    label: '3. สถานที่ หรือพื้นที่ที่ทำการบรรยาย /place or location to talks',
  },
  {
    field: 'participate',
    label: '4. จำนวนคนที่เข้าร่วมรับฟัง โดยสังเขป/Number of participants',
  },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
