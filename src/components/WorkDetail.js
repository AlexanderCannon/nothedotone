//should be a container

//3rd party
import React, { Component } from 'react';
import { connect } from 'react-redux'
//Ours
//..
class WorkDetail extends Component {
  render() {
    if (!this.props.work) {
      return (<div className="work-detail">Select to see more</div>);
    }
    return (
      <div className="work-detail">
        <h1>{this.props.work.company}</h1>
        <div><h2>{this.props.work.project}</h2></div>
        <div> {this.props.work.details.split('\n').map((item, key) => {
          return <span key={key}>{item}<br /></span>
        })}</div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    work: state.WorkActive
  };
}

export default connect(mapStateToProps)(WorkDetail);