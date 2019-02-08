import React, { Component } from 'react';
import PollsList from './PollsList';
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
          <PollsList
            pollIds={answered ? answeredQuestions : unansweredQuestions}
          />
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
