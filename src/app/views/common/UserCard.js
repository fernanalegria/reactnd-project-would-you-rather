import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserAvatar from './UserAvatar';

const UserCard = ({ authorName, avatarURL, askedBy, children }) => (
  <Card className="user-card">
    <Card.Header>
      {askedBy ? `Asked by ${authorName}:` : `${authorName} asks:`}
    </Card.Header>
    <Card.Body>
      <Row className="no-gutters">
        <Col md="auto" className='mr-3'>
          <UserAvatar url={avatarURL} />
        </Col>
        <Col className="user-card-details">{children}</Col>
      </Row>
    </Card.Body>
  </Card>
);

export default UserCard;
