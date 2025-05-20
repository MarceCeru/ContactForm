
import './Input.css'

export const Input = ({ name, error, tipo, ast, height='50px'}) => {
    return (   
        <div className="input">
            <p>{name}<span className='span'>{ast}</span></p>
            <label className='label'>
                <input style={{height}} type={tipo}/>
            </label>
            <p className='error'>{error}</p>
        </div>
    )
}