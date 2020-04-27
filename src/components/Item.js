import React, { useState } from 'react';
import './Itemdesign.scss';

export default function () {
    const [color, setColor] = useState(() => {
        if (!localStorage.getItem('color')) {
            return 'green';
        } else {
            return JSON.parse(localStorage.getItem('color'));
        }
    });
    const colors = ['green', 'red', 'blue', 'yellow', 'black'];
    function changeColor() {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        localStorage.setItem('color', JSON.stringify(newColor));
        setColor(newColor);
    }
    return (
        <div>
            <div className="box" style={{ backgroundColor: color }}
                onClick={changeColor}></div>
        </div>
    )
}
