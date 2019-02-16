import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser
} from './_DATA.js';

/**
 * Fetches initial data needed to load the app
 * @returns  {Promise}
 */
export const getInitialData = () =>
  Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions
  }));

/**
 * Saves the answer to a question in database
 * @param  {Object} info User who creates it and the two possible answers
 * @returns  {Promise}
 */
export const saveQuestionAnswer = info => _saveQuestionAnswer(info);

/**
 * Saves a new question in the database
 * @param  {Object} info Id, author and whether they've liked it or unliked it
 * @returns  {Promise}
 */
export const saveQuestion = info => _saveQuestion(info);

/**
 * Adds a new user into the database
 * @param  {Object} info Username, password and avatar
 * @returns  {Promise}
 */
export const saveUser = info => _saveUser(info);
