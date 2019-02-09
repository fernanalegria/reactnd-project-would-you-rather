import React from 'react';
import Poll from './Poll';

const PollsList = props => (
  <ol className="poll-list">
    {props.pollIds.map(id => (
      <li key={id}>
        <Poll id={id} />
      </li>
    ))}
  </ol>
);

export default PollsList;
