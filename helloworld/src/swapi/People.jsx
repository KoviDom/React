import { useEffect, useState } from "react"
import { apiGet } from "../utils/api";
import { Link } from "react-router-dom";



export function People() {

    const [people, setPeople] = useState(null);


    //vola se vždy na konci nebo je na konci, naposled
    //super na volani serveru
    useEffect( () => {

        //fetch - dotahovani nejakych dat
        async function fetchPeople() {
            try {
                const data = await apiGet("people");
                setPeople(data.results);
                console.log(data.results);
            } catch(err) {
                console.error(err);
            }
        }
        fetchPeople();
        setTimeout( () => {
            fetchPeople();
        }, 1000)
    }, []);

    if (!people) {
        return (
        <h1 className="spinner-border" role="status">?</h1>
    )
    }
    
    //vypise seznam osob
    return (
        <div className="container">
            <div className="row justify-content-center">
                {people.map((person, index) => (
                    <div key={index + 1} className="col-3 border border-3 m-2 text-center">
                        <h3 className="text-success">
                            <Link to={"/people/" + (index + 1)}>
                                name: {person.name}
                            </Link>
                        </h3>
                        <h4>height: {person.height}</h4>
                        <h5>mass: {person.mass}</h5>
                    </div>
                ))}
            </div>
        </div>
    )

}