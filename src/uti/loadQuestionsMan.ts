export const loadQuestions = async (
  bu: string | undefined | null,
  man: string | undefined | null
) => {
  const key = `${bu}_${man}`;

  switch (key) {
    case 'vn_Toolbox':
      return import('@/lib/dataToolbox');
    case 'vn_Alert':
      return import('@/lib/dataAlert');
    case 'vn_Pra':
      return import('@/lib/dataPra');
    case 'vn_Boot':
      return import('@/lib/dataVNboot');
    case 'vn_Ra':
      return import('@/lib/dataVNra');
    case 'vn_Pto':
      return import('@/lib/dataVNpto');
    case 'th_Alert':
      return import('@/lib/dataTHalert');
    case 'th_Training':
      return import('@/lib/dataTHtraining');
    case 'th_Toolbox':
      return import('@/lib/dataTHtoolbox');
    case 'th_Coupon':
      return import('@/lib/dataTHcoupon');
    case 'th_Meeting':
      return import('@/lib/dataTHmeeting');
    case 'th_Talk':
      return import('@/lib/dataTHtalk');
    case 'th_Boot':
      return import('@/lib/dataTHboot');
    default:
      throw new Error('Unknown man type');
  }
};
