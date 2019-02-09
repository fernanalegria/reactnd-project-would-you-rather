import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../../common/UserCard';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { questionActions } from '../../../state/ducks/questions';

const options = {
  optionOne: 'optionOne',
  optionTwo: 'optionTwo'
};

class Question extends Component {
  state = {
    answer: ''
  };

  selectOption = e => {
    this.setState({
      answer: e.target.value
    });
  };

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
        askedBy={false}
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
