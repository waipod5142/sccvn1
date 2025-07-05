export const questions = [
  {
    id: 1,
    name: "thermalSuitCondition",
    question:
      "Bộ quần áo chống nhiệt có đảm bảo an toàn sử dụng? / Thermal Suit: Is it in safe condition for use?",
    howto:
      "Kiểm tra xem có rách, thủng, lớp cách nhiệt còn tốt, mối dán kín và còn hạn sử dụng. / Check for tears, holes, insulation condition, seam seals, surface insulation, and expiry date.",
    accept:
      "Bộ quần áo không rách, không thủng, lớp cách nhiệt và mối dán còn tốt, còn hạn sử dụng. / Suit has no tears, good insulation, sealed seams, intact surface, and valid expiry.",
  },
  {
    id: 2,
    name: "faceShieldCondition",
    question:
      "Mặt nạ (face shield) có đảm bảo sử dụng an toàn? / Face Shield: Is it in safe condition for use?",
    howto:
      "Kiểm tra mặt nạ có trầy xước, bị mờ, biến dạng và bơm trợ thở hoạt động tốt. / Check for scratches, blurriness, deformation, and proper operation of breathing pumps.",
    accept:
      "Mặt nạ không trầy xước, không mờ, không biến dạng, bơm trợ thở hoạt động tốt. / Face shield is clear, not scratched, not deformed, and pumps work properly.",
  },
  {
    id: 3,
    name: "insulatedGlovesCondition",
    question:
      "Bao tay da cách nhiệt có đảm bảo sử dụng an toàn? / Insulated Leather Gloves: Are they in safe condition for use?",
    howto:
      "Kiểm tra bao tay có rách, lớp phủ cách nhiệt còn nguyên vẹn, còn đàn hồi, co giãn và được phép sử dụng. / Check for tears, intact insulation coating, elasticity, and usability.",
    accept:
      "Bao tay không rách, lớp phủ cách nhiệt còn nguyên, đàn hồi tốt và được phép sử dụng. / Gloves are intact, with good insulation, elasticity, and approved for use.",
  },
  {
    id: 4,
    name: "footProtectionCondition",
    question:
      "Bảo vệ chân có đảm bảo sử dụng an toàn? / Foot Protection: Is it in safe condition for use?",
    howto:
      "Kiểm tra bảo vệ chân có rách, lớp phủ cách nhiệt còn nguyên vẹn và được phép sử dụng. / Check for tears, intact insulation coating, and if it is approved for use.",
    accept:
      "Bảo vệ chân không rách, lớp phủ cách nhiệt còn nguyên vẹn và được phép sử dụng. / Foot protection is intact, insulation coating is good, and allowed for use.",
  },
];

export const detailFields = [
  { field: "id", label: "ID" },
  { field: "date", label: "Ngày Date" },
  { field: "email", label: "Responsible person" },
  { field: "inspector", label: "Người kiểm tra Inspector" },
  { field: "responder", label: "Responder" },
  {
    field: "thermalSuitCondition",
    label:
      "1. Bộ quần áo chống nhiệt có đảm bảo an toàn sử dụng? / Thermal Suit: Is it in safe condition for use? *",
  },
  { field: "thermalSuitConditionR", label: "" },
  { field: "thermalSuitConditionP", label: "" },
  { field: "thermalSuitConditionA", label: "Respond to defect" },
  { field: "thermalSuitConditionF", label: "" },

  {
    field: "faceShieldCondition",
    label:
      "2. Mặt nạ (face shield) có đảm bảo sử dụng an toàn? / Face Shield: Is it in safe condition for use? *",
  },
  { field: "faceShieldConditionR", label: "" },
  { field: "faceShieldConditionP", label: "" },
  { field: "faceShieldConditionA", label: "Respond to defect" },
  { field: "faceShieldConditionF", label: "" },

  {
    field: "insulatedGlovesCondition",
    label:
      "3. Bao tay da cách nhiệt có đảm bảo sử dụng an toàn? / Insulated Leather Gloves: Are they in safe condition for use? *",
  },
  { field: "insulatedGlovesConditionR", label: "" },
  { field: "insulatedGlovesConditionP", label: "" },
  { field: "insulatedGlovesConditionA", label: "Respond to defect" },
  { field: "insulatedGlovesConditionF", label: "" },

  {
    field: "footProtectionCondition",
    label:
      "4. Bảo vệ chân có đảm bảo sử dụng an toàn? / Foot Protection: Is it in safe condition for use? *",
  },
  { field: "footProtectionConditionR", label: "" },
  { field: "footProtectionConditionP", label: "" },
  { field: "footProtectionConditionA", label: "Respond to defect" },
  { field: "footProtectionConditionF", label: "" },
  { field: "remark", label: "Ghi chú Remark" },
  { field: "url", label: "" },
  { field: "lat", label: "" },
];
