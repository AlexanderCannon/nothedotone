import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContactAgent from './ContactAgent';
import ContactCompany from './ContactCompany';
import ContactFriend from './ContactFriend';
import ContactJobSpec from './ContactJobSpec';

import { addToForm } from '../actions/index';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      value: {}
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target
    this.props.addToForm({ name, value });
    this.state.value[name] = value
    if (this.state.value.name && this.state.value.message) {
      if (this.state.show !== 'friend' && this.state.value.company) {
        this.setState({ page2: true });
      }
      if (this.state.show === 'friend' || this.state.show === 'company' || this.state.hasSpec)
        return this.setState({ ready: true });
    }
    return
  }

  handleToggleClick(e, from) {
    e.preventDefault();
    if (from === this.state.show) {
      return this.setState(prevState => ({
        show: !prevState.show
      }));
    }
    return this.setState({ show: from, sender: from });
  }
  handleSubmit(e) {
    alert('A name was submitted: ' + JSON.stringify(this.state.value));
    e.preventDefault();
  }
  nextPage(e) {
    e.preventDefault();
    this.setState({ show: 'spec' });
  }

  render() {
    return (
      <div className="contact__form-holder">
        <from className="contact__from-base">
          First things first, I am an:
        <button onClick={(e) => this.handleToggleClick(e, 'agent')} className="agent btn btm-primary">
            Agent
        </button>
          <button onClick={(e) => this.handleToggleClick(e, 'company')} className="company btn btm-primary">
            Company
        </button>
          <button onClick={(e) => this.handleToggleClick(e, 'friend')} className="company btn btm-primary">
            Just wanted to say hi!
        </button>
          <ContactAgent show={this.state.show} handleChange={this.handleChange} />
          <ContactCompany show={this.state.show} handleChange={this.handleChange} />
          <ContactFriend show={this.state.show} handleChange={this.handleChange} />
          <ContactJobSpec show={this.state.show} handleChange={this.handleChange} />
          {this.state.page2 ? <input type="submit" value="Add a spec" onClick={(e) => this.nextPage(e)} /> : ''}
          {this.state.ready ? <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} /> : ''}
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
  return bindActionCreators({ addToForm }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
