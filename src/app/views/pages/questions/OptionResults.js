import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OptionResults = ({ option, totalVotes, chosen, className = '' }) => (
  <Card
    className={`${className} ${chosen ? 'chosen-option font-weight-bold' : ''}`}
    bg={chosen && 'info'}
  >
    <Card.Body>
      <Card.Text>
        <Row className="no-gutters">
          <Col>{`Would you rather ${option.text}?`}</Col>
          <Col md="auto">
            {chosen && (
              <FontAwesomeIcon icon="check-circle" className="float-right" />
            )}
          </Col>
        </Row>
      </Card.Text>
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
