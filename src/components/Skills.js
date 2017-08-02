import React, { Component } from 'react';
import { connect } from 'react-redux';

import Donut from './Donut';

class Skills extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.findSize)
  }

  findSize() {
    const x = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) *0.9;
    return x > 950 ? 950 : x;
  }
  presentData() {
    let js = this.props.skills.filter((item) => item.tag === 'JavaScript');
    let php = this.props.skills.filter((item) => item.tag === 'PHP');
    let web = this.props.skills.filter((item) => item.tag === 'Web');
    let design = this.props.skills.filter((item) => item.tag === 'Design');
    let sundry = this.props.skills.filter((item) => item.tag === 'Sundry');
    return [
      { label: "JavaScript", value: js.length, list: js },
      { label: "PHP", value: php.length, list: php },
      { label: "Sundry ", value: sundry.length, list: sundry},
      { label: "Design ", value: design.length, list: design },
      { label: "Web", value: web.length, list: web }
    ];
  }
  render() {
    return (
      <div className="skills">
        <Donut
          size={this.findSize()}
          data={this.presentData()}
          innerRadius={70}
        />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    skills: state.Skills
  };
}

export default connect(mapStateToProps)(Skills);

