import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Vehicle = ({ modeloVehiculo, nombreVehiculo, id }) => {
  return (
    <div className="container">
      <div className="col m-4 d-flex">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              "https://starwars-visualguide.com/assets/img/vehicles/" +
              id +
              ".jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {nombreVehiculo} </h5>
            <p className="card-text"> {modeloVehiculo} </p>
            <p className="card-text mt-2"> 20, 00 US$. </p>
            <Link to={"/viewVehicle/" + id} className="btn bg-dark text-white">
              {" "}
              Detalles de los viehiculos:{id}
            </Link>
            <button
              className="btn bg-warning text-dark border border-0 mt-3"
              onClick={() => actions.agregarFavorito()}
            >
              <i className="fa fa-heart"> </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
