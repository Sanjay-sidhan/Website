import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './BackgroundOrbs.css';

const BackgroundOrbs = () => {
    return (
        <div className="background-orbs-container">
            <motion.div
                className="orb orb-1"
                animate={{
                    x: [0, 150, -80, 0],
                    y: [0, -120, 70, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="orb orb-2"
                animate={{
                    x: [0, -180, 120, 0],
                    y: [0, 200, -150, 0],
                    scale: [1, 0.8, 1.1, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="orb orb-3"
                animate={{
                    x: [0, 250, -200, 0],
                    y: [0, -100, 250, 0],
                    scale: [1, 1.3, 0.7, 1],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default BackgroundOrbs;
