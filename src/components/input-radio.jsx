
import './Input-radio.css'
import imagen from '../assets/images/icon-radio-selected.svg'

export const InputRadio = ({option}) => {
    return (
            <div className='input-radio'>
                <label className='options'>
                    <span className='circle'><img src={imagen} /></span>
                    <input type="radio" name='radio'/>
                    <span className='option-name'>{option}</span>
                </label>
            </div>


    )
}