import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";


const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <nav className="navbar bg-black">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid logoImg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
              alt="Bootstrap"
              width="90"
              height="90"
            />
          </Link>
          <div className="dropdown">
            <div className="dropdown-item-text">
              <button
                className="btn btn-primary btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-star"></i> Favorite Pokemons
                <span className="badge bg-danger ms-2">
                  {store.favorite.length}
                </span>
              </button>
              <ul className="dropdown-menu shadow-lg p-2">
                {store.favorite.length > 0 ? (
                  store.favorite.map((item, index) => (
                    <ul
                      style={{ borderRadius: "5px" }}
                      className="list-group-item d-flex justify-content-between align-items-center p-1 text-dark shadow m-1"
                      key={index}
                    >
                      <li className="dropdown-item-text">
                        <strong>{item}</strong>
                      </li>
                      <span>
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm shadow"
                          onClick={() => {
                            actions.removeFavorite(item);
                          }}
                        >
                          X
                        </button>
                      </span>
                    </ul>
                  ))
                ) : (
                  <li className="dropdown-item-text text-center text-secondary">
                    {" "}
                    No favorites{" "}
                  </li>
                )}
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
