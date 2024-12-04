export const questions = [
  {
    id: 1,
    name: 'forkliftCondition',
    question: 'ෆෝර්ක්ලීෆ්ට් තත්වය',
    howto: 'ෆෝක්, පසු ඇන්ද හා කැරේජ්හි තත්වය පරීක්ශා කරන්න.',
    accept: 'ෆෝර්ක්ලීෆ්ට් තත්වය සාමාන්‍යය පවතී.',
  },
  {
    id: 2,
    name: 'beltAndChain',
    question: 'බෙල්ට් හා චේන්',
    howto: 'බෙල්ට් හා චේන් පද්ධතිය හොඳින් තිබේ දැයි පරීක්ශා කරන්න.',
    accept: 'බෙල්ට් හා චේන් පද්ධතිය සාමාන්‍ය ලෙස ක්‍රියා කරයි.',
  },
  {
    id: 3,
    name: 'hydraulicLine',
    question: 'සියළුම හයිඩ්‍රොලික් ලයින්',
    howto: 'හයිඩ්‍රොලික් ලීක් හෝ වෙනත් ලීක් නොමැති බව තහවුරු කරගන්න.',
    accept: 'හයිඩ්‍රොලික් පද්ධතිය හොඳ තත්වයේ පවතී.',
  },
  {
    id: 4,
    name: 'rop',
    question: 'ඉහල ආවරනය',
    howto: 'ඉහල ආවරනය ප්‍රමාණවත් හා හොඳ තත්වයේ ඇති බව පරීක්ශා කරන්න.',
    accept: 'ඉහල ආවරනය ප්‍රමාණවත් හා හොඳ තත්වයේ පවතී.',
  },
  {
    id: 5,
    name: 'fuelLevel',
    question: 'ඉන්ධන මට්ටම',
    howto:
      'ඉන්ධන මට්ටම, එන්ජින් ඔයිල් සහ රේඩියේටර් වතුර මට්ටම ප්‍රමාණවත් තත්වයේ ඇති බව පරීක්ශා කරන්න.',
    accept: 'ඉන්ධන මට්ටම ප්‍රමාණවත් තත්වයේ පවතී.',
  },
  {
    id: 6,
    name: 'seatAndSeatBelt',
    question: 'ආසන හා ආසන පටි',
    howto: 'ආසනය හොඳ තත්වයේ සහ ආසන පටි ක්‍රියාකාරී බව පරීක්ශා කරන්න.',
    accept: 'ආසනය හොඳ තත්වයේ සහ ආසන පටි ක්‍රියාකාරී තත්වයේ පවතී.',
  },
  {
    id: 7,
    name: 'electricalSystem',
    question: 'විදුලි පද්ධතිය',
    howto: 'විදුලි පද්ධතියේ දෝෂ තිබේදැයි පරීක්ශා කරන්න.',
    accept: 'විදුලි පද්ධතියේ දෝෂ නොමැත.',
  },
  {
    id: 8,
    name: 'batteryCondition',
    question: 'බැටරි තත්වය',
    howto: 'බැටරි කණු හා බැටරියේ තත්වය පරීක්ශා කරන්න.',
    accept: 'බැටරියේ දෝෂ නොමැත.',
  },
  {
    id: 9,
    name: 'hornSystem',
    question: 'හෝන් පද්ධතිය',
    howto: 'ඉදිරිපස නලාව සහ පසු පස නලාව ක්‍රියාකාරිත්වය පරීක්ශා කරන්න.',
    accept: 'ඉදිරිපස නලාව සහ පසු පස නලාවේ දෝෂ නොමැත.',
  },
  {
    id: 10,
    name: 'lampCondition',
    question: 'සියලුම ලාම්පු වල තත්වය',
    howto:
      'ප්‍රධාන ලාම්පු, සිග්නල් ලාම්පු, බ්‍රේක් සහ පාක් ලාම්පු පරීක්ශා කරන්න.',
    accept: 'සියලුම ලාම්පු වල දෝෂ නොමැත.',
  },
  {
    id: 11,
    name: 'beaconLamp',
    question: 'බීකන් ලාම්පු වල තත්වය',
    howto: 'බීකන් ලාම්පු වල ක්‍රියාකාරී බව පරීක්ශා කරන්න.',
    accept: 'බීකන් ලාම්පු වල දෝෂ නොමැත.',
  },
  {
    id: 12,
    name: 'gauge',
    question: 'මාපන යන්ත්‍ර',
    howto: 'මාපන යන්ත්‍ර නිවැරදිව ක්‍රියාකරී බව පරීක්ශා කරන්න.',
    accept: 'මාපන යන්ත්‍රවල දෝෂ නොමැත.',
  },
  {
    id: 13,
    name: 'brakeSystem',
    question: 'තිරිංග පද්ධතිය',
    howto: 'ෆුට් බ්‍රේක් තත්වය සහ පාක් බ්‍රේක් තත්වය පරීක්ශා කරන්න.',
    accept: 'තිරිංග පද්ධතියේ දෝෂ නොමැත.',
  },
  {
    id: 14,
    name: 'steeringSystem',
    question: 'ස්ටීයරින් පද්ධතිය',
    howto: 'ස්ටීයරින් පද්ධතියේ මනා ක්‍රියාකාරිත්වය පරීක්ශා කරන්න.',
    accept: 'ස්ටීයරින් පද්ධතියේ දෝෂ නොමැත.',
  },
  {
    id: 15,
    name: 'fireExtinguisher',
    question: 'ගිනි නිවන උපකරණය',
    howto:
      'ගිනි නිවන උපකරණය හොඳ තත්වයේ සහ මාසික පරීක්ශාව සිදු කර ඇති දැයි බලන්න.',
    accept: 'ගිනි නිවන උපකරණයේ දෝෂ නොමැත.',
  },
  {
    id: 16,
    name: 'thirdPartyLiftingCertificate',
    question: 'තෙවන පාර්ශව එසවුම් සහතිකය',
    howto: 'තෙවන පාර්ශව එසවුම් සහතිකය වසරක් තුල වලංගු තත්වයේ පවතීද?',
    accept: 'තෙවන පාර්ශව එසවුම් සහතිකය වසරක් තුල වලංගුය.',
  },
  {
    id: 17,
    name: 'operatorCertificate',
    question: 'සහතිකලත් ඔපරේටවරයෙක්ද?',
    howto: 'ෆෝක් ලිෆ්ට් ක්‍රියාකරු පිළිගත් ආයතානයකින් සහතිකයක් ලබා තිබේද?',
    accept: 'ෆෝක් ලිෆ්ට් ක්‍රියාකරු පිළිගත් ආයතානයකින් සහතිකයක් ලබා ඇත.',
  },
  {
    id: 18,
    name: 'tyreCondition',
    question: 'ටයරවල තත්වය',
    howto: 'ටයර ගෙවී ඇතිද යන්න පරීක්ශා කරන්න.',
    accept: 'ටයර සියල්ලම හොඳ තත්වයේ පවතී.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'දිනය Date' },
  { field: 'email', label: 'වගකීම භාරකරු Responsible person' },
  { field: 'inspector', label: 'පරීක්ෂක / Inspector' },
  { field: 'responder', label: 'ප්‍රතිචාරකයා Responder' },

  { field: 'forkliftCondition', label: '1. ෆෝර්ක්ලීෆ්ට් තත්වය *' },
  { field: 'forkliftConditionR', label: '' },
  { field: 'forkliftConditionP', label: '' },
  {
    field: 'forkliftConditionA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'forkliftConditionF', label: '' },

  { field: 'beltAndChain', label: '2. බෙල්ට් හා චේන් *' },
  { field: 'beltAndChainR', label: '' },
  { field: 'beltAndChainP', label: '' },
  {
    field: 'beltAndChainA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'beltAndChainF', label: '' },

  { field: 'hydraulicLine', label: '3. සියළුම හයිඩ්‍රොලික් ලයින් *' },
  { field: 'hydraulicLineR', label: '' },
  { field: 'hydraulicLineP', label: '' },
  {
    field: 'hydraulicLineA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'hydraulicLineF', label: '' },

  { field: 'rop', label: '4. ඉහල ආවරනය *' },
  { field: 'ropR', label: '' },
  { field: 'ropP', label: '' },
  { field: 'ropA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'ropF', label: '' },

  { field: 'fuelLevel', label: '5. ඉන්ධන මට්ටම *' },
  { field: 'fuelLevelR', label: '' },
  { field: 'fuelLevelP', label: '' },
  { field: 'fuelLevelA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'fuelLevelF', label: '' },

  { field: 'seatAndSeatBelt', label: '6. ආසන හා ආසන පටි *' },
  { field: 'seatAndSeatBeltR', label: '' },
  { field: 'seatAndSeatBeltP', label: '' },
  {
    field: 'seatAndSeatBeltA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'seatAndSeatBeltF', label: '' },

  { field: 'electricalSystem', label: '7. විදුලි පද්ධතිය *' },
  { field: 'electricalSystemR', label: '' },
  { field: 'electricalSystemP', label: '' },
  {
    field: 'electricalSystemA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'electricalSystemF', label: '' },

  { field: 'batteryCondition', label: '8. බැටරි තත්වය *' },
  { field: 'batteryConditionR', label: '' },
  { field: 'batteryConditionP', label: '' },
  {
    field: 'batteryConditionA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'batteryConditionF', label: '' },

  { field: 'hornSystem', label: '9. හෝන් පද්ධතිය *' },
  { field: 'hornSystemR', label: '' },
  { field: 'hornSystemP', label: '' },
  { field: 'hornSystemA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'hornSystemF', label: '' },

  { field: 'lampCondition', label: '10. සියලුම ලාම්පු වල තත්වය *' },
  { field: 'lampConditionR', label: '' },
  { field: 'lampConditionP', label: '' },
  {
    field: 'lampConditionA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'lampConditionF', label: '' },

  { field: 'beaconLamp', label: '11. බීකන් ලාම්පු වල තත්වය *' },
  { field: 'beaconLampR', label: '' },
  { field: 'beaconLampP', label: '' },
  { field: 'beaconLampA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'beaconLampF', label: '' },

  { field: 'gauge', label: '12. මාපන යන්ත්‍ර *' },
  { field: 'gaugeR', label: '' },
  { field: 'gaugeP', label: '' },
  { field: 'gaugeA', label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect' },
  { field: 'gaugeF', label: '' },

  { field: 'brakeSystem', label: '13. තිරිංග පද්ධතිය *' },
  { field: 'brakeSystemR', label: '' },
  { field: 'brakeSystemP', label: '' },
  {
    field: 'brakeSystemA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'brakeSystemF', label: '' },

  { field: 'steeringSystem', label: '14. සමඟ පාලක පද්ධතිය *' },
  { field: 'steeringSystemR', label: '' },
  { field: 'steeringSystemP', label: '' },
  {
    field: 'steeringSystemA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'steeringSystemF', label: '' },

  { field: 'fireExtinguisher', label: '15. ගිනි නිවන උපකරණය *' },
  { field: 'fireExtinguisherR', label: '' },
  { field: 'fireExtinguisherP', label: '' },
  {
    field: 'fireExtinguisherA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'fireExtinguisherF', label: '' },

  {
    field: 'thirdPartyLiftingCertificate',
    label: '16. තෙවන පාර්ශව එසවුම් සහතිකය *',
  },
  { field: 'thirdPartyLiftingCertificateR', label: '' },
  { field: 'thirdPartyLiftingCertificateP', label: '' },
  {
    field: 'thirdPartyLiftingCertificateA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'thirdPartyLiftingCertificateF', label: '' },

  { field: 'operatorCertificate', label: '17. සහතිකලත් ඔපරේටවරයෙක්ද? *' },
  { field: 'operatorCertificateR', label: '' },
  { field: 'operatorCertificateP', label: '' },
  {
    field: 'operatorCertificateA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'operatorCertificateF', label: '' },

  { field: 'tyreCondition', label: '18. ටයරවල තත්වය *' },
  { field: 'tyreConditionR', label: '' },
  { field: 'tyreConditionP', label: '' },
  {
    field: 'tyreConditionA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'tyreConditionF', label: '' },

  { field: 'remark', label: 'සටහන Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
