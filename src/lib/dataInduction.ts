export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'understand', label: 'Understand' },
  { field: 'lat', label: '' },
];

export const questions3 = [
  {
    id: '1',
    name: 'understand',
    question:
      'Tôi đã hiểu và nhận biết đào tạo an toàn này / I understand and acknowledge this Safety Induction',
  },
];

// Define the ChoiceType type
export type ChoiceType = {
  key: number;
  value: string;
  text: string;
};

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
