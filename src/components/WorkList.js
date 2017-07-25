//3rd party
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Ours
import { selectWork } from '../actions/index';

class WorkList extends Component {

  renderList() {
    return this.props.work.map((work) => {
      return (
        <li
          key={work.id}
          className='list-group-item'
          onClick={() => this.props.selectWork(work)} >
          <h2>{work.company}</h2>
          <h3>{work.project}</h3>
        </li>
      );
    });
  };

  render() {
    if (!this.props.work) {
      return <div className='workPlaceholder' />;
    };
    return (
      <div className="work-list">
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    work: state.work
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectWork }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkList);