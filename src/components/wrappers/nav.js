import React from 'react';

export default ({className = '', children}) => {
    return (
        <nav className={'' + className}>
            {children}
        </nav>
    )
}