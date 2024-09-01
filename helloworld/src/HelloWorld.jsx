//komponenta diky tomu jsx vime, ze je to a je to obycejna js funkce!

import { useState } from "react"

//vraci jen jednu hodnotu
export function HelloWorld({text, name}) {

    //kdyby v parametru bylo props
    //const text = props.text;
    //const name = props.name;

    //vnitrni data komponenty, ktera se meni a my na zmenu chceme reagovat
    const [jmeno, setJmeno] = useState(null);

    //vetsinou se takovy maji nazev handle***, obsluha udalosti = onChange
    function handleChangeName(e) {
        setJmeno(e.target.value);
    }

    return (

        <div>
            <h1 className="text-warning">{name} {text}!</h1>
            <h3>Jméno: {jmeno}</h3>
            <input type="text" onChange={handleChangeName} />
        </div>

    )

};

