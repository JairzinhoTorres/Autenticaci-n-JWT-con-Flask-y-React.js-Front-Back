
import React,{useEffect} from "react";
import { Link, useParams} from "react-router-dom";


export const Planets = ({ nombrePlaneta, diametroPlaneta, climaPlaneta,id}) => {

    return ( 
    <div className="container">
    <div className="col m-4 d-flex">
    <div className="card H-100" style={{ width: "18rem" }}>
      <img
        src={"https://starwars-visualguide.com/assets/img/planets/"+(id)+".jpg"}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> {nombrePlaneta} </h5>
        <p className="card-text"> {diametroPlaneta} </p>
        <p className="card-text"> {climaPlaneta} </p>
        <p className="card-text mt-2"> 30, 00 US$. </p>
        <Link to={"/viewPlanets/"+id} className="btn bg-dark text-white"> Detalles del planeta:{id}</Link>
        <button className="btn bg-warning text-dark border border-0 mt-3" onClick={()=>actions.agregarFavorito()}>
          <i className="fa fa-heart"> </i>
          </button>
      </div>
    </div>
    </div>
    </div>
  );
};

