
import './Input-checkbox.css'

export const InputCheckbox = () => {
    return (
        <>
            <label className="checkbox">
                <label className='check-style'><input type="checkbox" /></label>
                <p>I consent to being contacted by the team<span>  *</span></p>
            </label>
            <p className='error'>  To submit this form, please consent to being contacted</p>
        </>

    )
}// 