export const questions = [
  {
    id: 1,
    name: 'generalCheck',
    question:
      'Yêu cầu chung: Vệ sinh máy bơm sạch sẽ, không bị rỉ sét, không bị rò rỉ nước?',
    howto: 'Kiểm tra tổng thể, lau chùi, và quan sát',
    accept: 'Overall is clean, no rust, no leaking water',
  },
  {
    id: 2,
    name: 'valveLockCheck',
    question: 'Van nước được khóa trong trạng thái mở?',
    howto: 'Kiểm tra trạng thái khóa',
    accept: 'Valve is locked in open mode',
  },
  {
    id: 3,
    name: 'valveOperationCheck',
    question: 'Xoay thử và van không bị kẹt?',
    howto: 'Xoay van để kiểm tra',
    accept: 'Valve is not stuck',
  },
  {
    id: 4,
    name: 'unusualObservation',
    question: 'Kiến nghị nếu có gì khác bất thường?',
    howto: 'Quan sát và báo cáo',
    accept: 'Report anything unusual',
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
      '1. Yêu cầu chung: Vệ sinh máy bơm sạch sẽ, không bị rỉ sét, không bị rò rỉ nước? *',
  },
  { field: 'generalCheckR', label: '' },
  { field: 'generalCheckP', label: '' },
  { field: 'generalCheckA', label: 'Respond to defect' },
  { field: 'generalCheckF', label: '' },
  {
    field: 'valveLockCheck',
    label: '2. Van nước được khóa trong trạng thái mở? *',
  },
  { field: 'valveLockCheckR', label: '' },
  { field: 'valveLockCheckP', label: '' },
  { field: 'valveLockCheckA', label: 'Respond to defect' },
  { field: 'valveLockCheckF', label: '' },
  {
    field: 'valveOperationCheck',
    label: '3. Xoay thử và van không bị kẹt? *',
  },
  { field: 'valveOperationCheckR', label: '' },
  { field: 'valveOperationCheckP', label: '' },
  { field: 'valveOperationCheckA', label: 'Respond to defect' },
  { field: 'valveOperationCheckF', label: '' },
  {
    field: 'unusualObservation',
    label: '4. Kiến nghị nếu có gì khác bất thường? *',
  },
  { field: 'unusualObservationR', label: '' },
  { field: 'unusualObservationP', label: '' },
  { field: 'unusualObservationA', label: 'Respond to defect' },
  { field: 'unusualObservationF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
