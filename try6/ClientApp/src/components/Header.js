﻿import React from 'react';

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "blue",
        color: 'black',
        textAlign: 'center'
    }

    return (
        <div style={headerStyle}>
            <h1>Calculator</h1>
        </div>
    )
}