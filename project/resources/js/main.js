import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { AppContent } from './appcontent';

const Main = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default Main;
