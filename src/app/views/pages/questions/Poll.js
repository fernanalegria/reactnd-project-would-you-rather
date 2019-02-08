import React, { Fragment } from 'react';
import UserAvatar from '../../common/UserAvatar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Poll = props => {
  const { question } = props;
  return (
    <Card className="poll">
      {question ? (
        <Fragment>
          <Card.Header>{question.author.name} asks:</Card.Header>
          <Card.Body>
            <Row className="no-gutters">
              <Col md="auto">
                <UserAvatar url={question.author.avatarURL} />
              </Col>
              <Col className="poll-details">
                <div className="card-block pl-3">
                  <Card.Title>Would you rather...</Card.Title>
                  <Card.Text>{`${question.optionOne.text} or ${
                    question.optionTwo.text
                  }?`}</Card.Text>
                  <Link
                    to={`/questions/${question.id}`}
                    className="btn btn-secondary btn-block btn-sm"
                  >
                    View Poll
                  </Link>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Fragment>
      ) : (
        <Card.Text className="text-center p-3">
          This poll doesn't exist
        </Card.Text>
      )}
    </Card>
  );
};

const mapStateToProps = ({ questions, users }, { id }) => ({
  question: questions[id]
    ? { ...questions[id], author: users[questions[id].author] }
    : null
});

export default connect(mapStateToProps)(Poll);
