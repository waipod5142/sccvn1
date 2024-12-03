export const questions = [
  {
    id: 1,
    name: 'gauge',
    question: 'រង្វាស់ទ្រនិច',
    howto: 'ភ្នែក',
    accept: 'ទ្រនិចត្រូវស្ថិតចំពណ៌បៃតង ករណី CO₂ មិនមានទ្រនិច',
  },
  {
    id: 2,
    name: 'tip',
    question: 'គន្លឹះ',
    howto: 'ភ្នែក',
    accept: 'គន្លឹះត្រូវដោតជាប់ដោយមានកិបសៀល',
  },
  {
    id: 3,
    name: 'handle',
    question: 'ដៃច្របាច់',
    howto: 'ភ្នែក',
    accept: 'មិនដំណើរការឬខូចខាត',
  },
  {
    id: 4,
    name: 'nozzle',
    question: 'បំពង់ទុយោនិងក្បាលបាញ់',
    howto: 'ភ្នែក',
    accept: 'លក្ខណៈគ្មានដាច់រហែក និង ទុយោរៀបតាមលំដាប់លំដោយ',
  },
  {
    id: 5,
    name: 'label',
    question: 'ស្លាកសញ្ញាប្រភេទបំពង់និងរបៀបប្រើប្រាស់បំពង់ពន្លត់អគ្គិភ័យ',
    howto: 'ភ្នែក',
    accept: 'លក្ខណៈគ្មានដាច់រហែក និង សភាពស្អាតល្អ',
  },
  {
    id: 6,
    name: 'layout',
    question: 'ទ្រង់ទ្រាយបំពង់ពន្លត់អគ្គិភ័យ',
    howto: 'ភ្នែក',
    accept: 'លក្ខណៈគ្មានកំពិតឬខូចទ្រង់ទ្រាយនិងសភាពស្អាតល្អ',
  },
  {
    id: 7,
    name: 'hose',
    question: 'គុណភាពវត្ថុធាតុនៅក្នុងបំពង់ពន្លត់អគ្គិភ័យ',
    howto: 'ដៃ​ ត្រចៀក',
    accept: 'លើកក្រឡុកបំពង់ពន្លត់អគ្គិភ័យប្រភេទ ABC',
  },
  {
    id: 8,
    name: 'sign',
    question: 'ស្លាកត្រួតពិនិត្យបំពង់ពន្លត់អគ្គិភ័យប្រចាំខែ',
    howto: 'ដៃ​ ភ្នែក',
    accept: 'គូសធីកទៅតាមខែនិមួយៗនិងស្លាកត្រូវស្ថិតនៅជាប់បំពង់ពន្លត់អគ្គិភ័យ',
  },
  {
    id: 9,
    name: 'location',
    question: 'ទីតាំងបំពង់ពន្លត់អគ្គិភ័យ',
    howto: 'ភ្នែក',
    accept: 'មិនមានវត្ថុដាក់បាំងពីមុខបំពង់ពន្លត់អគ្គិភ័យ',
  },
  {
    id: 10,
    name: 'badge',
    question: 'ផ្លាកសញ្ញាបំពង់ពន្លត់អគ្គិភ័យ',
    howto: 'ភ្នែក',
    accept: 'មិនជ្រុះពីទីតាំងតម្លើងនិងសភាពស្អាតល្អ',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'ថ្ងៃខែឆ្នាំ Date' },
  { field: 'email', label: 'អ្នកទទួលខុសត្រូវ Responsible person' },
  { field: 'inspector', label: 'អ្នកត្រួតពិនិត្យ / Inspector' },
  { field: 'responder', label: 'អ្នកឆ្លើយតប Responder' },
  { field: 'gauge', label: '1. រង្វាស់ទ្រនិច *' },
  { field: 'gaugeR', label: '' },
  { field: 'gaugeP', label: '' },
  { field: 'gaugeA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'gaugeF', label: '' },
  { field: 'seal', label: '2. គន្លឹះ *' },
  { field: 'sealR', label: '' },
  { field: 'sealP', label: '' },
  { field: 'sealA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'sealF', label: '' },
  { field: 'nozzel', label: '3. បំពង់ទុយោនិងក្បាលបាញ់ *' },
  { field: 'nozzelR', label: '' },
  { field: 'nozzelP', label: '' },
  { field: 'nozzelA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'nozzelF', label: '' },
  { field: 'gauge', label: '4. ពិដានមាត្រ *' },
  { field: 'gaugeR', label: '' },
  { field: 'gaugeP', label: '' },
  { field: 'gaugeA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'gaugeF', label: '' },
  { field: 'fill', label: '5. ការបញ្ចូលទ្រង់ទ្រាយ *' },
  { field: 'fillR', label: '' },
  { field: 'fillP', label: '' },
  { field: 'fillA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'fillF', label: '' },
  { field: 'instruction', label: '6. គន្លឹះសម្រាប់ប្រើប្រាស់ *' },
  { field: 'instructionR', label: '' },
  { field: 'instructionP', label: '' },
  { field: 'instructionA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'instructionF', label: '' },
  { field: 'certify', label: '7. ការផ្ទៀងផ្ទាត់ *' },
  { field: 'certifyR', label: '' },
  { field: 'certifyP', label: '' },
  { field: 'certifyA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'certifyF', label: '' },
  { field: 'tag', label: '8. ត្រួតពិនិត្យតាមស្លាក *' },
  { field: 'tagR', label: '' },
  { field: 'tagP', label: '' },
  { field: 'tagA', label: 'ឆ្លើយតបដល់កំហុស Respond to defect' },
  { field: 'tagF', label: '' },
  { field: 'remark', label: 'ចំណាំ Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
