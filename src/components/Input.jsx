
import './Input.css'

export const Input = ({ name, error, tipo, ast }) => {
    return (
        <div className="input">
            <p>{name}<span className='span'>{ast}</span></p>
            <label className='label'>
                <input type={tipo} />
            </label>
            <p className='error'>{error}</p>
        </div>
    )
}