
import './Card.css';
import { Input } from './Input';
import { InputRadio } from './input-radio';

export const Card = () => {
    return (
        < div className="card" >
            <h1>Contact Us</h1>
            <Input name="First Name" error="This field is required" tipo="text" ast="  *" />
            <Input name="Last Name" error="This field is required" tipo="text" ast="  *" />
            <Input name="Email Address" error="Please enter a valid email address" tipo="email"  />
            <InputRadio name="Query Type" ast="  *" option="General Enquiry"/>
        </div >
    )
}

