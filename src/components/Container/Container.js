import React from 'react';

import classes from './Container.module.scss';

const Container = ({ children, className }) => (
    <div className = { [classes.Container, className].join(' ') }>
        { children }
    </div>
);

export default Container;
