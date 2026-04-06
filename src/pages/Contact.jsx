import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import RippleEffect from '../components/RippleEffect';
import './Contact.css';

const socialLinks = [
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/clynero',
        color: '#fff',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/clynero',
        color: '#0A66C2',
    },
    {
        icon: Twitter,
        label: 'X / Twitter',
        href: 'https://twitter.com/clynero',
        color: '#1DA1F2',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        href: 'https://instagram.com/clynero',
        color: '#E1306C',
    },
];

const availabilitySlots = [
    { day: 'Mon – Fri', hours: '9:00 AM – 6:00 PM IST', active: true },
    { day: 'Saturday', hours: '10:00 AM – 2:00 PM IST', active: true },
    { day: 'Sunday', hours: 'Closed', active: false },
];

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="contact-page container">
            <SEO
                title="Contact Our Experts"
                description="Get in touch with Clynero's strategy team to bring your visionary technical projects to life."
                keywords="contact IT support, technical consultation, hire engineers"
            />
            <header className="contact-header">
                <span className="badge">Get in Touch</span>
                <h1 className="gradient-text">Let's Build the Future</h1>
                <p>Have a visionary project? Our experts are ready to bring it to life.</p>
            </header>

            <div className="contact-grid">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="contact-info-panel bento-card"
                >
                    <h3>Contact Information</h3>
                    <p>Reach out to us directly or visit our global headquarters.</p>

                    <ul className="info-list">
                        <li><Mail className="icon" /> sanjaysidhan368@gmail.com</li>
                        <li><Phone className="icon" /> +91 9876543210</li>
                        <li><MapPin className="icon" /> Trivandrum, Kerala</li>
                    </ul>

                    {/* Business Availability */}
                    <div className="availability-section">
                        <h4 className="availability-title">
                            <Clock size={18} className="avail-icon" />
                            Business Hours
                        </h4>
                        <ul className="availability-list">
                            {availabilitySlots.map((slot, idx) => (
                                <li key={idx} className={`availability-item ${!slot.active ? 'closed' : ''}`}>
                                    <span className="avail-day">{slot.day}</span>
                                    <span className="avail-hours">
                                        {slot.active && <span className="avail-dot" />}
                                        {slot.hours}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="contact-socials">
                        <span className="socials-label">Follow us for tech updates</span>
                        <div className="social-icons-row">
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="social-icon-btn"
                                    style={{ '--social-color': social.color }}
                                    whileHover={{ scale: 1.18, y: -4 }}
                                    whileTap={{ scale: 0.92 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.08 }}
                                >
                                    <social.icon size={20} />
                                    <span className="social-tooltip">{social.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="contact-form-panel bento-card"
                >
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.form
                                key="form"
                                exit={{ opacity: 0, scale: 0.95 }}
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 9876543210" required />
                                </div>
                                <div className="form-group">
                                    <label>Project Details</label>
                                    <textarea placeholder="Tell us about your project vision..." rows="5" required></textarea>
                                </div>
                                <RippleEffect>
                                    <button type="submit" className="btn-primary form-submit" disabled={loading}>
                                        {loading ? "Sending..." : "Send Message"} <Send size={18} />
                                    </button>
                                </RippleEffect>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="success-message"
                            >
                                <CheckCircle size={64} color="var(--primary)" />
                                <h3>Message Received!</h3>
                                <p>Our strategy team will contact you within 24 hours.</p>
                                <RippleEffect>
                                    <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another</button>
                                </RippleEffect>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
