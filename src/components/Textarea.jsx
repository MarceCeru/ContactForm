
import './Textarea.css';

export const Textarea = () => {
    return (
        <div>
            <p className='name-textarea'>Message <span>  *</span></p>
            <textarea className='textarea' name="textarea" id=""></textarea>
            <p className='error-textarea'>This field is required</p>
        </div>

    )
}