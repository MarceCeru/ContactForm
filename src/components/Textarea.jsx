
import './Textarea.css';

export const Textarea = ({errorVisible, value, onChange}) => {
    return (
        <div>
            <p className='name-textarea'>Message <span>  *</span></p>
            <textarea
                className='textarea'
                style={{border: errorVisible ? '1px solid red' : null }}
                value={value}
                onChange={onChange}
                name="textarea"
                id=""
            ></textarea>
            <p style={{display: errorVisible ? 'block' : 'none'}} className='error-textarea'>
                This field is required
            </p>
        </div>
    )
}