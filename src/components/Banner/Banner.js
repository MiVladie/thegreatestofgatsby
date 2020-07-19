import React from 'react';

import Img from 'gatsby-image';

import Button from '../UI/Button/Button';

import classes from './Banner.module.scss';

const Banner = ({ main, description, image, imageAlt, onButtonClick, buttonText }) => (
    <div className = { classes.Banner }>
        <div className = { classes.Container }>
            <div className = { classes.Wrapper }>
                <div className = { classes.Image }>
                    <Img fluid = { image } alt = { imageAlt } />
                </div>
                
                <div className = { classes.Info }>
                    <h1 className = { classes.Main }>{ main }</h1>
                    <p className = { classes.Description }>{ description }</p>
                    <Button onClick = { onButtonClick }>{ buttonText }</Button>
                </div>
            </div>
        </div>        
    </div>
);

export default Banner;
