import React from "react";
import { Link } from "react-router-dom";

const Character = (props) => {
    return (
        <div className="col-12 col-md-4">
            <div className="card">
                <img src={props.image} class="thumb reserved-ratio" alt="Luke Skywalker"/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <Link 
                    to={`/characterdetail/${props.id}`} 
                    className="btn btn-primary">
                    Ir a algún lugar
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Character