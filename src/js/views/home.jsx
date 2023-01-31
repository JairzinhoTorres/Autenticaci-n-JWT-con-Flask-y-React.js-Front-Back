import React, { useEffect, useState,useContext } from "react";
import "../../styles/home.css";
import { Characters } from "../component/cardCharacters.jsx";
import { Vehicle } from "../component/cardVehicle.jsx";
import { Planets } from "../component/cardPlanets.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const {store}=useContext(Context)
  // const [vehiculos, setVehiculos] = useState([]);
  // const [planetas, setPlanetas] = useState([]);

  // function obtenerInfoPersonajes() {
  //   fetch("https://swapi.dev/api/people/")
  //     .then((res) => res.json())
  //     .then((data) => setPersonajes(data.results))
  //     .catch((err) => console.error(err));
  // }

  // function obtenerInfoVehiculos() {
  //   fetch("https://swapi.dev/api/vehicles/")
  //     .then((res) => res.json())
  //     .then((data) => setVehiculos(data.results))
  //     .catch((err) => console.error(err));
  // }
  // function obtenerInfoPlanetas() {
  //   fetch("https://swapi.dev/api/planets/")
  //     .then((res) => res.json())
  //     .then((data) => setPlanetas(data.results))
  //     .catch((err) => console.error(err));
  // }
  

  // useEffect(() => {
  //   // obtenerInfoPersonajes();
	// // obtenerInfoVehiculos();
	// // obtenerInfoPlanetas();
  // }, []);

  return (

    
    // aca se trae a la card de personajes
    <div lassName="container" >

    <div className="">
    <h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>Characters</strong></h1>		
    <div className= "d-flex">
    <div className="d-flex scrollable">
      {store.personajes.map((cadaPersonaje, index) => (
        <Characters
          key={index}
          id={index+1}
          nombrePersonaje={cadaPersonaje.name}
          generoPersonaje={cadaPersonaje.gender}
		  ColorOjosPersonaje={cadaPersonaje.eye_color}
        />
      ))}
	  </div>
    </div>
    </div>
    {/* aca se trae la card de vehiculos */}
	  <div className="">
    <h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>VEHICULOS</strong></h1>		
    <div className= "d-flex">
    <div className="d-flex scrollable">
      {store.vehiculos.map((cadaVehiculo, index) => (
        <Vehicle
          key={index}
          id={index+1}
          nombreVehiculo={cadaVehiculo.name}
          modeloVehiculo={cadaVehiculo.model}
        />
      ))}
      </div>
	  </div>
    </div>
<div className="">
<h1 className=" rounded-3 text-white text-center bg-black border-white p-2 border border-2"><strong>PLANETAS</strong></h1>	
<div className= "d-flex">
<div className="d-flex scrollable">
	  {store.planetas.map((cadaPlaneta, index) => (
        <Planets
          key={index}
          id={index+1}
          nombrePlaneta={cadaPlaneta.name}
          diametroPlaneta={cadaPlaneta.diameter}
		  climaPlaneta={cadaPlaneta.climate}
        />
      ))}
	  </div>
    </div>
    </div>
    </div>

  );
};
