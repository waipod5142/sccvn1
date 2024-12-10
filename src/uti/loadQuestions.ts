export const loadQuestions = async (
  bu: string | undefined | null,
  machine: string | undefined | null
) => {
  const key = `${bu}_${machine}`;

  switch (key) {
    case 'vn_Lifting':
      return import('@/lib/dataLifting');
    case 'vn_Extinguisher':
      return import('@/lib/dataExtinguisher');
    case 'vn_Hydrant':
      return import('@/lib/dataHydrant');
    case 'vn_Foam':
      return import('@/lib/dataFoam');
    case 'vn_Pump':
      return import('@/lib/dataPump');
    case 'vn_Valve':
      return import('@/lib/dataValve');
    case 'vn_Forklift':
      return import('@/lib/dataForklift');
    case 'vn_Mobile':
      return import('@/lib/dataMobile');
    case 'vn_Vehicle':
      return import('@/lib/dataVehicle');
    case 'vn_Harness':
      return import('@/lib/dataHarness');
    case 'vn_Portable':
      return import('@/lib/dataPortable');
    case 'vn_Lifeline':
      return import('@/lib/dataLifeline');
    case 'vn_Lifering':
      return import('@/lib/dataLifering');
    case 'vn_Lifevest':
      return import('@/lib/dataLifevest');
    case 'vn_Welding':
      return import('@/lib/dataWelding');
    case 'vn_Cable':
      return import('@/lib/dataCable');
    case 'vn_Fan':
      return import('@/lib/dataFan');
    case 'vn_Light':
      return import('@/lib/dataLight');
    case 'vn_Cctv':
      return import('@/lib/dataCctv');
    case 'vn_Equipment':
      return import('@/lib/dataEquipment');
    case 'vn_Rescue':
      return import('@/lib/dataRescue');
    case 'vn_Socket':
      return import('@/lib/dataSocket');
    case 'vn_Electric':
      return import('@/lib/dataElectric');
    case 'vn_Electrical':
      return import('@/lib/dataElectrical');
    case 'vn_Slope':
      return import('@/lib/dataVNslope');
    //LK
    case 'lk_Heavy':
      return import('@/lib/dataLKheavy');
    case 'lk_Forklift':
      return import('@/lib/dataLKforklift');
    case 'lk_Extinguisher':
      return import('@/lib/dataLKextinguisher');
    //BD
    case 'bd_Bulk':
      return import('@/lib/dataBDbulk');
    //CMIC
    case 'cmic_Bulk':
      return import('@/lib/dataCMICbulk');
    case 'cmic_Loader':
      return import('@/lib/dataCMICloader');
    case 'cmic_Forklift':
      return import('@/lib/dataCMICforklift');
    case 'cmic_Crane':
      return import('@/lib/dataCMICcrane');
    case 'cmic_Extinguisher':
      return import('@/lib/dataCMICextinguisher');
    case 'cmic_Hydrant':
      return import('@/lib/dataCMIChydrant');
    //TH
    case 'th_Extinguisher':
      return import('@/lib/dataTHextinguisher');
    case 'th_Forklift':
      return import('@/lib/dataTHforklift');
    case 'th_Frontend':
      return import('@/lib/dataTHfrontend');
    case 'th_Car':
      return import('@/lib/dataTHcar');
    case 'th_Truck':
      return import('@/lib/dataTHtruck');
    case 'th_Motorbike':
      return import('@/lib/dataTHmotorbike');
    //SRB
    case 'srb_Truck':
      return import('@/lib/dataSRBtruck');
    default:
      throw new Error('Unknown machine type');
  }
};
