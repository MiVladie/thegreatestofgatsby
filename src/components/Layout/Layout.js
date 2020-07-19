import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import '../../styles/reset.css';
import classes from './Layout.module.scss';

const Layout = ({ children }) => (
    <div className = { classes.Layout }>
        <div className = { classes.Content }>
            <Header />
            <main>
                { children }
            </main>
        </div>
        <Footer />
    </div>
);

export default Layout;
