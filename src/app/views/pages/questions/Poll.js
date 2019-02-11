import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import UserCard from '../../common/UserCard';

const Poll = ({ question }) =>
  question ? (
    <UserCard
      authorName={question.author.name}
      avatarURL={question.author.avatarURL}
      askedBy={false}
    >
      <div className="card-block pl-md-3">
        <Card.Title>Would you rather...</Card.Title>
        <Card.Text className="one-liner">{`${question.optionOne.text} or ${
          question.optionTwo.text
        }?`}</Card.Text>
        <Link
          to={`/questions/${question.id}`}
          className="btn btn-secondary btn-block btn-sm"
        >
          View Poll
        </Link>
      </div>
    </UserCard>
  ) : (
    <Card className="user-card">
      <Card.Text className="text-center p-3">This poll doesn't exist</Card.Text>
    </Card>
  );

const mapStateToProps = ({ questions, users }, { id }) => ({
  question: questions[id]
    ? { ...questions[id], author: users[questions[id].author] }
    : null
});

export default connect(mapStateToProps)(Poll);
