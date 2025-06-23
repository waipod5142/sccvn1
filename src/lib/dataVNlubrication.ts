export const questions = [
  {
    id: 1,
    name: "lubricantType",
    question: "Loại mỡ được sử dụng / Type of lubricant (grease/oil)",
    howto:
      "Ghi rõ loại mỡ hoặc dầu được sử dụng để bôi trơn. / Specify the type of grease or oil used for lubrication.",
    accept: "Loại mỡ đã được ghi nhận. / Lubricant type has been recorded.",
  },
  {
    id: 2,
    name: "lubricantQuantity",
    question: "Lượng mỡ / Quantity to grease/oil top up",
    howto:
      "Ghi rõ lượng mỡ hoặc dầu đã được bơm hoặc châm thêm. / Specify the amount of grease or oil topped up.",
    accept:
      "Lượng mỡ đã được ghi nhận. / Lubricant quantity has been recorded.",
  },
  {
    id: 3,
    name: "lubricantInterval",
    question: "Tần suất bơm mỡ / Interval",
    howto:
      "Ghi rõ tần suất hoặc lịch trình bơm mỡ. / Specify the frequency or schedule for lubrication.",
    accept:
      "Tần suất bơm mỡ đã được ghi nhận. / Lubrication interval has been recorded.",
  },
];

export const detailFields = [
  { field: "id", label: "ID" },
  { field: "formStartTime", label: "Start Time" },
  { field: "date", label: "Date" },
  { field: "operator", label: "Operator" },
  {
    field: "lubricantType",
    label: "1. Type of lubricant (grease/oil)",
  },
  {
    field: "lubricantQuantity",
    label: "2. Quantity to grease/oil top up",
  },
  {
    field: "lubricantInterval",
    label: "3. Interval",
  },
  { field: "remark", label: "Ghi chú Remark" },
  { field: "url", label: "" },
  { field: "url2P", label: "" },
  { field: "url3P", label: "" },
  { field: "url4P", label: "" },
  { field: "url5P", label: "" },
  { field: "lat", label: "" },
];
