import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserAvatar from './UserAvatar';
import { string, bool, node } from 'prop-types';

/**
 * Card composed by the username, his/her avatar and any children passed in
 */
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

UserCard.propTypes = {
  authorName: string.isRequired,
  avatarURL: string,
  askedBy: bool,
  showHeader: bool,
  className: string,
  children: node.isRequired
};

export default UserCard;
