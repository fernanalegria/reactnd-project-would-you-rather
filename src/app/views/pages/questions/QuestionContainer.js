import React from 'react';
import Question from './Question';
import QuestionResults from './QuestionResults';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { string, bool } from 'prop-types';

/**
 * Wrapper to show at a question's url and redirect to the proper component
 */
const QuestionContainer = ({ results, id }) => {
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

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;
  const answers = Object.keys(users[authedUser].answers);

  return {
    id,
    results: questions[id] ? answers.includes(id) : null
  };
};

QuestionContainer.propTypes = {
  id: string.isRequired,
  results: bool
};

export default connect(mapStateToProps)(QuestionContainer);
