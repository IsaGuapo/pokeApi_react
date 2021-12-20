import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import "./Home.css";
import Cardhomepoke from './Cardhomepoke';

export default function Home() {
//para formulario de la libreria
  const { register } = useForm();


//useState es mi estado inicial
const [pokemons, setPokemons] = useState([]);
// para poder recoger lo que entra por el formulario. Va almacenar el name de pokemon 
// SetgivePokemos el que actualiza los datos
const [givePokemons, setGivePokemons] = useState("");

//axios para traer info de la api Pokemon 
  useEffect(() => {
    const getPokemons = async () =>{
      try{
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${givePokemons}`);
        //para guardar la imagen y la mete en pokemons.Lo que me traigo del json de la api
            setPokemons({
              img: resp.data.sprites.front_default,
              name: resp.data.name
              }); 
        } catch (e){
          setPokemons([])  
        } 
      }
    
    getPokemons();
    },[givePokemons]);


//funcion para setear el nombre que entre del pkemon por formulario
  const handleSubmit =(e) =>{
    e.preventDefault();
    setGivePokemons(e.target.name.value) 
    //para que vacie el input una vez demos al boton enviar
    e.target.name.value=""
  } 

  return (
    <div className='div_container'>
      <h5> Search your Pokemon </h5>
      <form onSubmit={handleSubmit}>
        <input {...register("name")} />
        <input type="submit" />
        {givePokemons?<Cardhomepoke pokemons={pokemons} /> : ""}
      </form>
    </div>
    
  );
}
