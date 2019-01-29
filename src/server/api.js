import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA.js";

export const getInitialData = () =>
  Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions
  }));

export const saveQuestionAnswer = info => _saveLikeToggle(info);

export const saveQuestion = info => _saveQuestion(info);
