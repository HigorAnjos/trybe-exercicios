import React from 'react';
import './../Componente/Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className='card-content'>
        <div>
          <span>{this.props.name}</span>
          <br />
          <span>{this.props.type}</span>
          <br />
          <span>{this.props.Weight}</span> {this.props.measurementUnit}
        </div>
        <img src={this.props.img} alt='No image'></img>
      </div>
    )
  }
}

export default Card