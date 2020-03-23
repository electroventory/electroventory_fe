import React from 'react'
import './UnauthenticatedApp.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';

import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";

function UnauthenticatedApp() {

    return (
        <Container>
            <Row className="login-row">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="login-card">
                        <h4>Electroventory</h4>
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/login" />
                                </Route>
                                <Route path="/login">
                                    <Login />
                                    <Link to="/signup">Sign up</Link>
                                </Route>
                                <Route path="/signup">
                                    <SignUp />
                                    <Link to="/login">Back to log in</Link>
                                </Route>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </Router>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UnauthenticatedApp;