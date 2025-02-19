export const questions = [
  {
    id: 1,
    name: 'radiatorLevel',
    question: 'Radiator Level (রেডিয়েটর স্তর)',
    howto: 'দৃষ্টিগত / স্পর্শ পরীক্ষা',
    accept: 'স্তর সঠিক এবং ব্যাপ্তি নেই',
  },
  {
    id: 2,
    name: 'batteryWaterLevel',
    question: 'Battery Water Level (ব্যাটারি জল স্তর)',
    howto: 'দৃষ্টিগত / স্পর্শ পরীক্ষা',
    accept: 'স্তর সঠিক এবং ব্যাপ্তি নেই',
  },
  {
    id: 3,
    name: 'seatAndFixings',
    question: 'Seat & Fixings (আসন এবং ফিক্সিং)',
    howto: 'দৃষ্টিগত / স্পর্শ পরীক্ষা',
    accept: 'সঠিক এবং বিচ্ছিন্ন',
  },
];

export const detailFields = [
  { field: 'id', label: 'ID' },
  { field: 'date', label: 'তারিখঃ - Date' },
  { field: 'inspector', label: 'পরিদর্শক - Inspector' },
  { field: 'responder', label: 'Responder' },
  {
    field: 'radiatorLevel',
    label: '1 Radiator Level (রেডিয়েটর স্তর)',
  },
  { field: 'radiatorLevelR', label: '' },
  { field: 'radiatorLevelP', label: '' },
  { field: 'radiatorLevelA', label: 'Respond to defect' },
  { field: 'radiatorLevelF', label: '' },

  {
    field: 'batteryWaterLevel',
    label: '2 Battery Water Level (ব্যাটারি জল স্তর)',
  },
  { field: 'batteryWaterLevelR', label: '' },
  { field: 'batteryWaterLevelP', label: '' },
  { field: 'batteryWaterLevelA', label: 'Respond to defect' },
  { field: 'batteryWaterLevelF', label: '' },

  { field: 'seatAndFixings', label: '3 Seat & Fixings (আসন এবং ফিক্সিং)' },
  { field: 'seatAndFixingsR', label: '' },
  { field: 'seatAndFixingsP', label: '' },
  { field: 'seatAndFixingsA', label: 'Respond to defect' },
  { field: 'seatAndFixingsF', label: '' },

  { field: 'seatBelt', label: '4 Seat Belt (সীট বেল্ট)' },
  { field: 'seatBeltR', label: '' },
  { field: 'seatBeltP', label: '' },
  { field: 'seatBeltA', label: 'Respond to defect' },
  { field: 'seatBeltF', label: '' },

  { field: 'fuelLevel2', label: '5 Fuel Level (জ্বালানী স্তর)' },
  { field: 'fuelLevel2R', label: '' },
  { field: 'fuelLevel2P', label: '' },
  { field: 'fuelLevel2A', label: 'Respond to defect' },
  { field: 'fuelLevel2F', label: '' },

  { field: 'brakeLevel', label: '6 Brake Level (ব্রেক লেভেল)' },
  { field: 'brakeLevelR', label: '' },
  { field: 'brakeLevelP', label: '' },
  { field: 'brakeLevelA', label: 'Respond to defect' },
  { field: 'brakeLevelF', label: '' },

  {
    field: 'hydraulicOilLevel',
    label: '7 Hydraulic Oil Level (হাইড্রোলিক তেলের স্তর)',
  },
  { field: 'hydraulicOilLevelR', label: '' },
  { field: 'hydraulicOilLevelP', label: '' },
  { field: 'hydraulicOilLevelA', label: 'Respond to defect' },
  { field: 'hydraulicOilLevelF', label: '' },

  { field: 'fuelFilter', label: '8 Fuel Filter (ফুয়েল ফিল্টার)' },
  { field: 'fuelFilterR', label: '' },
  { field: 'fuelFilterP', label: '' },
  { field: 'fuelFilterA', label: 'Respond to defect' },
  { field: 'fuelFilterF', label: '' },

  {
    field: 'hydraulicHosesAndCylinder',
    label:
      '9 Hydraulic Hoses, Unions, Cylinder etc. for Leaks or Damage (হাইড্রোলিক হোসেস, সংযুক্ত অবস্থা, সিলিন্ডার ই টি সি. লিক বা ক্ষতির জন্য)',
  },
  { field: 'hydraulicHosesAndCylinderR', label: '' },
  { field: 'hydraulicHosesAndCylinderP', label: '' },
  { field: 'hydraulicHosesAndCylinderA', label: 'Respond to defect' },
  { field: 'hydraulicHosesAndCylinderF', label: '' },

  {
    field: 'engineComponents',
    label:
      '10 Engine Components for Fuel or Oil Leaks (জ্বালানী বা তেল লিক এর জন্য ইঞ্জিন উপাদান)',
  },
  { field: 'engineComponentsR', label: '' },
  { field: 'engineComponentsP', label: '' },
  { field: 'engineComponentsA', label: 'Respond to defect' },
  { field: 'engineComponentsF', label: '' },

  {
    field: 'tyresForWearDamage',
    label: '11 Tyres for Wear Damage (টায়ার ক্ষয়)',
  },
  { field: 'tyresForWearDamageR', label: '' },
  { field: 'tyresForWearDamageP', label: '' },
  { field: 'tyresForWearDamageA', label: 'Respond to defect' },
  { field: 'tyresForWearDamageF', label: '' },

  {
    field: 'visualCheckForStudsAndNuts',
    label:
      '12 Visual Check where Stud and Nuts in Place and Secure (if loose or missing call repairer) (চক্ষুস দেখুন যেখানে নাট বোল্ড থাকার কথা সেখানে সুরক্ষিত আছে কিনা) (যদি লুস অথবা অনুপস্থিত থাকে তাহলে মেরামত করান)',
  },
  { field: 'visualCheckForStudsAndNutsR', label: '' },
  { field: 'visualCheckForStudsAndNutsP', label: '' },
  { field: 'visualCheckForStudsAndNutsA', label: 'Respond to defect' },
  { field: 'visualCheckForStudsAndNutsF', label: '' },

  {
    field: 'overheadGuardAndTruckBody',
    label:
      '13 Overhead Guard, Truck Body for Structural Damage (ওভারহেড গার্ড, ট্রাক বডি ফর স্ট্রাকচারাল ড্যামেজ)',
  },
  { field: 'overheadGuardAndTruckBodyR', label: '' },
  { field: 'overheadGuardAndTruckBodyP', label: '' },
  { field: 'overheadGuardAndTruckBodyA', label: 'Respond to defect' },
  { field: 'overheadGuardAndTruckBodyF', label: '' },

  { field: 'brakesHandFoot', label: '14 Brakes – Hand/Foot (ব্রেক – পা/ হাত)' },
  { field: 'brakesHandFootR', label: '' },
  { field: 'brakesHandFootP', label: '' },
  { field: 'brakesHandFootA', label: 'Respond to defect' },
  { field: 'brakesHandFootF', label: '' },

  {
    field: 'transmissionForwardReverse',
    label:
      '15 Transmission – Forward/Reverse Positive Movement (চালান – সামনে/ পিছনে) পসিটিভ মুভমেন্ট',
  },
  { field: 'transmissionForwardReverseR', label: '' },
  { field: 'transmissionForwardReverseP', label: '' },
  { field: 'transmissionForwardReverseA', label: 'Respond to defect' },
  { field: 'transmissionForwardReverseF', label: '' },

  { field: 'steering', label: '16 Steering (স্টিয়ারিং)' },
  { field: 'steeringR', label: '' },
  { field: 'steeringP', label: '' },
  { field: 'steeringA', label: 'Respond to defect' },
  { field: 'steeringF', label: '' },

  { field: 'gauges', label: '17 Gauges (গেজ)' },
  { field: 'gaugesR', label: '' },
  { field: 'gaugesP', label: '' },
  { field: 'gaugesA', label: 'Respond to defect' },
  { field: 'gaugesF', label: '' },

  {
    field: 'controlsTiltLift',
    label: '18 Controls – Tilt/Lift (নিয়ন্ত্রণ – কাত/ উঁচু)',
  },
  { field: 'controlsTiltLiftR', label: '' },
  { field: 'controlsTiltLiftP', label: '' },
  { field: 'controlsTiltLiftA', label: 'Respond to defect' },
  { field: 'controlsTiltLiftF', label: '' },

  {
    field: 'warningDevices',
    label:
      '19 Warning Devices (horn, flashing lights, reversing beepers, indicators, head lights, reverse lights) (সতর্কতা ডিভাইস) (হর্ন, ফ্লাশিং লাইটস, রিভার্সিং বীপার্স, ইন্ডিকেটর, হেড লাইটস, রিভার্স লাইটস)',
  },
  { field: 'warningDevicesR', label: '' },
  { field: 'warningDevicesP', label: '' },
  { field: 'warningDevicesA', label: 'Respond to defect' },
  { field: 'warningDevicesF', label: '' },
  { field: 'remark', label: 'মন্তব্য - Remark' },
  { field: 'lat', label: '' },
  { field: 'url', label: '' },
];
