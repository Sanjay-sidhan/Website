import ExperienceTimeline from '../components/ExperienceTimeline';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RippleEffect from '../components/RippleEffect';

const Experience = () => {
    return (
        <div className="experience-page">
            <SEO
                title="Our Experience"
                description="Our journey of digital transformation and enterprise excellence."
            />
            <div className="container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="updating-badge"
                    style={{ background: 'rgba(255, 77, 0, 0.1)', color: '#ff4d00', padding: '10px 24px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}
                >
                    <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', background: '#ff4d00', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 10px #ff4d00' }} />
                    Experience Portal Updating
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', color: '#0d0d0d', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}
                >
                    Technical Trajectory <br /> <span style={{ color: '#ff4d00' }}>Under Enhancement</span>
                </motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', lineHeight: '1.7', marginBottom: '3rem' }}
                >
                    We are currently refining our historical database to reflect our latest technical benchmarks and global project performance. Check back shortly for the full reveal.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <RippleEffect>
                        <Link to="/" style={{ background: '#0d0d0d', color: '#fff', padding: '16px 36px', borderRadius: '14px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.3s ease', display: 'inline-block' }}>
                            Return to Hub
                        </Link>
                    </RippleEffect>
                </motion.div>
            </div>
            {/* <ExperienceTimeline /> */}
        </div>
    );
};

export default Experience;
