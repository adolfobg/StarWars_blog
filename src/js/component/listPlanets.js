import React, {useState, useEffect} from "react";
import Planet from "./planet";

const ListPlanets = () => {
    const [planets, setPlanets] = useState([])
    
    useEffect (()=> {
        fetch("https://www.swapi.tech/api/planets/")
        .then(response => {
            return response.json()
        }).then(response => {
            setPlanets(response)        
        })
    }, [])

    return (
        <div className="row">
            <h3>Listado de Planetas</h3>
            {
                planets.map((planet)=>{
                    return <Character image={planet.image} name={planet.name}/>
                })
            }
            <div className="col-12 col-md-4">Planeta 1</div>
        </div>
    )
}

export default ListPlanets