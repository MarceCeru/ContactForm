
import './Input-checkbox.css';
import tildeVerde from '../assets/images/tildeVerde.svg';

export const InputCheckbox = ({ checked, onChange, errorVisible }) => (
    <>
        <div className="checkbox">
            <label
            className={`check-style ${checked ? 'check-style2' : ''}`}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
            </label>
            <p>I consent to being contacted by the team <span> *</span></p>
        </div>
        <div style={{ display: errorVisible ? 'block' : '' }} className="error">To submit this form, please consent to being contacted</div>
    </>

);
