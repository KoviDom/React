

export const operations = [
    { value: "+", label: "sčítání" },
    { value: "-", label: "odečítání" },
    { value: "*", label: "násobení" },
    { value: "/", label: "dělení" }
];

export function calculate(a, b, operation) {

    switch(operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;   
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return null;
    }
    
}