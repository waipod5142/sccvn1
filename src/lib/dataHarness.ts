export const questions = [
  // Full body harness, Safety belt / Dây an toàn toàn thân, Đai an toàn
  {
    id: 1,
    name: 'harnessHardwareInspection',
    question: 'Móc khóa, vòng khoen, khóa, khớp nối, bạc đệm có bị biến dạng hoặc có cạnh sắc, gờ ráp, nứt hoặc mòn không? / Are buckles, D-rings, snaps, thimbles, and wear pads free from distortion, sharp edges, burrs, cracks, or worn parts?',
    howto: 'Kiểm tra móc khóa, vòng khoen, khóa, khớp nối, bạc đệm để phát hiện biến dạng hoặc cạnh sắc, gờ ráp, nứt hoặc mòn.',
    accept: 'Móc khóa, vòng khoen, khóa, khớp nối, bạc đệm không biến dạng và không có cạnh sắc, gờ ráp, nứt hoặc mòn.'
  },
  {
    id: 2,
    name: 'buckleOperation',
    question: 'Móc khóa có hoạt động dễ dàng không? / Do buckles work freely?',
    howto: 'Kiểm tra khả năng hoạt động của móc khóa để đảm bảo chúng mở và khóa một cách dễ dàng.',
    accept: 'Móc khóa hoạt động dễ dàng và mượt mà.'
  },
  {
    id: 3,
    name: 'webbingCondition',
    question: 'Đai có sợi đứt, đường khâu bị kéo, rách, mòn, mốc, cháy hoặc bạc màu không? / Does the fibre webbing have broken fibres, pulled stitches, tears, abrasions, mould, burns or discoloration?',
    howto: 'Kiểm tra đai để phát hiện sợi đứt, đường khâu bị kéo, vết rách, mòn, mốc, cháy hoặc bạc màu.',
    accept: 'Đai không có sợi đứt, đường khâu không bị kéo, không rách, mòn, mốc, cháy hoặc bạc màu.'
  },
  {
    id: 4,
    name: 'webbingBendTest',
    question: 'Khi kiểm tra đai bằng cách bẻ cong và nén trên vật tròn 30mm, có phát hiện sợi đứt không? / When inspecting webbing by bending and pressing over a 30mm diameter object, are there any broken fibres?',
    howto: 'Kiểm tra đai bằng cách bẻ cong và nén trên một vật tròn có đường kính 30mm để tìm những sợi đứt.',
    accept: 'Không phát hiện sợi đứt khi kiểm tra bằng phương pháp bẻ cong và nén.'
  },
  {
    id: 5,
    name: 'labelsPresent',
    question: 'Nhãn có đầy đủ và rõ ràng dễ đọc không? / Are labels present and fully legible?',
    howto: 'Kiểm tra sự hiện diện và độ rõ ràng của các nhãn trên thiết bị.',
    accept: 'Nhãn có đầy đủ và rõ ràng dễ đọc.'
  },

  // Karabiner, Lanyard including shock absorber / Khoá, Dây treo, Dây giảm chấn
  {
    id: 6,
    name: 'lanyardCondition',
    question: 'Dây treo có giảm chấn có sợi đứt, cạnh sờn, biến dạng hoặc cạnh sắc, gờ ráp, nứt hoặc mòn không? / Does the energy absorbing lanyard have broken fibres, frayed edges, distortion, sharp edges, burrs, cracks, or corrosion?',
    howto: 'Kiểm tra dây treo có giảm chấn để phát hiện sợi đứt, cạnh sờn, biến dạng hoặc cạnh sắc, gờ ráp, nứt hoặc mòn.',
    accept: 'Dây treo có giảm chấn không có sợi đứt, cạnh sờn, biến dạng hoặc cạnh sắc, gờ ráp, nứt hoặc mòn.'
  },
  {
    id: 7,
    name: 'connectingHooksOperation',
    question: 'Móc nối có hoạt động đúng không? / Do the connecting hooks operate correctly?',
    howto: 'Kiểm tra móc nối để đảm bảo chúng hoạt động đúng chức năng.',
    accept: 'Móc nối hoạt động đúng chức năng.'
  },
  {
    id: 8,
    name: 'hookGatesMovement',
    question: 'Lẫy an toàn có chuyển động dễ dàng và khóa khi đóng không? / Do hook gates move freely and lock upon closing?',
    howto: 'Kiểm tra lẫy an toàn để đảm bảo chúng chuyển động dễ dàng và khóa khi đóng.',
    accept: 'Lẫy an toàn chuyển động dễ dàng và khóa khi đóng.'
  },
  {
    id: 9,
    name: 'energyAbsorberActivation',
    question: 'Bộ giảm chấn có bị kích hoạt không? / Has the energy absorber been activated?',
    howto: 'Kiểm tra bộ giảm chấn để xem nó có bị kích hoạt hay không.',
    accept: 'Bộ giảm chấn chưa bị kích hoạt.'
  },
  {
    id: 10,
    name: 'energyAbsorberCover',
    question: 'Nắp bộ giảm chấn có chắc chắn và không mòn hoặc hư hỏng không? / Is the energy absorber cover secure and not torn or damaged?',
    howto: 'Kiểm tra nắp bộ giảm chấn để đảm bảo nó chắc chắn và không bị mòn hoặc hư hỏng.',
    accept: 'Nắp bộ giảm chấn chắc chắn và không mòn hoặc hư hỏng.'
  },
  {
    id: 11,
    name: 'identificationLabels',
    question: 'Tất cả nhãn nhận dạng và cảnh báo có đầy đủ không? / Are all identification and warning labels present?',
    howto: 'Kiểm tra tất cả các nhãn nhận dạng và cảnh báo trên thiết bị.',
    accept: 'Tất cả nhãn nhận dạng và cảnh báo có đầy đủ.'
  },

  // Fall restraint/Fall arrester, Lifeline / Dây hãm rơi/Hộp bắt rơi, Dây cứu sinh
  {
    id: 12,
    name: 'lifelineHardware',
    question: 'Phụ tùng dây cứu sinh có bị hư hỏng, biến dạng hoặc có cạnh sắc, gờ ráp, nứt hoặc mòn không? / Is the lifeline hardware damaged, distorted, or have sharp edges, burrs, cracks, or corrosion?',
    howto: 'Kiểm tra phụ tùng dây cứu sinh để phát hiện hư hỏng, biến dạng hoặc cạnh sắc, gờ ráp, nứt hoặc mòn.',
    accept: 'Phụ tùng dây cứu sinh không bị hư hỏng, biến dạng và không có cạnh sắc, gờ ráp, nứt hoặc mòn.'
  },
  {
    id: 13,
    name: 'lifelineHooksLatch',
    question: 'Móc nối và lẫy an toàn có hoạt động đúng chức năng không? / Do the connecting hooks and safety latch operate correctly?',
    howto: 'Kiểm tra móc nối và lẫy an toàn để đảm bảo chúng hoạt động đúng chức năng.',
    accept: 'Móc nối và lẫy an toàn hoạt động đúng chức năng.'
  },
  {
    id: 14,
    name: 'syntheticRopeCondition',
    question: 'Dây tổng hợp: Có sợi cắt hoặc đứt, mòn quá mức dọc theo chiều dài không? / Synthetic rope: Are there cuts or broken strands along the full length?',
    howto: 'Kiểm tra dọc theo hết chiều dài dây tổng hợp để phát hiện sợi cắt hoặc đứt, mòn quá mức.',
    accept: 'Dây tổng hợp không có sợi cắt hoặc đứt, mòn quá mức dọc theo chiều dài.'
  },
  {
    id: 15,
    name: 'steelWireRopeCondition',
    question: 'Dây cáp thép: Có các sợi bị đứt, mòn đường kính, biến dạng, xoắn dọc theo chiều dài không? / Steel wire rope: Are there cuts, broken strands, over wear, deformation, or kinks along the full length?',
    howto: 'Kiểm tra dọc theo hết chiều dài dây cáp thép để phát hiện sợi đứt, mòn đường kính, biến dạng, xoắn.',
    accept: 'Dây cáp thép không có sợi đứt, mòn đường kính, biến dạng hoặc xoắn dọc theo chiều dài.'
  },
  {
    id: 16,
    name: 'lifelineLabels',
    question: 'Tất cả các nhãn nhận dạng và cảnh báo có đầy đủ không? / Are all identification and warning labels present?',
    howto: 'Kiểm tra tất cả các nhãn nhận dạng và cảnh báo trên dây cứu sinh.',
    accept: 'Tất cả các nhãn nhận dạng và cảnh báo có đầy đủ.'
  }
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  
  // Full body harness, Safety belt / Dây an toàn toàn thân, Đai an toàn
  { field: 'harnessHardwareInspection', label: '1. Móc khóa, vòng khoen, khóa, khớp nối, bạc đệm có bị biến dạng hoặc có cạnh sắc, gờ ráp, nứt hoặc mòn không? / Are buckles, D-rings, snaps, thimbles, and wear pads free from distortion, sharp edges, burrs, cracks, or worn parts?' },
  { field: 'harnessHardwareInspectionR', label: '' },
  { field: 'harnessHardwareInspectionP', label: '' },
  { field: 'harnessHardwareInspectionA', label: '' },
  { field: 'harnessHardwareInspectionF', label: '' },
  
  { field: 'buckleOperation', label: '2. Móc khóa có hoạt động dễ dàng không? / Do buckles work freely?' },
  { field: 'buckleOperationR', label: '' },
  { field: 'buckleOperationP', label: '' },
  { field: 'buckleOperationA', label: '' },
  { field: 'buckleOperationF', label: '' },
  
  { field: 'webbingCondition', label: '3. Đai có sợi đứt, đường khâu bị kéo, rách, mòn, mốc, cháy hoặc bạc màu không? / Does the fibre webbing have broken fibres, pulled stitches, tears, abrasions, mould, burns or discoloration?' },
  { field: 'webbingConditionR', label: '' },
  { field: 'webbingConditionP', label: '' },
  { field: 'webbingConditionA', label: '' },
  { field: 'webbingConditionF', label: '' },
  
  { field: 'webbingBendTest', label: '4. Khi kiểm tra đai bằng cách bẻ cong và nén trên vật tròn 30mm, có phát hiện sợi đứt không? / When inspecting webbing by bending and pressing over a 30mm diameter object, are there any broken fibres?' },
  { field: 'webbingBendTestR', label: '' },
  { field: 'webbingBendTestP', label: '' },
  { field: 'webbingBendTestA', label: '' },
  { field: 'webbingBendTestF', label: '' },
  
  { field: 'labelsPresent', label: '5. Nhãn có đầy đủ và rõ ràng dễ đọc không? / Are labels present and fully legible?' },
  { field: 'labelsPresentR', label: '' },
  { field: 'labelsPresentP', label: '' },
  { field: 'labelsPresentA', label: '' },
  { field: 'labelsPresentF', label: '' },
  
  // Karabiner, Lanyard including shock absorber / Khoá, Dây treo, Dây giảm chấn
  { field: 'lanyardCondition', label: '6. Dây treo có giảm chấn có sợi đứt, cạnh sờn, biến dạng hoặc cạnh sắc, gờ ráp, nứt hoặc mòn không? / Does the energy absorbing lanyard have broken fibres, frayed edges, distortion, sharp edges, burrs, cracks, or corrosion?' },
  { field: 'lanyardConditionR', label: '' },
  { field: 'lanyardConditionP', label: '' },
  { field: 'lanyardConditionA', label: '' },
  { field: 'lanyardConditionF', label: '' },
  
  { field: 'connectingHooksOperation', label: '7. Móc nối có hoạt động đúng không? / Do the connecting hooks operate correctly?' },
  { field: 'connectingHooksOperationR', label: '' },
  { field: 'connectingHooksOperationP', label: '' },
  { field: 'connectingHooksOperationA', label: '' },
  { field: 'connectingHooksOperationF', label: '' },
  
  { field: 'hookGatesMovement', label: '8. Lẫy an toàn có chuyển động dễ dàng và khóa khi đóng không? / Do hook gates move freely and lock upon closing?' },
  { field: 'hookGatesMovementR', label: '' },
  { field: 'hookGatesMovementP', label: '' },
  { field: 'hookGatesMovementA', label: '' },
  { field: 'hookGatesMovementF', label: '' },
  
  { field: 'energyAbsorberActivation', label: '9. Bộ giảm chấn có bị kích hoạt không? / Has the energy absorber been activated?' },
  { field: 'energyAbsorberActivationR', label: '' },
  { field: 'energyAbsorberActivationP', label: '' },
  { field: 'energyAbsorberActivationA', label: '' },
  { field: 'energyAbsorberActivationF', label: '' },
  
  { field: 'energyAbsorberCover', label: '10. Nắp bộ giảm chấn có chắc chắn và không mòn hoặc hư hỏng không? / Is the energy absorber cover secure and not torn or damaged?' },
  { field: 'energyAbsorberCoverR', label: '' },
  { field: 'energyAbsorberCoverP', label: '' },
  { field: 'energyAbsorberCoverA', label: '' },
  { field: 'energyAbsorberCoverF', label: '' },
  
  { field: 'identificationLabels', label: '11. Tất cả nhãn nhận dạng và cảnh báo có đầy đủ không? / Are all identification and warning labels present?' },
  { field: 'identificationLabelsR', label: '' },
  { field: 'identificationLabelsP', label: '' },
  { field: 'identificationLabelsA', label: '' },
  { field: 'identificationLabelsF', label: '' },
  
  // Fall restraint/Fall arrester, Lifeline / Dây hãm rơi/Hộp bắt rơi, Dây cứu sinh
  { field: 'lifelineHardware', label: '12. Phụ tùng dây cứu sinh có bị hư hỏng, biến dạng hoặc có cạnh sắc, gờ ráp, nứt hoặc mòn không? / Is the lifeline hardware damaged, distorted, or have sharp edges, burrs, cracks, or corrosion?' },
  { field: 'lifelineHardwareR', label: '' },
  { field: 'lifelineHardwareP', label: '' },
  { field: 'lifelineHardwareA', label: '' },
  { field: 'lifelineHardwareF', label: '' },
  
  { field: 'lifelineHooksLatch', label: '13. Móc nối và lẫy an toàn có hoạt động đúng chức năng không? / Do the connecting hooks and safety latch operate correctly?' },
  { field: 'lifelineHooksLatchR', label: '' },
  { field: 'lifelineHooksLatchP', label: '' },
  { field: 'lifelineHooksLatchA', label: '' },
  { field: 'lifelineHooksLatchF', label: '' },
  
  { field: 'syntheticRopeCondition', label: '14. Dây tổng hợp: Có sợi cắt hoặc đứt, mòn quá mức dọc theo chiều dài không? / Synthetic rope: Are there cuts or broken strands along the full length?' },
  { field: 'syntheticRopeConditionR', label: '' },
  { field: 'syntheticRopeConditionP', label: '' },
  { field: 'syntheticRopeConditionA', label: '' },
  { field: 'syntheticRopeConditionF', label: '' },
  
  { field: 'steelWireRopeCondition', label: '15. Dây cáp thép: Có các sợi bị đứt, mòn đường kính, biến dạng, xoắn dọc theo chiều dài không? / Steel wire rope: Are there cuts, broken strands, over wear, deformation, or kinks along the full length?' },
  { field: 'steelWireRopeConditionR', label: '' },
  { field: 'steelWireRopeConditionP', label: '' },
  { field: 'steelWireRopeConditionA', label: '' },
  { field: 'steelWireRopeConditionF', label: '' },
  
  { field: 'lifelineLabels', label: '16. Tất cả các nhãn nhận dạng và cảnh báo có đầy đủ không? / Are all identification and warning labels present?' },
  { field: 'lifelineLabelsR', label: '' },
  { field: 'lifelineLabelsP', label: '' },
  { field: 'lifelineLabelsA', label: '' },
  { field: 'lifelineLabelsF', label: '' },
  
  { field: 'tag', label: 'Tag' },
  { field: 'collection', label: 'Type of Equipment' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
