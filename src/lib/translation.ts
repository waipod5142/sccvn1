export const inspector: { [key: string]: string } = {
  vn: 'Người kiểm tra',
  th: 'ผู้ตรวจสอบ',
  cmic: 'អ្នកត្រួតពិនិត្យ',
  lk: 'පරික්ෂකයා',
  bd: 'পরিদর্শক',
};

export const howto: { [key: string]: string } = {
  vn: 'Cách kiểm tra',
  th: 'วิธีตรวจสอบ',
  cmic: 'វិធីសាស្រ្តពិនិត្យ',
  lk: 'පරික්ෂා කිරීමේ ක්‍රමය',
  bd: 'পরীক্ষার পদ্ধতি',
};

export const accept: { [key: string]: string } = {
  vn: 'Tiêu chuẩn chấp nhận',
  th: 'เกณฑ์การยอมรับ',
  cmic: 'លក្ខណៈសម្បត្តិនៃការទទួលយក',
  lk: 'පිළිගැනීම් ප්‍රමිතිය',
  bd: 'গৃহীত মানদণ্ড',
};

export const remarkr: { [key: string]: string } = {
  vn: 'Ghi chú cho câu hỏi này',
  th: 'หมายเหตุสำหรับคำถามนี้',
  cmic: 'ចំណាំសម្រាប់សំណួរនេះ',
  lk: 'මෙම ප්‍රශ්නය සඳහා සටහන',
  bd: 'এই প্রশ্নটির জন্য মন্তব্য',
};

export const remark: { [key: string]: string } = {
  vn: 'Ghi chú (Tùy chọn)',
  th: 'หมายเหตุ (ไม่บังคับ)',
  cmic: 'ចំណាំ (ជាជម្រើស)',
  lk: 'සටහන (විකල්ප)',
  bd: 'মন্তব্য (ঐচ্ছিক)',
};

export const picture: { [key: string]: string } = {
  vn: 'Đính kèm hình ảnh (Tùy chọn)',
  th: 'แนบรูปภาพ (ไม่บังคับ)',
  cmic: 'ភ្ជាប់រូបភាព (ជាជម្រើស)',
  lk: 'පින්තූරයක් අමුණන්න (විකල්ප)',
  bd: 'ছবি সংযুক্ত করুন (ঐচ্ছিক)',
};

export const submit: { [key: string]: string } = {
  vn: 'Gửi đi',
  th: 'ส่ง',
  cmic: 'ដាក់ស្នើ',
  lk: 'යවන්න',
  bd: 'জমা দিন',
};

export type ChoiceType = {
  value: string;
  text: string;
  colorClass: string;
};

export const choices: ChoiceType[] = [
  { value: 'Pass', text: 'Đã có', colorClass: 'bg-green-500' },
  { value: 'NotPass', text: 'Chưa có', colorClass: 'bg-rose-500' },
  { value: 'N/A', text: 'Không áp', colorClass: 'bg-yellow-500' },
];

export const choicesLK: ChoiceType[] = [
  { value: 'Pass', text: 'ඇත', colorClass: 'bg-green-500' },
  { value: 'NotPass', text: 'නැත', colorClass: 'bg-rose-500' },
  { value: 'N/A', text: 'අදාල නැත', colorClass: 'bg-yellow-500' },
];

export const choicesCMIC: ChoiceType[] = [
  { value: 'Pass', text: 'ប្រក្រតី', colorClass: 'bg-green-500' },
  { value: 'NotPass', text: 'មិនប្រក្រតី', colorClass: 'bg-rose-500' },
  { value: 'N/A', text: 'មិនអាចប្រើបាន', colorClass: 'bg-yellow-500' },
];

export const choicesTH: ChoiceType[] = [
  { value: 'Pass', text: 'ผ่าน', colorClass: 'bg-green-500' },
  { value: 'NotPass', text: 'ไม่ผ่าน', colorClass: 'bg-rose-500' },
  { value: 'N/A', text: 'ไม่เกี่ยวข้อง', colorClass: 'bg-yellow-500' },
];

export const choicesBD: ChoiceType[] = [
  { value: 'Pass', text: 'পাস', colorClass: 'bg-green-500' },
  { value: 'NotPass', text: 'পাস নয়', colorClass: 'bg-rose-500' },
  { value: 'N/A', text: 'প্রযোজ্য নয়', colorClass: 'bg-yellow-500' },
];
