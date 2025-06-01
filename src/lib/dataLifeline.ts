export const questions = [
  // I. Hardware (Phần cứng)
  {
    id: 1,
    name: 'connectorCondition',
    question: 'Đầu nối (tự đóng & khóa) có hoạt động bình thường không? / Is the connector (self-closing & locking) functioning properly?',
    howto: 'Kiểm tra cơ chế tự đóng và khóa của đầu nối để đảm bảo hoạt động đúng cách.',
    accept: 'Đầu nối tự đóng và khóa hoạt động bình thường.'
  },
  {
    id: 2,
    name: 'hookGateCondition',
    question: 'Cổng móc / Bộ căng / Đinh tán có trong tình trạng tốt không? / Are the hook gate / tensioner / rivets in good condition?',
    howto: 'Kiểm tra tình trạng của cổng móc, bộ căng và các đinh tán để phát hiện hư hỏng hoặc mài mòn.',
    accept: 'Cổng móc, bộ căng và đinh tán trong tình trạng tốt.'
  },
  {
    id: 3,
    name: 'noCorrosion',
    question: 'Không có dấu hiệu ăn mòn? / No signs of corrosion?',
    howto: 'Kiểm tra các bộ phận kim loại để phát hiện dấu hiệu ăn mòn.',
    accept: 'Không có dấu hiệu ăn mòn trên các bộ phận kim loại.'
  },
  {
    id: 4,
    name: 'noPittingNicks',
    question: 'Không có rỗ / vết khía? / No pitting / nicks?',
    howto: 'Kiểm tra bề mặt kim loại để phát hiện các rỗ hoặc vết khía.',
    accept: 'Không có rỗ hoặc vết khía trên bề mặt kim loại.'
  },

  // II. Material (rope or Cable) - Vật liệu (dây thừng hoặc cáp)
  {
    id: 5,
    name: 'properLifelineThreading',
    question: 'Dây cứu sinh có được ren đúng cách không? / Is the lifeline threading proper?',
    howto: 'Xác nhận rằng dây cứu sinh được ren qua các điểm kết nối đúng cách theo hướng dẫn.',
    accept: 'Dây cứu sinh được ren đúng cách qua tất cả các điểm kết nối.'
  },
  {
    id: 6,
    name: 'stitchingIntegrity',
    question: 'Đường khâu không bị đứt / thiếu / lỏng? / Is the stitching not broken / missing / loose?',
    howto: 'Kiểm tra tất cả các đường khâu để phát hiện vết đứt, thiếu hoặc lỏng.',
    accept: 'Tất cả đường khâu còn nguyên vẹn, không bị đứt, thiếu hoặc lỏng.'
  },
  {
    id: 7,
    name: 'terminationCondition',
    question: 'Điểm kết thúc (khâu, nối hoặc nén) có trong tình trạng tốt không? / Is the termination (stitch, splice, or swage) in good condition?',
    howto: 'Kiểm tra các điểm kết thúc của dây để đảm bảo được khâu, nối hoặc nén đúng cách.',
    accept: 'Các điểm kết thúc được thực hiện đúng cách và trong tình trạng tốt.'
  },
  {
    id: 8,
    name: 'noExcessiveWear',
    question: 'Không có mài mòn quá mức (sờn hoặc sợi đứt)? / No excessive wear (fraying or broken strands)?',
    howto: 'Kiểm tra toàn bộ chiều dài của dây để phát hiện sự sờn hoặc sợi đứt.',
    accept: 'Không có dấu hiệu mài mòn quá mức, sờn hoặc sợi đứt.'
  },
  {
    id: 9,
    name: 'noCutsBurnsHoles',
    question: 'Không có vết cắt / cháy / lỗ? / No cuts / burns / holes?',
    howto: 'Kiểm tra dây để phát hiện vết cắt, cháy hoặc lỗ thủng.',
    accept: 'Không có vết cắt, cháy hoặc lỗ thủng trên dây.'
  },
  {
    id: 10,
    name: 'noKinks',
    question: 'Không có gấp khúc? / No kinks?',
    howto: 'Kiểm tra dây để phát hiện các điểm gấp khúc có thể làm yếu cấu trúc.',
    accept: 'Dây không có gấp khúc.'
  },
  {
    id: 11,
    name: 'noSeparationBirdCaging',
    question: 'Không có tách rời / xoắn lồng chim? / No separation / bird-caging?',
    howto: 'Kiểm tra cáp để phát hiện sự tách rời của các sợi hoặc hiện tượng xoắn lồng chim.',
    accept: 'Không có sự tách rời sợi hoặc xoắn lồng chim.'
  },

  // III. Shock Pack (if present) - Gói giảm xóc (nếu có)
  {
    id: 12,
    name: 'shockPackCoverIntact',
    question: 'Bao che / Ống co còn nguyên vẹn không? (Không cắt hoặc tháo) / Is the cover / shrink tube intact? (Don\'t cut or remove)',
    howto: 'Kiểm tra tình trạng của bao che hoặc ống co mà không cắt hoặc tháo bỏ.',
    accept: 'Bao che / ống co còn nguyên vẹn và không bị hư hỏng.'
  },
  {
    id: 13,
    name: 'shockPackNoDamage',
    question: 'Gói giảm xóc không bị hư hỏng / sờn / khâu đứt? / Is the shock pack not damaged / frayed / with broken stitching?',
    howto: 'Kiểm tra gói giảm xóc để phát hiện hư hỏng, sờn hoặc đường khâu đứt.',
    accept: 'Gói giảm xóc không bị hư hỏng, sờn hoặc có đường khâu đứt.'
  },
  {
    id: 14,
    name: 'noImpactIndicator',
    question: 'Không có dấu hiệu va chạm (triển khai)? / No impact indicator signs (deployment)?',
    howto: 'Kiểm tra các chỉ báo va chạm để xác định xem gói giảm xóc đã được kích hoạt hay chưa.',
    accept: 'Không có dấu hiệu cho thấy gói giảm xóc đã được triển khai.'
  }
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  { field: 'connectorCondition', label: '1. Đầu nối (tự đóng & khóa) có hoạt động bình thường không? / Is the connector (self-closing & locking) functioning properly?'},
  { field: 'connectorConditionR', label: '' },
  { field: 'connectorConditionP', label: '' },
  { field: 'connectorConditionA', label: '' },
  { field: 'connectorConditionF', label: '' },
  { field: 'hookGateCondition', label: '2. Cổng móc / Bộ căng / Đinh tán có trong tình trạng tốt không? / Are the hook gate / tensioner / rivets in good condition?'},
  { field: 'hookGateConditionR', label: '' },
  { field: 'hookGateConditionP', label: '' },
  { field: 'hookGateConditionA', label: '' },
  { field: 'hookGateConditionF', label: '' },
  { field: 'noCorrosion', label: '3. Không có dấu hiệu ăn mòn? / No signs of corrosion?'},
  { field: 'noCorrosionR', label: '' },
  { field: 'noCorrosionP', label: '' },
  { field: 'noCorrosionA', label: '' },
  { field: 'noCorrosionF', label: '' },
  { field: 'noPittingNicks', label: '4. Không có rỗ / vết khía? / No pitting / nicks?'},
  { field: 'noPittingNicksR', label: '' },
  { field: 'noPittingNicksP', label: '' },
  { field: 'noPittingNicksA', label: '' },
  { field: 'noPittingNicksF', label: '' },
  { field: 'properLifelineThreading', label: '5. Dây cứu sinh có được ren đúng cách không? / Is the lifeline threading proper?'},
  { field: 'properLifelineThreadingR', label: '' },
  { field: 'properLifelineThreadingP', label: '' },
  { field: 'properLifelineThreadingA', label: '' },
  { field: 'properLifelineThreadingF', label: '' },
  { field: 'stitchingIntegrity', label: '6. Đường khâu không bị đứt / thiếu / lỏng? / Is the stitching not broken / missing / loose?'},
  { field: 'stitchingIntegrityR', label: '' },
  { field: 'stitchingIntegrityP', label: '' },
  { field: 'stitchingIntegrityA', label: '' },
  { field: 'stitchingIntegrityF', label: '' },
  { field: 'terminationCondition', label: '7. Điểm kết thúc (khâu, nối hoặc nén) có trong tình trạng tốt không? / Is the termination (stitch, splice, or swage) in good condition?'},
  { field: 'terminationConditionR', label: '' },
  { field: 'terminationConditionP', label: '' },
  { field: 'terminationConditionA', label: '' },
  { field: 'terminationConditionF', label: '' },
  { field: 'noExcessiveWear', label: '8. Không có mài mòn quá mức (sờn hoặc sợi đứt)? / No excessive wear (fraying or broken strands)?'},
  { field: 'noExcessiveWearR', label: '' },
  { field: 'noExcessiveWearP', label: '' },
  { field: 'noExcessiveWearA', label: '' },
  { field: 'noExcessiveWearF', label: '' },
  { field: 'noCutsBurnsHoles', label: '9. Không có vết cắt / cháy / lỗ? / No cuts / burns / holes?'},
  { field: 'noCutsBurnsHolesR', label: '' },
  { field: 'noCutsBurnsHolesP', label: '' },
  { field: 'noCutsBurnsHolesA', label: '' },
  { field: 'noCutsBurnsHolesF', label: '' },
  { field: 'noKinks', label: '10. Không có gấp khúc? / No kinks?'},
  { field: 'noKinksR', label: '' },
  { field: 'noKinksP', label: '' },
  { field: 'noKinksA', label: '' },
  { field: 'noKinksF', label: '' },
  { field: 'noSeparationBirdCaging', label: '11. Không có tách rời / xoắn lồng chim? / No separation / bird-caging?'},
  { field: 'noSeparationBirdCagingR', label: '' },
  { field: 'noSeparationBirdCagingP', label: '' },
  { field: 'noSeparationBirdCagingA', label: '' },
  { field: 'noSeparationBirdCagingF', label: '' },
  { field: 'shockPackCoverIntact', label: '12. Bao che / Ống co còn nguyên vẹn không? (Không cắt hoặc tháo) / Is the cover / shrink tube intact? (Don\'t cut or remove)'},
  { field: 'shockPackCoverIntactR', label: '' },
  { field: 'shockPackCoverIntactP', label: '' },
  { field: 'shockPackCoverIntactA', label: '' },
  { field: 'shockPackCoverIntactF', label: '' },
  { field: 'shockPackNoDamage', label: '13. Gói giảm xóc không bị hư hỏng / sờn / khâu đứt? / Is the shock pack not damaged / frayed / with broken stitching?'},
  { field: 'shockPackNoDamageR', label: '' },
  { field: 'shockPackNoDamageP', label: '' },
  { field: 'shockPackNoDamageA', label: '' },
  { field: 'shockPackNoDamageF', label: '' },
  { field: 'noImpactIndicator', label: '14. Không có dấu hiệu va chạm (triển khai)? / No impact indicator signs (deployment)?'},
  { field: 'noImpactIndicatorR', label: '' },
  { field: 'noImpactIndicatorP', label: '' },
  { field: 'noImpactIndicatorA', label: '' },
  { field: 'noImpactIndicatorF', label: '' },
  { field: 'tag', label: 'Tag' },
  { field: 'collection', label: 'Type of Equipment' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
