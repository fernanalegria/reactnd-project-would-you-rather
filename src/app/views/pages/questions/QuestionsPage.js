import React, { Component } from 'react';
import PollsList from './PollsList';
import NoPolls from './NoPolls';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import './questions.scss';

class QuestionsPage extends Component {
  state = {
    answered: false
  };

  toggleQuestions = answered => {
    this.setState({
      answered
    });
  };

  render() {
    const { answered } = this.state;
    const { answeredQuestions, unansweredQuestions } = this.props;

    return (
      <Card>
        <Card.Header>
          <Nav variant="tabs" className="nav-justified">
            <Nav.Item>
              <Nav.Link
                className={`nav-link w-100 ${!answered && 'active'}`}
                onClick={() => this.toggleQuestions(false)}
              >
                Unanswered Questions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link w-100 ${answered && 'active'}`}
                onClick={() => this.toggleQuestions(true)}
              >
                Answered Questions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="scroll-box">
          {answered ? (
            answeredQuestions.length > 0 ? (
              <PollsList pollIds={answeredQuestions} />
            ) : (
              <NoPolls text="It seems like you haven't answered any questions yet. Let's play!" />
            )
          ) : unansweredQuestions.length > 0 ? (
            <PollsList pollIds={unansweredQuestions} />
          ) : (
            <NoPolls text="Ops! It seems like you've already answered all the questions. Try adding new ones :)" />
          )}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const answeredIds = users[authedUser]
    ? Object.keys(users[authedUser].answers)
    : [];
  const unansweredIds = Object.keys(questions).filter(
    id => !answeredIds.includes(id)
  );

  return {
    answeredQuestions: answeredIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unansweredQuestions: unansweredIds.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
};

export default connect(mapStateToProps)(QuestionsPage);
