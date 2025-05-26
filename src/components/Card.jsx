
import './Card.css';
import React, { useEffect, useState } from 'react';
import { Input } from './Input';
import { InputRadio } from './input-radio';
import { InputCheckbox } from './input-checkbox';
import { Textarea } from './Textarea';
import { CardSuccess } from './Card-success';
import { InputSubmit } from './InputSubmit';

export const Card = () => {

    const [inputValue, setInputValue] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [tarea, setTarea] = useState('');
    const [checked, setChecked] = useState('');
    const [selected, setSelected] = useState(false);
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorNameVisible, setErrorNameVisible] = useState(false);
    const [errorMailVisible, setErrorMailVisible] = useState(false);
    const [errorOption, setErrorOption] = useState(false);
    const [errorTextarea, setErrorTextarea] = useState(false);
    const [errorCheck, setErrorCheck] = useState(false);
    const [successVisible, setSuccessVisible] = useState(false);
    //const [errorRadio, setErrorRadio] = useState(false);


    const handleNombreChange = (e) => {
        setInputValue(e.target.value);
        setErrorVisible(false);
        //    setSuccessVisible(false);
    };

    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
        setErrorNameVisible(false);
    };

    const handleMailChange = (e) => {
        setMail(e.target.value);
        setErrorMailVisible(false);
    };

    const handleCheckbox = (event) => {
        setChecked(event.target.checked);
        setErrorCheck(false);
    };

    const handleInputRadio = (event) => {
        setSelected(event.target.value);
    };

    function handleTextareaChange(event) {
        setTarea(event.target.value);
        setErrorTextarea(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const radioInputs = document.getElementsByName('radio2');
        const selected = Array.from(radioInputs).some((input) => input.checked);


        if (inputValue.trim() === '') {
            setErrorVisible(true);
        } else {
            setErrorVisible(false);
        }
        if (apellido.trim() === '') {
            setErrorNameVisible(true);
        } else {
            setErrorNameVisible(false);
        }
        if (mail.trim() === '') {
            setErrorMailVisible(true);
        } else {
            setErrorMailVisible(false);
        }
        if (!selected) {
            setErrorOption(true);
        } else {
            setErrorOption(false);
        }
        if (tarea.trim() === '') {
            setErrorTextarea(true);
        } else {
            setErrorTextarea(false);
        }
        if (!checked) {
            setErrorCheck(true);
        } else {
            setErrorCheck(false);
        } if (inputValue.trim() !== '' && apellido.trim() !== '' && mail.trim() !== '' && selected && tarea.trim() !== '' && checked) {
            setSuccessVisible(true);
            setInputValue('');
            setApellido('');
            setMail('');
            setTarea('');
            setChecked(false);
            setSelected(false);
        }
    };



    return (
        <>
            {successVisible && <CardSuccess />}
            < div className="card" >
                <h1>Contact Us</h1>
                <section>
                    <Input name="First Name" error="This field is required" tipo="text" errorVisible={errorVisible} value={inputValue} onChange={handleNombreChange} ast="  *" />
                    <Input name="Last Name" error="This field is required" tipo="text" ast="  *" errorVisible={errorNameVisible} value={apellido} onChange={handleApellidoChange} />
                </section>
                <Input name="Email Address" error="Please enter a valid email address" tipo="email" ast=" *" errorVisible={errorMailVisible} value={mail} onChange={handleMailChange} />
                <p className='name'>Query Type<span className='span'> *</span></p>
                <div className='radio'>
                    <InputRadio value="opcion1" checked={selected === 'opcion1'} option="General Enquiry" onChange={handleInputRadio} />
                    <InputRadio value="opcion2" checked={selected === 'opcion2'} option="Support Request" onChange={handleInputRadio} />
                </div>
                <p style={{ display: errorOption ? 'block' : 'none' }} className='radio-error'>Please select a Query Type</p>
                <Textarea errorVisible={errorTextarea} onChange={handleTextareaChange} value={tarea} />
                <InputCheckbox onChange={handleCheckbox} checked={checked} errorVisible={errorCheck} />
                <InputSubmit onClick={handleSubmit} />
            </div >
        </>

    )
}

