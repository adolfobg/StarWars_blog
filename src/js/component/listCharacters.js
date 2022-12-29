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
        <div className="container">
            <h3>Characters</h3>
            <div className="container horizontal-scrollable">
                <div className="row flex-row flex-nowrap overflow-auto" id="Character">
                {
                characters && characters.map((character, index)=>{
                    return <Character 
                    name={character.name}
                    key={character.uid}
                    uid={character.uid}
                    index={index}                 />
                })
                }
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
                </div>
            </div>
        </div>
    )
}

export default ListCharacters