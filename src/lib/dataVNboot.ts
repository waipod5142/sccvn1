export const questions = [
  {
    id: 1,
    name: 'contactPerson',
    question:
      'Tên người bạn đã thảo luận với / Name of contact person you have discussed with',
    howto:
      'Ghi nhận tên người bạn đã thảo luận về an toàn. / Record the name of the person you discussed safety with.',
    accept:
      'Tên người đã được thảo luận đã được ghi nhận. / The name of the contact person has been recorded.',
  },
  {
    id: 2,
    name: 'commentSafeBehavior',
    question: 'Bình luận về hành vi an toàn / Comment on safe behavior',
    howto:
      'Ghi nhận và bình luận về hành vi an toàn được quan sát. / Record and comment on the safe behavior observed.',
    accept:
      'Bình luận về hành vi an toàn đã được ghi nhận. / Comments on safe behavior have been recorded.',
  },
  {
    id: 3,
    name: 'commentUnsafeCondition',
    question:
      'Bình luận về điều kiện không an toàn / Comment on unsafe condition',
    howto:
      'Xác định và ghi nhận các điều kiện không an toàn. / Identify and record unsafe conditions.',
    accept:
      'Bình luận về điều kiện không an toàn đã được ghi nhận. / Comments on unsafe conditions have been recorded.',
  },
  {
    id: 4,
    name: 'discussOtherIssues',
    question: 'Thảo luận các vấn đề khác / Discuss other issues',
    howto:
      'Ghi nhận các vấn đề khác được thảo luận. / Record other issues discussed.',
    accept:
      'Các vấn đề khác đã được ghi nhận. / Other issues have been recorded.',
  },
  {
    id: 5,
    name: 'agreementWorkSafely',
    question:
      'Nhận được sự đồng ý để làm việc an toàn / Get agreement to work safely',
    howto:
      'Xác nhận sự đồng ý làm việc an toàn từ tất cả các bên liên quan. / Confirm the agreement to work safely from all parties involved.',
    accept:
      'Sự đồng ý làm việc an toàn đã được xác nhận. / The agreement to work safely has been confirmed.',
  },
  {
    id: 6,
    name: 'sendEmail',
    question: 'Gửi mail cho trưởng bộ phận / Send email to head department',
    howto:
      'Gửi email thông báo các nội dung cần thiết cho trưởng bộ phận. / Send an email with the necessary information to the head department.',
    accept:
      'Email đã được gửi thành công. / The email has been successfully sent.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'area', label: 'Area' },
  {
    field: 'contactPerson',
    label: '1. Record the name of the person you discussed safety with',
  },
  {
    field: 'commentSafeBehavior',
    label: '2. Record and comment on the safe behavior observed',
  },
  {
    field: 'commentUnsafeCondition',
    label: '3. Identify and record unsafe conditions',
  },
  {
    field: 'discussOtherIssues',
    label: '4. Record other issues discussed',
  },
  {
    field: 'agreementWorkSafely',
    label: '5. Confirm the agreement to work safely from all parties involved',
  },
  {
    field: 'sendEmail',
    label:
      '6. Send an email with the necessary information to the head department',
  },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
