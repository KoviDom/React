import { useEffect, useState } from "react"


export function RickMorty() {

    const [rick, setRick] = useState(null);

    useEffect ( () => {
        async function fetchLocation() {
            const response = await fetch("https://rickandmortyapi.com/api/location");
            if (response.ok) {
                const data = response.json();
                setRick(data.results);
                console.log(data);
            } else {
                throw new Error("chyba!!!");
            }
        }
        fetchLocation();
    }, [])

    if (!rick) {
        return <p>načítám...</p>
    }

    return (
        <div>
            {rick.map((data, index) => (
                <div key={index + 1}>
                    <h1>name: {data.name}</h1>
                    <h2>type: {data.type}</h2>
                    <h3>dimension: {data.dimension}</h3>
                </div>
            ))}
        </div>
    )
}