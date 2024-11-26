const timeDifferenceInMinutes = (dateString: Date) => {
  const date =
    new Date(dateString).getFullYear() > 2500
      ? new Date(
          new Date(dateString).setFullYear(
            new Date(dateString).getFullYear() - 543
          )
        )
      : new Date(dateString);
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  return Math.floor(difference / (1000 * 60));
};
export default timeDifferenceInMinutes;
