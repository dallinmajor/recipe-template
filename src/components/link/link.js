import React from 'react';
import './link.css';

export default props => {
    return (
        <a {...props}>{props.children} </a>
    )
}