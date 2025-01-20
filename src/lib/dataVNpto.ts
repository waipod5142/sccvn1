export const questions = [
  {
    id: 1,
    name: 'observerID',
    question: 'Mã nhân viên của Người quan sát / Observer ID',
    howto:
      'Ghi nhận mã nhân viên của người quan sát. / Record the employee ID of the observer.',
    accept:
      'Mã nhân viên đã được ghi nhận chính xác. / The observer ID has been accurately recorded.',
  },
  {
    id: 2,
    name: 'observedName',
    question: 'Tên Người được quan sát / Name of observed people',
    howto:
      'Ghi nhận tên đầy đủ của người được quan sát. / Record the full name of the observed person.',
    accept:
      'Tên của người được quan sát đã được ghi nhận chính xác. / The name of the observed person has been accurately recorded.',
  },
  {
    id: 3,
    name: 'department',
    question: 'Bộ phận/Nhà thầu / Department/Contractor',
    howto:
      'Xác nhận bộ phận hoặc nhà thầu liên quan. / Confirm the department or contractor involved.',
    accept:
      'Thông tin bộ phận/nhà thầu đã được ghi nhận. / The department/contractor information has been recorded.',
  },
  {
    id: 4,
    name: 'taskObserved',
    question: 'Công việc được quan sát / Task observed',
    howto:
      'Ghi nhận công việc đang được quan sát. / Record the task being observed.',
    accept:
      'Công việc được quan sát đã được ghi nhận. / The observed task has been recorded.',
  },
  {
    id: 5,
    name: 'procedureCode',
    question:
      'Mã số công việc, thủ tục đang thực hiện / Code of current WI procedure',
    howto:
      'Xác nhận và ghi nhận mã số công việc hoặc thủ tục đang thực hiện. / Confirm and record the code of the current work instruction or procedure.',
    accept:
      'Mã số công việc/thủ tục đã được ghi nhận. / The code of the work instruction/procedure has been recorded.',
  },
  {
    id: 6,
    name: 'potentialDamageOrInjury',
    question:
      'Các công việc có thể dẫn đến gây thiệt hại về tài sản hoặc gây thương tích không? / Could any of the practices observed result in property damage or injury?',
    howto:
      'Đánh giá và ghi nhận các khả năng gây thiệt hại về tài sản hoặc thương tích. / Assess and record the potential for property damage or injury.',
    accept:
      'Khả năng gây thiệt hại/thương tích đã được ghi nhận. / The potential for damage or injury has been recorded.',
  },
  {
    id: 7,
    name: 'complianceWI',
    question:
      'Công nhân có làm theo các bước và yêu cầu của hướng dẫn công việc (PPE; Giấy phép; Cách ly…)? Có Không (Nếu Không, mô tả sự sai lệch và lý do đằng sau sự sai lệch đó) / Did the worker(s) follow all WI steps and task requirements (PPE; Permits; Isolations etc.)? Yes No (If No, describe deviations and the reason behind them)',
    howto:
      'Xác nhận xem công nhân có tuân thủ đầy đủ hướng dẫn công việc hay không. / Confirm whether the worker followed all WI steps and requirements.',
    accept:
      'Tuân thủ hướng dẫn công việc đã được xác nhận. / Compliance with work instructions has been confirmed.',
  },
  {
    id: 8,
    name: 'unsafeActs',
    question:
      'Liệt kê các hành động, thiết bị, điều kiện hoặc cách làm, sự thực hành không an toàn hoặc tiềm ẩn sự không an toàn mà có thể ảnh hưởng đến an toàn, chất lượng, năng suất / List any unsafe / potentially unsafe acts; equipment/conditions or practices that could affect safety, quality, or efficiency',
    howto:
      'Ghi nhận tất cả các hành vi hoặc điều kiện không an toàn tiềm ẩn. / Record all unsafe or potentially unsafe acts or conditions.',
    accept:
      'Các hành động/điều kiện không an toàn đã được ghi nhận. / Unsafe acts/conditions have been recorded.',
  },
  {
    id: 9,
    name: 'goodBehaviours',
    question:
      'Liệt kê các hành vi tốt mà bạn quan sát được / List any good behaviours observed',
    howto:
      'Ghi nhận các hành vi tốt được quan sát. / Record the good behaviours observed.',
    accept:
      'Các hành vi tốt đã được ghi nhận. / Good behaviours have been recorded.',
  },
  {
    id: 10,
    name: 'discussion',
    question:
      'Thảo luận điều bạn quan sát được với công nhân. Ghi nhận lại các điểm chính vào các dòng phía dưới đây / Discuss your observations with the workers. Record any key points below',
    howto:
      'Thảo luận các quan sát với công nhân và ghi lại các điểm chính. / Discuss observations with workers and record key points.',
    accept:
      'Các điểm chính từ cuộc thảo luận đã được ghi nhận. / Key points from the discussion have been recorded.',
  },
  {
    id: 11,
    name: 'correctiveActions',
    question:
      'Hành động khắc phục được kiến nghị / Suggested Corrective Actions',
    howto:
      'Đề xuất các hành động khắc phục dựa trên quan sát. / Suggest corrective actions based on observations.',
    accept:
      'Các hành động khắc phục đã được ghi nhận. / Corrective actions have been recorded.',
  },
  {
    id: 12,
    name: 'sendEmail',
    question: 'Gửi mail cho trưởng bộ phận / Send email to head department',
    howto:
      'Xác nhận email đã được gửi đến trưởng bộ phận. / Confirm the email has been sent to the head department.',
    accept:
      'Email đã được gửi thành công. / The email has been successfully sent.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'area', label: 'Area' },
  {
    field: 'observerID',
    label: '1. Mã nhân viên của Người quan sát / Observer ID',
  },
  {
    field: 'observedName',
    label: '2. Tên Người được quan sát / Name of observed people',
  },
  { field: 'department', label: '3. Bộ phận/Nhà thầu / Department/Contractor' },
  {
    field: 'taskObserved',
    label: '4. Công việc được quan sát / Task observed',
  },
  {
    field: 'procedureCode',
    label:
      '5. Mã số công việc, thủ tục đang thực hiện / Code of current WI procedure',
  },
  {
    field: 'potentialDamageOrInjury',
    label:
      '6. Các công việc có thể dẫn đến gây thiệt hại về tài sản hoặc gây thương tích không? / Could any of the practices observed result in property damage or injury?',
  },
  {
    field: 'complianceWI',
    label:
      '7. Công nhân có làm theo các bước và yêu cầu của hướng dẫn công việc (PPE; Giấy phép; Cách ly…)? Có Không / Did the worker(s) follow all WI steps and task requirements (PPE; Permits; Isolations etc.)? Yes No',
  },
  {
    field: 'unsafeActs',
    label:
      '8. Liệt kê các hành động, thiết bị, điều kiện hoặc cách làm, sự thực hành không an toàn hoặc tiềm ẩn sự không an toàn mà có thể ảnh hưởng đến an toàn, chất lượng, năng suất / List any unsafe / potentially unsafe acts; equipment/conditions or practices that could affect safety, quality, or efficiency',
  },
  {
    field: 'goodBehaviours',
    label:
      '9. Liệt kê các hành vi tốt mà bạn quan sát được / List any good behaviours observed',
  },
  {
    field: 'discussion',
    label:
      '10. Thảo luận điều bạn quan sát được với công nhân. Ghi nhận lại các điểm chính vào các dòng phía dưới đây / Discuss your observations with the workers. Record any key points below',
  },
  {
    field: 'correctiveActions',
    label:
      '11. Hành động khắc phục được kiến nghị / Suggested Corrective Actions',
  },
  {
    field: 'sendEmail',
    label: '12. Gửi mail cho trưởng bộ phận / Send email to head department',
  },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
