export const questions = [
  {
    id: 1,
    name: 'generalCheck',
    question:
      'Yêu cầu chung* - Xung quanh họng chữa cháy có chướng ngại vật không? Có cỏ mọc che phủ không? - Tình trạng chung của họng nước chữa cháy bình thường, không bị rỉ sét, không hư hỏng - Nhãn kiểm tra trên thân rõ ràng - Không bị rò rỉ nước',
    howto: 'Quan sát',
    accept:
      'Không có chướng ngại vật, không có cỏ mọc che phủ - Bình thường, không bị rỉ sét, không hư hỏng - Nhãn kiểm tra rõ ràng - Không rò rỉ nước',
  },
  {
    id: 2,
    name: 'valveCheck',
    question:
      'Cụm van đóng mở - Không bị han rỉ, đứt gãy, ở đúng vị trí thường đóng, không bị vướng hay kẹt?',
    howto: 'Quan sát và kiểm tra',
    accept: 'Không bị han rỉ, đứt gãy, đúng vị trí, không bị vướng hay kẹt',
  },
  {
    id: 3,
    name: 'capCheck',
    question:
      'Nắp đậy - Nắp đậy phải ở vị trí đóng đầu trụ nước/foam và phải dễ dàng tháo mở, không bị kẹt - Còn đủ gioăng của họng',
    howto: 'Quan sát và kiểm tra',
    accept: 'Đúng vị trí, dễ dàng tháo mở, không bị kẹt, đủ gioăng',
  },
  {
    id: 4,
    name: 'hydrantHeadCheck',
    question: 'Đầu trụ nước - Còn nguyên vẹn, không bị gãy ngàm',
    howto: 'Quan sát và kiểm tra',
    accept: 'Nguyên vẹn, không bị gãy ngàm',
  },
  {
    id: 5,
    name: 'inspectionTagCheck',
    question:
      'Thẻ kiểm tra - Thẻ kiểm tra còn nguyên vẹn, không bị rách, mất màu - Thẻ được bấm lỗ mỗi khi kiểm tra',
    howto: 'Quan sát và kiểm tra',
    accept: 'Nguyên vẹn, không rách, không mất màu, được bấm lỗ',
  },
  {
    id: 6,
    name: 'hydrantBodyCheck',
    question:
      'Thân trụ nước - Thân trụ nước phải đúng màu sơn đỏ, không bị mất màu, không bị bùn đất bám lên - Các vị trí nối ống phải có đầy đủ đai ốc và được siết chắc chắn',
    howto: 'Quan sát và kiểm tra',
    accept:
      'Đúng màu sơn đỏ, không mất màu, không bị bùn đất bám, đầy đủ đai ốc, siết chắc chắn',
  },
  {
    id: 7,
    name: 'waterPressureCheck',
    question:
      'Áp lực nước chữa cháy - Đồng hồ chỉ thị áp lực nước phải đúng áp lực nước yêu cầu (7-8 bar) đồng thời kết hợp xả trụ nước kiểm tra đảm bảo nước xả đầu ra có áp lực nước đạt yêu cầu',
    howto: 'Quan sát và kiểm tra',
    accept: 'Áp lực nước đúng yêu cầu, nước xả đầu ra đạt yêu cầu',
  },
  {
    id: 8,
    name: 'fireHoseCheck',
    question:
      'Vòi cứu hỏa - Được trang bị trong tình trạng tốt, không mục rách, có gioăng cao su ở 2 đầu',
    howto: 'Quan sát và kiểm tra',
    accept: 'Tình trạng tốt, không mục rách, có gioăng cao su',
  },
  {
    id: 9,
    name: 'fireNozzleCheck',
    question:
      'Lăng cứu hỏa - Được trang bị phù hợp, trong tình trạng tốt, có gioăng cao su',
    howto: 'Quan sát và kiểm tra',
    accept: 'Trang bị phù hợp, tình trạng tốt, có gioăng cao su',
  },
  {
    id: 10,
    name: 'hoseCabinetCheck',
    question: 'Tủ đựng lăng vòi - Tình trạng tủ đựng lăng vòi còn tốt',
    howto: 'Quan sát và kiểm tra',
    accept: 'Tình trạng tốt',
  },
  {
    id: 11,
    name: 'otherChecks',
    question: 'Các kiểm tra khác - Kiến nghị',
    howto: 'Kiến nghị',
    accept: 'N/A',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'generalCheck',
    label:
      '1. Yêu cầu chung* - Xung quanh họng chữa cháy có chướng ngại vật không? Có cỏ mọc che phủ không? - Tình trạng chung của họng nước chữa cháy bình thường, không bị rỉ sét, không hư hỏng - Nhãn kiểm tra trên thân rõ ràng - Không bị rò rỉ nước',
  },
  { field: 'generalCheckR', label: '' },
  { field: 'generalCheckP', label: '' },
  { field: 'generalCheckA', label: 'Respond to defect' },
  { field: 'generalCheckF', label: '' },
  {
    field: 'valveCheck',
    label:
      '2. Cụm van đóng mở - Không bị han rỉ, đứt gãy, ở đúng vị trí thường đóng, không bị vướng hay kẹt?',
  },
  { field: 'valveCheckR', label: '' },
  { field: 'valveCheckP', label: '' },
  { field: 'valveCheckA', label: 'Respond to defect' },
  { field: 'valveCheckF', label: '' },
  {
    field: 'capCheck',
    label:
      '3. Nắp đậy - Nắp đậy phải ở vị trí đóng đầu trụ nước/foam và phải dễ dàng tháo mở, không bị kẹt - Còn đủ gioăng của họng',
  },
  { field: 'capCheckR', label: '' },
  { field: 'capCheckP', label: '' },
  { field: 'capCheckA', label: 'Respond to defect' },
  { field: 'capCheckF', label: '' },
  {
    field: 'hydrantHeadCheck',
    label: '4. Đầu trụ nước - Còn nguyên vẹn, không bị gãy ngàm',
  },
  { field: 'hydrantHeadCheckR', label: '' },
  { field: 'hydrantHeadCheckP', label: '' },
  { field: 'hydrantHeadCheckA', label: 'Respond to defect' },
  { field: 'hydrantHeadCheckF', label: '' },
  {
    field: 'inspectionTagCheck',
    label:
      '5. Thẻ kiểm tra - Thẻ kiểm tra còn nguyên vẹn, không bị rách, mất màu - Thẻ được bấm lỗ mỗi khi kiểm tra',
  },
  { field: 'inspectionTagCheckR', label: '' },
  { field: 'inspectionTagCheckP', label: '' },
  { field: 'inspectionTagCheckA', label: 'Respond to defect' },
  { field: 'inspectionTagCheckF', label: '' },
  {
    field: 'hydrantBodyCheck',
    label:
      '6. Thân trụ nước - Thân trụ nước phải đúng màu sơn đỏ, không bị mất màu, không bị bùn đất bám lên - Các vị trí nối ống phải có đầy đủ đai ốc và được siết chắc chắn',
  },
  { field: 'hydrantBodyCheckR', label: '' },
  { field: 'hydrantBodyCheckP', label: '' },
  { field: 'hydrantBodyCheckA', label: 'Respond to defect' },
  { field: 'hydrantBodyCheckF', label: '' },
  {
    field: 'waterPressureCheck',
    label:
      '7. Áp lực nước chữa cháy - Đồng hồ chỉ thị áp lực nước phải đúng áp lực nước yêu cầu (7-8 bar) đồng thời kết hợp xả trụ nước kiểm tra đảm bảo nước xả đầu ra có áp lực nước đạt yêu cầu',
  },
  { field: 'waterPressureCheckR', label: '' },
  { field: 'waterPressureCheckP', label: '' },
  { field: 'waterPressureCheckA', label: 'Respond to defect' },
  { field: 'waterPressureCheckF', label: '' },
  {
    field: 'fireHoseCheck',
    label:
      '8. Vòi cứu hỏa - Được trang bị trong tình trạng tốt, không mục rách, có gioăng cao su ở 2 đầu',
  },
  { field: 'fireHoseCheckR', label: '' },
  { field: 'fireHoseCheckP', label: '' },
  { field: 'fireHoseCheckA', label: 'Respond to defect' },
  { field: 'fireHoseCheckF', label: '' },
  {
    field: 'fireNozzleCheck',
    label:
      '9. Lăng cứu hỏa - Được trang bị phù hợp, trong tình trạng tốt, có gioăng cao su',
  },
  { field: 'fireNozzleCheckR', label: '' },
  { field: 'fireNozzleCheckP', label: '' },
  { field: 'fireNozzleCheckA', label: 'Respond to defect' },
  { field: 'fireNozzleCheckF', label: '' },
  {
    field: 'hoseCabinetCheck',
    label: '10. Tủ đựng lăng vòi - Tình trạng tủ đựng lăng vòi còn tốt',
  },
  { field: 'hoseCabinetCheckR', label: '' },
  { field: 'hoseCabinetCheckP', label: '' },
  { field: 'hoseCabinetCheckA', label: 'Respond to defect' },
  { field: 'hoseCabinetCheckF', label: '' },
  {
    field: 'otherChecks',
    label: '11. Các kiểm tra khác - Kiến nghị',
  },
  { field: 'otherChecksR', label: '' },
  { field: 'otherChecksP', label: '' },
  { field: 'otherChecksA', label: 'Respond to defect' },
  { field: 'otherChecksF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
