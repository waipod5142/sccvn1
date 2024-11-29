export const questions = [
  {
    id: 1,
    name: 'vehicleLicenseCheck',
    question: 'වාහනයේ බලපත්‍ර කල් ඉකුත් වී නොමැත.',
    howto:
      'වාහනයේ ඉන්ෂුවරන්ස් / ආදායම් බලපත්‍ර / යෝග්‍යතා සහතිකය කල් ඉකුත් වී නොමැති බව සහතික කර ගන්න.',
    accept: 'වාහනයේ බලපත්‍ර කල් ඉකුත් වී නොමැත.',
  },
  {
    id: 2,
    name: 'driverCertCheck',
    question: 'රියදුරු සහතිකයන් කල් ඉකුත් වී නොමැත.',
    howto:
      ' වෛද්‍ය යෝග්‍යතාවය / ආරක්ෂක රිය පැදවීම (DDT) /වැඩ උපදෙස් පිළිබඳ පුහුණුව/  යන පුහුණු සදහා වන කාඩ්පත් කල් ඉකුත් වී නොමැති බව සහතික කර ගන්න.',
    accept: 'ඉහත සහතික කල් ඉකුත් වී නොමැත.',
  },
  {
    id: 3,
    name: 'assistantCertCheck',
    question: 'සහායක සහතිකයන් කල් ඉකුත් වී නොමැත.',
    howto:
      ' වෛද්‍ය යෝග්‍යතාවය / OHS පුහුණුව /වැඩ උපදෙස් පිළිබඳ පුහුණුව/  ට්‍රෙලර් හුදකලා කිරීමේ පුහුණුව (ප්‍රයිම්මුවර් සදහා පමණි ) යන පුහුණු සදහා වන කාඩ්පත් කල් ඉකුත් වී නොමැති බව සහතික කර ගන්න.',
    accept: 'සහායක සහතිකයන් කල් ඉකුත් වී නොමැත.',
  },
  {
    id: 4,
    name: 'interiorConditionCheck',
    question: 'වාහනයේ අභ්‍යන්තර තත්ත්වය හොඳයිද?',
    howto:
      'ඉදිරිපස පුවරුව පඵදු වී නොමැත / ඉදිරිපස පුවරුවේ අනතුරු ඇඟවීමේ සංඥා නොමැත /වාහනයේ හෝන් එක හොදින් වැඩ කරයි / රියදුරු පැත්තේ රබර් කාපටය නිසි ලෙස අතුරා ඇත/ වාහනය අධික ලෙස මළ බැදී දිරාපත් වී නොමැත /රියදුරු පැත්තට ප්‍රමාණවත් ඉඩක් ලබා දී ඇත සහ රියදුරු කුටියේ හානිදායී විදුලි සම්බන්ධතා / වයර් නොමැත යන කාරණා හොදින් පරික්ෂා කරන්න.',
    accept: 'අභ්‍යන්තර තත්ත්වය හොඳින් ඇත.',
  },
  {
    id: 5,
    name: 'dashCamCheck',
    question: 'ඩෑෂ් කැමරාව එහි ශබ්ද පටිගත කිරීම සමග ක්‍රියාත්මකයි.?',
    howto:
      ' ඩෑෂ් කැමරාව එහි ශබ්ද පටිගත කිරීම සමග ක්‍රියාත්මකද  සහ ඒය සැමවිටම විසන්ධි කල නොහැකි වන සේ සවිකර ඇත්තැයි පරික්ෂා කරන්න.',
    accept: ' ඉහත සියල්ල හොදින් සවිකර ඩෑෂ් කැමරාව ක්‍රියාත්මක තත්වයේ පවතී නම්.',
  },
  {
    id: 6,
    name: 'seatBeltCheck',
    question: ' රියදුරු පැත්තේ / සහායක පැත්තේ ආසන පටි ක්‍රීයා කරයි.?',
    howto: ' ආසන පටි පඑදු වී නොමැති හොදින් ක්‍රියාත්මක වන බව තහවුරු කර ගන්න.',
    accept: 'ආසන පටි හොඳින් ක්‍රියාත්මකයි.',
  },
  {
    id: 7,
    name: 'airPressureGaugeCheck',
    question: 'වායු පීඩන මීටරය හොඳින් ක්‍රියාත්මකද?',
    howto:
      'වායු පීඩන මීටරය පීඩන අගය පරීක්ෂා කරන්න වායු පීඩන මීටරය බාර් 6-9 අතර අගයක පවතීද.',
    accept: 'වායු පීඩන මීටරය හොඳින් ක්‍රියා කරයි.',
  },
  {
    id: 8,
    name: 'frontGlassCheck',
    question: 'ඉදිරිපස වීදුරුවේ තත්ත්වය හොඳයිද?',
    howto:
      ' ඉදිරිපස වීදුරුවේ ඉරිතැලීම් රියදුරුට ඉදිරිය දර්ශණය නොවන ආකාරයට සහ අනාරක්ෂිත ලෙස පවතීද /රියදුරුට අපැහැදිලි වන පරිදි වීදුරුවේ හෝ (වින්ඩ්ශීල්ඩ්) ආසන්නයේ කිසිවක් එල්ලා තිබේද යන්න පරික්ෂා කරන්න.',
    accept: ' ආරක්ෂිත වීදුරුව සහ අනාරක්ෂිත ලෙස යම් යම් දේ එල්ලා නොමැත.',
  },
  {
    id: 9,
    name: 'mirrorCheck',
    question: 'අවශ්‍ය දර්පණ ප්‍රමාණයන් තිබේද?',
    howto:
      ' කෙටි සහ දුර බැලීම සදහා වම් පස සහ දකුණු පස කණ්නාඩි (04 ක් | එක පැත්තකට දෙක බැගින් ) ඇති ද යන්න / මගී පැත්තේ ඉහළ කණ්නාඩියක් ඇතිද යන්න /ඉදිරිපස කොටස පෙනෙන රවුම් කණ්නාඩියක් ඇතිද යන්න සහ ඉහත කණ්නාඩි බිදී තිබේද යන්න පරික්ෂා කරන්න.',
    accept: 'ඉහත කණ්නාඩි සියල්ල සහිත සහ ඒවා හොද තත්වයෙන් පඑදු වී නොමැතිව පවතී.',
  },
  {
    id: 10,
    name: 'brakeSystemCheck',
    question: 'බ්‍රේක් පද්ධතිය හොඳින් ක්‍රියාකරයිද?',
    howto: 'බ්‍රේක් සහ පාකින් බ්‍රේක් පරීක්ෂා කරන්න.',
    accept: 'බ්‍රේක් පද්ධතිය හොඳින් ක්‍රියා කරයි.',
  },
  {
    id: 11,
    name: 'firstAidKitCheck',
    question: 'ප්‍රථමාධාර පෙට්ටිය සහ උපාංග තිබේද?',
    howto:
      ' ප්‍රථමාධාර පෙට්ටිය  කපු පුළුන්,ගෝස්,පැරසිටමෝල්,වෙළුම් පටි,ප්ලාස්ටර්,සර්ජිකල් ස්ප්‍රිට්,කතුරක්, ශල්ය අත්වැසුම්, බෙටාඩින්,සහ සිද්ධාලේප යන දේ අඩංගු සහ ඒවා සියල්ල කල් ඉකුත් වී නොමැතිද යන්න පරික්ෂා කරන්න.',
    accept:
      ' ප්‍රථමාධාර පෙට්ටියේ ඉහත කී සියල්ල අඩංගු වන අතර ඒවා කල් ඉකුත් වී නොමැත.',
  },
  {
    id: 12,
    name: 'fireExtinguisherCheck',
    question: 'ගිනි නිවන උපකරණවල තත්ත්වය හොඳද?',
    howto:
      ' ගිනි නිවන උපකරණය කල් ඉකුත් වී නොමැති ද / ගිනි නිවන උපකරණවල පීඩනය කොළ මට්ටමේ නොමැතිද / එහි නියමිත බර පවතීද යන්න පරික්ෂා කරන්න.',
    accept:
      'ගිනි නිවන උපකරණය කල් ඉකුත් වී නොමැති නියමිත පීඩනය මට්ටමේ පවතින ( කොළ ) නියමිත බර සහිතව ඇත.',
  },
  {
    id: 13,
    name: 'emergencyEquipmentCheck',
    question: 'හදිසි අවස්ථාව සඳහා උපකරණ හොඳ තත්ත්වයෙන් පවතීද?',
    howto:
      ' ආරක්ෂිත කේතූන් (කෝන්) හෝ ආරක්ෂිත ත්‍රිකෝණ දෙකක් / ආරක්ෂිත හිස්වැසුම් දෙකක් /  ආරක්ෂිත ඇස් ආවරණ දෙකක් /ආරක්ෂිත පාආවරණ දෙකක් /  ලුමිනස් ජැකට් හෝ පාරාවර්තික ඇදුම් දෙකක් / ජැක් සහ වීල් බ්‍රෂ් /වීල් චෝක්ස් දෙකක් / අයි වොෂ් එකක් යන උපකරණ සියල්ල හොද තත්වයෙන් පවතී ද යන්න පරික්ෂා කරන්න.',
    accept: 'ආරක්ෂිත උපකරණ හොඳ තත්වයෙන් ඇත.',
  },
  {
    id: 14,
    name: 'lightingSystemCheck',
    question: 'වාහනයේ ආලෝක සංඥා සියල්ල ක්‍රියාකරයිද?',
    howto:
      ' හෙඩ් ලයිට් | ඩිම් ලයිට් | පාකින් ලයිට් | රිවස් ලයිට්  |  තිරිංග ලයිට් | සිග්නල් ලයිට් | රිවස් එලාම් සහ කැබින් හි පැති ලයිට් සියල්ල යන සියඑම ආලෝක උපාංග පරික්ෂා කරන්න.',
    accept: ' ඉහත සියඑම ආලෝක උපාංග හොඳ තත්වයේ පවතී.',
  },
  {
    id: 15,
    name: 'tireConditionCheck',
    question: 'ටයර් සහ රිම්වල තත්ත්වය හොඳයිද?',
    howto:
      ' ටයර් හොඳ තත්වයේ පවතීද ගෙවී ගොස් ඇතිද ( 2 mm වැඩි කට්ට සහිත ), රිම් හොද තත්වයේ පවතීද, ටයරය සවිකරන නට් හොදින් සහ තදින් සවිකර පවතී ද, අමතර ටයරය හොද තත්වයේ පවතීද, යන්න පරික්ෂා කරන්න.',
    accept:
      ' ඉහත සියඑම ටයර් රිම් සහ අමතර ටයරය හොද තත්වයෙන් පැවතීම. සහ ටයර් නට් හොදින් සවිකර තිබීම.',
  },
  {
    id: 16,
    name: 'truckBodyConditionCheck',
    question: 'ට්‍රක් / ට්‍රේලර බඳේ තත්ත්වය හොඳයිද?',
    howto:
      ' ට්‍රක් ට්‍රේලරය හෝ වාහනයේ බඳ හානිවලින් හා විඛාදනය වී නැතිද , කාන්දු වීම් නොමැතිද . ට්‍රක් ට්‍රේලරයේ හෝ වාහනයේ පසුපස කොටස ආරක්‍ෂිතව හොද තත්වයෙන් පවතීද. ට්‍රක් ට්‍රේලරය හෝ වාහන බදෙහි පවතින ආලෝක උපාංග හොදින් ක්‍රියාත්මකද, ට්‍රක් ට්‍රේලරය හෝ වාහන බදෙහි යම් යම් දේ අනාරක්ෂිතව එල්ලා ඇතිද වාහනයේ අංක තහඩු හොද තත්වයේ පවතීද යන්න හොදින් පරික්ෂා කරන්න.',
    accept:
      ' ට්‍රක් ට්‍රේලරය හෝ වාහනයේ බඳ කොටස ඉහත කී කරුණු වලින් ආරක්ෂිතව හොද තත්වයෙන් පවතී.',
  },
  {
    id: 17,
    name: 'visibilityEnhancementCheck',
    question: 'දෘශ්‍යතාව වැඩි දියුණු කිරීම සඳහා සළසා ඇති පහසුකම්?',
    howto:
      ' දෘශ්‍යතාව වැඩි දියුණු කිරීම සඳහා කැබින් ට්‍රක් කොටස , ට්‍රේලර කොටස හා එලියට නිරාවරණය ලෙස පවතින සෑම කොටසකම පරාවර්තිත ස්ටිකර් යොදා තිබේද , ඉන්සී පරාවර්තික රෙද්ද හොද තත්වයේ පවතීද යන්න හොදින් පරික්ෂා කරන්න.',
    accept:
      'වාහනය පරාවර්තිත ස්ටිකර් යොදා ඇති අතර ඉන්සී පරාවර්තික රෙද්ද හොද තත්වයේ ඇත.',
  },
  {
    id: 18,
    name: 'mechanicalConditionCheck',
    question: 'වාහනයේ යාන්ත්‍රික තත්ත්වය හොඳින් පවතීද?',
    howto:
      ' එන්ජිම සාමාන්‍ය පනගැන්වීම / අසාමාන්‍ය ශබ්ද නැත, එන්ජිම (පටි තත්වය /රේඩියේටර් තත්වය) හොදින් ක්‍රියාත්මකයි. එන්ජින් ඔයිල් බ්රේක් ඔයිල් නියමිත මට්ටම් වල පවතී සහ නියමිත වේලාවන් හි නැවත පුරවා ඇත, සුක්කානම හොද තත්වයෙන් ඇත, කිසිම තෙල් කාන්දුවක් නොමැත. බැටරියේ ධන අග්‍රය හොදින් අවාරණය කර ඇත, යන කරුණු  හොදින් පරික්ෂා කරන්න.',
    accept:
      'වාහනයේ එන්ජිම සහ ක්‍රියාකාරීත්වය හොදින් පවත්වා ගැනීම සහ නියමිත වෙලාවන් හිදී සියඑ පරික්ෂා කිරීම් සිදු කිරීම කර ඇත.',
  },
  {
    id: 19,
    name: 'mixerPressureSystemCheck',
    question: 'මික්සර් / බල්කර් පීඩන පද්ධතිය ක්‍රියාත්මක වේද?',
    howto:
      ' පීඩන මාපකය සහ පීඩන අගය, සේෆ්ටි වෑල්වල ක්‍රියාකාරීත්වය සහ පුඑදු වීම් ඇතිද දිරාපත් වීම් ඇතිද යන්න පරික්ෂා කරන්න. නියමිත පීඩන අගය සහ සේෆ්ටි වෑල්වල ක්‍රියාකාරීත්වය සම්බන්ධයෙන් කම්කරු දෙපාර්තමේන්තුව අනුමත කල අයකු පරික්ෂා කර නිකුත් කරන ලද සහතිකය වලංගු තත්වයේ පවතීද යන්න පරික්ෂා කරන්න.',
    accept:
      'මික්සර් සහ බල්කර් යන්ත්‍ර වල හොදින් ක්‍රියාත්මක වන පීඩන පද්ධතිය සහ ඒ සමබන්ධයෙන් වන සහතිකයන් වලංගු තත්වයෙන් පැවතීම.',
  },
  {
    id: 20,
    name: 'mixerAccessoriesCheck',
    question: 'මික්සර් / බල්කර් උපාංග හොඳ තත්වයෙන් පවතීද?',
    howto:
      ' පම්ප් කරන උපාංග වල තත්වය, ආරක්ෂක උපාංග වල ක්‍රියාකාරීත්වය,ඉහලට නැගීමට ඇති ඉනිමං, ඉහළ මූඩි වල තත්වය, ඒවා සවිකරන ඇන වල තත්වය සහ එවායේ ක්‍රියාකාරීතක්වය හොදින් පරික්ෂා කරන්න. යම් යම් පුඑදු වීම් ඇතිද දිරාපත් වීම් ඇතිද, ඇන වැනි දේ මළ බැදී ඇතිද යන්න පරික්ෂා කරන්න.',
    accept: ' මික්සර් සහ බල්කර් යන්ත්‍ර වල සියඑම උපාංග හොද තත්වයෙන් පවතී.',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'දිනය Date' },
  { field: 'email', label: 'වගකීම භාරකරු Responsible person' },
  { field: 'inspector', label: 'පරීක්ෂක / Inspector' },
  { field: 'responder', label: 'ප්‍රතිචාරකයා Responder' },
  {
    field: 'vehicleLicenseCheck',
    label: '1. වාහනයේ බලපත්‍ර කල් ඉකුත් වී නොමැත? *',
  },
  { field: 'vehicleLicenseCheckR', label: '' },
  { field: 'vehicleLicenseCheckP', label: '' },
  {
    field: 'vehicleLicenseCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'vehicleLicenseCheckF', label: '' },
  {
    field: 'driverCertCheck',
    label: '2. රියදුරු සහතිකයන් කල් ඉකුත් වී නොමැත? *',
  },
  { field: 'driverCertCheckR', label: '' },
  { field: 'driverCertCheckP', label: '' },
  {
    field: 'driverCertCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'driverCertCheckF', label: '' },
  {
    field: 'assistantCertCheck',
    label: '3. සහායක සහතිකයන් කල් ඉකුත් වී නොමැත? *',
  },
  { field: 'assistantCertCheckR', label: '' },
  { field: 'assistantCertCheckP', label: '' },
  {
    field: 'assistantCertCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'assistantCertCheckF', label: '' },
  {
    field: 'interiorConditionCheck',
    label: '4. වාහනයේ අභ්‍යන්තර තත්ත්වය හොඳයිද? *',
  },
  { field: 'interiorConditionCheckR', label: '' },
  { field: 'interiorConditionCheckP', label: '' },
  {
    field: 'interiorConditionCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'interiorConditionCheckF', label: '' },
  {
    field: 'dashCamCheck',
    label: '5. ඩෑෂ් කැමරාව සහ ශබ්ද පටිගත කිරීම ක්‍රියාත්මකයිද? *',
  },
  { field: 'dashCamCheckR', label: '' },
  { field: 'dashCamCheckP', label: '' },
  {
    field: 'dashCamCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'dashCamCheckF', label: '' },
  {
    field: 'seatBeltCheck',
    label: '6. ආසන පටි ක්‍රියාත්මකයිද? *',
  },
  { field: 'seatBeltCheckR', label: '' },
  { field: 'seatBeltCheckP', label: '' },
  {
    field: 'seatBeltCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'seatBeltCheckF', label: '' },
  {
    field: 'airPressureGaugeCheck',
    label: '7. වායු පීඩන මීටරය ක්‍රියාත්මකයිද? *',
  },
  { field: 'airPressureGaugeCheckR', label: '' },
  { field: 'airPressureGaugeCheckP', label: '' },
  {
    field: 'airPressureGaugeCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'airPressureGaugeCheckF', label: '' },
  {
    field: 'frontGlassCheck',
    label: '8. ඉදිරිපස වීදුරුවේ තත්ත්වය හොඳයිද? *',
  },
  { field: 'frontGlassCheckR', label: '' },
  { field: 'frontGlassCheckP', label: '' },
  {
    field: 'frontGlassCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'frontGlassCheckF', label: '' },
  {
    field: 'mirrorCheck',
    label: '9. පැති කන්නාඩි හොඳ තත්ත්වයේද? *',
  },
  { field: 'mirrorCheckR', label: '' },
  { field: 'mirrorCheckP', label: '' },
  {
    field: 'mirrorCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'mirrorCheckF', label: '' },
  {
    field: 'brakeSystemCheck',
    label: '10. බ්‍රේක් පද්ධතිය ක්‍රියාකරයිද? *',
  },
  { field: 'brakeSystemCheckR', label: '' },
  { field: 'brakeSystemCheckP', label: '' },
  {
    field: 'brakeSystemCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'brakeSystemCheckF', label: '' },
  {
    field: 'firstAidKitCheck',
    label: '11. ප්‍රථමාධාර පෙට්ටිය හොඳ තත්ත්වයේද? *',
  },
  { field: 'firstAidKitCheckR', label: '' },
  { field: 'firstAidKitCheckP', label: '' },
  {
    field: 'firstAidKitCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'firstAidKitCheckF', label: '' },
  {
    field: 'fireExtinguisherCheck',
    label: '12. ගිනි නිවන උපකරණ හොඳ තත්ත්වයේද? *',
  },
  { field: 'fireExtinguisherCheckR', label: '' },
  { field: 'fireExtinguisherCheckP', label: '' },
  {
    field: 'fireExtinguisherCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'fireExtinguisherCheckF', label: '' },
  {
    field: 'emergencyEquipmentCheck',
    label: '13. හදිසි අවස්ථාව සඳහා උපකරණ හොඳ තත්ත්වයෙන් පවතීද? *',
  },
  { field: 'emergencyEquipmentCheckR', label: '' },
  { field: 'emergencyEquipmentCheckP', label: '' },
  {
    field: 'emergencyEquipmentCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'emergencyEquipmentCheckF', label: '' },
  {
    field: 'lightingSystemCheck',
    label: '14. වාහනයේ ආලෝක සංඥා සියල්ල ක්‍රියාකරයිද? *',
  },
  { field: 'lightingSystemCheckR', label: '' },
  { field: 'lightingSystemCheckP', label: '' },
  {
    field: 'lightingSystemCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'lightingSystemCheckF', label: '' },
  {
    field: 'tireConditionCheck',
    label: '15. ටයර් සහ රිම්වල තත්ත්වය හොඳයිද? *',
  },
  { field: 'tireConditionCheckR', label: '' },
  { field: 'tireConditionCheckP', label: '' },
  {
    field: 'tireConditionCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'tireConditionCheckF', label: '' },
  {
    field: 'truckBodyConditionCheck',
    label: '16. ට්‍රක් / ට්‍රේලර බඳේ තත්ත්වය හොඳයිද? *',
  },
  { field: 'truckBodyConditionCheckR', label: '' },
  { field: 'truckBodyConditionCheckP', label: '' },
  {
    field: 'truckBodyConditionCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'truckBodyConditionCheckF', label: '' },
  {
    field: 'visibilityEnhancementCheck',
    label: '17. දෘශ්‍යතාව වැඩි දියුණු කිරීම සඳහා යොදා ඇති උපකරණ හොඳයිද? *',
  },
  { field: 'visibilityEnhancementCheckR', label: '' },
  { field: 'visibilityEnhancementCheckP', label: '' },
  {
    field: 'visibilityEnhancementCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'visibilityEnhancementCheckF', label: '' },
  {
    field: 'mechanicalConditionCheck',
    label: '18. වාහනයේ යාන්ත්‍රික තත්ත්වය හොඳින් පවතීද? *',
  },
  { field: 'mechanicalConditionCheckR', label: '' },
  { field: 'mechanicalConditionCheckP', label: '' },
  {
    field: 'mechanicalConditionCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'mechanicalConditionCheckF', label: '' },
  {
    field: 'mixerPressureSystemCheck',
    label: '19. මික්සර් / බල්කර් පීඩන පද්ධතිය ක්‍රියාත්මක වේද? *',
  },
  { field: 'mixerPressureSystemCheckR', label: '' },
  { field: 'mixerPressureSystemCheckP', label: '' },
  {
    field: 'mixerPressureSystemCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'mixerPressureSystemCheckF', label: '' },
  {
    field: 'mixerAccessoriesCheck',
    label: '20. මික්සර් / බල්කර් උපාංග හොඳ තත්වයෙන් පවතීද? *',
  },
  { field: 'mixerAccessoriesCheckR', label: '' },
  { field: 'mixerAccessoriesCheckP', label: '' },
  {
    field: 'mixerAccessoriesCheckA',
    label: 'දෝෂයට ප්‍රතිචාරය දක්වන්න Respond to defect',
  },
  { field: 'mixerAccessoriesCheckF', label: '' },
  { field: 'remark', label: 'සටහන Remark' },
  { field: 'url', label: '' },
  { field: 'lat', label: '' },
];
