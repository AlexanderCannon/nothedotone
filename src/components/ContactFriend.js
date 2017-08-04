import React, { Component } from 'react';

class ContactFriend extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    if (!this.props.show || this.props.show !== 'friend') {
      return null;
    }
    return (
      <div className="contact__form-container">
        <span role="img" aria-label="eyes emoji">👀</span> Check out my social links below, or send me a message directly!
        <label>
          <span>Name:</span>
          <input type="text" name="name" onChange={this.props.handleChange} />
        </label>
        <label>
          <span> Your Message: </span>
          <textarea name="message" onChange={this.props.handleChange} />
        </label>
      </div>
    );
  }
}

export default (ContactFriend);
