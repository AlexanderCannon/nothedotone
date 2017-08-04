import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToForm } from '../actions/index';

class ContactAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactForm: {
        name: '',
        company: '',
        message: ''
      }
    }
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.props.addToForm({ name, value });
  }

  render() {
    if (!this.props.contactForm.picked || this.props.contactForm.picked !== 'agent') {
      return null;
    }
    return (
      <div className="contact__form-container">
        Tell me more!
        <label>
          <span>Name:</span>
          <input type="text" name="name" onChange={(e) => this.handleChange(e)} value={this.props.contactForm.name} />
        </label>
        <label>
          <span>Company: </span>
          <input type="text" name="company" onChange={(e) => this.handleChange(e)} value={this.props.contactForm.company} />
        </label>
        <label>
          <span> Your Message: </span>
          <textarea name="message" onChange={(e) => this.handleChange(e)} value={this.props.contactForm.message} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactAgent);
