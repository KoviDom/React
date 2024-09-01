import { useState } from "react";
import { NumberInput } from "./NumberInput";
import { Result } from "./Result";
import Select from "react-select";
import { calculate, operations } from "../utils/calculate";


export function CalculatorForm ({ title }) {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const [result, setResult] = useState(0);

    function handleChangeA(event) {
        setA(event.target.value);
    }

    function handleChangeB(e) {
        setB(e.target.value);
    }

    
    //console.log("číslo a:" + a);
    //console.log("číslo b:" + b);
    console.log("Operace: " + operation.value);

    function handleSubmit(e) {
        e.preventDefault(); //zákaz formulare?
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const result = calculate(numA, numB, operation.value);
        setResult(result);
    }

    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <NumberInput 
                    name={"a"}
                    label={"První číslo: "}
                    onChange={handleChangeA}
                />
                <NumberInput 
                    name={"b"}
                    label={"Druhé číslo: "}
                    onChange={handleChangeB}
                />
                <Select options={operations} value={operation} onChange={setOperation} />
                <input type="submit" value={"Vypočítej"} className="btn btn-outline-primary" />
            </form>
            <Result value={result} />
        </div>
    )
}