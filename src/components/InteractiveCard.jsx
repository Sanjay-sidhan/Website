import React from 'react';
import { motion } from 'framer-motion';
import { useCardGlow } from '../hooks/useCardGlow';

const InteractiveCard = ({ children, className, ...props }) => {
    const { cardRef, glowRef } = useCardGlow();

    return (
        <motion.div
            ref={cardRef}
            className={`interactive-card ${className}`}
            {...props}
        >
            <div ref={glowRef} className="card-glow" />
            {children}
        </motion.div>
    );
};

export default InteractiveCard;
