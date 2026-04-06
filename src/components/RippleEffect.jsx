import React, { useState, useLayoutEffect } from 'react';
import './RippleEffect.css';

const RippleEffect = ({ children }) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            id: Date.now(),
            x,
            y,
            size
        };

        setRipples((prevRipples) => [...prevRipples, newRipple]);
    };

    useLayoutEffect(() => {
        if (ripples.length > 0) {
            const timer = setTimeout(() => {
                setRipples((prevRipples) => prevRipples.slice(1));
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [ripples]);

    return (
        <span 
            className="ripple-container" 
            onMouseDown={createRipple}
        >
            {children}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="ripple-circle"
                    style={{
                        top: ripple.y,
                        left: ripple.x,
                        width: ripple.size,
                        height: ripple.size
                    }}
                />
            ))}
        </span>
    );
};

export default RippleEffect;
