import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import imagen from "../../img/800x600.png";

const CharacterDetail = () => {
    const params = useParams()
    const [character, setCharacter] = useState({})

    useEffect (()=> {
        fetch(`https://www.swapi.tech/api/people/${params.id}`)
        .then(response => {
            return response.json()
        }).then(response => {
            setCharacter(response.result.properties)        
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
                    <h1 className="text-center">Luke Skywalker</h1>
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
                        character ?             
                                <ul className="row justify-content-evenly" id="caracteristicas">
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Name</strong></p>
                                    <p className="fs-5">{character.name}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Birth Year</strong></p>
                                    <p className="fs-5">{character.birth_year}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Gender</strong></p>
                                    <p className="fs-5">{character.gender}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Height</strong></p>
                                    <p className="fs-5">{character.height}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Skin color</strong></p>
                                    <p className="fs-5">{character.skin_color}</p>
                                </li>
                                <li className="col-2 text-center">
                                    <p className="fs-5"><strong>Eye Color</strong></p>
                                    <p className="fs-5">{character.eye_color}</p>
                                </li>
                            </ul> : <h3>Cargando...</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail