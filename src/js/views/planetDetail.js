import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import imagen from "../../img/800x600.png";

const PlanetDetail = () => {
    const params = useParams()
    const [planet, setPlanet] = useState({})

    useEffect (()=> {
        fetch(`https://www.swapi.tech/api/planets/${params.id}`)
        .then(response => {
            return response.json()
        }).then(response => {
            setPlanet(response.result.properties)        
        })
    }, [])

    return (
        <div className="container">
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-6">
                    <img src={imagen} class="img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-6">
                    <h1 className="text-center">Tatooine</h1>
                    <p className="lead text-center fs-3"><strong>Sed ut erspiciatis unde omnis iste natus error sit voluptatem accusantium dolloremque laudantium, totam rem aperiam, eaque ipsa queae ab illo, inventore veritatis et quasi architecto beatae vitae dicta sun explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</strong></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr id="separador"></hr>
            </div>
            <div className="container">
                <div className="row justify-content-evenly">
                    {
                        planet ?             
                                <ul className="row justify-content-evenly" id="caracteristicas">
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Name</strong></p>
                                    <p className="fs-5">{planet.name}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Climate</strong></p>
                                    <p className="fs-5">{planet.climate}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Population</strong></p>
                                    <p className="fs-5">{planet.population}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Orbital Period</strong></p>
                                    <p className="fs-5">{planet.orbital_period}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Rotation Period</strong></p>
                                    <p className="fs-5">{planet.rotation_period}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Diameter</strong></p>
                                    <p className="fs-5">{planet.diameter}</p>
                                </li>
                            </ul> : <h3>Cargando...</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default PlanetDetail