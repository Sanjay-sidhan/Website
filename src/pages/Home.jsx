import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook, Github, Play } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import ProjectPortfolio from '../components/ProjectPortfolio';
import TeamSection from '../components/TeamSection';
import SEO from '../components/SEO';
import CinematicTextReveal from '../components/CinematicTextReveal';
import SolarSkills from '../components/SolarSkills';
import InteractiveCard from '../components/InteractiveCard';
import DataStreaks from '../components/DataStreaks';
import ParallaxSection from '../components/ParallaxSection';
import RippleEffect from '../components/RippleEffect';
import './Home.css';

const insights = [
    { title: "The Future of AI in Enterprise", date: "Feb 15, 2026", category: "AI & ML", read: "5 min" },
    { title: "Securing Cloud Infrastructure at Scale", date: "Feb 10, 2026", category: "Cybersecurity", read: "8 min" },
    { title: "Scaling for Global Markets", date: "Jan 28, 2026", category: "Strategy", read: "6 min" }
];

const Home = () => {
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="home-page">
            <SEO
                title="Premium IT Solutions"
                description="Clynero IT Solutions provides cutting-edge AI automation, cyber security, and global cloud infrastructure for modern enterprises."
                keywords="IT solutions, AI automation, cloud computing, cyber security, software development"
            />

            {/* ─── HERO ─────────────────────────────────────────────────────── */}
            <section className="hero-section">
                <DataStreaks />

                {/* Social sidebar */}
                <div className="social-sidebar">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={18} /></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><Facebook size={18} /></a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon"><Github size={18} /></a>
                </div>

                <motion.div
                    className="hero-inner container"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    style={{ opacity: heroOpacity, y: heroY }}
                >
                    {/* Live badge */}
                    <motion.div className="hero-live-badge" variants={fadeUp}>
                        <span className="hero-live-dot" />
                        <span>Visionary Engineering</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="hero-headline">
                        <span className="hero-line">
                            <CinematicTextReveal text="Digital" delay={0.2} className="hero-word" />
                            <CinematicTextReveal text="Velocity" delay={0.8} className="hero-word hero-word-accent" />
                        </span>
                        <span className="hero-line">
                            <CinematicTextReveal text="Absolute" delay={1.5} className="hero-word" />
                            <CinematicTextReveal text="Precision" delay={2.1} className="hero-word" />
                        </span>
                    </h1>

                    {/* Sub-heading */}
                    <motion.p className="hero-sub" variants={fadeUp}>
                        Clynero delivers unyielding cloud infrastructure and hyper-scaled AI
                        software for the world's most ambitious enterprises.
                    </motion.p>

                    {/* CTA row */}
                    <motion.div className="hero-cta-row" variants={fadeUp}>
                        <RippleEffect>
                            <Link to="/contact" className="btn-hero-primary">
                                Initiate Project <ArrowRight size={18} />
                            </Link>
                        </RippleEffect>
                        <RippleEffect>
                            <Link to="/about" className="btn-hero-ghost">
                                <Play size={16} /> See How It Works
                            </Link>
                        </RippleEffect>
                    </motion.div>
                </motion.div>

            </section>

            <ParallaxSection offset={80}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <SolarSkills />
                </motion.div>
            </ParallaxSection>

            {/* ─── KNOWLEDGE HUB ───────────────────────────────────────────── */}
            <ParallaxSection offset={60}>
                <section className="knowledge-hub">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge-pill">Knowledge Hub</span>
                            <h2>Latest Insights</h2>
                            <p>Stay ahead with our analysis of the technology shaping tomorrow's enterprise landscape.</p>
                        </motion.div>

                        <div className="insights-grid">
                            {insights.map((item, idx) => (
                                <InteractiveCard
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.12 }}
                                    className="insight-card-premium"
                                >
                                    <span className="insight-category">{item.category}</span>
                                    <h3>{item.title}</h3>
                                    <div className="insight-footer">
                                        <span>{item.date} · {item.read} read</span>
                                        <RippleEffect>
                                            <Link to="/contact" className="read-more">
                                                Read More <ArrowRight size={15} />
                                            </Link>
                                        </RippleEffect>
                                    </div>
                                </InteractiveCard>
                            ))}
                        </div>
                    </div>
                </section>
            </ParallaxSection>

            <ParallaxSection offset={100}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <ProjectPortfolio />
                </motion.div>
            </ParallaxSection>
            
            <ParallaxSection offset={70}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <TeamSection />
                </motion.div>
            </ParallaxSection>
            
            <ParallaxSection offset={40}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Testimonials />
                </motion.div>
            </ParallaxSection>
        </div>
    );
};

export default Home;
