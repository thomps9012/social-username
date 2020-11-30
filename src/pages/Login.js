import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './CSS/Login.css';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Login() {
    
    const Bounce = styled.div`animation: 2s ${keyframes` ${bounce}`} infinite`;

    return (
        <div className="Login">
            <Router>
                <Form>
                    <Col sm={9}>
                        <Fade top>
                            <Bounce><h1 id="title">Welcome to the Social Net</h1></Bounce>
                            <Col>
                            <Link to="/signin">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    id="signIn"
                                >
                                    Sign In
                        </Button>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    id="signUp"
                                >
                                    Sign Up
                        </Button>
                            </Link>
                            </Col>
                        </Fade>
                    </Col>
                </Form>

                <Switch>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}