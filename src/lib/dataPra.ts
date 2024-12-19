export const questions = [
  {
    id: 1,
    name: 'supervisorName',
    question:
      'Tên của người giám sát (Người phỏng vấn nắm giữ KPI RA)? / Name of the supervisor (Interviewer who hold the RA KPI)',
    howto:
      'Xác nhận tên của người giám sát đảm bảo họ nắm giữ KPI RA. / Confirm the name of the supervisor to ensure they hold the RA KPI.',
    accept:
      'Tên của người giám sát đã được ghi nhận chính xác. / The name of the supervisor has been accurately recorded.',
  },
  {
    id: 2,
    name: 'intervieweeName',
    question:
      'Tên của người được phỏng vấn (Hình ảnh của Người lao động liên quan đến RA)? / Name of the interviewee (Picture of Workers related to RA)',
    howto:
      'Xác nhận tên và hình ảnh của người được phỏng vấn thực hiện RA hàng ngày. / Confirm the name and picture of the interviewee performing RA daily.',
    accept:
      'Tên và hình ảnh của người được phỏng vấn đã được ghi nhận. / The name and picture of the interviewee have been recorded.',
  },
  {
    id: 3,
    name: 'fpeApplication',
    question:
      'Những FPE nào sẽ được áp dụng cho nhiệm vụ? / Which FPEs shall be applied to the task?',
    howto:
      'Liệt kê tất cả các FPE được áp dụng cho nhiệm vụ. / List all FPEs applied to the task.',
    accept:
      'Danh sách FPE được áp dụng đã được ghi nhận. / The list of applied FPEs has been recorded.',
  },
  {
    id: 4,
    name: 'potentialRisks',
    question:
      'Những rủi ro tiềm ẩn tại nơi làm việc cụ thể này là gì? / What are the potential risks at this specific working place?',
    howto:
      'Liệt kê tất cả các rủi ro tiềm ẩn tại nơi làm việc. / List all potential risks at the workplace.',
    accept:
      'Danh sách rủi ro tiềm ẩn đã được ghi nhận. / The list of potential risks has been recorded.',
  },
  {
    id: 5,
    name: 'riskControl',
    question:
      'Chúng ta kiểm soát những rủi ro tiềm ẩn này tại nơi làm việc cụ thể này như thế nào? / How do we control these potential risks at this specific working place?',
    howto:
      'Liệt kê các biện pháp kiểm soát rủi ro được áp dụng. / List the risk control measures applied.',
    accept:
      'Các biện pháp kiểm soát rủi ro đã được ghi nhận. / The risk control measures have been recorded.',
  },
  {
    id: 6,
    name: 'raUnderstanding',
    question:
      'Họ có hiểu RA không (xác nhận của người giám sát)? / Do they understand the RA (confirm by supervisor)?',
    howto:
      'Xác nhận sự hiểu biết về RA của người được phỏng vấn với giám sát viên. / Confirm the interviewee understanding of the RA with the supervisor.',
    accept:
      'Sự hiểu biết về RA đã được giám sát viên xác nhận. / The understanding of the RA has been confirmed by the supervisor.',
  },
];

export const controlsQuestions = [
  {
    id: 'eliminateHazard',
    label: 'Nguy cơ có thể loại trừ được? / Can the hazards be eliminated?',
  },
  {
    id: 'substituteHazard',
    label: 'Nguy cơ có thể thay thế được? / Can the hazards be substituted?',
  },
  {
    id: 'guardsInPlace',
    label:
      'Có đầy đủ các tấm chắn và hàng rào? / Are all guards and barriers in place?',
  },
  {
    id: 'proceduresRequired',
    label:
      'Có yêu cầu quy trình và giấy phép làm việc? / Are procedures required, work permits?',
  },
  {
    id: 'extraPPE',
    label: 'Có cần thêm phương tiện bảo vệ cá nhân? / Is extra PPE required?',
  },
];

export const personalsQuestions = [
  { id: 'fatigue', label: 'Mệt mỏi / Fatigue' },
  { id: 'illness', label: 'Bệnh tật / Illness' },
  { id: 'rushing', label: 'Vội vàng / Rushing' },
  { id: 'distraction', label: 'Xao lãng / Distraction' },
];

export const laststepsQuestions = [
  {
    id: 'eyesOnPath',
    label: 'Tập trung quan sát lối đi/hướng đi / Eyes on Path',
  },
  {
    id: 'eyesOnHands',
    label: 'Tập trung vào thao tác đang thực hiện / Eyes on Hands',
  },
  {
    id: 'lineOfFire',
    label: 'Quan sát và tránh các vị trí nguy hiểm / Line of Fire',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'location', label: 'Khu vực / Location' },
  { field: 'taskDescription', label: 'Mô tả công việc / Description of Task' },
  { field: 'hazards', label: 'Mối nguy / Hazards' },
  {
    field: 'eliminateHazard',
    label: 'Nguy cơ có thể loại trừ được? / Can the hazards be eliminated?',
  },
  {
    field: 'substituteHazard',
    label: 'Nguy cơ có thể thay thế được? / Can the hazards be substituted?',
  },
  {
    field: 'guardsInPlace',
    label:
      'Có đầy đủ các tấm chắn và hàng rào? / Are all guards and barriers in place?',
  },
  {
    field: 'proceduresRequired',
    label:
      'Có yêu cầu quy trình và giấy phép làm việc? / Are procedures required, work permits?',
  },
  {
    field: 'extraPPE',
    label: 'Có cần thêm phương tiện bảo vệ cá nhân? / Is extra PPE required?',
  },
  { field: 'fatigue', label: 'Mệt mỏi / Fatigue' },
  { field: 'illness', label: 'Bệnh tật / Illness' },
  { field: 'rushing', label: 'Vội vàng / Rushing' },
  { field: 'distraction', label: 'Xao lãng / Distraction' },
  {
    field: 'eyesOnPath',
    label: 'Tập trung quan sát lối đi/hướng đi / Eyes on Path',
  },
  {
    field: 'eyesOnHands',
    label: 'Tập trung vào thao tác đang thực hiện / Eyes on Hands',
  },
  {
    field: 'lineOfFire',
    label: 'Quan sát và tránh các vị trí nguy hiểm / Line of Fire',
  },
  {
    field: 'taskSafe',
    label:
      'Bây giờ công việc đã an toàn để làm chưa? / Is the Task Safe to Proceed Now?',
  },
  { field: 'remark', label: 'Remark / Ghi chú' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
