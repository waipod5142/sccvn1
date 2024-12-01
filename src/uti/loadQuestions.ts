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
    case 'lk_Heavy':
      return import('@/lib/dataLKheavy');
    case 'lk_Forklift':
      return import('@/lib/dataLKforklift');
    case 'lk_Extinguisher':
      return import('@/lib/dataLKextinguisher');
    case 'bd_Bulk':
      return import('@/lib/dataBDbulk');
    case 'lbm_Extinguisher':
      return import('@/lib/dataLBMextinguisher');
    case 'lbm_Forklift':
      return import('@/lib/dataLBMforklift');
    case 'lbm_Frontend':
      return import('@/lib/dataLBMfrontend');
    case 'lbm_Car':
      return import('@/lib/dataLBMcar');
    case 'lbm_Truck':
      return import('@/lib/dataLBMtruck');
    default:
      throw new Error('Unknown machine type');
  }
};
