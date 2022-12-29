import React, {useContext}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Character = (props) => {
    const {store, actions} = useContext(Context)
    console.log(store.favorites)

    return (
        <div className="col-12 col-md-4">
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="thumb reserved-ratio" alt="Luke Skywalker"/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <Link 
                        to={`/characterdetail/${props.uid}`} 
                        className="btn btn-outline-primary">
                        Learn More!
                    </Link>
                    <button 
                    className="btn btn-warning float-end"
                    onClick={()=>{
                        store.favorites.includes(props.name)
                        ? actions.deleteFavourites(props.name)
                        : actions.addFavourites(props.name)
                    }
                    }>
                    <i 
                    className=
                    {
                        store.favorites.includes(props.name)
                        ?"fas fa-heart-o"
                        :"fas fa-heart"
                    }

                    ></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Character