export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'alertNo', label: 'Alert No' },
  { field: 'typeAccident', label: 'Type of Accident' },
  { field: 'learn', label: 'Lesson Learn' },
  { field: 'understand', label: 'Understand' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];

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
