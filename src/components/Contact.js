import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactAgent from './ContactAgent';
import ContactCompany from './ContactCompany';
import ContactFriend from './ContactFriend';
import ContactJobSpec from './ContactJobSpec';

import { addToForm, pickForm, submitForm } from '../actions/index';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      value: {}
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleClick(e, from) {
    e.preventDefault();
    return this.props.pickForm(from);
  }
  handleSubmit(e) {
    this.props.submitForm();
    e.preventDefault();
  }

  render() {
    return (
      <div className="contact__form-holder">
        <from className="contact__from-base">
          First things first;<br/> I...
        <button onClick={(e) => this.handleToggleClick(e, 'agent')} className="agent btn btm-primary">
            am an agent.
        </button>
          <button onClick={(e) => this.handleToggleClick(e, 'company')} className="company btn btm-primary">
            am a company
        </button>
          <button onClick={(e) => this.handleToggleClick(e, 'friend')} className="company btn btm-primary">
            just wanted to say hi!
        </button>
          <ContactAgent />
          <ContactCompany />
          <ContactFriend />
          <ContactJobSpec />
          {this.props.contactForm.page2 ? <input type="submit" value="Add a spec" onClick={(e) => this.handleToggleClick(e, 'spec')}  /> : ''}
          {this.props.contactForm.ready ? <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} /> : ''}
        </from>
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
  return bindActionCreators({ addToForm, pickForm, submitForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
