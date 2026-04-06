import React from 'react';
import { motion } from 'framer-motion';

const CinematicTextReveal = ({ text, className, delay = 0 }) => {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: 'inline-flex', flexWrap: 'wrap' }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-flex', whiteSpace: 'nowrap', marginRight: '0.3em' }}>
                    {Array.from(word).map((letter, letterIndex) => (
                        <motion.span variants={child} key={letterIndex}>
                            {letter}
                        </motion.span>
                    ))}
                    {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
                </span>
            ))}
        </motion.div>
    );
};

export default CinematicTextReveal;
