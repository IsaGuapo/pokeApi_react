import React from "react";


const Cardpokebounce = (props) => {
  return <div>
      <h3>{props.pokemons.name}</h3>
      <img src={props.pokemons.img} alt="" />
  </div>;
};

export default Cardpokebounce;
