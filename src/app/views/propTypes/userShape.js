import { shape, string, arrayOf, objectOf } from 'prop-types';

export default shape({
  id: string.isRequired,
  name: string.isRequired,
  password: string.isRequired,
  avatarURL: string,
  answers: objectOf(string).isRequired,
  questions: arrayOf(string).isRequired
});
