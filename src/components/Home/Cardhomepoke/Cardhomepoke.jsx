import React from "react";
import './Cardhomepoke.css'

const Cardhomepoke = (props) => {
  return <div>
      <h3>{props.pokemons.name}</h3>
      <img src={props.pokemons.img} alt="" />
  </div>;
};

export default Cardhomepoke;
