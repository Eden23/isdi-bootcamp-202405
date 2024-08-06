import './Input.css';

export default function Input({ id, defaultValue, type = 'text', name, placeholder, pattern, required = false }) {
    return <input className="Input" id={id} defaultValue={defaultValue} pattern={pattern} type={type} name={name} placeholder={placeholder} required={required} />
}