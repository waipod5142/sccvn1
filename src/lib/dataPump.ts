export const questions = [
  {
    id: 1,
    name: 'generalCheck',
    question:
      'Yêu cầu chung: Vệ sinh máy bơm sạch sẽ, tình trạng chung của họng nước bình thường, không bị rỉ sét, không bị rò rỉ nước?',
    howto: 'Kiểm tra tổng thể, lau chùi, và quan sát',
    accept: 'Overall is clean, no rust, no leaking water, and no damage',
  },
  {
    id: 2,
    name: 'engineCheck',
    question:
      'Động cơ: Đủ nhớt bôi trơn, Xăng đã được châm đầy bình và sẵn sàng cho việc vận hành?',
    howto: 'Kiểm tra mức nhớt và xăng',
    accept: 'Sufficient lubricant, fuel tank is full and ready for operation',
  },
  {
    id: 3,
    name: 'operationCheck',
    question:
      'Vận hành: Khởi động máy trong thời gian 02 phút và tình trạng động cơ hoạt động bình thường?',
    howto: 'Khởi động và quan sát hoạt động của động cơ',
    accept: 'Engine operates normally during the 02-minute test',
  },
  {
    id: 4,
    name: 'unusualObservation',
    question: 'Các kiểm tra khác: Kiến nghị nếu có gì khác bất thường?',
    howto: 'Quan sát và báo cáo',
    accept: 'Suggest if there is anything unusual',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'generalCheck',
    label:
      '1. Yêu cầu chung: Vệ sinh máy bơm sạch sẽ, tình trạng chung của họng nước bình thường, không bị rỉ sét, không bị rò rỉ nước? *',
  },
  { field: 'generalCheckR', label: '' },
  { field: 'generalCheckP', label: '' },
  { field: 'generalCheckA', label: 'Respond to defect' },
  { field: 'generalCheckF', label: '' },
  {
    field: 'engineCheck',
    label:
      '2. Động cơ: Đủ nhớt bôi trơn, Xăng đã được châm đầy bình và sẵn sàng cho việc vận hành? *',
  },
  { field: 'engineCheckR', label: '' },
  { field: 'engineCheckP', label: '' },
  { field: 'engineCheckA', label: 'Respond to defect' },
  { field: 'engineCheckF', label: '' },
  {
    field: 'operationCheck',
    label:
      '3. Vận hành: Khởi động máy trong thời gian 02 phút và tình trạng động cơ hoạt động bình thường? *',
  },
  { field: 'operationCheckR', label: '' },
  { field: 'operationCheckP', label: '' },
  { field: 'operationCheckA', label: 'Respond to defect' },
  { field: 'operationCheckF', label: '' },
  {
    field: 'unusualObservation',
    label: '4. Các kiểm tra khác: Kiến nghị nếu có gì khác bất thường? *',
  },
  { field: 'unusualObservationR', label: '' },
  { field: 'unusualObservationP', label: '' },
  { field: 'unusualObservationA', label: 'Respond to defect' },
  { field: 'unusualObservationF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
