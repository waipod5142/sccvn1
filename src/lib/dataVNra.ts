export const questions = [
  {
    id: 1,
    name: 'intervieweeName',
    question:
      'Tên của người được phỏng vấn (Hình ảnh của Người lao động liên quan đến RA)? / Name of the interviewee (Picture of Workers related to RA)',
    howto:
      'Xác nhận tên và hình ảnh của người được phỏng vấn thực hiện RA hàng ngày. / Confirm the name and picture of the interviewee performing RA daily.',
    accept:
      'Tên và hình ảnh của người được phỏng vấn đã được ghi nhận. / The name and picture of the interviewee have been recorded.',
  },
  {
    id: 2,
    name: 'fpeApplication',
    question:
      'Những FPE nào sẽ được áp dụng cho nhiệm vụ? / Which FPEs shall be applied to the task?',
    howto:
      'Liệt kê tất cả các FPE được áp dụng cho nhiệm vụ. / List all FPEs applied to the task.',
    accept:
      'Danh sách FPE được áp dụng đã được ghi nhận. / The list of applied FPEs has been recorded.',
  },
  {
    id: 3,
    name: 'potentialRisks',
    question:
      'Những rủi ro tiềm ẩn tại nơi làm việc cụ thể này là gì? / What are the potential risks at this specific working place?',
    howto:
      'Liệt kê tất cả các rủi ro tiềm ẩn tại nơi làm việc. / List all potential risks at the workplace.',
    accept:
      'Danh sách rủi ro tiềm ẩn đã được ghi nhận. / The list of potential risks has been recorded.',
  },
  {
    id: 4,
    name: 'riskControl',
    question:
      'Chúng ta kiểm soát những rủi ro tiềm ẩn này tại nơi làm việc cụ thể này như thế nào? / How do we control these potential risks at this specific working place?',
    howto:
      'Liệt kê các biện pháp kiểm soát rủi ro được áp dụng. / List the risk control measures applied.',
    accept:
      'Các biện pháp kiểm soát rủi ro đã được ghi nhận. / The risk control measures have been recorded.',
  },
  {
    id: 5,
    name: 'raUnderstanding',
    question:
      'Họ có hiểu RA không (xác nhận của người giám sát)? / Do they understand the RA (confirm by supervisor)?',
    howto:
      'Xác nhận sự hiểu biết về RA của người được phỏng vấn với giám sát viên. / Confirm the interviewee understanding of the RA with the supervisor.',
    accept:
      'Sự hiểu biết về RA đã được giám sát viên xác nhận. / The understanding of the RA has been confirmed by the supervisor.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'area', label: 'Area' },
  {
    field: 'intervieweeName',
    label: '1. Tên của người được phỏng vấn / Name of the interviewee',
  },
  {
    field: 'fpeApplication',
    label:
      '2. Những FPE nào sẽ được áp dụng cho nhiệm vụ? / Which FPEs shall be applied to the task?',
  },
  {
    field: 'potentialRisks',
    label:
      '3. Những rủi ro tiềm ẩn tại nơi làm việc cụ thể này là gì? / What are the potential risks at this specific working place?',
  },
  {
    field: 'riskControl',
    label:
      '4. Chúng ta kiểm soát những rủi ro tiềm ẩn này tại nơi làm việc cụ thể này như thế nào? / How do we control these potential risks at this specific working place?',
  },
  {
    field: 'raUnderstanding',
    label: '5. Họ có hiểu RA không? / Do they understand the RA?',
  },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
