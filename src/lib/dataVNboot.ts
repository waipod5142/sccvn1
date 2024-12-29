export const questions = [
  {
    id: 1,
    name: 'observeContact',
    question: 'Quan sát; sau đó liên lạc / Observe; then contact',
    howto:
      'Quan sát kỹ lưỡng tình hình xung quanh trước khi thực hiện liên lạc. / Observe the surroundings carefully before making contact.',
    accept:
      'Đã hoàn thành việc quan sát và liên lạc đúng cách. / Observation and contact have been properly completed.',
  },
  {
    id: 2,
    name: 'commentSafeBehavior',
    question: 'Bình luận về hành vi an toàn / Comment on safe behavior',
    howto:
      'Xác định và khen ngợi hành vi an toàn trong công việc. / Identify and praise safe behaviors at work.',
    accept:
      'Hành vi an toàn đã được bình luận và ghi nhận. / Safe behavior has been commented on and recorded.',
  },
  {
    id: 3,
    name: 'discussUnsafeBehavior',
    question: 'Thảo luận về hành vi không an toàn / Discuss unsafe behavior',
    howto:
      'Bày tỏ mối quan tâm, yêu cầu giải thích, thảo luận về hậu quả và đề xuất cách làm an toàn hơn. / Express concern, ask for clarification, discuss consequences, and propose safer ways to perform the task.',
    accept:
      'Đã thảo luận các hành vi không an toàn và đề xuất giải pháp an toàn hơn. / Unsafe behaviors have been discussed, and safer solutions have been proposed.',
  },
  {
    id: 4,
    name: 'otherSafetyIssues',
    question: 'Thảo luận các vấn đề an toàn khác / Discuss other safety issues',
    howto:
      'Xác định và thảo luận các vấn đề an toàn khác liên quan đến công việc hoặc khu vực làm việc. / Identify and discuss other safety issues related to the job or workplace.',
    accept:
      'Các vấn đề an toàn khác đã được thảo luận và ghi nhận. / Other safety issues have been discussed and recorded.',
  },
  {
    id: 5,
    name: 'agreementWorkSafely',
    question:
      'Nhận được sự đồng ý để làm việc an toàn / Get agreement to work safely',
    howto:
      'Đảm bảo tất cả các bên đồng ý thực hiện công việc một cách an toàn. / Ensure all parties agree to perform the task safely.',
    accept:
      'Sự đồng ý để làm việc an toàn đã được xác nhận. / Agreement to work safely has been confirmed.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'area', label: 'Area' },
  {
    field: 'observeContact',
    label: '1. Observe the surroundings carefully before making contact',
  },
  {
    field: 'commentSafeBehavior',
    label: '2. Identify and praise safe behaviors at work',
  },
  {
    field: 'discussUnsafeBehavior',
    label:
      '3. Discuss unsafe acts by expressing concerns, asking for clarifications, discussing consequences, and proposing safer methods',
  },
  {
    field: 'otherSafetyIssues',
    label:
      '4. Identify and discuss other safety issues related to the workplace',
  },
  {
    field: 'agreementWorkSafely',
    label: '5. Confirm agreement from all parties to work safely',
  },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
