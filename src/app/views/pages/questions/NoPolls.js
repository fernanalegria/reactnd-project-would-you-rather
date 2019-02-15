import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

/**
 * Card to show in case there aren't any questions to display in the board
 */
const NoPolls = ({ text }) => (
  <Fragment>
    <Card.Subtitle className="text-muted text-center p-2">
      No data found
    </Card.Subtitle>
    <Card.Text className="text-center p-3">{text}</Card.Text>
  </Fragment>
);

export default NoPolls;
