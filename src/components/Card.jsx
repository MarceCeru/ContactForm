
import './Card.css';
import { Input } from './Input';
import { InputRadio } from './input-radio';
import { InputCheckbox } from './input-checkbox';
import { Button } from './Button';

export const Card = () => {
    return (
        < div className="card" >
            <h1>Contact Us</h1>
            <Input name="First Name" error="This field is required" tipo="text" ast="  *" />
            <Input name="Last Name" error="This field is required" tipo="text" ast="  *" />
            <Input name="Email Address" error="Please enter a valid email address" tipo="email" ast=" *" />
            <InputRadio name="Query Type" ast="  *" option="General Enquiry" />
            <InputRadio option="Support Request" error="
             This field is required"/>
            <Input name=" Message" tipo='text' ast="  *" height='240px' error="This field is required" />
            <InputCheckbox />
            <Button />
        </div >
    )
}

