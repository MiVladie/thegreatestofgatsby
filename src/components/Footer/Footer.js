import React from 'react';

import Container from '../Container/Container';
import Logo from '../UI/Logo/Logo';

import classes from './Footer.module.scss';

const Footer = () => (
    <footer className = { classes.Footer }>
        <Container className = { classes.Container }>
            <div className = { classes.Wrapper }>
                <div className = { classes.Main }>
                    <div className = { classes.Column }>
                        <Logo light />
                    </div>

                    <div className = { classes.Column }>
                        <div className = { classes.Content }>
                            <p className = { classes.Info }>
                                Accord Resourcing Ltd.
                                <br/>
                                <br/>
                                First Floor, 20 Chiswell St.
                                <br/>
                                London EC1Y 4TW
                            </p>
                        </div>
                        
                        <div className = { classes.Content }>
                            <p className = { classes.Info }>+44 (0) 203 290 2233</p>
                        </div>
                    </div>
                </div>

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

            <p className = { classes.Copyright }>&copy; Copyright { new Date().getFullYear() }. All Rights Reserved</p>
        </Container>
    </footer>
);

export default Footer;
