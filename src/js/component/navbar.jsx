import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store,actions } = useContext(Context);
  console.log(store.favoritos);
  return (
    <nav className="navbar navbar-light bg-black mb-3">
      <Link to="/">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/desktop-retina_6b8e649c.png"
          className="card-img-top "
          alt="..."
          style={{ width: "218px" }}
        />
      </Link>
      <div>
        <img src="https://media2.giphy.com/media/aIR1vdOsUuNhe/giphy.gif" />
      </div>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu">
            {store.favoritos.map((item) => (
              <li key={item}>
                {item}
                <button className="btn" onClick={() => actions.eliminarFavorito(item)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
