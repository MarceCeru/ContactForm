
import './Input.css'

export const Input = ({ name, error, errorVisible, value, onChange, tipo, ast, height='50px'}) => {
    return (   
        <div className="input">
            <p>{name}<span className='span'>{ast}</span></p>
            <label className='label'>
                <input style={{height: height, border: errorVisible ? '1px solid var(--Red)' : null }} type={tipo} onChange={onChange} value={value} />
            </label>
            <p className='error' style={{display: errorVisible ? 'block' : 'none'}}>{error}</p>
        </div>
    )
}