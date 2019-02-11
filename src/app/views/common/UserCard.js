import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserAvatar from './UserAvatar';

const UserCard = ({
  authorName,
  avatarURL,
  askedBy = false,
  showHeader = true,
  className = '',
  children
}) => (
  <Card className={`user-card ${className}`}>
    <Card.Header className={showHeader ? '' : 'd-none'}>
      {askedBy ? `Asked by ${authorName}:` : `${authorName} asks:`}
    </Card.Header>
    <Card.Body>
      <Row className="no-gutters">
        <Col md="auto" className="mr-md-3 mb-3 text-center">
          <UserAvatar url={avatarURL} />
        </Col>
        <Col className="user-card-details">{children}</Col>
      </Row>
    </Card.Body>
  </Card>
);

export default UserCard;
