export const questions = [
  {
    id: 1,
    name: 'heatImpactDamage',
    question:
      'Kiểm tra sự hư hỏng do nhiệt, va đập và sự cố định chắc chắn / Check for damage due to heat, impact, and firm fixing',
    howto:
      'Kiểm tra bề mặt thiết bị xem có dấu hiệu hư hỏng do nhiệt và va đập không, và đảm bảo thiết bị được cố định chắc chắn.',
    accept:
      'Thiết bị không có dấu hiệu hư hỏng do nhiệt hoặc va đập và được cố định chắc chắn.',
  },
  {
    id: 2,
    name: 'electricalMetalPlateCondition',
    question:
      'Tình trạng các lam kim loại dẫn điện còn tốt / Condition of the electrical metal plates is still good',
    howto:
      'Kiểm tra các lam kim loại dẫn điện xem có bị gỉ sét hoặc hư hỏng không.',
    accept:
      'Các lam kim loại dẫn điện không có dấu hiệu hư hỏng và vẫn trong tình trạng tốt.',
  },
  {
    id: 3,
    name: 'threePoleType',
    question:
      'Là loại có 3 cực (1 cực nối đất) / It is a 3-pole type (1 pole is grounded)',
    howto: 'Kiểm tra thiết bị xem có đủ 3 cực, trong đó 1 cực được nối đất.',
    accept: 'Thiết bị có đủ 3 cực và 1 cực được nối đất đúng quy cách.',
  },
];

export const headerFields = [
  { field: 'id', label: 'ID' },
  { field: 'department', label: 'Department' },
  { field: 'type', label: 'Type' },
  { field: 'site', label: 'Site' },
  { field: 'personIncharge', label: 'Person In Charge' },
  { field: 'manufacturingDate', label: 'Manufacturing Date' },
  { field: 'remark', label: 'Remark' },
  { field: 'email', label: 'E-Mail' },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'heatImpactDamage',
    label: 'Kiểm tra sự hư hỏng do nhiệt, va đập và sự cố định chắc chắn',
  },
  { field: 'heatImpactDamageR', label: '' },
  { field: 'heatImpactDamageP', label: '' },
  { field: 'heatImpactDamageA', label: '' },
  { field: 'heatImpactDamageF', label: '' },
  {
    field: 'electricalMetalPlateCondition',
    label: 'Tình trạng các lam kim loại dẫn điện còn tốt',
  },
  { field: 'electricalMetalPlateConditionR', label: '' },
  { field: 'electricalMetalPlateConditionP', label: '' },
  { field: 'electricalMetalPlateConditionA', label: '' },
  { field: 'electricalMetalPlateConditionF', label: '' },
  {
    field: 'threePoleType',
    label: 'Là loại có 3 cực (1 cực nối đất)',
  },
  { field: 'threePoleTypeR', label: '' },
  { field: 'threePoleTypeP', label: '' },
  { field: 'threePoleTypeA', label: '' },
  { field: 'threePoleTypeF', label: '' },
  { field: 'tag', label: 'Tag' },
  { field: 'collection', label: 'Type of Equipment' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
