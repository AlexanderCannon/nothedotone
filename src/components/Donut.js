import React, { Component } from 'react'
import * as d3 from 'd3';

function PieChart({ data, size, innerRadius }) {
  const outerRadius = size / 2;

  const colour = d3.scaleOrdinal()
    .range([`rgba(0,0,0,${getRandomArbitrary()})`, `rgba(0,0,0,${getRandomArbitrary()})`, `rgba(0,0,0,${getRandomArbitrary()})`]);

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
    .outerRadius(outerRadius - 40)
    .innerRadius(outerRadius - 40);

  const paths = pie(data).map((d, i) => (
    <g key={i}>
      <path fill={colour(i)} d={arc(d)} stroke="#fff" />

      <text transform={`translate(${labelArc.centroid(d)})`} dy=".35em" style={{
        color: '#337ab7',
        textAnchor: 'middle'
      }}>
        {d.data.label}
      </text>
    </g>
  ));

  function getRandomArbitrary(min=0, max=1) {
    return Math.random() * (max - min) + min;
  }

  return (
    <g>
      {paths}
    </g>
  );
}

class Donut extends Component {
  render() {
    const { height, width, data, innerRadius } = this.props;
    return (
      <div className="chart__holder">
        <svg width={width} height={height} className="chart__svg">
          <g transform={`translate(${height / 2}, ${height / 2})`}>
            <PieChart data={data} size={height} innerRadius={innerRadius} />
          </g>
        </svg>
      </div>
    );
  }
}

export default Donut