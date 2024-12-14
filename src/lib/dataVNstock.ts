export const questions = [
  {
    id: 1,
    name: 'stockpileStability',
    question:
      'Đỉnh đống liệu có ổn định? Có bề mặt nứt hay sụt lún? / Stability of top of stockpile? Any crack or depression?',
    howto: 'Kiểm tra đỉnh đống liệu xem có nứt hoặc sụt lún không.',
    accept: 'Đỉnh đống liệu ổn định, không có nứt hoặc sụt lún.',
  },
  {
    id: 2,
    name: 'materialIsolation',
    question:
      'Nếu xả liệu từ trên đỉnh xuống có được cách ly dưới chân đống? / If materials are unloading from the top, is there isolated on the ground?',
    howto:
      'Kiểm tra nếu xả liệu từ trên đỉnh xuống có được cách ly ở dưới chân đống.',
    accept: 'Vật liệu được cách ly an toàn ở dưới chân đống.',
  },
  {
    id: 3,
    name: 'groundStability',
    question:
      'Mặt bằng đống liệu có ổn định? Có biểu hiện sụt lún? / Stability of ground around stockpile? Any crack or depression?',
    howto: 'Kiểm tra mặt bằng đống liệu xem có nứt hoặc sụt lún không.',
    accept: 'Mặt bằng đống liệu ổn định, không có biểu hiện sụt lún.',
  },
  {
    id: 4,
    name: 'excavationActivities',
    question:
      'Mặt bằng gần đống liệu có các hoạt động đào xới gây mất ổn định đống liệu? / Is there any digging & excavation activities that cause instability of the stockpile?',
    howto:
      'Kiểm tra các hoạt động đào xới gần đống liệu có ảnh hưởng đến sự ổn định không.',
    accept: 'Không có hoạt động đào xới gây mất ổn định đống liệu.',
  },
  {
    id: 5,
    name: 'slopeDesign',
    question:
      'Mái dốc hiện tại có theo đúng mái dốc thiết kế? Có để lại hàm ếch? / Slope geometry according to slope design? Any vaulted slopes?',
    howto: 'Kiểm tra mái dốc có đúng theo thiết kế và không để lại hàm ếch.',
    accept: 'Mái dốc đúng thiết kế và không có hàm ếch.',
  },
  {
    id: 6,
    name: 'erosion',
    question: 'Sự xói mòn quanh đống liệu? / Any washouts from rainfall?',
    howto: 'Kiểm tra sự xói mòn xung quanh đống liệu.',
    accept: 'Không có sự xói mòn quanh đống liệu.',
  },
  {
    id: 7,
    name: 'physicalBarriers',
    question:
      'Lắp đặt các rào chắn vật lý xung quanh khu vực không ổn định? / Situation of installation of physical barriers around unstable areas?',
    howto: 'Kiểm tra việc lắp đặt rào chắn quanh các khu vực không ổn định.',
    accept: 'Rào chắn được lắp đặt đầy đủ quanh khu vực không ổn định.',
  },
  {
    id: 8,
    name: 'surgePilePoints',
    question:
      'Vành đai xả liệu có được xác định rõ ràng trên đống liệu gom vét? / Draw points on surge piles are identifiable?',
    howto: 'Kiểm tra các điểm xác định vành đai xả liệu trên đống liệu.',
    accept: 'Vành đai xả liệu được xác định rõ ràng trên đống liệu.',
  },
  {
    id: 9,
    name: 'lighting',
    question:
      'Cung cấp ánh sáng thích hợp cho khu vực làm việc vào ban đêm? / Suitable lighting is provided for active areas in the night time?',
    howto: 'Kiểm tra hệ thống chiếu sáng khu vực làm việc ban đêm.',
    accept: 'Ánh sáng đầy đủ và phù hợp cho khu vực làm việc ban đêm.',
  },
  {
    id: 10,
    name: 'workInstructionCompliance',
    question:
      'Máy xúc, thiết bị có thực hiện đúng quy trình làm việc? / Is excavator, loading/ dumping equipment complying with Work Instruction?',
    howto: 'Kiểm tra máy xúc, thiết bị tuân thủ đúng quy trình làm việc.',
    accept: 'Máy xúc, thiết bị tuân thủ đúng quy trình làm việc.',
  },
  {
    id: 11,
    name: 'hangingRocks',
    question:
      'Tình trạng đá / vật liệu treo phía trên bãi xúc? / Situation of hanging rocks/ material on the wall of stockpile?',
    howto: 'Kiểm tra tình trạng đá hoặc vật liệu treo trên tường bãi xúc.',
    accept: 'Không có đá hoặc vật liệu treo nguy hiểm trên bãi xúc.',
  },
  {
    id: 12,
    name: 'loadingArea',
    question:
      'Nơi xúc mặt bằng có bằng phẳng? Có đá rơi vãi trên đường? Xe tải có chở quá đầy? / Is loading area at the stockpile flat? Any spillage? Is dump truck overloading?',
    howto:
      'Kiểm tra mặt bằng nơi xúc có bằng phẳng, không có đá rơi vãi và xe tải không chở quá đầy.',
    accept:
      'Mặt bằng nơi xúc bằng phẳng, không có đá rơi vãi và xe tải không chở quá đầy.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'stockpileStability',
    label: '1. Đỉnh đống liệu có ổn định? Có bề mặt nứt hay sụt lún? *',
  },
  { field: 'stockpileStabilityR', label: '' },
  { field: 'stockpileStabilityP', label: '' },
  { field: 'stockpileStabilityA', label: 'Respond to defect' },
  { field: 'stockpileStabilityF', label: '' },
  {
    field: 'materialIsolation',
    label:
      '2. Nếu xả liệu từ trên đỉnh xuống có được cách ly dưới chân đống? *',
  },
  { field: 'materialIsolationR', label: '' },
  { field: 'materialIsolationP', label: '' },
  { field: 'materialIsolationA', label: 'Respond to defect' },
  { field: 'materialIsolationF', label: '' },
  {
    field: 'groundStability',
    label: '3. Mặt bằng đống liệu có ổn định? Có biểu hiện sụt lún? *',
  },
  { field: 'groundStabilityR', label: '' },
  { field: 'groundStabilityP', label: '' },
  { field: 'groundStabilityA', label: 'Respond to defect' },
  { field: 'groundStabilityF', label: '' },
  {
    field: 'excavationActivities',
    label:
      '4. Mặt bằng gần đống liệu có các hoạt động đào xới gây mất ổn định đống liệu? *',
  },
  { field: 'excavationActivitiesR', label: '' },
  { field: 'excavationActivitiesP', label: '' },
  { field: 'excavationActivitiesA', label: 'Respond to defect' },
  { field: 'excavationActivitiesF', label: '' },
  {
    field: 'slopeDesign',
    label:
      '5. Mái dốc hiện tại có theo đúng mái dốc thiết kế? Có để lại hàm ếch? *',
  },
  { field: 'slopeDesignR', label: '' },
  { field: 'slopeDesignP', label: '' },
  { field: 'slopeDesignA', label: 'Respond to defect' },
  { field: 'slopeDesignF', label: '' },
  { field: 'erosion', label: '6. Sự xói mòn quanh đống liệu? *' },
  { field: 'erosionR', label: '' },
  { field: 'erosionP', label: '' },
  { field: 'erosionA', label: 'Respond to defect' },
  { field: 'erosionF', label: '' },
  {
    field: 'physicalBarriers',
    label: '7. Lắp đặt các rào chắn vật lý xung quanh khu vực không ổn định? *',
  },
  { field: 'physicalBarriersR', label: '' },
  { field: 'physicalBarriersP', label: '' },
  { field: 'physicalBarriersA', label: 'Respond to defect' },
  { field: 'physicalBarriersF', label: '' },
  {
    field: 'surgePilePoints',
    label:
      '8. Vành đai xả liệu có được xác định rõ ràng trên đống liệu gom vét? *',
  },
  { field: 'surgePilePointsR', label: '' },
  { field: 'surgePilePointsP', label: '' },
  { field: 'surgePilePointsA', label: 'Respond to defect' },
  { field: 'surgePilePointsF', label: '' },
  {
    field: 'lighting',
    label: '9. Cung cấp ánh sáng thích hợp cho khu vực làm việc vào ban đêm? *',
  },
  { field: 'lightingR', label: '' },
  { field: 'lightingP', label: '' },
  { field: 'lightingA', label: 'Respond to defect' },
  { field: 'lightingF', label: '' },
  {
    field: 'workInstructionCompliance',
    label: '10. Máy xúc, thiết bị có thực hiện đúng quy trình làm việc? *',
  },
  { field: 'workInstructionComplianceR', label: '' },
  { field: 'workInstructionComplianceP', label: '' },
  { field: 'workInstructionComplianceA', label: 'Respond to defect' },
  { field: 'workInstructionComplianceF', label: '' },
  {
    field: 'hangingRocks',
    label: '11. Tình trạng đá / vật liệu treo phía trên bãi xúc? *',
  },
  { field: 'hangingRocksR', label: '' },
  { field: 'hangingRocksP', label: '' },
  { field: 'hangingRocksA', label: 'Respond to defect' },
  { field: 'hangingRocksF', label: '' },
  {
    field: 'loadingArea',
    label:
      '12. Nơi xúc mặt bằng có bằng phẳng? Có đá rơi vãi trên đường? Xe tải có chở quá đầy? *',
  },
  { field: 'loadingAreaR', label: '' },
  { field: 'loadingAreaP', label: '' },
  { field: 'loadingAreaA', label: 'Respond to defect' },
  { field: 'loadingAreaF', label: '' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
