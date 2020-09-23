import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Error from './ErrorPage/Error';
import Home from './Pages/Home/Home';
import Layout from './Layout';
import NotFound from './Pages/NotFoundPage/NotFount';
import RegisterCode from './Pages/RegisterCode/RegisterCode';
import Contact from './Pages/Contact/Contact';
import Policy from './Pages/Policy/Policy';
import login from './Auth/LogIn';
import AdminPage from './Auth/Admin/AdminPage';
import Logout from './Auth/Logout';
import Winner from './Pages/Winners/Winners';

export default class Context extends Component {
        
    render() {
        return (<div>

            <Layout>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}>
                        </Route>

                        <Route exact path="/RegisterCode" component={RegisterCode}>
                        </Route>

                        <Route exact path="/Contact" component={Contact}>
                        </Route>

                        <Route exact path="/Winner:id?" component={Winner}>
                        </Route>

                        <Route exact path="/Policy" component={Policy}>
                        </Route>

                        {/*<Route exact path="/Logout" component={Logout}>
                        </Route>

                        <Route exact path="/LogIn" component={login}>
                        </Route>

                        <Route exact path="/AdminPage" component={AdminPage}>
                        </Route>*/}

                        <Route path="*" component={NotFound} />

                    </Switch>
                </Router>

            </Layout>
        </div>)
    }
}