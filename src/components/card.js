import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Context } from "../store/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [isFavorited, setIsFavorited] = useState(
    store.favorite.includes(props.name)
  );
  const fav = (
    <FontAwesomeIcon icon={faHeart} color={isFavorited ? "red" : "white"} />
  );

  const handleSubmit = () => {
    if (isFavorited) {
      actions.removeFavorite(props.name);
    } else {
      actions.addFavorite(props.name);
    }
  };

  useEffect(() => {
    setIsFavorited(store.favorite.includes(props.name));
  }, [store.favorite, props.name]);

  return (
    <div>
      <div className="card m-3 border border-dark bg-warning-subtle">
        <div
          
        >
          <h5 className="m-1 text-center"># {props.id}</h5>
        </div>

        <div
          style={{ borderRadius: '5px' }}
          className="border border-dark bg-light m-3 shadow-lg d-flex justify-content-center align-items-center+"
        >
          <img
            className="imgContainer bg-light imgLarge "
            src={props.img}
            alt={props.name}
          />
        </div>

        <div className="card-body">
          <h3 className="card-title text-center">{props.name}</h3>


          <div
            style={{ borderRadius: '5px' }}
            className="p-2 d-flex flex-column"
          >
            <Link
              to={'pokemon/' + props.number}
              className="btn btn-dark border border-dark shadow-lg mb-2"
            >
              Details
            </Link>

            <button
              to="#"
              className="btn btn-success border border-dark shadow-lg"
              onClick={handleSubmit}
            >
              {fav}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
