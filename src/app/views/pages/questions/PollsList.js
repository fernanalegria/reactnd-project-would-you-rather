import React from 'react';
import Poll from './Poll';

const PollsList = props => (
  <ul className="poll-list">
    {props.pollIds.map(id => (
      <li key={id}>
        <Poll id={id} />
      </li>
    ))}
  </ul>
);

export default PollsList;
