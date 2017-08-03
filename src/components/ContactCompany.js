import React, { Component } from 'react';

class ContactCompany extends Component {
  render() {
    if (!this.props.decision || this.props.decision !== 'company') {
      return null;
    }
    return (
      <div className="contact__company-container">
        Company Form
      </div>
    );
  }
}


export default (ContactCompany);
