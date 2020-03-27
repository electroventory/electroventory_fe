import React from 'react';
import BootStrapForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function buildFields(schema) {
    const fieldComponents = Object.values(schema).map((field, index) => {
        return (
            <BootStrapForm.Group controlId={field.controlId} key={index}>
                <BootStrapForm.Label>{field.label}</BootStrapForm.Label>
                <BootStrapForm.Control type={field.inputType} />
            </BootStrapForm.Group>
        )
    });

    return fieldComponents;
}

function Form(props) {
    return (
        <>
            <h5>{props.title}</h5>
            <BootStrapForm
                onSubmit={props.onSubmitCallback}
            >
                {buildFields(props.schema)}
                <Button variant="primary" type="submit">
                    {props.submitText}
                </Button>
            </BootStrapForm>
        </>
    )
}

export default Form;