export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Date' },
  { field: 'alertNo', label: 'Alert No' },
  { field: 'typeAccident', label: 'Type of Accident' },
  { field: 'learn', label: 'Lesson Learn' },
  { field: 'acknowledge', label: 'Acknowledge' },
  { field: 'remark', label: 'Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];

export const questionSets: {
  [key: string]: { id: number; name: string; question: string }[];
} = {
  vn: [
    {
      id: 1,
      name: 'typeAccident',
      question: 'Loại tai nạn Type of accident',
    },
  ],
  th: [
    {
      id: 1,
      name: 'typeAccident',
      question: 'ประเภทของอุบัติเหตุ Type of accident',
    },
  ],
  cmic: [
    {
      id: 1,
      name: 'typeAccident',
      question: 'ប្រភេទគ្រោះថ្នាក់ Type of accident',
    },
  ],
  lk: [
    {
      id: 1,
      name: 'typeAccident',
      question: 'අනතුරේ වර්ගය Type of accident',
    },
  ],
  bd: [
    {
      id: 1,
      name: 'typeAccident',
      question: 'দুর্ঘটনার ধরন Type of accident',
    },
  ],
};

export const choicesSets: { [key: string]: { value: string; text: string }[] } =
  {
    vn: [
      { value: 'fatality', text: 'Sự cố tử vong Fatality Incident' },
      { value: 'disability', text: 'Tàn tật vĩnh viễn Permanent Disability' },
      {
        value: 'lostTime',
        text: 'Sự cố chấn thương gây mất thời gian làm việc Lost Time Injury Incident',
      },
      { value: 'critical', text: 'Sự cố nghiêm trọng Critical Incident' },
      {
        value: 'medical',
        text: 'Sự cố cần điều trị y tế Medical Treatment Incident',
      },
    ],
    th: [
      { value: 'fatality', text: 'อุบัติเหตุเสียชีวิต Fatality Incident' },
      { value: 'disability', text: 'ความพิการถาวร Permanent Disability' },
      {
        value: 'lostTime',
        text: 'อุบัติเหตุที่ทำให้เสียเวลาทำงาน Lost Time Injury Incident',
      },
      { value: 'critical', text: 'อุบัติเหตุร้ายแรง Critical Incident' },
      {
        value: 'medical',
        text: 'อุบัติเหตุที่ต้องได้รับการรักษาทางการแพทย์ Medical Treatment Incident',
      },
    ],
    cmic: [
      { value: 'fatality', text: 'ហេតុការណ៍ស្លាប់ Fatality Incident' },
      { value: 'disability', text: 'ពិការអចិន្រ្តៃ Permanent Disability' },
      {
        value: 'lostTime',
        text: 'ហេតុការណ៍បាត់បង់ពេលវេលា Lost Time Injury Incident',
      },
      { value: 'critical', text: 'ហេតុការណ៍ធ្ងន់ធ្ងរ Critical Incident' },
      {
        value: 'medical',
        text: 'ហេតុការណ៍ត្រូវការពេទ្យ Medical Treatment Incident',
      },
    ],
    lk: [
      { value: 'fatality', text: 'මරණාධාර අනතුරු Fatality Incident' },
      { value: 'disability', text: 'ස්ථිර අක්‍රීයතාව Permanent Disability' },
      {
        value: 'lostTime',
        text: 'කාලය නැති කරන අනතුරු Lost Time Injury Incident',
      },
      { value: 'critical', text: 'ගුරුතුගානු අනතුරු Critical Incident' },
      {
        value: 'medical',
        text: 'වෛද්‍ය ප්‍රතිකාර අවශ්‍ය අනතුරු Medical Treatment Incident',
      },
    ],
    bd: [
      { value: 'fatality', text: 'মৃত্যুর ঘটনা Fatality Incident' },
      { value: 'disability', text: 'স্থায়ী অক্ষমতা Permanent Disability' },
      {
        value: 'lostTime',
        text: 'সময় হারানো ঘটনার Lost Time Injury Incident',
      },
      { value: 'critical', text: 'গুরুতর ঘটনা Critical Incident' },
      {
        value: 'medical',
        text: 'চিকিৎসা প্রয়োজনীয় ঘটনা Medical Treatment Incident',
      },
    ],
  };

export const question3Sets: {
  [key: string]: { id: number; name: string; question: string }[];
} = {
  vn: [
    {
      id: 3,
      name: 'acknowledge',
      question:
        'Tôi đã hiểu và nhận biết cảnh báo an toàn này I understand and acknowledge this accident',
    },
  ],
  th: [
    {
      id: 3,
      name: 'acknowledge',
      question:
        'ฉันเข้าใจและรับทราบคำเตือนนี้ I understand and acknowledge this accident',
    },
  ],
  cmic: [
    {
      id: 3,
      name: 'acknowledge',
      question:
        'ខ្ញុំបានយល់ និងទទួលស្គាល់ការព្រមានសុវត្ថិភាពនេះ I understand and acknowledge this accident',
    },
  ],
  lk: [
    {
      id: 3,
      name: 'acknowledge',
      question:
        'මම මේ අනතුරු ඇඟවීම තේරුම් ගනිමි සහ පිළිගනිමි I understand and acknowledge this accident',
    },
  ],
  bd: [
    {
      id: 3,
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

export const questions = [
  {
    id: 1,
    name: 'typeAccident',
    question: 'Loại tai nạn Type of accident',
    howto: 'Loại tai nạn xảy ra Type of accident occurred',
    accept: 'Loại tai nạn đã được ghi nhận Type of accident recorded',
  },
];

export const questions3 = [
  {
    id: '3',
    name: 'understand',
    question:
      'Tôi đã hiểu và nhận biết cảnh báo an toàn này I understand and acknowledge this accident',
    howto: 'Loại tai nạn xảy ra Type of accident occurred',
    accept: 'Loại tai nạn đã được ghi nhận Type of accident recorded',
  },
];

// Define the ChoiceType type
export type ChoiceType = {
  key: number;
  value: string;
  text: string;
};

export const choices: ChoiceType[] = [
  {
    key: 1,
    value: 'Fatality',
    text: 'Sự cố tử vong Fatality Incident',
  },
  {
    key: 2,
    value: 'PD',
    text: 'Tàn tật vĩnh viễn Permanent Disability',
  },
  {
    key: 3,
    value: 'LTI',
    text: 'Sự cố chấn thương gây mất thời gian làm việc Lost Time Injury Incident',
  },
  {
    key: 4,
    value: 'CI',
    text: 'Sự cố nghiêm trọng Critical Incident',
  },
  {
    key: 5,
    value: 'MTI',
    text: 'Sự cố cần điều trị y tế Medical Treatment Incident',
  },
];

export const choices3: ChoiceType[] = [
  {
    key: 1,
    value: 'Understand',
    text: 'Hiểu',
  },
  {
    key: 2,
    value: 'Not Understand',
    text: 'Không hiểu',
  },
];
