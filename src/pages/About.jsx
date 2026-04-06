import React from 'react';
import { motion } from 'framer-motion';
import {
    Target, Lightbulb, Code, Rocket,
    Heart, TrendingUp, Shield, Cpu,
    Users, Globe, Star, Layers,
    Building2
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
    { emoji: "🚀", title: "Bias for Action", desc: "We ship fast, iterate faster. Momentum beats perfection at every stage." },
    { emoji: "🤝", title: "Radical Collaboration", desc: "Silos are our enemy. Cross-functional teams solve problems that specialists miss." },
    { emoji: "🔬", title: "Curiosity-Driven", desc: "We invest heavily in learning—conferences, labs, hackathons, and dedicated R&D time." },
    { emoji: "🌱", title: "Growth Mindset", desc: "Failure is a signal, not a verdict. Every setback is a structured learning event." },
];

const longTermGoals = [
    { icon: Globe, year: "2027", goal: "Global Expansion", desc: "Establish Clynero's presence across North America, Europe, and Southeast Asia.", color: "#ea580c" },
    { icon: Cpu, year: "2028", goal: "AI-Native Platform", desc: "Launch an integrated AI development platform purpose-built for enterprise-grade applications.", color: "#f97316" },
    { icon: TrendingUp, year: "2029", goal: "100+ Enterprise Partners", desc: "Grow our strategic partnerships and power the technology backbone of 100+ enterprises.", color: "#fb923c" },
    { icon: Heart, year: "2030", goal: "Impact at Scale", desc: "Create measurable social and economic impact through open-source contributions and education initiatives.", color: "#fdba74" },
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
                <span className="badge">Our Journey</span>
                <h1 className="gradient-text">Engineering Excellence</h1>
                <p>Since 2026, Clynero has been pioneering digital landscapes for global leaders.</p>
            </header>

            {/* ── Company Summary ─────────────────────────────── */}
            <section className="company-summary-section">
                <div className="company-summary-inner bento-card">
                    <div className="company-summary-text">
                        <span className="badge">Who We Are</span>
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
                            <RippleEffect>
                                <Link to="/services" className="btn-secondary">Our Services</Link>
                            </RippleEffect>
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
                    <span className="badge">What We Stand For</span>
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
                            whileHover={{ y: -6, borderColor: 'var(--primary)' }}
                        >
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
                    <span className="badge">Life at Clynero</span>
                    <h2>Work Culture</h2>
                </div>
                <div className="culture-grid">
                    {workCulture.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="culture-card bento-card"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="culture-emoji">{item.emoji}</span>
                            <div>
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
                    <span className="badge">How We Think</span>
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

            {/* ── Long-Term Goals — Vision Timeline ────────────── */}
            <section className="about-section vision-advanced-section">
                <div className="section-header">
                    <span className="badge">The Road Ahead</span>
                    <h2>Long-Term Vision</h2>
                    <p className="section-sub">Our roadmap to 2030 — bold, deliberate, and engineered for impact.</p>
                </div>
                <div className="vision-timeline-container">
                    <div className="vision-connecting-line" />
                    {longTermGoals.map((goal, idx) => (
                        <motion.div
                            key={idx}
                            className={`vision-timeline-item ${idx % 2 === 0 ? 'vision-left' : 'vision-right'}`}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                        >
                            <div className="vision-timeline-card bento-card">
                                <div className="vision-year-badge" style={{ color: goal.color }}>{goal.year}</div>
                                <div className="vision-icon-ring" style={{ borderColor: goal.color, color: goal.color }}>
                                    <goal.icon size={28} />
                                </div>
                                <h3 className="vision-timeline-title">{goal.goal}</h3>
                                <p className="vision-timeline-desc">{goal.desc}</p>
                            </div>
                            <div className="vision-timeline-dot" style={{ backgroundColor: goal.color, boxShadow: `0 0 15px ${goal.color}` }} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Process ─────────────────────────────────────── */}
            <section className="process-section">
                <div className="section-header">
                    <span className="badge">Our Process</span>
                    <h2>How We Deliver Results</h2>
                </div>

                <div className="vertical-timeline">
                    <div className="center-line"></div>
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content bento-card">
                                <div className="timeline-icon-box">
                                    <step.icon className="icon" size={24} />
                                </div>
                                <div className="timeline-text">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                                <div className="timeline-dot"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="about-cta">
                <div className="cta-content container">
                    <h2>Ready to Engineer What's Next?</h2>
                    <p>
                        Let's build scalable, intelligent systems that move your business forward.
                        We partner with ambitious teams ready to create long-term impact.
                    </p>

                    <div className="cta-buttons">
                        <RippleEffect>
                            <Link to="/contact" className="btn-primary">
                                Start a Conversation
                            </Link>
                        </RippleEffect>
                        <RippleEffect>
                            <Link to="/services" className="btn-secondary">
                                Explore Our Solutions
                            </Link>
                        </RippleEffect>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
