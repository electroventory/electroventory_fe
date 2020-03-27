import React from 'react';
import Form from './Form';


function onSubmitCallback(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    console.log("POST /login", username, password);
};
const schema = {
    username: {
        controlId: "username",
        label: "Username",
        inputType: "text"
    },
    password: {
        controlId: "password",
        label: "Password",
        inputType: "password"
    }
};

function LogIn() {
    return (
        <Form
            onSubmitCallback={onSubmitCallback}
            schema={schema}
            submitText="Log In"
        />
    )
}

export default LogIn;