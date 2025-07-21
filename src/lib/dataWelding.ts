export const questions = [
  {
    id: 1,
    name: "socketInspection",
    question:
      "Ổ cắm có đạt tiêu chuẩn bảo vệ và tình trạng tốt không? / Is the socket in good condition and meets protection standards?",
    howto:
      "Kiểm tra tiêu chuẩn bảo vệ IP (Trong nhà: tối thiểu IP42, Ngoài trời: tối thiểu IP65), sự phù hợp giữa phích cắm, ổ cắm và dây dẫn. Kiểm tra hư hỏng do nhiệt, bụi bẩn, đè nén. Kiểm tra độ siết chặt và tình trạng đầu nối.",
    accept:
      "Ổ cắm đạt chuẩn IP theo vị trí lắp đặt, không hư hỏng, các kết nối chắc chắn và an toàn.",
  },
  {
    id: 2,
    name: "cableInspection",
    question:
      "Dây dẫn có phù hợp với công suất và trong tình trạng tốt không? / Are cables suitable for power capacity and in good condition?",
    howto:
      "Kiểm tra tiết diện, số lớp cách ly, vết cắt, định vị bằng kẹp/cable gland, phần nối đất và điều kiện tổng thể.",
    accept:
      "Dây dẫn phù hợp công suất, không bị hư hỏng, được cố định và cách điện tốt.",
  },
  {
    id: 3,
    name: "machineBodyCondition",
    question:
      "Thân máy có được bảo vệ tốt và các thành phần điện không lộ ra ngoài không? / Is the machine body well protected and free from exposed electrical components?",
    howto:
      "Kiểm tra nắp che trạm đầu nối, công tắc/CB phù hợp, đo điện trở cách điện giữa dây nguồn và vỏ.",
    accept:
      "Thân máy được che chắn, thành phần điện không lộ ra ngoài, điện trở cách điện đạt yêu cầu.",
  },
  {
    id: 4,
    name: "earthingSystem",
    question:
      "Hệ thống nối đất có đạt yêu cầu và không sử dụng bulông liên kết không phù hợp? / Is the earthing system adequate and free from improper bolt connections?",
    howto:
      "Kiểm tra cực nối đất, loại bulông phù hợp, không sơn, chất liệu chống rỉ, điện trở nối đất.",
    accept: "Hệ thống nối đất đạt yêu cầu kỹ thuật, đo điện trở đạt chuẩn.",
  },
  {
    id: 5,
    name: "labelAndSignage",
    question:
      "Nhãn, mã thiết bị, và dấu hiệu an toàn có đầy đủ và rõ ràng không? / Are nameplates, equipment codes, and safety signs present and clear?",
    howto:
      "Kiểm tra nhãn thiết bị, các nút nhấn/CB có nhãn tiếng Việt, thông tin điện áp và biển báo an toàn.",
    accept: "Nhãn, mã số thiết bị và biển báo rõ ràng, đúng vị trí và đầy đủ.",
  },
  {
    id: 6,
    name: "outputCablesCondition",
    question:
      "Dây hàn và mass hàn có kích cỡ và chiều dài phù hợp và trong tình trạng tốt không? / Are welding and return cables of appropriate size, length, and in good condition?",
    howto:
      "Kiểm tra kích thước dây hàn, chiều dài đủ cho thao tác, tình trạng cách điện, mối nối và kẹp mass.",
    accept:
      "Dây hàn và mass hàn phù hợp, sạch sẽ, cách điện tốt, mối nối chắc chắn.",
  },
  {
    id: 7,
    name: "workingEnvironmentSuitability",
    question:
      "Thiết bị có phù hợp để sử dụng ngoài trời và di chuyển thường xuyên không? / Is the equipment suitable for outdoor use and frequent relocation?",
    howto:
      "Xem xét cấp bảo vệ thiết bị, khả năng chịu thời tiết, mức độ cơ động cho môi trường công trường.",
    accept:
      "Thiết bị đáp ứng điều kiện làm việc ngoài trời và di chuyển thường xuyên.",
  },
];

export const detailFields = [
  { field: "id", label: "ID" },
  { field: "date", label: "Ngày Date" },
  { field: "email", label: "Responsible person" },
  { field: "inspector", label: "Người kiểm tra Inspector" },
  { field: "responder", label: "Responder" },
  {
    field: "socketInspection",
    label:
      "1. Ổ cắm có đạt tiêu chuẩn bảo vệ và tình trạng tốt không? / Is the socket in good condition and meets protection standards?",
  },
  { field: "socketInspectionR", label: "" },
  { field: "socketInspectionP", label: "" },
  { field: "socketInspectionA", label: "" },
  { field: "socketInspectionF", label: "" },
  {
    field: "cableInspection",
    label:
      "2. Dây dẫn có phù hợp với công suất và trong tình trạng tốt không? / Are cables suitable for power capacity and in good condition?",
  },
  { field: "cableInspectionR", label: "" },
  { field: "cableInspectionP", label: "" },
  { field: "cableInspectionA", label: "" },
  { field: "cableInspectionF", label: "" },
  {
    field: "machineBodyCondition",
    label:
      "3. Thân máy có được bảo vệ tốt và các thành phần điện không lộ ra ngoài không? / Is the machine body well protected and free from exposed electrical components?",
  },
  { field: "machineBodyConditionR", label: "" },
  { field: "machineBodyConditionP", label: "" },
  { field: "machineBodyConditionA", label: "" },
  { field: "machineBodyConditionF", label: "" },
  {
    field: "earthingSystem",
    label:
      "4. Hệ thống nối đất có đạt yêu cầu và không sử dụng bulông liên kết không phù hợp? / Is the earthing system adequate and free from improper bolt connections?",
  },
  { field: "earthingSystemR", label: "" },
  { field: "earthingSystemP", label: "" },
  { field: "earthingSystemA", label: "" },
  { field: "earthingSystemF", label: "" },
  {
    field: "labelAndSignage",
    label:
      "5. Nhãn, mã thiết bị, và dấu hiệu an toàn có đầy đủ và rõ ràng không? / Are nameplates, equipment codes, and safety signs present and clear?",
  },
  { field: "labelAndSignageR", label: "" },
  { field: "labelAndSignageP", label: "" },
  { field: "labelAndSignageA", label: "" },
  { field: "labelAndSignageF", label: "" },
  {
    field: "outputCablesCondition",
    label:
      "6. Dây hàn và mass hàn có kích cỡ và chiều dài phù hợp và trong tình trạng tốt không? / Are welding and return cables of appropriate size, length, and in good condition?",
  },
  { field: "outputCablesConditionR", label: "" },
  { field: "outputCablesConditionP", label: "" },
  { field: "outputCablesConditionA", label: "" },
  { field: "outputCablesConditionF", label: "" },
  {
    field: "workingEnvironmentSuitability",
    label:
      "7. Thiết bị có phù hợp để sử dụng ngoài trời và di chuyển thường xuyên không? / Is the equipment suitable for outdoor use and frequent relocation?",
  },
  { field: "workingEnvironmentSuitabilityR", label: "" },
  { field: "workingEnvironmentSuitabilityP", label: "" },
  { field: "workingEnvironmentSuitabilityA", label: "" },
  { field: "workingEnvironmentSuitabilityF", label: "" },
  { field: "tag", label: "Tag" },
  { field: "collection", label: "Type of Equipment" },
  { field: "remark", label: "Ghi chú Remark" },
  { field: "url", label: "" },
  { field: "lat", label: "" },
];
