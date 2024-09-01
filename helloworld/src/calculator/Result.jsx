


export function Result({ value }) {

    if (value !== null)
        return <h2 className="text-danger">Výsledek: {value}</h2>

    return <h2>Výsledek: ?</h2>

}