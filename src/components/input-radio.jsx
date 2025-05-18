
import './Input-radio.css'
import imagen from '../assets/images/icon-radio-selected.svg'

export const InputRadio = ({ name, ast, option, error}) => {
    return (
        <div className='input-radio'>
            <p className='name'>{name}<span className='span'>{ast}</span></p>
            <label className='options'>
                <span className='circle'><img src={imagen} /></span>
                <input type="radio" />
                <span className='option-name'>{option}</span>
            </label>
            <p className='radio-error'>{error}</p>
        </div>
    )
}