import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Dashboard() {
    return <span>Dashboard</span>
}

function AuthenticatedApp(props) {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default AuthenticatedApp;