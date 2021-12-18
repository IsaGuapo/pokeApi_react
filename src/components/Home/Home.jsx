import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import "./Home.css";

export default function App() {
//para formulario de la libreria
  const { register } = useForm();



const [pokemons, setPokemons] = useState([]);
// para poder recoger lo que entra por el formulario. Va almacenar el name de pokemon 
const [givePokemons, setGivePokemons] = useState([]);

//axios para traer info de la api Pokemon 
  useEffect(() => {
    const getPokemons = async () =>{
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${givePokemons}`);
    //para guardar la imagen y la mete en pokemons.Lo que me traigo del json de la api
        setPokemons(resp.data.sprites.front_default); 
    }
    getPokemons();
  },[givePokemons]);


//funcion para setear el nombre que entre del pkemon por formulario
  const handleSubmit =(e) =>{
    e.preventDefault();
    setGivePokemons(e.target.name.value) 

  }
  return (
    <form onSubmit={handleSubmit}>
      <input {...register("name")} />
      <input type="submit" />
      <ul>
        <li> <img src={pokemons} alt="" /></li>
      </ul>
    </form>
  );
}
