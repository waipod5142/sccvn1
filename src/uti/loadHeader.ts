export const loadHeader = async (bu: string | undefined | null) => {
  const key = `${bu}`;
  let headerFields;

  switch (key) {
    case 'vn':
      headerFields = [
        { field: 'id', label: 'Mã số thiết bị' },
        { field: 'type', label: 'Loại Type' },
        { field: 'swl', label: 'Tải trọng LV an toàn (SWL) (Ton)' },
        {
          field: 'latestInspection',
          label: 'Ngày kiểm định gần nhất Latest Inspection 3rd Party',
        },
        { field: 'kind', label: 'Loại máy nâng Kind of Lifting' },
        { field: 'esite', label: 'Trang web Equipment Site' },
        { field: 'site', label: 'Site' },
        { field: 'bu', label: 'Đơn vị kinh doanh Business Unit (BU)' },
        { field: 'cableDiameter', label: 'Đường kính cáp Cable Diameter (mm)' },
        { field: 'area', label: 'Khu vực Area' },
        { field: 'department', label: 'Phòng ban Department' },
        { field: 'owner', label: 'Chủ sở hữu Owner' },
        { field: 'type', label: 'Loại Type' },
        { field: 'email', label: 'Responsible person' },
      ];
      break;

    case 'lk':
      headerFields = [
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
          label:
            'ව්‍යාපෘතික කේබල් විෂ්කම්භය Cable diameter actual measure (mm)',
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
      break;

    case 'bd':
      headerFields = [
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
          label:
            'ව්‍යාපෘතික කේබල් විෂ්කම්භය Cable diameter actual measure (mm)',
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
      break;

    case 'cmic':
      headerFields = [
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
          label:
            'ව්‍යාපෘතික කේබල් විෂ්කම්භය Cable diameter actual measure (mm)',
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
      break;

    case 'th':
      headerFields = [
        { field: 'id', label: 'ID' },
        { field: 'type', label: 'Type' },
        { field: 'responsibility', label: 'Responsible By' },
        { field: 'registerDate', label: 'RegistrationDate' },
        { field: 'bu', label: 'BU' },
        { field: 'brand', label: 'Brand' },
        { field: 'capacity', label: 'Capacity' },
        { field: 'engineNo', label: 'Engine No' },
        { field: 'status', label: 'Status' },
        { field: 'no', label: 'No' },
        { field: 'model', label: 'Model' },
        { field: 'holder', label: 'Holder' },
        { field: 'horsepower', label: 'Hose Power' },
        { field: 'expDate', label: 'Expire Date' },
        { field: 'sub_bu', label: 'Sub BU' },
      ];
      break;

    default:
      throw new Error('Unknown bu');
  }

  return headerFields;
};
