import React, { Component } from 'react'
import * as d3 from 'd3';

class Donut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: this.scaleWidth()
    }
  }

  scaleWidth() {
    const x = Math.max(window.innerWidth * 0.9);
    return x > 950 ? 950 : x;
  }

  handleResize(e) {
    console.log("I ma resizied");
    this.state = ({ windowWidth: 100 });
    return true
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', (e) => this.handleResize);
  }

  PieChart({ data, size, innerRadius }) {
    const outerRadius = size / 2;
    const colorRange = []
    data.forEach(() => colorRange.push(getRandomRGBAString()));
    const colour = d3.scaleOrdinal()
      .range(colorRange);

    const pie = d3
      .pie()
      .sort(null)
      .value(d => d.value);

    const arc = d3
      .arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    const labelArc = d3
      .arc()
      .outerRadius(outerRadius - 2 * innerRadius)
      .innerRadius(outerRadius - 2 * innerRadius);
    const paths = pie(data).map((d, i) => (
      <g key={i}>
        <path fill={colour(i)} d={arc(d)} stroke="#fff" transform="scale(0.8)" />
        <text transform={`translate(${labelArc.centroid(d)})`} dy=".35em" style={{
          fill: '#222',
          textAnchor: 'middle'
        }}>
          {d.data.label}
        </text>
        <g className="tool-tip">
          <text x="0" y="0" font-size="25" dy="0">
          {d.data.list.map((i) => <tspan x="0" dy="1em">{i.skill}</tspan>)}
          </text>
        </g>
      </g>
    ));

    function getRandomArbitrary(min = 0, max = 1) {
      let x = Math.random() * (max - min) + min;
      return x > 1 ? Math.ceil(x) : x;
    }

    function getRandomRGBAString() {
      return `rgba(${getRandomArbitrary(1, 255)},${getRandomArbitrary(1, 255)},${getRandomArbitrary(1, 255)},${getRandomArbitrary()})`;
    }
    return (
      <g>
        {paths}
      </g>
    );
  }

  render() {
    const { size, data, innerRadius } = this.props;
    return (
      <div className="chart__holder">
        <svg width={this.state.windowWidth} height={this.state.windowWidth} className="chart__svg">
          <g transform={`translate(${size / 2}, ${size / 2})`}>
            <this.PieChart data={data} size={this.state.windowWidth} innerRadius={innerRadius} />
          </g>
        </svg>
      </div>
    );
  }
}

export default Donut