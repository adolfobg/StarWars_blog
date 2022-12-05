import React, {useState, useEffect} from "react";
import Character from "./character";

const ListCharacters = () => {
    const [characters, setCharacters] = useState()
    
    useEffect (()=> {
        fetch("https://www.swapi.tech/api/people/")
        .then(response => {
            return response.json()
        }).then(response => {
            setCharacters(response.results)        
        })
    }, [])

    return (
        <div className="row">
            <h3>Listado de Personajes</h3>
            {
                characters && characters.map((character)=>{
                    return <Character image={character.image} name={character.name}/>
                })
            }
            <div className="col-12 col-md-4">Personaje 1</div>
        </div>
    )
}

export default ListCharacters