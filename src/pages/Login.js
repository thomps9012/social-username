import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './CSS/Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    function validateForm() {
        // set in validation to ensure that password is complex enough and email is an actual email
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Col sm={9}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label class="email">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text 
                    class="share"
                    className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label class="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check class="checkbox" type="checkbox" label="Remember Me" />
                </Form.Group>
                
                <Button variant="primary" size="lg" type="submit" disable={!validateForm()}>
                    Submit
                </Button>
                </Col>
            </Form>
        </div>
    );
}