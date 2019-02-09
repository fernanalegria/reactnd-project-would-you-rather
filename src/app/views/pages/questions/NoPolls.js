import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const NoPolls = ({ text }) => (
  <Fragment>
    <Card.Subtitle className="text-muted text-center p-2">
      No data found
    </Card.Subtitle>
    <Card.Text className="text-center p-3">{text}</Card.Text>
  </Fragment>
);

export default NoPolls;
