import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

import Cardpoke from './Cardpoke';


export default function Pokemons() {
//para formulario de la libreria
    const { register } = useForm();
  
  
//Pokemos y givePokemons son mis state en Hooks . Set...es lo que actualiza mi state
  const [pokemons, setPokemons] = useState([]);
// para poder recoger lo que entra por el formulario. Va almacenar el name de pokemon 
  const [givePokemons, setGivePokemons] = useState("");
  
//axios para traer info de la api Pokemon.esta funcion hace la precarga y cuando entra una actualizacion la vuelve a cargar.En este caso con el nombre del pokemon
useEffect(() => {
  const getPokemons = async () =>{
    try{
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${givePokemons}`);
      //para guardar la imagen y la mete en pokemons.Lo que me traigo del json de la api
    //Con el spread
          setPokemons([...pokemons,
            {
              img: resp.data.sprites.front_default,
              name: resp.data.name
              }])
      } catch (e){
        setPokemons([])  
      } 
    }
  getPokemons();
  },[givePokemons]); //ejecuta y actualiza el usseEffect
  console.log(pokemons)

//funcion para setear el nombre que entre del pkemon por formulario
const handleSubmit =(e) =>{
  e.preventDefault();
  setGivePokemons(e.target.name.value) 
  //para que vacie el input una vez demos al boton enviar
  e.target.name.value=""
} 


const paintPokemons = () => {
  return pokemons.map((card, i) => <Cardpoke pokemons={card}  key={i} />)
}

return (
  <div className='div_container'>
    <h5> Search your Pokemon </h5>
    <form onSubmit={handleSubmit}>
      <input {...register("name")} />
      <input type="submit" />
      {paintPokemons()}
    </form>
  </div>
  
);
}