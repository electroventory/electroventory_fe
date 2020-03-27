import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function handleSubmit(event) {
    event.preventDefault();
    console.log("POST /users");
};

function SignUp() {

    return (
        <>
            <h5>Create a new user</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" />
                    <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"/>
                    <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                    <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="passwordConfirmation">
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>
        </>
    )
}

export default SignUp;