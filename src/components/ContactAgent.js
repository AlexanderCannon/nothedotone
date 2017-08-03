import React, { Component } from 'react';

class ContactAgent extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    if (!this.props.decision || this.props.decision !== 'agent') {
      return null;
    }
    return (
      <div className="contact__agent-container">
        <label>
          Name:
          <input type="text" name="name" onChange={this.props.handleChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" onChange={this.props.handleChange} />
        </label>
      </div>
    );
  }
}

export default (ContactAgent);
