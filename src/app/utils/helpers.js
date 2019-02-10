export const isEmptyObject = obj => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const computeResults = (optionOneVotes, optionTwoVotes) => {
  const optionOnePercentage =
    (optionOneVotes * 100) / (optionOneVotes + optionTwoVotes);
  const optionTwoPercentage =
    (optionTwoVotes * 100) / (optionOneVotes + optionTwoVotes);
  return {
    optionOnePercentage: roundPercentage(optionOnePercentage),
    optionTwoPercentage: roundPercentage(optionTwoPercentage)
  };
};

const roundPercentage = percentage =>
  percentage % 1 === 0.5 && percentage < 50
    ? Math.floor(percentage)
    : Math.round(percentage);

export const getUserScore = user => {
  const answered = Object.keys(user.answers).length;
  const created = user.questions.length;

  return {
    answered,
    created,
    totalScore: answered + created
  }
}