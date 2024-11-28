export const questions = [
  {
    id: 1,
    name: 'obstruction',
    question: 'ගිනි නිවන උපකරණයේ මාර්ගය',
    howto:
      'ගිනි නිවන උපකරණය බාධක වලින් තොරව පහසුවෙන් ළඟා විය හැකි බව සහ නියමිත ස්ථානයේ සිටින බව පරීක්ෂා කරන්න.',
    accept: 'ගිනි නිවන උපකරණය බාධක වලින් තොරව නිසි ස්ථානයේ ඇත.',
  },
  {
    id: 2,
    name: 'seal',
    question: 'ආරක්‍ෂිත පින් සහ මුද්‍රාව',
    howto:
      'ගිනි නිවන උපකරණයේ ආරක්‍ෂිත පින් සහ මුද්‍රාව නිවැරදිව සවි වී ඇති බව පරීක්ෂා කරන්න.',
    accept: 'ආරක්‍ෂිත පින් සහ මුද්‍රාව නිවැරදිව සවි වී ඇත.',
  },
  {
    id: 3,
    name: 'nozzel',
    question: 'නොසල් පවිත්‍රතාවය',
    howto:
      'නොසල්හි කිසිදු දිරායෑම් හෝ කාන්දු වීම් නොමැති බව සහ අවහිර නොවන බව පරීක්ෂා කරන්න.',
    accept: 'නොසල්හි කිසිදු දෝෂ හෝ අවහිර නොමැත.',
  },
  {
    id: 4,
    name: 'gauge',
    question: 'පීඩන මාපකය',
    howto: 'පීඩන මාපකය නිවැරදි පීඩන සීමාවේ සිටින බව පරීක්ෂා කරන්න.',
    accept: 'පීඩන මාපකය නිවැරදි පීඩන සීමාවේ ඇත.',
  },
  {
    id: 5,
    name: 'fill',
    question: 'ගිනි නිවන මාද්‍යය',
    howto: 'ගිනි නිවන උපකරණය නිවැරදිව පිරී ඇති බව පරීක්ෂා කරන්න.',
    accept: 'ගිනි නිවන උපකරණය නිවැරදිව පිරී ඇත.',
  },
  {
    id: 6,
    name: 'instruction',
    question: 'භාවිත උපදෙස්',
    howto:
      'ගිනි නිවන උපකරණය භාවිතා කරන ආකාරය පැහැදිලිව කියවිය හැකි බව පරීක්ෂා කරන්න.',
    accept: 'භාවිත උපදෙස් පැහැදිලිව කියවිය හැක.',
  },
  {
    id: 7,
    name: 'certify',
    question: 'සහතික පරීක්ෂාව',
    howto:
      'ගිනි නිවන උපකරණය සහතික ලත් අයෙකු පරික්ෂා කල දිනය සදහන් වී ඇති බව පරීක්ෂා කරන්න.',
    accept: 'සහතික පරීක්ෂාව නිවැරදිව සදහන් වී ඇත.',
  },
  {
    id: 8,
    name: 'tag',
    question: 'පරික්ෂා ටැග්',
    howto: 'පරික්ෂා ටැග් එක නිවැරදිව සවි වී ඇති බව පරීක්ෂා කරන්න.',
    accept: 'පරික්ෂා ටැග් එක නිවැරදිව සවි වී ඇත.',
  },
];

export const headerFields = [
  { field: 'id', label: 'උපකරණ අංකය' },
  { field: 'site', label: 'ස්ථානය' },
  { field: 'kind', label: 'උසසීමේ වර්ගය Kind of Lifting' },
  { field: 'area', label: 'ප්‍රදේශය Area' },
  { field: 'swl', label: 'ආරක්ෂිත වැඩබලන බර (SWL) (ටොන්)' },
  { field: 'operateBy', label: 'ක්‍රියා කරන අය' },
  {
    field: 'latestInspection',
    label: 'අවසන් පරීක්ෂාව Latest Inspection 3rd Party',
  },
  {
    field: 'nextInspection',
    label: 'ඊළඟ පරීක්ෂාව next Inspection 3rd Party',
  },
  {
    field: 'installDiameter',
    label: 'සවිකරන කේබල් විෂ්කම්භය Cable diameter installing (mm)',
  },
  {
    field: 'actualDiameter',
    label: 'ව්‍යාපෘතික කේබල් විෂ්කම්භය Cable diameter actual measure (mm)',
  },
  { field: 'tolerance', label: 'ඉවසීම Tolerance (mm)' },
  { field: 'result', label: 'ප්‍රතිඵලය Result' },
  {
    field: 'internalInspector',
    label: 'අභ්‍යන්තර පරීක්ෂකයා Internal Inspector',
  },
  { field: 'remarks', label: 'සටහන Remarks' },
  { field: 'owner', label: 'අයිතිකරු Owner' },
  { field: 'no', label: 'අංකය No' },
  { field: 'etype', label: 'උපකරණ වර්ගය Equipment Type' },
  { field: 'esite', label: 'උපකරණ ස්ථානය Equipment Site' },
  { field: 'place', label: 'ස්ථානය Place' },
  { field: 'location', label: 'පිහිටුම Location' },
  { field: 'type', label: 'වර්ගය Type' },
  { field: 'cableDiameter', label: 'කේබල් විෂ්කම්භය Cable Diameter' },
  { field: 'email', label: 'වගකීම භාරකරු Responsible person' },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'දිනය Date' },
  { field: 'email', label: 'වගකීම භාරකරු Responsible person' },
  { field: 'inspector', label: 'පරීක්ෂක / Inspector' },
  { field: 'responder', label: 'ප්‍රතිචාරකයා Responder' },
  { field: 'obstruction', label: '1. ගිනි නිවන උපකරණයේ මාර්ගය *' },
  { field: 'obstructionR', label: '' },
  { field: 'obstructionP', label: '' },
  {
    field: 'obstructionA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'obstructionF', label: '' },
  { field: 'seal', label: '2. ආරක්‍ෂිත පින් සහ මුද්‍රාව *' },
  { field: 'sealR', label: '' },
  { field: 'sealP', label: '' },
  { field: 'sealA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'sealF', label: '' },
  { field: 'nozzel', label: '3. නොසල් පවිත්‍රතාවය *' },
  { field: 'nozzelR', label: '' },
  { field: 'nozzelP', label: '' },
  { field: 'nozzelA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'nozzelF', label: '' },
  { field: 'gauge', label: '4. පීඩන මාපකය *' },
  { field: 'gaugeR', label: '' },
  { field: 'gaugeP', label: '' },
  { field: 'gaugeA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'gaugeF', label: '' },
  { field: 'fill', label: '5. ගිනි නිවන මාද්‍යය *' },
  { field: 'fillR', label: '' },
  { field: 'fillP', label: '' },
  { field: 'fillA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'fillF', label: '' },
  { field: 'instruction', label: '6. භාවිත උපදෙස් *' },
  { field: 'instructionR', label: '' },
  { field: 'instructionP', label: '' },
  {
    field: 'instructionA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'instructionF', label: '' },
  { field: 'certify', label: '7. සහතික පරීක්ෂාව *' },
  { field: 'certifyR', label: '' },
  { field: 'certifyP', label: '' },
  { field: 'certifyA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'certifyF', label: '' },
  { field: 'tag', label: '8. පරික්ෂා ටැග් *' },
  { field: 'tagR', label: '' },
  { field: 'tagP', label: '' },
  { field: 'tagA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'tagF', label: '' },
  { field: 'remark', label: 'සටහන Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
