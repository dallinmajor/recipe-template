import React from 'react';

export default props => {
    return (
        <a {...props}>{props.children} </a>
    )
}