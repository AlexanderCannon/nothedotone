import React, { Component } from 'react';

class WorkDetail extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-flex">
          <a target="blank" href="https://twitter.com/sweetnage">Built with ♥ by Alexander Cannon</a>
        </div>
        <div className="footer-flex">Keep in touch:</div>
        <div className="footer-flex">
          <a target="blank" href="https://twitter.com/sweetnage">Twitter</a>
        </div>
        <div className="footer-flex">
          <a target="blank" href="https://github.com/AlexanderCannon">Github</a>
        </div>
        <div className="footer-flex">
          <a target="blank" href="https://www.linkedin.com/in/alexandermcannon/">Linkedin</a>
        </div>
      </footer>
    );
  };
};

export default WorkDetail;