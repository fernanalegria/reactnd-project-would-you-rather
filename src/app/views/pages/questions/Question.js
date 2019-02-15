import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../../common/UserCard';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { questionActions } from '../../../state/ducks/questions';
import { questionShape } from '../../propTypes';
import { func } from 'prop-types';

const options = {
  optionOne: 'optionOne',
  optionTwo: 'optionTwo'
};

/**
 * Form to actually answer the available questions
 */
class Question extends Component {
  static propTypes = {
    question: questionShape.isRequired,
    answerQuestion: func.isRequired
  };

  state = {
    answer: ''
  };

  /**
   * Changes the answer according to the user input
   * @param  {Event}
   */
  selectOption = e => {
    this.setState({
      answer: e.target.value
    });
  };

  /**
   * Saves the answer picked by the user
   * @param  {Event}
   */
  handleSubmit = e => {
    const { question, answerQuestion } = this.props;
    e.preventDefault();
    answerQuestion({
      qid: question.id,
      answer: this.state.answer
    });
  };

  render() {
    const { question } = this.props;
    const { answer } = this.state;
    return (
      <UserCard
        authorName={question.author.name}
        avatarURL={question.author.avatarURL}
      >
        <Form className="card-block pl-3" onSubmit={this.handleSubmit}>
          <Card.Title>Would you rather...</Card.Title>
          <div className="mb-3">
            <Form.Check
              type="radio"
              label={question.optionOne.text}
              name="answer"
              value={options.optionOne}
              checked={answer === options.optionOne}
              onChange={this.selectOption}
            />
            <Form.Check
              type="radio"
              label={question.optionTwo.text}
              name="answer"
              value={options.optionTwo}
              checked={answer === options.optionTwo}
              onChange={this.selectOption}
            />
          </div>
          <Button
            variant="secondary"
            type="submit"
            size="sm"
            block
            disabled={!this.state.answer}
          >
            Submit
          </Button>
        </Form>
      </UserCard>
    );
  }
}

const mapStateToProps = ({ questions, users }, { id }) => ({
  question: { ...questions[id], author: users[questions[id].author] }
});

const mapDispatchToProps = {
  answerQuestion: info => questionActions.handleAnswerQuestion(info)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
