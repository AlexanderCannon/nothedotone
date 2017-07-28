import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel'

class FullbleedCarousel extends Component {
  renderImages() {
    return this.props.qualifications.map((image) => {
      return (
        <div key={image.id} className="carousel__fullbleed-container">
          <img className="carousel__fullbleed-image" src={image.src} alt={image.alt} width="100%" height="100%"/>
          <h1>{image.institution}</h1>hi
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
