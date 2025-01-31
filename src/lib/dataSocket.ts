export const questions = [
  {
    id: 1,
    name: 'socket',
    question: 'Ổ cắm (Socket)',
    howto:
      'Kiểm tra sự phù hợp công suất các ngõ ra (thiết diện lời) Kiểm tra dây điện có 2 lớp cách ly Kiểm tra xem có vết cắt xuyên qua lớp vỏ bảo vệ bên ngoài?',
    accept:
      'Dây dẫn được cố định chặt, không có vết cắt hoặc hư hỏng. Kiểm tra các điểm nối có được cách điện tốt không?',
  },
  {
    id: 2,
    name: 'cables',
    question: 'Dây Dẫn',
    howto:
      'Kiểm tra sự phù hợp công suất các ngõ ra (thiết diện lời) Kiểm tra dây điện có 2 lớp cách ly Kiểm tra xem có vết cắt xuyên qua lớp vỏ bảo vệ bên ngoài?',
    accept:
      'Dây dẫn được cố định chặt trong hộp nối, không có vết cắt, cách điện tốt, và không có rò rỉ điện.',
  },
  {
    id: 3,
    name: 'cabinet',
    question: 'Vỏ tủ',
    howto:
      'Kiểm tra vỏ tủ cấp phối / Bảng điều khiển có đạt tiêu chuẩn bảo vệ IP42 khi lắp đặt sử dụng trong nhà và đạt chuẩn IP65 khi lắp đặt ngoài trời.',
    accept: 'Vỏ tủ đạt tiêu chuẩn bảo vệ theo yêu cầu.',
  },
  {
    id: 4,
    name: 'junctionBox',
    question: 'Trạm đấu nối',
    howto:
      'Kiểm tra trạm đấu nối và các thành phần điện mang điện lộ ra hoặc có khả năng lộ ra.',
    accept: 'Công tắc/CB và hệ thống nối đất phải phù hợp và không có hư hỏng.',
  },
  {
    id: 5,
    name: 'grounding',
    question: 'Nối đất (Tiếp địa)',
    howto: 'Kiểm tra trạm/cực nối đất được thiết kế và lắp đặt đúng cách.',
    accept:
      'Các thiết bị nối đất không bị rỉ sét, đúng chất liệu và lắp đặt đúng chuẩn.',
  },
  {
    id: 6,
    name: 'safetyDevices',
    question: 'Thiết bị an toàn',
    howto: 'Kiểm tra tình trạng và hoạt động của các nút dùng khẩn cấp (ELCB).',
    accept:
      'ELCB hoạt động bình thường, không có rò rỉ, nút test hoạt động chính xác.',
  },
  {
    id: 7,
    name: 'labels',
    question: 'Nhã/ Dấu hiệu',
    howto: 'Kiểm tra nhãn dạng thiết bị/HAC và các biển báo, dấu hiệu an toàn.',
    accept:
      'Biển báo và nhãn an toàn phải rõ ràng, dễ hiểu và gắn đúng vị trí.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  { field: 'socket', label: 'Status' },
  { field: 'socketR', label: '' },
  { field: 'socketP', label: '' },
  { field: 'socketA', label: '' },
  { field: 'socketF', label: '' },

  { field: 'cables', label: 'Dây Dẫn' },
  { field: 'cablesR', label: '' },
  { field: 'cablesP', label: '' },
  { field: 'cablesA', label: '' },
  { field: 'cablesF', label: '' },

  { field: 'cabinet', label: 'Vỏ tủ' },
  { field: 'cabinetR', label: '' },
  { field: 'cabinetP', label: '' },
  { field: 'cabinetA', label: '' },
  { field: 'cabinetF', label: '' },

  { field: 'junctionBox', label: 'Trạm đấu nối' },
  { field: 'junctionBoxR', label: '' },
  { field: 'junctionBoxP', label: '' },
  { field: 'junctionBoxA', label: '' },
  { field: 'junctionBoxF', label: '' },

  { field: 'grounding', label: 'Nối đất (Tiếp địa)' },
  { field: 'groundingR', label: '' },
  { field: 'groundingP', label: '' },
  { field: 'groundingA', label: '' },
  { field: 'groundingF', label: '' },

  { field: 'safetyDevices', label: 'Thiết bị an toàn' },
  { field: 'safetyDevicesR', label: '' },
  { field: 'safetyDevicesP', label: '' },
  { field: 'safetyDevicesA', label: '' },
  { field: 'safetyDevicesF', label: '' },

  { field: 'labels', label: 'Nhã/ Dấu hiệu' },
  { field: 'labelsR', label: '' },
  { field: 'labelsP', label: '' },
  { field: 'labelsA', label: '' },
  { field: 'labelsF', label: '' },

  { field: 'tag', label: 'Tag' },
  { field: 'collection', label: 'Type of Equipment' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
