import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OptionResults = ({ option, totalVotes, chosen, className = '' }) => (
  <Card
    className={`${className} ${chosen ? 'chosen-option font-weight-bold' : ''}`}
    bg={chosen && 'info'}
  >
    <Card.Body>
      {chosen && (
        <FontAwesomeIcon icon="check-circle" className="top-right-icon" />
      )}
      <Card.Text>{`Would you rather ${option.text}?`}</Card.Text>
      <ProgressBar
        now={option.votesPerc}
        label={`${option.votesPerc}%`}
        variant={chosen ? 'secondary' : 'info'}
        animated={chosen}
      />
      <Card.Text className="text-center">
        {`${option.votesNumber} out of ${totalVotes} votes`}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default OptionResults;
