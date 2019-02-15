import React from 'react';
import Poll from './Poll';
import { arrayOf, string } from 'prop-types';

/**
 * List of polls
 */
const PollsList = props => (
  <ol className="poll-list">
    {props.pollIds.map(id => (
      <li key={id}>
        <Poll id={id} />
      </li>
    ))}
  </ol>
);

PollsList.propTypes = {
  pollIds: arrayOf(string).isRequired
};

export default PollsList;
