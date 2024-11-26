const timeDifferenceInDays = (dateString: Date) => {
  const date =
    new Date(dateString).getFullYear() > 2500
      ? new Date(
          new Date(dateString).setFullYear(
            new Date(dateString).getFullYear() - 543
          )
        )
      : new Date(dateString);

  // Normalize the given date and today's date to midnight
  const givenDate = new Date(date);
  givenDate.setHours(0, 0, 0, 0);

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Calculate the difference in days
  const timeDifferenceInMilliseconds = now.getTime() - givenDate.getTime();
  const timeDifferenceInDays = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return timeDifferenceInDays;
};

export default timeDifferenceInDays;
