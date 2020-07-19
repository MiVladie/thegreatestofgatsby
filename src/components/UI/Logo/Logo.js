import React from 'react';
import { Link } from 'gatsby';

import logoDark from '../../../assets/icons/logo.png';
import logoLight from '../../../assets/icons/logo-light.png';

import classes from './Logo.module.scss';

const Logo = ({ light }) => (
    <Link className = { classes.Logo } to = '/'>
        <img src = { light ? logoLight : logoDark  } alt = 'Accord Logo' />
    </Link>
);

export default Logo;
