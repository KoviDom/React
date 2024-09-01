

export function NumberInput({  name, label, value, onChange }) {


    return (

        <div>
            <label htmlFor={name} className="form-label">
                {label}
                <input 
                    className="form-control"
                    id={name}
                    value={value}
                    type="number"
                    name={name}
                    onChange={onChange}
                    required
                />
            </label>
        </div>

    )
}