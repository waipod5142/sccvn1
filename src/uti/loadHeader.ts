export const loadHeader = async (bu: string | undefined | null) => {
  const key = `${bu}`;
  let headerFields;

  switch (key) {
    case 'jkcement':
      headerFields = [
        { field: 'id', label: 'Equipment ID' },
        { field: 'type', label: 'Type' },
        { field: 'swl', label: 'Safe Working Load (SWL) (Ton)' },
        { field: 'latestInspection', label: 'Latest Inspection (3rd Party)' },
        { field: 'kind', label: 'Kind of Lifting Equipment' },
        { field: 'esite', label: 'Equipment Site' },
        { field: 'site', label: 'Site' },
        { field: 'bu', label: 'Business Unit (BU)' },
        { field: 'cableDiameter', label: 'Cable Diameter (mm)' },
        { field: 'area', label: 'Area' },
        { field: 'department', label: 'Department' },
        { field: 'place', label: 'Place' },
        { field: 'name', label: 'Name' },
        { field: 'owner', label: 'Owner' },
        { field: 'type', label: 'Type' }, // This field is duplicated, consider removing one
        { field: 'email', label: 'Responsible Person' },
      ];

      break;
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
        { field: 'place', label: 'Phòng ban Place' },
        { field: 'name', label: 'Phòng ban Name' },
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
        { field: 'owner', label: 'Owner' },
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
        { field: 'id', label: 'যন্ত্রপাতি নম্বর' }, // Equipment ID
        { field: 'site', label: 'সাইট' }, // Site
        { field: 'kind', label: 'উত্তোলন প্রকার' }, // Kind of Lifting
        { field: 'area', label: 'এলাকা' }, // Area
        { field: 'owner', label: 'মালিক' }, // Owner
        { field: 'swl', label: 'নিরাপদ কাজের ওজন (SWL) (টন)' }, // Safe Working Load (SWL) (Ton)
        { field: 'operateBy', label: 'পরিচালিত ব্যক্তি' }, // Operated By
        {
          field: 'latestInspection',
          label: 'সর্বশেষ পরিদর্শন (তৃতীয় পক্ষ)',
        }, // Latest Inspection (3rd Party)
        {
          field: 'nextInspection',
          label: 'পরবর্তী পরিদর্শন (তৃতীয় পক্ষ)',
        }, // Next Inspection (3rd Party)
        {
          field: 'installDiameter',
          label: 'ইনস্টল করা কেবলের ব্যাস (মিমি)', // Cable Diameter Installing (mm)
        },
        {
          field: 'actualDiameter',
          label: 'পরিমাপিত কেবলের আসল ব্যাস (মিমি)', // Cable Diameter Actual Measure (mm)
        },
        { field: 'tolerance', label: 'সহনশীলতা (মিমি)' }, // Tolerance (mm)
        { field: 'result', label: 'ফলাফল' }, // Result
        {
          field: 'internalInspector',
          label: 'অভ্যন্তরীণ পরিদর্শক', // Internal Inspector
        },
        { field: 'remarks', label: 'মন্তব্য' }, // Remarks
        { field: 'owner', label: 'মালিক' }, // Owner
        { field: 'no', label: 'নম্বর' }, // No
        { field: 'etype', label: 'উপকরণের প্রকার' }, // Equipment Type
        { field: 'esite', label: 'উপকরণের সাইট' }, // Equipment Site
        { field: 'place', label: 'জায়গা' }, // Place
        { field: 'location', label: 'অবস্থান' }, // Location
        { field: 'type', label: 'প্রকার' }, // Type
        { field: 'cableDiameter', label: 'কেবলের ব্যাস (মিমি)' }, // Cable Diameter (mm)
        { field: 'email', label: 'দায়িত্বপ্রাপ্ত ব্যক্তি' }, // Responsible Person
      ];
      break;

    case 'cmic':
      headerFields = [
        { field: 'id', label: 'លេខឧបករណ៍' },
        { field: 'country', label: 'ប្រទេស Country' },
        { field: 'details', label: 'ព័ត៌មាន Details' },
        { field: 'department', label: 'ផ្នែក Department' },
        { field: 'owner', label: 'ម្ចាស់ Owner' },
        { field: 'kind', label: 'ប្រភេទ Kind' },
        { field: 'remark', label: 'ចំណាំ Remark' },
        { field: 'status', label: 'ស្ថានភាព Status' },
        { field: 'type', label: 'ប្រភេទ Type' },
        { field: 'area', label: 'តំបន់ Area' },
        { field: 'site', label: 'តំបន់ Site' },
        { field: 'holder', label: 'អ្នកកាន់កាប់ Holder' },
        { field: 'bu', label: 'អង្គភាព BU' },
      ];
      break;

    case 'th':
      headerFields = [
        { field: 'id', label: 'ID' },
        { field: 'bu', label: 'BU' },
        { field: 'type', label: 'Type' },
        { field: 'site', label: 'Site' },
        { field: 'country', label: 'Country' },
        { field: 'driverID', label: 'Driver ID' },
        { field: 'capacity', label: 'Capacity' },
        { field: 'companyID', label: 'Company ID' },
        { field: 'company', label: 'Company' },
        { field: 'owner', label: 'Owner' },
        { field: 'registerDate', label: 'Register Date' },
        { field: 'area', label: 'Area' },
        { field: 'licenseID', label: 'License ID' },
        { field: 'engineNo', label: 'Engine Number' },
        { field: 'remark', label: 'Remark' },
        { field: 'details', label: 'Details' },
        { field: 'holder', label: 'Holder' },
        { field: 'email', label: 'E-mail' },
        { field: 'status', label: 'Status' },
      ];
      break;

    default:
      throw new Error('Unknown bu');
  }

  return headerFields;
};
