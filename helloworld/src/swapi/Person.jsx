import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { apiGet } from "../utils/api";



export function Person() {

    const [person, setPerson] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        async function fetchPerson() {
            try {
                const data = await apiGet("people/" + id);
                setPerson(data);
                console.log(data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchPerson();
    }, [id])

    if (!person) {
        return <h1>Načítám...</h1>
    }

    return (
        <div className="container text-center">
            <h2>name: {person.name}</h2>
            <h3>height: {person.height}</h3>
            <h4>mass: {person.mass}</h4>
            <button className="btn btn-warning" onClick={ () => navigate(-1) }>ZPĚT</button>
            <button onClick={ () => navigate("/people")}>people</button>
            <button onClick={ () => navigate("/people/" + (+id + 1))}>NEXT</button>
        </div>
    )
}