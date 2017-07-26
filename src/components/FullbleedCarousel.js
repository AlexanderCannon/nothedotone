import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel'

class FullbleedCarousel extends Component {
  renderImages() {
    return this.props.qualifications.map((image) => {
      return (
        <div>
           <img src={image.src} alt={image.alt} /> 
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Carousel>
           {this.renderImages()} 
        </Carousel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    qualifications: state.qualifications
  };
}

export default connect(mapStateToProps)(FullbleedCarousel);
