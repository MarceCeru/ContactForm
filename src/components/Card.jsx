
import './Card.css';
import { Input } from './Input';
import { InputRadio } from './input-radio';
import { InputCheckbox } from './input-checkbox';
import { Textarea } from './Textarea';
import { CardSuccess } from './Card-success';
import { InputSubmit } from './InputSubmit';

export const Card = () => {
    return (
        <>
            <CardSuccess />
            < div className="card" >
                <h1>Contact Us</h1>
                <section>
                    <Input name="First Name" error="This field is required" tipo="text" ast="  *" />
                    <Input name="Last Name" error="This field is required" tipo="text" ast="  *" />
                </section>
                <Input name="Email Address" error="Please enter a valid email address" tipo="email" ast=" *" />
                <p className='name'>Query Type<span className='span'> *</span></p>
                <div className='radio'>
                    <InputRadio option="General Enquiry" />
                    <InputRadio option="Support Request" />
                </div>
                <p className='radio-error'>Please select a Query Type</p>
                <Textarea />
                <InputCheckbox />
                <InputSubmit/>
            </div >
        </>

    )
}

