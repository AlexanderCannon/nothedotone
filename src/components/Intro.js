import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intro extends Component {

  renderIntro() {
    return this.props.intro.map((item) => {
      return (
        <p key={item.paragraph}>
          {item.text}
        </p>
      )
    })
  }

  render() {
    return (
      <div className="home-limit">
        <h1>This is home</h1>
        {this.renderIntro()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    intro: state.intro
  }
}


export default connect(mapStateToProps)(Intro);
