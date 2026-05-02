import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Quote, Loader, Mail } from 'lucide-react';
import './TeamSection.css';

const member = {
    name: "Sanjay S",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    bio: "Pioneer in neural architecture and scalable enterprise cloud systems.",
    location: "Trivandrum, Kerala",
    skills: ["Cloud Architecture", "AI Integration", "Enterprise Scaling"],
    socials: [
        { icon: Linkedin, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Github, href: "#" },
    ]
};

const TeamSection = () => {
    return (
        <section className="team-section container">
            <div className="section-header">
                <span className="badge"><span className="badge-dot" />The Visionary</span>
                <h2>The Mind Behind the Tech</h2>
                <p>A world-class engineer and creative strategist.</p>
            </div>

            <div className="ceo-showcase-container">
                {/* ── Profile Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="profile-card"
                >
                    {/* Full-bleed background image */}
                    <div className="profile-bg-img">
                        <img src={member.image} alt={member.name} />
                    </div>

                    {/* Top: status only */}
                    <div className="profile-top">
                        <div className="profile-connecting">
                            <Loader size={13} className="profile-spinner" />
                            <span>Available for Projects</span>
                        </div>
                    </div>

                    {/* Bottom: name + designation + socials + CTA */}
                    <div className="profile-bottom">
                        <div className="profile-bottom-left">
                            <div className="profile-bottom-info">
                                <span className="profile-handle">{member.name}</span>
                                <span className="profile-time">{member.role}, Clynero</span>
                                <div className="profile-bottom-socials">
                                    {member.socials.map(({ icon: Icon, href }, i) => (
                                        <a key={i} href={href} className="profile-bottom-social-btn">
                                            <Icon size={13} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── CEO Message Panel ── */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="ceo-message-panel bento-card"
                >
                    <div className="message-header">
                        <Quote size={38} className="message-quote-icon" />
                        <h3 className="gradient-text">A Message from the Founder</h3>
                    </div>
                    <div className="message-content">
                        <p className="message-highlight">
                            "Technology is only as powerful as the vision guiding it. We don't just write code; we engineer the future of your business."
                        </p>
                        <p>
                            When I founded Clynero, the goal was simple: bridge the gap between complex engineering and elegant, scalable business solutions. Today, we stand at the forefront of digital transformation, helping ambitious companies scale globally without technical limitations.
                        </p>
                        <p>
                            We treat every project as our own, flawless performance, and premium design standards from day one.
                        </p>
                    </div>
                    <div className="message-signature">
                        <strong>{member.name}</strong>
                        <span>{member.role}, Clynero</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
