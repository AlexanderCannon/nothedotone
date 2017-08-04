import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToForm } from '../actions/index';

class ContactCompany extends Component {
  render() {
    if (!this.props.contactForm.picked || this.props.contactForm.picked !== 'spec') {
      return null;
    }
    return (
      <div className="contact__form-container">
        Tell me more!
        <label>
          <span>File:</span>
          <input type="text" name="file" onChange={this.props.handleChange} />
        </label>
        <label>
          <span>Title: </span>
          <input type="text" name="title" onChange={this.props.handleChange} />
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

function mapStateToProps(state) {
  return {
    contactForm: state.ContactForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactCompany);
