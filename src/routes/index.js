import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import CurrentIncentive from '../container/pages/currentIncentive/CurrentIncentive';
import Home from '../container/pages/home/Home';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import LastDataIncentive from '../container/pages/lastData/LastDataIncentive';
import LearningClass from '../container/pages/learningClass/LearningClass';
import Login from '../container/pages/login/Login';
import Rewards from '../container/pages/rewards/Rewards';

const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
        if (localStorage.isLogin) {
          next();
        }
        next.redirect('/login');
    } else {
        next();
    }
};

export default function Routes() {
    return (
        <Router>
            <GuardProvider guards={[requireLogin]}>
                <Switch>
                    <GuardedRoute path="/login" component={Login} />
                    <GuardedRoute exact path="/" component={Home} meta={{ auth: true }} />
                    <GuardedRoute path="/learning-class" component={LearningClass} meta={{ auth: true }} />
                    <GuardedRoute path="/rewards" component={Rewards} meta={{ auth: true }} />
                    <GuardedRoute path="/current-incentive" component={CurrentIncentive} meta={{ auth: true }} />
                    <GuardedRoute path="/last-data-incentive" component={LastDataIncentive} meta={{ auth: true }} />
                </Switch>
            </GuardProvider>
        </Router>
    )
};