import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  selectFlat = () => {
    // get updateSelectedFlat method from parent component
    this.props.updateSelectedFlat(this.props.id);
  }

  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("${this.props.imageUrl}")`
    };

    let divClasses = 'card';
    if (this.props.selected) {
      divClasses += ' active';
    }

    return (
      <div className={divClasses} style={style}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.selectFlat}></a>
      </div>
    );
  }

}

export default Flat;
