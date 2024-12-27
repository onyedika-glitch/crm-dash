import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import HomePage from './HomePage';
import AnotherPage from './AnotherPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/another-page" element={<AnotherPage />} />
            </Routes>
        </Router>
    );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
