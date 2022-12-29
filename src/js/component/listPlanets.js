import React, {useState, useEffect} from "react";
import Planet from "./planet";

const ListPlanets = () => {
    const [planets, setPlanets] = useState([])
    
    
    useEffect (()=> {
        fetch("https://www.swapi.tech/api/planets/")
        .then(response => {
            return response.json()
        }).then(response => {
            setPlanets(response.results)        
        })
    }, [])

    return (
        <div className="container testimonial-group">
            <h3>Planets</h3>
            <div className="container horizontal-scrollable">
                <div className="row flex-row flex-nowrap overflow-auto" id="Character">
                {
                planets && planets.map((planet)=>{
                    return <Planet
                    name={planet.name}
                    key={planet.uid}
                    uid={planet.uid}
                    />
                })
                }
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
                </div>
            </div>
        </div>
    )
}

export default ListPlanets