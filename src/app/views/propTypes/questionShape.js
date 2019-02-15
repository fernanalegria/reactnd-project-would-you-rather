import { shape, string, number, arrayOf } from 'prop-types';
import userShape from './userShape';

const option = shape({
  votes: arrayOf(string).isRequired,
  text: string.isRequired
});

export default shape({
  id: string.isRequired,
  author: userShape.isRequired,
  timestamp: number.isRequired,
  optionOne: option.isRequired,
  optionTwo: option.isRequired
});
