import { useState } from "react";
import react from "react";

const card = () => {
    

    return (
        <>
            <div className="col-12 col-md-4">
                <div className="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top" alt="Star-Wars logo" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}