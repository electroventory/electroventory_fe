import React from 'react';
import Form from './Form';

function onSubmitCallback(event) {
    event.preventDefault();
    console.log("POST /users");
};
const schema = {
    username: {
        controlId: "username",
        label: "Username",
        inputType: "text"
    },
    email: {
        controlId: "email",
        label: "Email address",
        inputType: "email"
    },
    password: {
        controlId: "password",
        label: "Enter a password",
        inputType: "password"
    },
    passwordConfirmation: {
        controlId: "passwordConfirmation",
        label: "Re-enter your password",
        inputType: "password"
    }
};

function SignUp() {

    return (
        <Form
            onSubmitCallback={onSubmitCallback}
            schema={schema}
            submitText="Sign up"
        />
    )
}

export default SignUp;