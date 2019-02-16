import { shape, string, arrayOf } from 'prop-types';

export default shape({
  id: string.isRequired,
  name: string.isRequired,
  password: string.isRequired,
  avatarURL: string,
  answers: shape.isRequired,
  questions: arrayOf(string).isRequired
});
