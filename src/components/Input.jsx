
import './Input.css'

export const Input = ({ name, error, tipo, ast, height='50px', id='e'}) => {
    return (   
        <div className="input">
            <p>{name}<span className='span'>{ast}</span></p>
            <label className='label'>
                <input style={{height}} type={tipo} id={id} />
            </label>
            <p className='error'>{error}</p>
        </div>
    )
}