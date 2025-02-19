export const questions = [];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Date' },
  { field: 'meetingNo', label: 'OH&S Meeting No' },
  { field: 'feedback', label: 'Topic, Lesson Learn or Feedback' },
  {
    field: 'acknowledge',
    label:
      'ฉันเข้าใจและรับทราบวาระการประชุมสื่อสารด้านความปลอดภัยในครั้งนี้ I understand and acknowledge this issues',
  },
];

export const question3Sets: {
  [key: string]: { id: number; name: string; question: string }[];
} = {
  vn: [
    {
      id: 2,
      name: 'acknowledge',
      question:
        'Tôi đã hiểu và nhận biết cảnh báo an toàn này I understand and acknowledge this accident',
    },
  ],
  th: [
    {
      id: 2,
      name: 'acknowledge',
      question:
        'ฉันเข้าใจและรับทราบวาระการประชุมสื่อสารด้านความปลอดภัยในครั้งนี้ I understand and acknowledge this safety meeting',
    },
  ],
  cmic: [
    {
      id: 2,
      name: 'acknowledge',
      question:
        'ខ្ញុំបានយល់ និងទទួលស្គាល់ការព្រមានសុវត្ថិភាពនេះ I understand and acknowledge this accident',
    },
  ],
  lk: [
    {
      id: 2,
      name: 'acknowledge',
      question:
        'මම මේ අනතුරු ඇඟවීම තේරුම් ගනිමි සහ පිළිගනිමි I understand and acknowledge this accident',
    },
  ],
  bd: [
    {
      id: 2,
      name: 'acknowledge',
      question:
        'আমি এই সতর্কতাটি বুঝি এবং স্বীকার করি I understand and acknowledge this accident',
    },
  ],
};

export const choices3Sets: {
  [key: string]: { value: string; text: string }[];
} = {
  vn: [
    { value: 'understand', text: 'Hiểu' },
    { value: 'notUnderstand', text: 'Không hiểu' },
  ],
  th: [
    { value: 'understand', text: 'เข้าใจ' },
    { value: 'notUnderstand', text: 'ไม่เข้าใจ' },
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
