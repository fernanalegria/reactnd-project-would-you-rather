import React from 'react';
import Question from './Question';
import QuestionResults from './QuestionResults';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';

const QuestionContainer = props => {
  const { results, id } = props;
  if (results === null) {
    return (
      <Card>
        <Card.Text className="text-center p-3">
          This question doesn't exist
        </Card.Text>
      </Card>
    );
  } else {
    return results ? <QuestionResults id={id} /> : <Question id={id} />;
  }
};

const mapStateToProps = ({ authedUser, users }, props) => {
  const { id } = props.match.params;
  const answers = users[authedUser]
    ? Object.keys(users[authedUser].answers)
    : null;

  return {
    id,
    results: answers ? answers.includes(id) : null
  };
};

export default connect(mapStateToProps)(QuestionContainer);
