import React from 'react';
import { motion } from 'framer-motion';
import {
    Target, Lightbulb, Code, Rocket,
    Heart, TrendingUp, Shield, Cpu,
    Users, Globe, Star, Layers,
    Building2, FlaskConical, Compass,
    Zap
} from 'lucide-react';
import SEO from '../components/SEO';
import RippleEffect from '../components/RippleEffect';
import './About.css';
import { Link } from "react-router-dom";
import companyImg from '../assets/images/orange_company_office.png';

const steps = [
    { icon: Target, title: "Discovery", desc: "We deep-dive into your business goals, target audience, and current challenges." },
    { icon: Lightbulb, title: "Strategy", desc: "Crafting a custom tech roadmap and architecture designed for scale." },
    { icon: Code, title: "Development", desc: "Agile sprints and high-performance engineering with weekly progress updates." },
    { icon: Rocket, title: "Deployment", desc: "Seamless launch, cloud optimization, and ongoing strategic support." }
];

const coreValues = [
    { icon: Shield, title: "Integrity First", desc: "We operate with full transparency—no hidden agendas, no gray areas. Trust is the foundation of every engagement." },
    { icon: Star, title: "Excellence Always", desc: "Good enough is never enough. We hold every pixel, every line of code, and every decision to the highest standard." },
    { icon: Users, title: "People-Centric", desc: "Our clients and teammates are at the heart of everything we build. Technology serves people—not the other way around." },
    { icon: Layers, title: "First-Principles Thinking", desc: "We dissect problems down to their fundamentals before crafting solutions, avoiding lazy assumptions." },
];

const workCulture = [
    { icon: Rocket, title: "Bias for Action", desc: "We ship fast, iterate faster. Momentum beats perfection at every stage." },
    { icon: Users, title: "Radical Collaboration", desc: "Silos are our enemy. Cross-functional teams solve problems that specialists miss." },
    { icon: FlaskConical, title: "Curiosity-Driven", desc: "We invest heavily in learning—conferences, labs, hackathons, and dedicated R&D time." },
    { icon: TrendingUp, title: "Growth Mindset", desc: "Failure is a signal, not a verdict. Every setback is a structured learning event." },
];



const techMindset = [
    { tag: "Cloud-Native", color: "#ea580c" },
    { tag: "AI-First", color: "#f97316" },
    { tag: "Security by Design", color: "#fb923c" },
    { tag: "Open Source", color: "#fdba74" },
    { tag: "Micro-services", color: "#ea580c" },
    { tag: "DevOps Culture", color: "#f97316" },
    { tag: "Edge Computing", color: "#fb923c" },
    { tag: "Serverless", color: "#fdba74" },
    { tag: "API-First", color: "#ea580c" },
    { tag: "Observability", color: "#f97316" },
];

const companySummaryStats = [
    { icon: Building2, value: "2026", label: "Founded" },
    { icon: Users, value: "5+", label: "Experts" },
];

const About = () => {
    return (
        <div className="about-page container">
            <SEO
                title="About Us"
                description="Learn about Clynero's journey in pioneering digital landscapes and engineering excellence for global leaders."
                keywords="IT history, technical excellence, Clynero mission"
            />

            <header className="about-header">
                <span className="badge"><span className="badge-dot" />Our Journey</span>
                <h1 className="gradient-text">Engineering Excellence</h1>
                <p>Since 2026, Clynero has been pioneering digital landscapes for global leaders.</p>
            </header>

            {/* ── Company Summary ─────────────────────────────── */}
            <section className="company-summary-section">
                <div className="company-summary-inner bento-card">
                    <div className="company-summary-text">
                        <span className="badge"><span className="badge-dot" />Who We Are</span>
                        <h2>Built by Engineers.<br />Trusted by Leaders.</h2>
                        <p>
                            Clynero is a next-generation technology firm specializing in enterprise software architecture,
                            AI-augmented development, and scalable cloud infrastructure. Founded in 2026, we work at the
                            intersection of cutting-edge engineering and strategic business thinking.
                        </p>
                        <p>
                            From early-stage startups to Fortune-level enterprises, our multidisciplinary teams deliver
                            systems that don't just function—they perform at the frontier. We've built platforms handling
                            millions of transactions, led digital transformations across sectors, and engineered solutions
                            that agencies and businesses depend on daily.
                        </p>
                        <div className="company-summary-cta">
                            <RippleEffect>
                                <Link to="/contact" className="btn-primary">Work with Us</Link>
                            </RippleEffect>
                            <Link to="/services" className="link-secondary">
                                Our Services <span>→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="company-stats-column">
                        <div className="company-image-wrapper">
                            <img src={companyImg} alt="Clynero HQ" className="company-banner-img" />
                        </div>
                        <div className="company-stats-grid">
                            {companySummaryStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -4, scale: 1.04 }}
                            >
                                <stat.icon size={20} className="stat-icon" />
                                <span className="stat-value gradient-text">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-mission bento-card">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        To design and engineer high-performance digital systems
                        that help businesses launch faster, scale smarter, and
                        operate with confidence.
                    </p>
                </div>
            </section>

            {/* ── Core Values ─────────────────────────────────── */}
            <section className="about-section">
                <div className="section-header">
                    <span className="badge"><span className="badge-dot" />What We Stand For</span>
                    <h2>Core Values</h2>
                </div>
                <div className="values-grid">
                    {coreValues.map((val, idx) => (
                        <motion.div
                            key={idx}
                            className="value-card bento-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="card-glow" />
                            <div className="value-icon-box">
                                <val.icon size={24} className="value-icon" />
                            </div>
                            <h3>{val.title}</h3>
                            <p>{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Work Culture ─────────────────────────────────── */}
            <section className="about-section">
                <div className="section-header">
                    <span className="badge"><span className="badge-dot" />Life at Clynero</span>
                    <h2>Work Culture</h2>
                </div>
                <div className="culture-grid">
                    {workCulture.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="culture-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.8, 
                                delay: idx * 0.1,
                                type: "spring",
                                stiffness: 400,
                                damping: 17
                            }}
                        >
                            <div className="card-sheen" />
                            <div className="culture-glow" />
                            <div className="culture-icon-wrapper">
                                <item.icon size={28} className="culture-icon" />
                            </div>
                            <div className="culture-text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Technology Mindset ───────────────────────────── */}
            <section className="about-section tech-mindset-section">
                <div className="section-header">
                    <span className="badge"><span className="badge-dot" />How We Think</span>
                    <h2>Technology Mindset</h2>
                </div>
                <p className="tech-mindset-desc">
                    We don't follow trends—we evaluate them rigorously. Our engineering philosophy is grounded in proven paradigms while staying acutely aware of the frontier.
                </p>
                <div className="tech-tags-cloud">
                    {techMindset.map((item, idx) => (
                        <motion.span
                            key={idx}
                            className="tech-tag"
                            style={{ '--tag-color': item.color }}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.06 }}
                            whileHover={{ scale: 1.12 }}
                        >
                            {item.tag}
                        </motion.span>
                    ))}
                </div>
            </section>



            {/* ── Process ─────────────────────────────────────── */}
            <section className="process-section">
                <div className="section-header">
                    <span className="badge"><span className="badge-dot" />Strategic Delivery</span>
                    <h2>The Clynero Path</h2>
                    <p className="process-intro">A precise, four-stage engineering lifecycle designed for absolute velocity.</p>
                </div>

                <div className="process-path-container">
                    <div className="process-line-path" />
                    <div className="process-steps-grid">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.15 }}
                                className="process-card-modern"
                            >
                                <div className="process-step-indicator">
                                    <div className="step-number">0{idx + 1}</div>
                                    <div className="step-glow" />
                                </div>
                                <div className="process-card-content bento-card">
                                    <div className="process-icon-box">
                                        <step.icon size={26} className="process-icon" />
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="about-cta-final">
                <div className="container">
                    <motion.div 
                        className="cta-narrative-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge"><span className="badge-dot" />Get Started</span>
                        <h2>Ready to Engineer What's Next?</h2>
                        <p>
                            Let's build scalable, intelligent systems that move your business forward.
                            We partner with ambitious teams ready to create long-term impact.
                        </p>

                        <div className="cta-action-group">
                            <RippleEffect>
                                <Link to="/contact" className="btn-primary-large">
                                    Start a Conversation
                                </Link>
                            </RippleEffect>
                            <Link to="/services" className="link-secondary">
                                Explore Our Solutions <span>→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
