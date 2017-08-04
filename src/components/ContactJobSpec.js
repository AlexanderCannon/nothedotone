import React, { Component } from 'react';

class ContactCompany extends Component {
  render() {
    if (!this.props.show || this.props.show !== 'spec') {
      return null;
    }
    return (
      <div className="contact__form-container">
        Tell me more!
        <label>
          <span>File:</span>
          <input type="text" name="name" onChange={this.props.handleChange} />
        </label>
        <label>
          <span>Title: </span>
          <input type="text" name="company" onChange={this.props.handleChange} />
        </label>
        <label>
          <span>Location: </span>
          <select name="location" onChange={this.props.handleChange}>
            <option value="london">London</option>
            <option value="nyc">New York</option>
            <option value="sanfran">San Fransisco</option>
            <option value="other">Other, please select</option>
          </select>
            {this.props.location === 'other' ?<input type="text" name="otherLocation" onChange={this.props.handleChange} /> : ''}
        </label>
      </div>
    );
  }
}

export default (ContactCompany);
