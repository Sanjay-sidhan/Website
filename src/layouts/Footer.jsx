import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import logo from '../assets/logo.png';
import RippleEffect from '../components/RippleEffect';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt={COMPANY_NAME} className="footer-brand-logo" />
                        </div>
                        <p className="footer-desc">
                            Empowering businesses with cutting-edge IT solutions and premium digital experiences.
                        </p>
                        <div className="social-links">
                            <Link to="/contact"><Twitter size={20} /></Link>
                            <Link to="/contact"><Instagram size={20} /></Link>
                            <Link to="/contact"><Linkedin size={20} /></Link>
                            <Link to="/contact"><Github size={20} /></Link>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            {NAV_LINKS.map(link => (
                                <li key={link.name}><a href={link.path}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><Mail size={18} /> sanjaysidhan368@gmail.com</li>
                            <li><Phone size={18} /> +91 9876543210</li>
                            <li><MapPin size={18} /> Trivandrum, Kerala</li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Newsletter</h4>
                        <p>Stay updated with our latest tech insights.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" required />
                            <RippleEffect>
                                <button type="submit" className="newsletter-btn">Join</button>
                            </RippleEffect>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
