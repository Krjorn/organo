import './TextField.css';

const TextField = (props) => {
    const onType = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder} value={props.value} onChange={onType} />
        </div>
    )
}

export default TextField;