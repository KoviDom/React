


export async function apiGet(endpoint) {

    const response = await fetch(`https://swapi.dev/api/${endpoint}`);
    if (response.ok) {
        const data = response.json();
        return data;
    } else {
        throw new Error("chyba!!!");
    }
    
}