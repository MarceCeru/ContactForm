
import './Input-radio.css'

export const InputRadio = ({ name, ast, option, error}) => {
    return (
        <div className='input-radio'>
            <p>{name}<span className='span'>{ast}</span></p>
            <label className='options'>
                <span className='circle'></span>
                <input type="radio" />
                <span className='option-name'>{option}</span>
            </label>
            <p className='error'>{error}</p>
        </div>

    )
}