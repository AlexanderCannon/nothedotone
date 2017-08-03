import React, { Component } from 'react';

class ContactAgent extends Component {
  render() {
    if (!this.props.decision || this.props.decision !== 'agent') {
      return null;
    }
    return (
      <div className="contact__agent-container">
        Agent Form
      </div>
    );
  }
}


export default (ContactAgent);
