export const headerFields = [
  { field: 'id', label: 'ID' },
  { field: 'name', label: 'Họ và tên / Name' },
  { field: 'position', label: 'Chức vụ / Position' },
  { field: 'department', label: 'Bộ phận / Department' },
  { field: 'site', label: 'Địa điểm / Site' },
  { field: 'type', label: 'Loại / Type' },
  { field: 'eSite', label: 'Nhà máy / Plant' },
  { field: 'status', label: 'Trạng thái / Status' },
  { field: 'company', label: 'සමාගම / Company' },
  { field: 'owner', label: 'Owner' },
];

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
