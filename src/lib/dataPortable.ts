export const questions = [
  {
    id: 1,
    name: "wheelFixing",
    question:
      "Bánh xe được cố định hoặc cân chỉnh đúng? / Are the wheels properly fixed or aligned?",
    howto: "Kiểm tra sự cố định và căn chỉnh của bánh xe.",
    accept: "Bánh xe được cố định và cân chỉnh đúng cách.",
  },
  {
    id: 2,
    name: "wheelComponentWear",
    question:
      "Bộ phận cố định bánh xe có bị mòn, gãy hoặc bị mất không? / Are wheel fixing components worn, broken, or missing?",
    howto: "Kiểm tra bộ phận cố định bánh xe để phát hiện mòn, gãy hoặc mất.",
    accept: "Bộ phận cố định bánh xe không bị mòn, gãy hoặc bị mất.",
  },
  {
    id: 3,
    name: "wheelFrameIntegrity",
    question:
      "Khung của bánh xe có chắc chắn, không nứt gãy hoặc mất bulông không? / Is the wheel frame secure, without cracks or missing bolts?",
    howto:
      "Kiểm tra khung bánh xe về độ chắc chắn, nứt gãy hoặc bulông bị mất.",
    accept: "Khung bánh xe chắc chắn, không có vết nứt hoặc bulông bị mất.",
  },
  {
    id: 4,
    name: "railCondition",
    question:
      "Đường ray, thanh dẫn và thanh chặn đường ray có bị nứt gãy, mất hoặc ăn mòn không? / Are rails, guides, and rail stoppers cracked, missing, or corroded?",
    howto:
      "Kiểm tra đường ray, thanh dẫn và thanh chặn về các dấu hiệu hư hỏng hoặc ăn mòn.",
    accept:
      "Đường ray, thanh dẫn và thanh chặn không bị nứt gãy, mất hoặc ăn mòn.",
  },
  {
    id: 5,
    name: "platformCleanliness",
    question:
      "Bề mặt sàn thao tác có dầu, mỡ hoặc chất bẩn không? / Is the work platform surface free from oil, grease, or other contaminants?",
    howto: "Quan sát bề mặt sàn để phát hiện các chất bẩn như dầu, mỡ.",
    accept: "Bề mặt sàn sạch, không có dầu, mỡ hoặc chất bẩn.",
  },
  {
    id: 6,
    name: "platformStepWear",
    question:
      "Sàn thao tác, bậc thang có bị mòn, mất hoặc biến dạng không? / Are the platform and steps worn, missing, or deformed?",
    howto:
      "Kiểm tra tình trạng mòn, biến dạng hoặc hư hỏng của sàn và bậc thang.",
    accept: "Sàn và bậc thang không bị mòn, mất hoặc biến dạng.",
  },
  {
    id: 7,
    name: "handrailCondition",
    question:
      "Lan can, tấm chặn chân có bị gãy, mục, sút mối hàn hoặc mất không? / Are handrails or toe boards broken, corroded, detached, or missing?",
    howto: "Kiểm tra lan can và tấm chặn chân về độ nguyên vẹn và mối hàn.",
    accept: "Lan can và tấm chặn chân không bị gãy, mục, mất hoặc sút mối hàn.",
  },
  {
    id: 8,
    name: "platformStructure",
    question:
      "Kết cấu thép của sàn thao tác, bậc thang có bị biến dạng, mất hoặc bị ăn mòn không? / Are structural steel parts of the platform and steps deformed, missing, or corroded?",
    howto:
      "Kiểm tra kết cấu thép của sàn và bậc thang để phát hiện biến dạng hoặc ăn mòn.",
    accept: "Kết cấu thép không bị biến dạng, mất hoặc ăn mòn.",
  },
];

export const detailFields = [
  { field: "id", label: "ID" },
  { field: "date", label: "Ngày Date" },
  { field: "email", label: "Responsible person" },
  { field: "inspector", label: "Người kiểm tra Inspector" },
  { field: "responder", label: "Responder" },
  {
    field: "wheelFixing",
    label:
      "1. Bánh xe được cố định hoặc cân chỉnh đúng? / Are the wheels properly fixed or aligned?",
  },
  { field: "wheelFixingR", label: "" },
  { field: "wheelFixingP", label: "" },
  { field: "wheelFixingA", label: "" },
  { field: "wheelFixingF", label: "" },
  {
    field: "wheelComponentWear",
    label:
      "2. Bộ phận cố định bánh xe có bị mòn, gãy hoặc bị mất không? / Are wheel fixing components worn, broken, or missing?",
  },
  { field: "wheelComponentWearR", label: "" },
  { field: "wheelComponentWearP", label: "" },
  { field: "wheelComponentWearA", label: "" },
  { field: "wheelComponentWearF", label: "" },
  {
    field: "wheelFrameIntegrity",
    label:
      "3. Khung của bánh xe có chắc chắn, không nứt gãy hoặc mất bulông không? / Is the wheel frame secure, without cracks or missing bolts?",
  },
  { field: "wheelFrameIntegrityR", label: "" },
  { field: "wheelFrameIntegrityP", label: "" },
  { field: "wheelFrameIntegrityA", label: "" },
  { field: "wheelFrameIntegrityF", label: "" },
  {
    field: "railCondition",
    label:
      "4. Đường ray, thanh dẫn và thanh chặn đường ray có bị nứt gãy, mất hoặc ăn mòn không? / Are rails, guides, and rail stoppers cracked, missing, or corroded?",
  },
  { field: "railConditionR", label: "" },
  { field: "railConditionP", label: "" },
  { field: "railConditionA", label: "" },
  { field: "railConditionF", label: "" },
  {
    field: "platformCleanliness",
    label:
      "5. Bề mặt sàn thao tác có dầu, mỡ hoặc chất bẩn không? / Is the work platform surface free from oil, grease, or other contaminants?",
  },
  { field: "platformCleanlinessR", label: "" },
  { field: "platformCleanlinessP", label: "" },
  { field: "platformCleanlinessA", label: "" },
  { field: "platformCleanlinessF", label: "" },
  {
    field: "platformStepWear",
    label:
      "6. Sàn thao tác, bậc thang có bị mòn, mất hoặc biến dạng không? / Are the platform and steps worn, missing, or deformed?",
  },
  { field: "platformStepWearR", label: "" },
  { field: "platformStepWearP", label: "" },
  { field: "platformStepWearA", label: "" },
  { field: "platformStepWearF", label: "" },
  {
    field: "handrailCondition",
    label:
      "7. Lan can, tấm chặn chân có bị gãy, mục, sút mối hàn hoặc mất không? / Are handrails or toe boards broken, corroded, detached, or missing?",
  },
  { field: "handrailConditionR", label: "" },
  { field: "handrailConditionP", label: "" },
  { field: "handrailConditionA", label: "" },
  { field: "handrailConditionF", label: "" },
  {
    field: "platformStructure",
    label:
      "8. Kết cấu thép của sàn thao tác, bậc thang có bị biến dạng, mất hoặc bị ăn mòn không? / Are structural steel parts of the platform and steps deformed, missing, or corroded?",
  },
  { field: "platformStructureR", label: "" },
  { field: "platformStructureP", label: "" },
  { field: "platformStructureA", label: "" },
  { field: "platformStructureF", label: "" },
  { field: "tag", label: "Tag" },
  { field: "collection", label: "Type of Equipment" },
  { field: "remark", label: "Ghi chú Remark" },
  { field: "url", label: "" },
  { field: "lat", label: "" },
];
