import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shape, number, bool, string } from 'prop-types';

/**
 * Card that informs about the voting stats of each answer to a question
 */
const OptionResults = ({
  option,
  totalVotes,
  chosen = false,
  className = ''
}) => (
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

OptionResults.propTypes = {
  option: shape({
    text: string.isRequired,
    votesNumber: number.isRequired,
    votesPerc: number.isRequired
  }).isRequired,
  totalVotes: number.isRequired,
  chosen: bool,
  className: string
};

export default OptionResults;
