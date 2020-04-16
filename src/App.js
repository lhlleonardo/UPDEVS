import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
