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
    case 'vn_Induction':
      return import('@/lib/dataInduction');
    default:
      throw new Error('Unknown man type');
  }
};
