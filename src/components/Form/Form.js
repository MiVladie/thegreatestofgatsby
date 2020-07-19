import React, { useState } from 'react';

import { isFormValid } from '../../util/formValidation';

import Button from '../UI/Button/Button';

import classes from './Form.module.scss';

const Form = ({ data, buttonText, onSubmit }) => {
    const [values, setValues] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        
        let err = isFormValid(data, values);

        if(err == null) {
            onSubmit(values);
        } else {
            console.log(err);
        }
    };

    return (
        <form className = { classes.Form }>
            { data.map(field =>
                <div className = { classes.Field } key = { field.name }>
                    <label htmlFor = { field.name }>{ field.label }</label>

                    <input
                        name = { field.name }
                        type = { field.type }
                        value = { values != null && values[field.name] != null ? values[field.name] : '' }
                        onChange = { (event) => setValues({...values, [field.name]: event.target.value }) }
                        key = { field.name } />
                </div>
            )}

            <Button onClick = { (event) => submitHandler(event) }>{ buttonText }</Button>
        </form>
    );
};

export default Form;
