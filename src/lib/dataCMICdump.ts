export const questions = [
  {
    id: 1,
    name: 'headLight',
    question: 'កង់មិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាព និងការប្រើប្រាស់កង់',
    accept: 'កង់ស្ថានភាពល្អ គ្មានការខូចខាត',
  },
  {
    id: 2,
    name: 'signalLight',
    question: 'ដងសសរបង្គំមិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាព និងភាពស្អាត',
    accept: 'ដងសសរបង្គំស្ថានភាពល្អ គ្មានការបាក់ ឬការលេចធ្លាយ',
  },
  {
    id: 3,
    name: 'brakeLight',
    question: 'ដងហាយដ្រូលិកមិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាព និងការលេចធ្លាយ',
    accept: 'ដងហាយដ្រូលិកគ្មានការច្រេះ ឬការលេចធ្លាយ',
  },
  {
    id: 4,
    name: 'horn',
    question: 'ច្រវ៉ាក់យោងនិងដងចូកមិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាព និងការប្រើប្រាស់',
    accept: 'ច្រវ៉ាក់ស្ថានភាពល្អ និងដំណើរការបានត្រឹមត្រូវ',
  },
  {
    id: 5,
    name: 'wiper',
    question: 'កៅអី,​ ខ្សែក្រវ៉ាត់មិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាពកៅអី និងការដាក់ខ្សែក្រវ៉ាត់',
    accept: 'កៅអីស្ថានភាពល្អ និងខ្សែក្រវ៉ាត់ដំណើរការបានត្រឹមត្រូវ',
  },
  {
    id: 6,
    name: 'windshield',
    question: 'អាគុយមិនធម្មតា',
    howto: 'ពិនិត្យស្ថានភាព និងកំរិតថ្ម',
    accept: 'អាគុយស្ថានភាពល្អ គ្មានស្នាមច្រេះ ឬការច្រាលថ្ម',
  },
  {
    id: 7,
    name: 'safetyBelt',
    question: 'ហ្រ្វាងដៃ, ជើងមិនធម្មតា',
    howto: 'សាកសួរនិងពិនិត្យប្រព័ន្ធហ្រ្វាំង',
    accept: 'ហ្រ្វាំងដំណើរការបានត្រឹមត្រូវ គ្មានការខូចខាត',
  },
  {
    id: 8,
    name: 'wheel',
    question: 'ចង្កូតមិនធម្មតា',
    howto: 'សាកសួរស្ថានភាពចង្កូត និងការបង្វិល',
    accept: 'ចង្កូតដំណើរការបានត្រឹមត្រូវ គ្មានការខូចខាត',
  },
  {
    id: 9,
    name: 'siren',
    question: 'ហ្គ៊ែរមិនធម្មតា',
    howto: 'សាកសួរស្ថានភាព និងការប្រើប្រាស់ហ្គែរជើង',
    accept: 'ហ្គែរដំណើរការបានត្រឹមត្រូវ',
  },
  {
    id: 10,
    name: 'brakeSys',
    question: 'ភ្លើងមិនធម្មតា',
    howto: 'ពិនិត្យការដំណើរការរបស់ភ្លើង',
    accept: 'ភ្លើងដំណើរការបានត្រឹមត្រូវ គ្មានការខូចខាត',
  },
  {
    id: 11,
    name: 'extinguisher',
    question: 'ស៊ីញ៉ូមិនធម្មតា',
    howto: 'បើកស៊ីញ៉ូ និងពិនិត្យស្ថានភាព',
    accept: 'ស៊ីញ៉ូដំណើរការបានត្រឹមត្រូវ',
  },
];

export const detailFields = [
  { field: 'inspector', label: 'អ្នកត្រួតពិនិត្យ - Inspector' },
  { field: 'date', label: 'កាលបរិច្ឆេទ - Date' },
  { field: 'headLight', label: '1. ភ្លើងចង្កៀងមុខ - Headlight' },
  { field: 'headLightR', label: '' },
  { field: 'headLightP', label: '' },
  { field: 'headLightA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'headLightF', label: '' },
  { field: 'signalLight', label: '2. ភ្លើងស៊ីញ៉ូ - Signal Light' },
  { field: 'signalLightR', label: '' },
  { field: 'signalLightP', label: '' },
  { field: 'signalLightA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'signalLightF', label: '' },
  { field: 'brakeLight', label: '3. ភ្លើងហ្រាំង - Brake Light' },
  { field: 'brakeLightR', label: '' },
  { field: 'brakeLightP', label: '' },
  { field: 'brakeLightA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'brakeLightF', label: '' },
  { field: 'horn', label: '4. ស៊ីផ្លេ - Horn' },
  { field: 'hornR', label: '' },
  { field: 'hornP', label: '' },
  { field: 'hornA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'hornF', label: '' },
  { field: 'wiper', label: '5. ផ្លឹតទឹកជូតកញ្ចក់ - Wiper' },
  { field: 'wiperR', label: '' },
  { field: 'wiperP', label: '' },
  { field: 'wiperA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'wiperF', label: '' },
  { field: 'windshield', label: '6. កញ្ចក់មុខ - Windshield' },
  { field: 'windshieldR', label: '' },
  { field: 'windshieldP', label: '' },
  { field: 'windshieldA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'windshieldF', label: '' },
  { field: 'safetyBelt', label: '7. ខ្សែក្រវ៉ាត់សុវត្តិភាព - Safety Belt' },
  { field: 'safetyBeltR', label: '' },
  { field: 'safetyBeltP', label: '' },
  { field: 'safetyBeltA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'safetyBeltF', label: '' },
  { field: 'wheel', label: '8. កង់ - Wheel' },
  { field: 'wheelR', label: '' },
  { field: 'wheelP', label: '' },
  { field: 'wheelA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'wheelF', label: '' },
  { field: 'siren', label: '9. សឺរ៉ែន - Siren' },
  { field: 'sirenR', label: '' },
  { field: 'sirenP', label: '' },
  { field: 'sirenA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'sirenF', label: '' },
  { field: 'brakeSys', label: '10. ប្រព័ន្ធហ្រ្វាំង - Brake System' },
  { field: 'brakeSysR', label: '' },
  { field: 'brakeSysP', label: '' },
  { field: 'brakeSysA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'brakeSysF', label: '' },
  {
    field: 'extinguisher',
    label: '11. បំពង់ពន្លត់អគ្គីភ័យ - Fire Extinguisher',
  },
  { field: 'extinguisherR', label: '' },
  { field: 'extinguisherP', label: '' },
  { field: 'extinguisherA', label: 'ឆ្លើយតបដល់កំហុស - Respond to defect' },
  { field: 'extinguisherF', label: '' },
  { field: 'remark', label: '12. មតិយោបល់ - Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
