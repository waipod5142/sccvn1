export const questions = [
  // 1. Phích cắm Plug - Industrial Plugs
  {
    id: 1,
    name: 'plugProtectionStandard',
    question: 'Kiểm tra tiêu chuẩn bảo vệ IP (Trong nhà: Ít nhất IP 42, ngoài trời: Ít nhất IP 67) / Check protection standard IP rating (Indoor: At least IP 42, Outdoor: At least IP 67)',
    howto: 'Kiểm tra mã IP trên nhãn thiết bị và xác nhận phù hợp với môi trường sử dụng.',
    accept: 'Tiêu chuẩn IP phù hợp: IP 42 cho trong nhà, IP 67 cho ngoài trời.',
  },
  {
    id: 2,
    name: 'plugSocketCompatibility',
    question: 'Kiểm tra sự phù hợp giữa phích cắm với ổ cắm và dây dẫn / Check compatibility between plug, socket and cable',
    howto: 'Kiểm tra kích thước, loại và khả năng kết nối giữa phích cắm, ổ cắm và dây dẫn.',
    accept: 'Phích cắm phù hợp hoàn toàn với ổ cắm và dây dẫn.',
  },
  {
    id: 3,
    name: 'plugPhysicalDamage',
    question: 'Kiểm tra sự hư hỏng do nhiệt, bị cắt hay bị đè / Check for damage from heat, cuts or crushing',
    howto: 'Kiểm tra bề mặt phích cắm để phát hiện vết nứt, biến dạng do nhiệt, vết cắt hoặc vết đè.',
    accept: 'Không có hư hỏng do nhiệt, cắt hoặc đè.',
  },
  {
    id: 4,
    name: 'plugScrewTightness',
    question: 'Kiểm tra sự xiết chặt của các vít xiết dây dẫn / Check tightness of cable connection screws',
    howto: 'Sử dụng tuốc nơ vít để kiểm tra độ chặt của các vít kết nối dây dẫn.',
    accept: 'Tất cả các vít xiết dây dẫn được xiết chặt đúng mức.',
  },
  {
    id: 5,
    name: 'plugTerminalCondition',
    question: 'Kiểm tra tình trạng của trạm đấu nối / Check condition of terminal connections',
    howto: 'Kiểm tra các đầu nối, trạm đấu nối để phát hiện ăn mòn, lỏng lẻo hoặc hư hỏng.',
    accept: 'Trạm đấu nối trong tình trạng tốt, không ăn mòn hay lỏng lẻo.',
  },
  {
    id: 6,
    name: 'plugWaterproofSafety',
    question: 'Kiểm tra sự an toàn của đầu bịt chống nước và sự kết nối chống nước (Đối với thiết bị sử dụng ngoài trời) / Check safety of waterproof caps and waterproof connections (For outdoor equipment)',
    howto: 'Kiểm tra tình trạng của các đầu bịt chống nước, gasket và khả năng chống thấm nước.',
    accept: 'Đầu bịt chống nước và kết nối chống nước hoạt động hiệu quả.',
  },

  // 2. Dây Dẫn - Cables
  {
    id: 7,
    name: 'cablePowerCompatibility',
    question: 'Kiểm tra sự phù hợp công suất các ngõ ra (thiết diện lõi) / Check power compatibility of outputs (core cross-section)',
    howto: 'Kiểm tra thiết diện dây dẫn có phù hợp với công suất thiết bị sử dụng.',
    accept: 'Thiết diện lõi dây dẫn phù hợp với công suất yêu cầu.',
  },
  {
    id: 8,
    name: 'cableDoubleInsulation',
    question: 'Kiểm tra dây điện có 2 lớp cách ly / Check cable has double insulation',
    howto: 'Kiểm tra cấu trúc dây điện để xác nhận có đủ 2 lớp cách điện.',
    accept: 'Dây điện có đầy đủ 2 lớp cách ly.',
  },
  {
    id: 9,
    name: 'cableOuterSheath',
    question: 'Kiểm tra xem có vết cắt xuyên qua lớp vỏ bọc bảo vệ bên ngoài? / Check if there are cuts through the outer protective sheath?',
    howto: 'Kiểm tra toàn bộ chiều dài dây dẫn để phát hiện vết cắt hoặc hư hỏng lớp vỏ ngoài.',
    accept: 'Không có vết cắt xuyên qua lớp vỏ bọc bảo vệ bên ngoài.',
  },
  {
    id: 10,
    name: 'cableSecureFixing',
    question: 'Dây dẫn được cố định chặt trong hộp đấu nối bởi kẹp, cable glands hay phương pháp được chấp thuận / Cable is securely fixed in junction box by clamps, cable glands or approved methods',
    howto: 'Kiểm tra cách cố định dây dẫn tại các hộp đấu nối và đầu nối thiết bị.',
    accept: 'Dây dẫn được cố định chặt chẽ bằng phương pháp phù hợp.',
  },
  {
    id: 11,
    name: 'cableInsulationEntry',
    question: 'Dây dẫn đi vào vỏ máy, hộp đấu dây phải được luồn qua bộ phận cách điện / Cables entering equipment housing must pass through insulation components',
    howto: 'Kiểm tra các điểm dây dẫn đi vào thiết bị có được bảo vệ bằng bộ phận cách điện.',
    accept: 'Dây dẫn được luồn qua bộ phận cách điện khi đi vào vỏ máy.',
  },
  {
    id: 12,
    name: 'cablePolarityCheck',
    question: 'Kiểm tra cực của các dây dẫn (đủ và đúng cực) / Check cable polarity (complete and correct polarity)',
    howto: 'Sử dụng đồng hồ vạn năng để kiểm tra cực tính của các dây dẫn.',
    accept: 'Các dây dẫn có đủ số lượng và đúng cực tính.',
  },
  {
    id: 13,
    name: 'cableGroundingConnection',
    question: 'Kiểm tra điểm giao giữa các dây dẫn và các chi tiết nối đất / Check connection points between cables and grounding components',
    howto: 'Kiểm tra các kết nối nối đất, đảm bảo chặt chẽ và không bị ăn mòn.',
    accept: 'Kết nối giữa dây dẫn và chi tiết nối đất chắc chắn và đúng quy cách.',
  },
  {
    id: 14,
    name: 'cableMaxLength',
    question: 'Chiều dài tối đa không quá 30m / Maximum length not exceeding 30m',
    howto: 'Đo chiều dài dây dẫn để đảm bảo không vượt quá giới hạn cho phép.',
    accept: 'Chiều dài dây dẫn không vượt quá 30m.',
  },
  {
    id: 15,
    name: 'cableOverallCondition',
    question: 'Tất cả dây dẫn trong điều kiện tốt không? (sạch sẽ, cách điện tốt không?) / Are all cables in good condition? (clean, good insulation?)',
    howto: 'Kiểm tra tổng thể tình trạng dây dẫn bao gồm độ sạch sẽ và tính năng cách điện.',
    accept: 'Tất cả dây dẫn sạch sẽ và có cách điện tốt.',
  },

  // 3. Taplo-Rulo - Switchboard/Distribution Board
  {
    id: 16,
    name: 'switchboardPhysicalDamage',
    question: 'Kiểm tra sự hư hỏng do nhiệt, bị cắt, bị rơi hay bị đè / Check for damage from heat, cuts, drops or crushing',
    howto: 'Kiểm tra vỏ tablo/rulo để phát hiện các dấu hiệu hư hỏng vật lý.',
    accept: 'Không có hư hỏng do nhiệt, cắt, rơi hoặc đè.',
  },
  {
    id: 17,
    name: 'switchboardTerminalProtection',
    question: 'Trạm đấu nối được che chắn / Terminal connections are protected',
    howto: 'Kiểm tra các trạm đấu nối có được che chắn an toàn hay không.',
    accept: 'Trạm đấu nối được che chắn đầy đủ.',
  },
  {
    id: 18,
    name: 'switchboardBreakerCondition',
    question: 'Kiểm tra tình trạng của Công-tắc/CB và sự phù hợp với công suất thiết bị / Check condition of switches/CB and compatibility with equipment power',
    howto: 'Kiểm tra hoạt động của các công tắc/CB và xác nhận định mức phù hợp với thiết bị.',
    accept: 'Công-tắc/CB hoạt động tốt và phù hợp với công suất thiết bị.',
  },
  {
    id: 19,
    name: 'switchboardInsulationResistance',
    question: 'Đo điện trở cách điện (Ohm) giữa nguồn sơ cấp và vỏ tap-lô/ru-lô / Measure insulation resistance (Ohm) between primary source and switchboard/distribution board housing',
    howto: 'Sử dụng megger để đo điện trở cách điện và ghi kết quả vào ghi chú.',
    accept: 'Điện trở cách điện đạt giá trị an toàn theo tiêu chuẩn.',
  },

  // 4. Thiết bị An Toàn - Safety Equipment
  {
    id: 20,
    name: 'elcbConditionTest',
    question: 'Kiểm tra tình trạng và hoạt động của CB chống dòng rò (ELCB) - Nhấn nút test / Check condition and operation of Earth Leakage Circuit Breaker (ELCB) - Press test button',
    howto: 'Nhấn nút test trên ELCB để kiểm tra khả năng ngắt mạch khi có dòng rò.',
    accept: 'ELCB hoạt động bình thường khi nhấn nút test.',
  },
  {
    id: 21,
    name: 'elcbLeakageCurrentMeasurement',
    question: 'Đo kiểm dòng (rò) ngắt của ELCB / Measure ELCB trip leakage current',
    howto: 'Sử dụng thiết bị đo để xác định dòng rò tại thời điểm ELCB ngắt mạch.',
    accept: 'Dòng rò ngắt của ELCB nằm trong phạm vi cho phép.',
  },
  {
    id: 22,
    name: 'elcbTripTimeMeasurement',
    question: 'Đo kiểm thời gian ngắt của ELCB / Measure ELCB trip time',
    howto: 'Đo thời gian từ khi phát hiện dòng rò đến khi ELCB ngắt hoàn toàn.',
    accept: 'Thời gian ngắt của ELCB đáp ứng tiêu chuẩn an toàn.',
  },

  // 5. Nhãn/Dấu hiệu - Labels/Identification
  {
    id: 23,
    name: 'equipmentIdentification',
    question: 'Tên/Mã số nhận dạng thiết bị/HAC / Equipment name/identification code/HAC',
    howto: 'Kiểm tra các nhãn nhận dạng, mã số thiết bị và thông tin HAC có đầy đủ và rõ ràng.',
    accept: 'Tên và mã số nhận dạng thiết bị được ghi rõ ràng và đầy đủ.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'Ngày Date' },
  { field: 'email', label: 'Responsible person' },
  { field: 'inspector', label: 'Người kiểm tra Inspector' },
  { field: 'responder', label: 'Responder' },
  
  // 1. Phích cắm Plug - Industrial Plugs
  { field: 'plugProtectionStandard', label: '1. Kiểm tra tiêu chuẩn bảo vệ IP (Trong nhà: Ít nhất IP 42, ngoài trời: Ít nhất IP 67) / Check protection standard IP rating (Indoor: At least IP 42, Outdoor: At least IP 67)'},
  { field: 'plugProtectionStandardR', label: '' },
  { field: 'plugProtectionStandardP', label: '' },
  { field: 'plugProtectionStandardA', label: '' },
  { field: 'plugProtectionStandardF', label: '' },
  
  { field: 'plugSocketCompatibility', label: '2. Kiểm tra sự phù hợp giữa phích cắm với ổ cắm và dây dẫn / Check compatibility between plug, socket and cable'},
  { field: 'plugSocketCompatibilityR', label: '' },
  { field: 'plugSocketCompatibilityP', label: '' },
  { field: 'plugSocketCompatibilityA', label: '' },
  { field: 'plugSocketCompatibilityF', label: '' },
  
  { field: 'plugPhysicalDamage', label: '3. Kiểm tra sự hư hỏng do nhiệt, bị cắt hay bị đè / Check for damage from heat, cuts or crushing'},
  { field: 'plugPhysicalDamageR', label: '' },
  { field: 'plugPhysicalDamageP', label: '' },
  { field: 'plugPhysicalDamageA', label: '' },
  { field: 'plugPhysicalDamageF', label: '' },
  
  { field: 'plugScrewTightness', label: '4. Kiểm tra sự xiết chặt của các vít xiết dây dẫn / Check tightness of cable connection screws'},
  { field: 'plugScrewTightnessR', label: '' },
  { field: 'plugScrewTightnessP', label: '' },
  { field: 'plugScrewTightnessA', label: '' },
  { field: 'plugScrewTightnessF', label: '' },
  
  { field: 'plugTerminalCondition', label: '5. Kiểm tra tình trạng của trạm đấu nối / Check condition of terminal connections'},
  { field: 'plugTerminalConditionR', label: '' },
  { field: 'plugTerminalConditionP', label: '' },
  { field: 'plugTerminalConditionA', label: '' },
  { field: 'plugTerminalConditionF', label: '' },
  
  { field: 'plugWaterproofSafety', label: '6. Kiểm tra sự an toàn của đầu bịt chống nước và sự kết nối chống nước (Đối với thiết bị sử dụng ngoài trời) / Check safety of waterproof caps and waterproof connections (For outdoor equipment)'},
  { field: 'plugWaterproofSafetyR', label: '' },
  { field: 'plugWaterproofSafetyP', label: '' },
  { field: 'plugWaterproofSafetyA', label: '' },
  { field: 'plugWaterproofSafetyF', label: '' },
  
  // 2. Dây Dẫn - Cables
  { field: 'cablePowerCompatibility', label: '7. Kiểm tra sự phù hợp công suất các ngõ ra (thiết diện lõi) / Check power compatibility of outputs (core cross-section)'},
  { field: 'cablePowerCompatibilityR', label: '' },
  { field: 'cablePowerCompatibilityP', label: '' },
  { field: 'cablePowerCompatibilityA', label: '' },
  { field: 'cablePowerCompatibilityF', label: '' },
  
  { field: 'cableDoubleInsulation', label: '8. Kiểm tra dây điện có 2 lớp cách ly / Check cable has double insulation'},
  { field: 'cableDoubleInsulationR', label: '' },
  { field: 'cableDoubleInsulationP', label: '' },
  { field: 'cableDoubleInsulationA', label: '' },
  { field: 'cableDoubleInsulationF', label: '' },
  
  { field: 'cableOuterSheath', label: '9. Kiểm tra xem có vết cắt xuyên qua lớp vỏ bọc bảo vệ bên ngoài? / Check if there are cuts through the outer protective sheath?'},
  { field: 'cableOuterSheathR', label: '' },
  { field: 'cableOuterSheathP', label: '' },
  { field: 'cableOuterSheathA', label: '' },
  { field: 'cableOuterSheathF', label: '' },
  
  { field: 'cableSecureFixing', label: '10. Dây dẫn được cố định chặt trong hộp đấu nối bởi kẹp, cable glands hay phương pháp được chấp thuận / Cable is securely fixed in junction box by clamps, cable glands or approved methods'},
  { field: 'cableSecureFixingR', label: '' },
  { field: 'cableSecureFixingP', label: '' },
  { field: 'cableSecureFixingA', label: '' },
  { field: 'cableSecureFixingF', label: '' },
  
  { field: 'cableInsulationEntry', label: '11. Dây dẫn đi vào vỏ máy, hộp đấu dây phải được luồn qua bộ phận cách điện / Cables entering equipment housing must pass through insulation components'},
  { field: 'cableInsulationEntryR', label: '' },
  { field: 'cableInsulationEntryP', label: '' },
  { field: 'cableInsulationEntryA', label: '' },
  { field: 'cableInsulationEntryF', label: '' },
  
  { field: 'cablePolarityCheck', label: '12. Kiểm tra cực của các dây dẫn (đủ và đúng cực) / Check cable polarity (complete and correct polarity)'},
  { field: 'cablePolarityCheckR', label: '' },
  { field: 'cablePolarityCheckP', label: '' },
  { field: 'cablePolarityCheckA', label: '' },
  { field: 'cablePolarityCheckF', label: '' },
  
  { field: 'cableGroundingConnection', label: '13. Kiểm tra điểm giao giữa các dây dẫn và các chi tiết nối đất / Check connection points between cables and grounding components'},
  { field: 'cableGroundingConnectionR', label: '' },
  { field: 'cableGroundingConnectionP', label: '' },
  { field: 'cableGroundingConnectionA', label: '' },
  { field: 'cableGroundingConnectionF', label: '' },
  
  { field: 'cableMaxLength', label: '14. Chiều dài tối đa không quá 30m / Maximum length not exceeding 30m'},
  { field: 'cableMaxLengthR', label: '' },
  { field: 'cableMaxLengthP', label: '' },
  { field: 'cableMaxLengthA', label: '' },
  { field: 'cableMaxLengthF', label: '' },
  
  { field: 'cableOverallCondition', label: '15. Tất cả dây dẫn trong điều kiện tốt không? (sạch sẽ, cách điện tốt không?) / Are all cables in good condition? (clean, good insulation?)'},
  { field: 'cableOverallConditionR', label: '' },
  { field: 'cableOverallConditionP', label: '' },
  { field: 'cableOverallConditionA', label: '' },
  { field: 'cableOverallConditionF', label: '' },
  
  // 3. Taplo-Rulo - Switchboard/Distribution Board
  { field: 'switchboardPhysicalDamage', label: '16. Kiểm tra sự hư hỏng do nhiệt, bị cắt, bị rơi hay bị đè / Check for damage from heat, cuts, drops or crushing'},
  { field: 'switchboardPhysicalDamageR', label: '' },
  { field: 'switchboardPhysicalDamageP', label: '' },
  { field: 'switchboardPhysicalDamageA', label: '' },
  { field: 'switchboardPhysicalDamageF', label: '' },
  
  { field: 'switchboardTerminalProtection', label: '17. Trạm đấu nối được che chắn / Terminal connections are protected'},
  { field: 'switchboardTerminalProtectionR', label: '' },
  { field: 'switchboardTerminalProtectionP', label: '' },
  { field: 'switchboardTerminalProtectionA', label: '' },
  { field: 'switchboardTerminalProtectionF', label: '' },
  
  { field: 'switchboardBreakerCondition', label: '18. Kiểm tra tình trạng của Công-tắc/CB và sự phù hợp với công suất thiết bị / Check condition of switches/CB and compatibility with equipment power'},
  { field: 'switchboardBreakerConditionR', label: '' },
  { field: 'switchboardBreakerConditionP', label: '' },
  { field: 'switchboardBreakerConditionA', label: '' },
  { field: 'switchboardBreakerConditionF', label: '' },
  
  { field: 'switchboardInsulationResistance', label: '19. Đo điện trở cách điện (Ohm) giữa nguồn sơ cấp và vỏ tap-lô/ru-lô / Measure insulation resistance (Ohm) between primary source and switchboard/distribution board housing'},
  { field: 'switchboardInsulationResistanceR', label: '' },
  { field: 'switchboardInsulationResistanceP', label: '' },
  { field: 'switchboardInsulationResistanceA', label: '' },
  { field: 'switchboardInsulationResistanceF', label: '' },
  
  // 4. Thiết bị An Toàn - Safety Equipment
  { field: 'elcbConditionTest', label: '20. Kiểm tra tình trạng và hoạt động của CB chống dòng rò (ELCB) - Nhấn nút test / Check condition and operation of Earth Leakage Circuit Breaker (ELCB) - Press test button'},
  { field: 'elcbConditionTestR', label: '' },
  { field: 'elcbConditionTestP', label: '' },
  { field: 'elcbConditionTestA', label: '' },
  { field: 'elcbConditionTestF', label: '' },
  
  { field: 'elcbLeakageCurrentMeasurement', label: '21. Đo kiểm dòng (rò) ngắt của ELCB / Measure ELCB trip leakage current'},
  { field: 'elcbLeakageCurrentMeasurementR', label: '' },
  { field: 'elcbLeakageCurrentMeasurementP', label: '' },
  { field: 'elcbLeakageCurrentMeasurementA', label: '' },
  { field: 'elcbLeakageCurrentMeasurementF', label: '' },
  
  { field: 'elcbTripTimeMeasurement', label: '22. Đo kiểm thời gian ngắt của ELCB / Measure ELCB trip time'},
  { field: 'elcbTripTimeMeasurementR', label: '' },
  { field: 'elcbTripTimeMeasurementP', label: '' },
  { field: 'elcbTripTimeMeasurementA', label: '' },
  { field: 'elcbTripTimeMeasurementF', label: '' },
  
  // 5. Nhãn/Dấu hiệu - Labels/Identification
  { field: 'equipmentIdentification', label: '23. Tên/Mã số nhận dạng thiết bị/HAC / Equipment name/identification code/HAC'},
  { field: 'equipmentIdentificationR', label: '' },
  { field: 'equipmentIdentificationP', label: '' },
  { field: 'equipmentIdentificationA', label: '' },
  { field: 'equipmentIdentificationF', label: '' },
  
  { field: 'tag', label: 'Tag' },
  { field: 'collection', label: 'Type of Equipment' },
  { field: 'remark', label: 'Ghi chú Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
