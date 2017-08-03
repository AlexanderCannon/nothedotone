import React, { Component } from 'react';

import ContactAgent from './ContactAgent'
import ContactCompany from './ContactCompany'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decision: '',
      value: {}
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target
    console.log(name, value);
    this.state.value[name] = value
  }

  handleToggleClick(e, form) {
    e.preventDefault();
    if (form === this.state.decision) {
      return this.setState(prevState => ({
        decision: !prevState.decision
      }));
    }
    return this.setState({ decision: form });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + JSON.stringify(this.state.value));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form >
          First things first, I am an:
        <button onClick={(e) => this.handleToggleClick(e, 'agent')} className="agent btn btm-primary">
            Agent
        </button>
          <button onClick={(e) => this.handleToggleClick(e, 'company')} className="company btn btm-primary">
            Company
        </button>
          <ContactAgent decision={this.state.decision} handleChange={this.handleChange} />
          <ContactCompany decision={this.state.decision} handleChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
        </form>
      </div>
    );
  }
}


export default (Contact);
