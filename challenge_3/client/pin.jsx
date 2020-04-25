import React from 'react';
import ReactDOM from 'react-dom';
import styles from './CSS/pin.css';

const Pin = ({ knock }) => {

    return (
        <span>{knock ? '🍷' : '☠'}</span>
    )
};

export default Pin