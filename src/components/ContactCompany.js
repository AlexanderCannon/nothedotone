import React, { Component } from 'react';

class ContactCompany extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    if (!this.props.show || this.props.show !== 'company') {
      return null;
    }
    return (
      <div className="contact__form-container">
        Tell me more!
        <label>
          <span>Name:</span>
          <input type="text" name="name" onChange={this.props.handleChange} />
        </label>
        <label>
          <span>Company: </span>
          <input type="text" name="company" onChange={this.props.handleChange} />
        </label>
        <label>
          <span> Your Message: </span>
          <textarea name="message" onChange={this.props.handleChange} />
        </label>
      </div>
    );
  }
}

export default (ContactCompany);
