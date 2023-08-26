import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
        <img alt={name} 
        src={`https://robohash.org/${id}?size=200x200`} 
        />
        <h2 key={id}>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
