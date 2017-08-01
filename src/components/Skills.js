import React, { Component } from 'react';
import { connect } from 'react-redux';

import Donut from './Donut';

class Skills extends Component {

  makeChartSeries() {
    return [
      {
        "field": "JavaScript",
        "name": "JavaScript"
      },
      { 
        "field": "Web",
        "name": "Web"
      },
      {
        "field": "PHP",
        "name": "PHP"
      }
    ];
  }
  makeData() {
    let js = this.props.skills.filter((item) => item.tag === 'JavaScript');
    let php = this.props.skills.filter((item) => item.tag === 'PHP');
    let web = this.props.skills.filter((item) => item.tag === 'Web');
    return [
      { label: "JavaScript", value: js.length },
      { label: "PHP", value: php.length },
      { label: "Web ", value: web.length }
    ];
  }
  render() {
    return (
      <div className="skills">
        <Donut
          width={400}
          height={400}
          data={this.makeData()}
          chartSeries={this.makeChartSeries()}
          innerRadius={75}
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

