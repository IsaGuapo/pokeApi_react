import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

import Cardpokebounce from './Cardpokebounce';
import { useDebounce } from "use-debounce";

const Pokebounce = () => {

  const { register } = useForm();
  const [pokemons, setPokemons] = useState([]);
  const [givePokemons, setGivePokemons] = useState("");
  //debounce
  const [debouncedText] = useDebounce(givePokemons, 2000);



  useEffect(() => {
    const getPokemons = async () =>{
      try {
        if (debouncedText !== "") {
          if(pokemons.some(pokemon => pokemon.name === givePokemons)){
              alert("Pokemon already exists")
        // Petición a la PokeApi 
      } else {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedText}`)
        // seteamos el objeto del pokemon 
          setPokemons([...pokemons, {
            name: resp.data.name,
            img: resp.data.sprites.front_default,
          
          }])}
        }
      } catch (e) {
        setPokemons([])
        console.log("This pokemon does not exist or the field is empty")
      }
    } 
    getPokemons()
  }, [debouncedText])



  const paintPokemons = () => {
    return pokemons.map((card, i) => <Cardpokebounce pokemons={card} key={i} />)
  }

  return (
    <div className='div_container'>
      <h5> Search your Pokemon </h5>
      <form>
        <input {...register("name")} onChange={(e) => {
          // if (e.target.value != null) {
            setGivePokemons(e.target.value)
          // }
        }} />
      </form>
      {paintPokemons()}
    </div>

  );
}

export default Pokebounce;