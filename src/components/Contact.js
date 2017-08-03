import React, { Component } from 'react';

import ContactAgent from './ContactAgent'
import ContactCompany from './ContactCompany'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { decision: '' }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(e, form) {
    e.preventDefault();
    if (form === this.state.decision) {
      return this.setState(prevState => ({
        decision: !prevState.decision
      }));
    }
    return this.setState({decision: form});
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
        <ContactAgent decision={this.state.decision} />
        <ContactCompany decision={this.state.decision} />
        </form>
      </div>
    );
  }
}


export default (Contact);
