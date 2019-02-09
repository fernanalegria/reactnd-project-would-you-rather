import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserAvatar from '../../common/UserAvatar';
import { getUserScore } from '../../../utils/helpers';
import { connect } from 'react-redux';

const UserScore = ({ user }) => (
  <Card className="mb-3">
    <Card.Body>
      <Row className="no-gutters">
        <Col md="auto mr-3 ml-2">
          <UserAvatar url={user.avatarURL} />
        </Col>
        <Col className="pl-3 user-score-details">
          <Card.Title>{user.name}</Card.Title>
          <Row>
            <Col>
              <Card.Text>Answered questions</Card.Text>
            </Col>
            <Col md="auto">{Object.keys(user.answers).length}</Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>Created questions</Card.Text>
            </Col>
            <Col md="auto">{user.questions.length}</Col>
          </Row>
          <Row className="font-weight-bold">
            <Col>
              <Card.Text>Total score</Card.Text>
            </Col>
            <Col md="auto">{getUserScore(user)}</Col>
          </Row>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const mapStateToProps = ({ users }, { id }) => ({ user: users[id] });

export default connect(mapStateToProps)(UserScore);
