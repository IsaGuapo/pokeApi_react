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
  const [debouncedText] = useDebounce(givePokemons, 1000);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedText}`);
        setPokemons([...pokemons,
        {
          img: resp.data.sprites.front_default,
          name: resp.data.name
        }])
      } catch (e) {
        setPokemons([])
      }
    }
    getPokemons();

  }, [debouncedText]); 
  console.log(pokemons)



  const paintPokemons = () => {
    return pokemons.map((card, i) => <Cardpokebounce pokemons={card} key={i} />)
  }

  return (
    <div className='div_container'>
      <h5> Search your Pokemon </h5>
      <form>
        <input {...register("name")} onChange={(e) => {
          setGivePokemons(e.target.value);
        }} />
        {paintPokemons()}
      </form>
    </div>

  );
}

export default Pokebounce;