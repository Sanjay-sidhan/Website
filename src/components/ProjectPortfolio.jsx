import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import RippleEffect from './RippleEffect';

const projects = [
    {
        title: "Quantum Analytics Platform",
        category: "AI & Data",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "EcoCloud Infrastructure",
        category: "Cloud Solutions",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Sentinel Cyber Security",
        category: "Security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        link: "#"
    },
    {
        title: "Nexus VR Experience",
        category: "Web3 & Metaverse",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
        link: "#"
    }
];

const ProjectPortfolio = () => {
    return (
        <section className="portfolio-section container">
            <div className="section-header">
                <span className="badge">Our Expertise</span>
                <h2>Featured Case Studies</h2>
                <p>Explore how we've helped industry leaders redefine their digital landscape.</p>
            </div>

            <div className="portfolio-grid">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="project-card"
                    >
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <RippleEffect>
                                        <Link to="/contact" className="icon-btn"><ExternalLink size={20} /></Link>
                                    </RippleEffect>
                                    <RippleEffect>
                                        <Link to="/contact" className="icon-btn"><Github size={20} /></Link>
                                    </RippleEffect>
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3>{project.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectPortfolio;
