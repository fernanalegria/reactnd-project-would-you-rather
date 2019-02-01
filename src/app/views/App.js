import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commonActions } from '../state/ducks/common';

class App extends Component {
  componentDidMount() {
    this.props.handleFetchData();
  }

  render() {
    return (
      <div className="App">
        Hello world!
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleFetchData: () => commonActions.handleFetchData()
};

export default connect(null, mapDispatchToProps)(App);
