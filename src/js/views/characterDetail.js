import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

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
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-thumbnail" alt="..."/>
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