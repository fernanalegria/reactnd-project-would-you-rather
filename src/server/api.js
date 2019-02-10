import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser
} from './_DATA.js';

export const getInitialData = () =>
  Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions
  }));

export const saveQuestionAnswer = info => _saveQuestionAnswer(info);

export const saveQuestion = info => _saveQuestion(info);

export const saveUser = info => _saveUser(info);
