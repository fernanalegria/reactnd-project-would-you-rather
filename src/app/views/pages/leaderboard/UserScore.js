import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCard from '../../common/UserCard';
import { getUserScore } from '../../../utils/helpers';
import { connect } from 'react-redux';

const UserScore = ({ user }) => {
  const { answered, created, totalScore } = getUserScore(user);
  return (
    <UserCard
      authorName={user.name}
      avatarURL={user.avatarURL}
      showHeader={false}
      className="mb-3"
    >
      <div className="card-block pl-md-3">
        <Card.Title>{user.name}</Card.Title>
        <Row>
          <Col>
            <Card.Text>Answered questions</Card.Text>
          </Col>
          <div className="col-auto">{answered}</div>
        </Row>
        <Row>
          <Col>
            <Card.Text>Created questions</Card.Text>
          </Col>
          <div className="col-auto">{created}</div>
        </Row>
        <Row className="font-weight-bold">
          <Col>
            <Card.Text>Total score</Card.Text>
          </Col>
          <div className="col-auto">{totalScore}</div>
        </Row>
      </div>
    </UserCard>
  );
};

const mapStateToProps = ({ users }, { id }) => ({ user: users[id] });

export default connect(mapStateToProps)(UserScore);
