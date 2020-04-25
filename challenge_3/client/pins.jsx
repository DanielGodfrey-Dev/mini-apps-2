import React from 'react';
import ReactDOM from 'react-dom';
import Pin from './pin.jsx';
import styles from './CSS/pins.css';

const Pins4 = ({ knock }) => {

    const pins = knock.map((z, index) => 
        <Pin key={index} knock={z}/>
    );
    
    return (
        <div className={styles.centered}>{pins}</div>
    );
};

const Pins3 = ({ knock }) => {

    const pins = knock.map((z, index) => 
        <Pin key={index} knock={z}/>
    );

    return (
        <div className={styles.centered}>{pins}</div>
    );
};

const Pins2 = ({ knock }) => {

    const pins = knock.map((z, index) => 
        <Pin key={index} knock={z}/>
    );

    return (
        <div className={styles.centered}>{pins}</div>
    );
};

const Pins1 = ({ knock }) => {

    const pins = knock.map((z, index) => 
    <Pin key={index} knock={z}/>
);

    return (
        <div className={styles.centered}>{pins}</div>
    );
};

export { Pins4, Pins3, Pins2, Pins1 }