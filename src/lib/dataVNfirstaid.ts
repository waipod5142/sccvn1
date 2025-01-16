export const questions = [
  {
    id: 1,
    name: 'medicinesAvailable',
    question:
      'Thuốc hiện có đủ theo danh mục đính kèm / Medicines available according to attached list',
    howto: 'Kiểm tra danh mục thuốc theo danh sách đính kèm.',
    accept: 'Thuốc có đủ theo danh mục đính kèm.',
  },
  {
    id: 2,
    name: 'noExpiredMedicines',
    question: 'Không có thuốc hết hạn / No expired medicines',
    howto: 'Kiểm tra hạn sử dụng của tất cả các loại thuốc trong tủ.',
    accept: 'Tất cả các loại thuốc đều trong hạn sử dụng.',
  },
  {
    id: 3,
    name: 'cabinetHygiene',
    question:
      'Tình trạng vệ sinh tủ thuốc đạt yêu cầu / Medicine cabinet hygiene meets requirements',
    howto: 'Kiểm tra tình trạng vệ sinh và sắp xếp gọn gàng tủ thuốc.',
    accept: 'Tủ thuốc sạch sẽ, sắp xếp ngăn nắp.',
  },
  {
    id: 4,
    name: 'medicineBoxPicture',
    question: 'Hình ảnh tủ thuốc / Medicine box picture',
    howto: 'Chụp ảnh tủ thuốc để ghi nhận tình trạng thực tế.',
    accept: 'Hình ảnh tủ thuốc đã được chụp và lưu trữ.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'medicinesAvailable',
    label:
      '1. Thuốc hiện có đủ theo danh mục đính kèm / Medicines available according to attached list *',
  },
  { field: 'medicinesAvailableR', label: '' },
  { field: 'medicinesAvailableP', label: '' },
  { field: 'medicinesAvailableA', label: 'Respond to defect' },
  { field: 'medicinesAvailableF', label: '' },
  {
    field: 'noExpiredMedicines',
    label: '2. Không có thuốc hết hạn / No expired medicines *',
  },
  { field: 'noExpiredMedicinesR', label: '' },
  { field: 'noExpiredMedicinesP', label: '' },
  { field: 'noExpiredMedicinesA', label: 'Respond to defect' },
  { field: 'noExpiredMedicinesF', label: '' },
  {
    field: 'cabinetHygiene',
    label:
      '3. Tình trạng vệ sinh tủ thuốc đạt yêu cầu / Medicine cabinet hygiene meets requirements *',
  },
  { field: 'cabinetHygieneR', label: '' },
  { field: 'cabinetHygieneP', label: '' },
  { field: 'cabinetHygieneA', label: 'Respond to defect' },
  { field: 'cabinetHygieneF', label: '' },
  {
    field: 'medicineBoxPicture',
    label: '4. Hình ảnh tủ thuốc / Medicine box picture *',
  },
  { field: 'medicineBoxPictureR', label: '' },
  { field: 'medicineBoxPictureP', label: '' },
  { field: 'medicineBoxPictureA', label: 'Respond to defect' },
  { field: 'medicineBoxPictureF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
