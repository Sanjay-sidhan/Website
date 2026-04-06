import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundOrbs from '../components/BackgroundOrbs';
import SmoothScroll from '../components/SmoothScroll';
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {
    return (
        <SmoothScroll>
            <div className="app-wrapper">
                <BackgroundOrbs />
                <Navbar />
                <motion.main
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="main-content"
                >
                    {children}
                </motion.main>
                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default MainLayout;
