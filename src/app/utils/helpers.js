/**
 * Returns true if the object is empty
 * @param  {Object} obj
 * @returns  {boolean}
 */
export const isEmptyObject = obj => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

/**
 * Given the number of votes to each of the answers to a question,
 * computes how much each of them was voted percentually
 * @param  {Object} obj
 * @returns  {Object} Answer percentages for the two options
 */
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

/**
 * Rounds to the closest integer 
 * @param  {number} percentage
 * @returns  {number}
 */
const roundPercentage = percentage =>
  percentage % 1 === 0.5 && percentage < 50
    ? Math.floor(percentage)
    : Math.round(percentage);

/**
 * Given a user,
 * returns the number of questions he/she has answered and created
 * @param  {Object} user
 * @returns  {Object} User stats
 */
export const getUserScore = user => {
  const answered = Object.keys(user.answers).length;
  const created = user.questions.length;

  return {
    answered,
    created,
    totalScore: answered + created
  }
}