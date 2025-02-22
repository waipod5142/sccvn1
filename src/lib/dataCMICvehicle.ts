export const questions = [
  {
    id: 1,
    name: 'belt',
    question: 'ខ្សែក្រវ៉ាត់សុវត្ថិភាពមិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាពនៃខ្សែក្រវ៉ាត់ និងការដំណើរការ',
    accept: 'ខ្សែក្រវ៉ាត់ស្ថានភាពល្អ គ្មានការខូចខាត',
  },
  {
    id: 2,
    name: 'tire',
    question: 'សំបកកង់ និងសំពាធខ្យល់មិនធម្មតា',
    howto: 'ពិនិត្យសំបកកង់ សម្ពាធខ្យល់ និងការបាញ់ខ្យល់',
    accept: 'សំបកកង់ស្ថានភាពល្អ គ្មានការបែកឬស្នាមច្រេះ',
  },
  {
    id: 3,
    name: 'lighting',
    question: 'ប្រព័ន្ធភ្លើង និងកុងតាក់មិនធម្មតា',
    howto: 'ពិនិត្យប្រព័ន្ធភ្លើង កុងតាក់ និងការបើកបិទ',
    accept: 'ប្រព័ន្ធភ្លើងដំណើរការបានត្រឹមត្រូវ គ្មានការខូចខាត',
  },
  {
    id: 4,
    name: 'steering',
    question: 'ចង្កូតមិនធម្មតា',
    howto: 'តេស្តបង្វិលចង្កូត ឆ្វេង-ស្តាំ២ជុំ',
    accept: 'ចង្កូតដំណើរការបានត្រឹមត្រូវ គ្មានការខូចខាត',
  },
  {
    id: 5,
    name: 'brakeSys',
    question: 'ប្រព័ន្ធហ្រ្វាំងមិនធម្មតា',
    howto: 'តេស្តជាន់សាកល្បង',
    accept: 'ជាន់ជាប់ល្អ និង មិនគាំង',
  },
  {
    id: 6,
    name: 'mirror',
    question: 'កញ្ចក់ឆ្លុះមិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាពកញ្ចក់ និងភ្លឺច្បាស់',
    accept: 'កញ្ចក់ស្ថានភាពល្អ គ្មានការបែកបាក់ ឬស្នាមប្រេះ',
  },
  {
    id: 7,
    name: 'extinguisher',
    question: 'បំពង់ពន្លត់អគ្គីភ័យមិនធម្មតា',
    howto: 'មានបំពង់ពន្លត់អគ្គីភ័យ និងនៅដំណើរការ',
    accept: 'មិនបាត់ក្រឡាស់ និងទ្រនិចនៅចំណុចពណ៌ខៀវ',
  },
];

export const detailFields = [
  { field: 'id', label: 'អត្តលេខ - ID' },
  { field: 'date', label: 'កាលបរិច្ឆេទ - Date' },
  { field: 'inspector', label: 'អ្នកត្រួតពិនិត្យ - Inspector' },
  { field: 'responder', label: 'អ្នកឆ្លើយតប - Responder' },
  { field: 'belt', label: '1. ខ្សែក្រវ៉ាត់សុវត្ថិភាព - Seat Belt' },
  { field: 'beltR', label: '' },
  { field: 'beltP', label: '' },
  { field: 'beltA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'beltF', label: '' },
  { field: 'tire', label: '2. សំបកកង់ - Tire' },
  { field: 'tireR', label: '' },
  { field: 'tireP', label: '' },
  { field: 'tireA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'tireF', label: '' },
  { field: 'lighting', label: '3. ប្រព័ន្ធភ្លើង - Lighting System' },
  { field: 'lightingR', label: '' },
  { field: 'lightingP', label: '' },
  { field: 'lightingA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'lightingF', label: '' },
  { field: 'steering', label: '4. ចង្កូត - Steering' },
  { field: 'steeringR', label: '' },
  { field: 'steeringP', label: '' },
  { field: 'steeringA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'steeringF', label: '' },
  { field: 'brakeSys', label: '5. ប្រព័ន្ធហ្រ្វាំង - Brake System' },
  { field: 'brakeSysR', label: '' },
  { field: 'brakeSysP', label: '' },
  { field: 'brakeSysA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'brakeSysF', label: '' },
  { field: 'mirror', label: '6. កញ្ចក់ឆ្លុះ - Mirror' },
  { field: 'mirrorR', label: '' },
  { field: 'mirrorP', label: '' },
  { field: 'mirrorA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'mirrorF', label: '' },
  {
    field: 'extinguisher',
    label: '7. បំពង់ពន្លត់អគ្គីភ័យ - Fire Extinguisher',
  },
  { field: 'extinguisherR', label: '' },
  { field: 'extinguisherP', label: '' },
  { field: 'extinguisherA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'extinguisherF', label: '' },
  { field: 'remark', label: 'មតិយោបល់ - Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
