export const loadQuestions = async (
  bu: string | undefined | null,
  man: string | undefined | null
) => {
  const key = `${bu}_${man}`;

  switch (key) {
    case "vn_Grease":
      return import("@/lib/dataVNgrease");
          case "vn_Lubrication":
      return import("@/lib/dataVNlubrication");
    default:
      throw new Error("Unknown man type");
  }
};
