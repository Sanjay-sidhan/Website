import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, Lock, Award, Users, Globe, Zap } from 'lucide-react';
import './ExperienceTimeline.css';

const experiences = [
    {
        year: '2026',
        title: 'Global Cloud Architecture',
        desc: 'Deployed enterprise-grade Kubernetes clusters across 14 regions with 99.999% uptime guarantees.',
        icon: Cloud
    },
    {
        year: '2025',
        title: 'Zero-Trust Security Integration',
        desc: 'Implemented AES-256 encryption and biometric auth pipelines for Fortune 500 fintech clients.',
        icon: Lock
    },
    {
        year: '2024',
        title: 'AI Automation Engines',
        desc: 'Built proprietary LLM wrappers to automate 80% of routine client data analytics processing.',
        icon: Terminal
    },
    {
        year: '2023',
        title: 'Distributed Database Systems',
        desc: 'Migrated monolithic legacy SQL databases into highly available NoSQL distributed setups.',
        icon: Database
    }
];

const stats = [
    { label: 'Projects Completed', value: '500+', icon: Award, color: '#ff4d00' },
    { label: 'Happy Clients', value: '250+', icon: Users, color: '#ff8000' },
    { label: 'Global Scale', value: '24/7', icon: Globe, color: '#ff3300' },
];

const ExperienceTimeline = () => {
    return (
        <section className="experience-section container">
            <div className="section-header-modern">
                <span className="badge">Our Track Record</span>
                <h2>Technical Trajectory</h2>
                <p className="section-subtitle">A history of engineering excellence and digital transformation.</p>
            </div>

            <div className="experience-stats-bento">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        className="stat-bento-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="stat-icon-wrapper" style={{ color: stat.color, backgroundColor: `${stat.color}15`, boxShadow: `0 0 20px ${stat.color}25` }}>
                            <stat.icon size={24} />
                        </div>
                        <div className="stat-text">
                            <h3 className="stat-value-large">{stat.value}</h3>
                            <p className="stat-label-small">{stat.label}</p>
                        </div>
                        <div className="stat-card-glow" style={{ background: `radial-gradient(circle, ${stat.color}25, transparent 70%)` }} />
                    </motion.div>
                ))}
            </div>

            <div className="timeline-container">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className={`timeline-row ${idx % 2 === 0 ? 'row-left' : 'row-right'}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <div className="timeline-node">
                            <div className="node-glow"></div>
                        </div>

                        <div className="timeline-content-card bento-card">
                            <div className="exp-year">{exp.year}</div>
                            <div className="bento-icon-wrapper">
                                <exp.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3>{exp.title}</h3>
                            <p>{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
