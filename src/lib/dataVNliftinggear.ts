export const questions = [
  {
    id: 1,
    name: 'maximumSafeWorkingLoadAndIdentificationNumber',
    question:
      'Tải trọng làm việc an toàn tối đa có được ghi rõ ràng và số nhận dạng có được đánh dấu rõ ràng không? / Is the maximum safe working load clearly indicated and the identification number clearly marked?',
    howto: 'Kiểm tra xem tải trọng làm việc an toàn tối đa và số nhận dạng có được ghi rõ ràng trên thiết bị không.',
    accept: 'Tải trọng làm việc an toàn tối đa và số nhận dạng được ghi rõ ràng.',
  },
  {
    id: 2,
    name: 'wearOrCorrosion',
    question:
      'Có dấu hiệu hao mòn hoặc ăn mòn nào không? / Are there any signs of wear or corrosion?',
    howto: 'Kiểm tra kỹ lưỡng thiết bị để phát hiện các dấu hiệu hao mòn hoặc ăn mòn.',
    accept: 'Không có dấu hiệu hao mòn hoặc ăn mòn.',
  },
  {
    id: 3,
    name: 'specificSlingsAndWireRopesCondition',
    question:
      'Có bất kỳ hư hỏng cơ học, dây đứt, gấp khúc, thiếu bôi trơn, lõi hỏng hoặc ống nối không tốt nào không? / Is there any mechanical damage, broken wires, kinks, insufficient lubrication, core damage or ferrule in bad condition?',
    howto: 'Kiểm tra kỹ lưỡng dây cáp và các bộ phận liên quan để phát hiện các hư hỏng.',
    accept: 'Không có hư hỏng cơ học, dây đứt, gấp khúc, thiếu bôi trơn, lõi hỏng hoặc ống nối không tốt.',
  },
  {
    id: 4,
    name: 'fibreSlingsCondition',
    question:
      'Có sợi đứt, sờn, bị tiếp xúc nhiệt độ cao, chất ăn mòn hoặc đổi màu không? / Are there any broken fibers, frayed strands, exposure to excessive heat, corrosive or discoloration?',
    howto: 'Kiểm tra kỹ lưỡng dây cáp sợi vải để phát hiện các hư hỏng.',
    accept: 'Không có sợi đứt, sờn, bị tiếp xúc nhiệt độ cao, chất ăn mòn hoặc đổi màu.',
  },
  {
    id: 5,
    name: 'hooksAndShacklesCondition',
    question:
      'Mắt, khóa chốt, chốt tải bị hỏng, cổ móc bị lan rộng hoặc chốt cổ không tốt không? / Is the eye, clevis, load pin damaged, hook throat spread or throat latch in bad order?',
    howto: 'Kiểm tra móc và xích để phát hiện các hư hỏng.',
    accept: 'Mắt, khóa chốt, chốt tải không bị hỏng, cổ móc không bị lan rộng và chốt cổ hoạt động tốt.',
  },
  {
    id: 6,
    name: 'chainBlocksCondition',
    question:
      'Khối xích có được bôi trơn đầy đủ và xích, móc có hoạt động tốt không? / Is the chain block sufficiently lubricated and are the chain and hook in good working order?',
    howto: 'Kiểm tra khối xích, xích và móc để phát hiện các hư hỏng và bôi trơn.',
    accept: 'Khối xích được bôi trơn đầy đủ và xích, móc hoạt động tốt.',
  },
  {
    id: 7,
    name: 'chainsCondition',
    question:
      'Có mắt xích nào bị gãy, biến dạng hoặc chuỗi bị giãn không? / Are any links broken, deformed or has the chain stretched?',
    howto: 'Kiểm tra kỹ lưỡng chuỗi để phát hiện các mắt xích bị gãy, biến dạng hoặc chuỗi bị giãn.',
    accept: 'Không có mắt xích nào bị gãy, biến dạng và chuỗi không bị giãn.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'maximumSafeWorkingLoadAndIdentificationNumber',
    label:
      '1. Tải trọng làm việc an toàn tối đa có được ghi rõ ràng và số nhận dạng có được đánh dấu rõ ràng không? / Is the maximum safe working load clearly indicated and the identification number clearly marked?',
  },
  { field: 'maximumSafeWorkingLoadAndIdentificationNumberR', label: '' },
  { field: 'maximumSafeWorkingLoadAndIdentificationNumberP', label: '' },
  { field: 'maximumSafeWorkingLoadAndIdentificationNumberA', label: 'Respond to defect' },
  { field: 'maximumSafeWorkingLoadAndIdentificationNumberF', label: '' },
  {
    field: 'wearOrCorrosion',
    label:
      '2. Có dấu hiệu hao mòn hoặc ăn mòn nào không? / Are there any signs of wear or corrosion?',
  },
  { field: 'wearOrCorrosionR', label: '' },
  { field: 'wearOrCorrosionP', label: '' },
  { field: 'wearOrCorrosionA', label: 'Respond to defect' },
  { field: 'wearOrCorrosionF', label: '' },
  {
    field: 'specificSlingsAndWireRopesCondition',
    label:
      '3. Có bất kỳ hư hỏng cơ học, dây đứt, gấp khúc, thiếu bôi trơn, lõi hỏng hoặc ống nối không tốt nào không? / Is there any mechanical damage, broken wires, kinks, insufficient lubrication, core damage or ferrule in bad condition?',
  },
  { field: 'specificSlingsAndWireRopesConditionR', label: '' },
  { field: 'specificSlingsAndWireRopesConditionP', label: '' },
  { field: 'specificSlingsAndWireRopesConditionA', label: 'Respond to defect' },
  { field: 'specificSlingsAndWireRopesConditionF', label: '' },
  {
    field: 'fibreSlingsCondition',
    label:
      '4. Có sợi đứt, sờn, bị tiếp xúc nhiệt độ cao, chất ăn mòn hoặc đổi màu không? / Are there any broken fibers, frayed strands, exposure to excessive heat, corrosive or discoloration?',
  },
  { field: 'fibreSlingsConditionR', label: '' },
  { field: 'fibreSlingsConditionP', label: '' },
  { field: 'fibreSlingsConditionA', label: 'Respond to defect' },
  { field: 'fibreSlingsConditionF', label: '' },
  {
    field: 'hooksAndShacklesCondition',
    label:
      '5. Mắt, khóa chốt, chốt tải bị hỏng, cổ móc bị lan rộng hoặc chốt cổ không tốt không? / Is the eye, clevis, load pin damaged, hook throat spread or throat latch in bad order?',
  },
  { field: 'hooksAndShacklesConditionR', label: '' },
  { field: 'hooksAndShacklesConditionP', label: '' },
  { field: 'hooksAndShacklesConditionA', label: 'Respond to defect' },
  { field: 'hooksAndShacklesConditionF', label: '' },
  {
    field: 'chainBlocksCondition',
    label:
      '6. Khối xích có được bôi trơn đầy đủ và xích, móc có hoạt động tốt không? / Is the chain block sufficiently lubricated and are the chain and hook in good working order?',
  },
  { field: 'chainBlocksConditionR', label: '' },
  { field: 'chainBlocksConditionP', label: '' },
  { field: 'chainBlocksConditionA', label: 'Respond to defect' },
  { field: 'chainBlocksConditionF', label: '' },
  {
    field: 'chainsCondition',
    label:
      '7. Có mắt xích nào bị gãy, biến dạng hoặc chuỗi bị giãn không? / Are any links broken, deformed or has the chain stretched?',
  },
  { field: 'chainsConditionR', label: '' },
  { field: 'chainsConditionP', label: '' },
  { field: 'chainsConditionA', label: 'Respond to defect' },
  { field: 'chainsConditionF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
