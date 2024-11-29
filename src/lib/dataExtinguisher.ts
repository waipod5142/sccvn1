export const questions = [
  {
    id: 1,
    name: 'sealCheck',
    question:
      'Kiểm tra niêm phong kẹp chì, chốt khoá bình bảo đảm còn nguyên vẹn?',
    howto: 'Chạm và nhìn',
    accept: 'Nguyên vẹn',
  },
  {
    id: 2,
    name: 'mouthRustCheck',
    question: 'Kiểm tra miệng bình, mỏ vịt không bị rỉ sét?',
    howto: 'Chạm và nhìn',
    accept: 'Không bị rỉ sét',
  },
  {
    id: 3,
    name: 'hoseCheck',
    question:
      'Kiểm tra ống vòi không bị nứt gẫy, mục hay bị tắc do vật lạ, ong làm tổ?',
    howto: 'Chạm và nhìn',
    accept: 'Không bị nứt gẫy, mục hay bị tắc',
  },
  {
    id: 4,
    name: 'cleaning',
    question: 'Lau chùi vệ sinh bình?',
    howto: 'Lau chùi',
    accept: 'Sạch sẽ',
  },
  {
    id: 5,
    name: 'gasLevelCheck',
    question:
      'Dùng cân để kiểm tra lượng khí trong bình (CO2). Ghi kết quả cân vào checklist kiểm tra. Khi lượng khí trong bình hao hụt 10% nên thay bình mới?',
    howto: 'Cân và ghi kết quả',
    accept: 'Lượng khí đầy hoặc không hao hụt quá 10%',
  },
  {
    id: 6,
    name: 'powderShake',
    question:
      'Sóc ngược bình 05 lần làm cho bột trong bình không bị đông cứng. (Bình Bột)',
    howto: 'Sóc ngược bình',
    accept: 'Bột không bị đông cứng',
  },
  {
    id: 7,
    name: 'pressureGaugeCheck',
    question:
      'Kiểm tra lại chỉ thị áp suất trên đồng hồ. chỉ thị phải nằm ở vạch màu xanh. (Bình Bột)',
    howto: 'Kiểm tra đồng hồ',
    accept: 'Chỉ thị ở vạch màu xanh',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'sealCheck',
    label:
      '1. Kiểm tra niêm phong kẹp chì, chốt khoá bình bảo đảm còn nguyên vẹn? *',
  },
  { field: 'sealCheckR', label: '' },
  { field: 'sealCheckP', label: '' },
  { field: 'sealCheckA', label: 'Respond to defect' },
  { field: 'sealCheckF', label: '' },
  {
    field: 'mouthRustCheck',
    label: '2. Kiểm tra miệng bình, mỏ vịt không bị rỉ sét? *',
  },
  { field: 'mouthRustCheckR', label: '' },
  { field: 'mouthRustCheckP', label: '' },
  { field: 'mouthRustCheckA', label: 'Respond to defect' },
  { field: 'mouthRustCheckF', label: '' },
  {
    field: 'hoseCheck',
    label:
      '3. Kiểm tra ống vòi không bị nứt gẫy, mục hay bị tắc do vật lạ, ong làm tổ? *',
  },
  { field: 'hoseCheckR', label: '' },
  { field: 'hoseCheckP', label: '' },
  { field: 'hoseCheckA', label: 'Respond to defect' },
  { field: 'hoseCheckF', label: '' },
  {
    field: 'cleaning',
    label: '4. Lau chùi vệ sinh bình? *',
  },
  { field: 'cleaningR', label: '' },
  { field: 'cleaningP', label: '' },
  { field: 'cleaningA', label: 'Respond to defect' },
  { field: 'cleaningF', label: '' },
  {
    field: 'gasLevelCheck',
    label:
      '5. Dùng cân để kiểm tra lượng khí trong bình. Ghi kết quả cân vào checklist kiểm tra. Khi lượng khí trong bình hao hụt 10% nên thay bình mới? *',
  },
  { field: 'gasLevelCheckR', label: '' },
  { field: 'gasLevelCheckP', label: '' },
  { field: 'gasLevelCheckA', label: 'Respond to defect' },
  { field: 'gasLevelCheckF', label: '' },
  {
    field: 'powderShake',
    label:
      '6. Sóc ngược bình 05 lần làm cho bột trong bình không bị đông cứng. (Bình Bột) *',
  },
  { field: 'powderShakeR', label: '' },
  { field: 'powderShakeP', label: '' },
  { field: 'powderShakeA', label: 'Respond to defect' },
  { field: 'powderShakeF', label: '' },
  {
    field: 'pressureGaugeCheck',
    label:
      '7. Kiểm tra lại chỉ thị áp suất trên đồng hồ. chỉ thị phải nằm ở vạch màu xanh. (Bình Bột) *',
  },
  { field: 'pressureGaugeCheckR', label: '' },
  { field: 'pressureGaugeCheckP', label: '' },
  { field: 'pressureGaugeCheckA', label: 'Respond to defect' },
  { field: 'pressureGaugeCheckF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
