import React from 'react';

import Container from '../Container/Container';
import Form from '../Form/Form';

import classes from './Contact.module.scss';

const Contact = ({ main, description }) => (
    <div className = { classes.Contact }>
        <Container>
            <div className = { classes.Wrapper }>
                <div className = { classes.Info }>
                    <h1 className = { classes.Main }>{ main }</h1>
                    <p className = { classes.Description }>{ description }</p>
                </div>

                <div className = { classes.Form }>
                    <Form
                        data = {[
                            { name: 'name', label: 'Full name', type: 'text', required: true },
                            { name: 'email', label: 'Email', type: 'email', required: true },
                            { name: 'phone', label: 'Phone', type: 'tel', required: false }
                        ]}
                        buttonText = 'Submit'
                        onSubmit = { (values) => console.log(values) } />
                </div>
            </div>
        </Container>
    </div>
);

export default Contact;
