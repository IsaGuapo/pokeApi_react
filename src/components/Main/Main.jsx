import React from "react";
import Home from '../Home';
import Pokemons from '../Pokemons';
import Pokebounce from '../Pokebounce';
import {Route, Routes } from 'react-router-dom'//Para uso de todas las rutas

const Main = () => {
  return <main>
    <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/pokemons" element ={<Pokemons/>} />
          <Route path="/pokebounce" element ={<Pokebounce/>} />  
    </Routes>  
    </main>;
};

export default Main;
