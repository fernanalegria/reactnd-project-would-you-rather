import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { questionActions } from '../../../state/ducks/questions';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  };

  handleOptionOneChange = e => {
    this.setState({
      optionOneText: e.target.value
    });
  };

  handleOptionTwoChange = e => {
    this.setState({
      optionTwoText: e.target.value
    });
  };

  handleSubmit = e => {
    const { optionOneText, optionTwoText } = this.state;
    e.preventDefault();
    this.props.addQuestion(optionOneText, optionTwoText).then(() => {
      this.setState({
        optionOneText: '',
        optionTwoText: ''
      });
    });
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <Card>
        <Card.Header>Create New Question</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Card.Title className="text-center">Would you rather</Card.Title>
            <Form.Group controlId="formOptionOne" className="my-3">
              <Form.Control
                type="text"
                placeholder="e.g. be homeless"
                value={optionOneText}
                onChange={this.handleOptionOneChange}
              />
            </Form.Group>
            <Row>
              <Col>
                <hr />
              </Col>
              <Col md="auto">
                <Form.Text>OR</Form.Text>
              </Col>
              <Col>
                <hr />
              </Col>
            </Row>
            <Form.Group controlId="formOptionTwo" className="my-3">
              <Form.Control
                type="text"
                placeholder="e.g. have no private life"
                value={optionTwoText}
                onChange={this.handleOptionTwoChange}
              />
            </Form.Group>
            <Card.Title className="text-center">?</Card.Title>
            <Button
              variant="secondary"
              type="submit"
              disabled={!optionOneText || !optionTwoText}
              size="lg"
              block
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  addQuestion: (optionOneText, optionTwoText) =>
    questionActions.handleAddQuestion(optionOneText, optionTwoText)
};

export default connect(
  null,
  mapDispatchToProps
)(NewQuestion);
