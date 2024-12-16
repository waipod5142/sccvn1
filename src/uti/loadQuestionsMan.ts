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
    default:
      throw new Error('Unknown man type');
  }
};
