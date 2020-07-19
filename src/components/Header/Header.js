import React from 'react';

import Logo from '../UI/Logo/Logo';

import classes from './Header.module.scss';

const Header = () => (
    <header className = { classes.Header }>
        <div className = { classes.Container }>
            <Logo />

            <div className = { classes.Social }>
                <p className = { classes.Action }>Follow us</p>
                <ul className = { classes.Links }>
                    <li className = { classes.Item }>
                        <a href = 'https://linkedin.com/' target = '__blank'>
                            <i className = { classes.LinkedIn } />
                        </a>
                    </li>
                    <li className = { classes.Item }>
                        <a href = 'https://twitter.com/' target = '__blank'>
                            <i className = { classes.Twitter } />
                        </a>
                    </li>
                    <li className = { classes.Item }>
                        <a href = 'https://facebook.com/' target = '__blank'>
                            <i className = { classes.Facebook } />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;
