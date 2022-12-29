import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const FavDropdown= () => {
  const {store, actions} = useContext(Context)

  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Favoritos
      </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {
        !store.favorites ? (
          <li>no hay favoritos</li>
        ) : ("")
        }
        {
          store.favorites.map((fav, i)=>(
            <li>{fav}
            <button className="btn" >
                  <i className="far fa-trash-alt" onClick={() => deleteFavourites(nombre)}/>
            </button>
            </li>
          ))
        }
        </ul>
    </div>
    );
  };


export default FavDropdown;
