import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnotherPage from './pages/AnotherPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/another-page" component={AnotherPage} />
            </Switch>
        </Router>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

