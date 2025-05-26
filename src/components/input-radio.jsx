
import './Input-radio.css'
import imagen from '../assets/images/icon-radio-selected.svg'

export const InputRadio = ({option, checked, onChange, value}) => {
    return (
            <div className='input-radio'>
                <label className='options'>
                    <span className={`circle ${checked ? 'selected' : ''}`}><img src={imagen} /></span>
                    <input type="radio" checked={checked} onChange={onChange} value={value} name='radio2'/>
                    <span className='option-name'>{option}</span>
                </label>
            </div>


    )
}