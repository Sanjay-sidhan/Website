import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useCallback } from 'react';
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
    const carouselRef = useRef(null);

    const scroll = useCallback((direction) => {
        if (carouselRef.current) {
            const { current } = carouselRef;
            // Calculate scroll amount based on slightly more than one card for better UX
            const scrollAmount = current.clientWidth > 768 ? 540 : 340;
            
            current.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    }, []);

    // Auto-advance functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const { current } = carouselRef;
                const maxScrollLeft = current.scrollWidth - current.clientWidth;
                
                // If we are at the end, jump back to start
                if (current.scrollLeft >= maxScrollLeft - 10) {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: current.clientWidth > 768 ? 540 : 340, behavior: 'smooth' });
                }
            }
        }, 4000); // 4 Seconds per slide
        
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="portfolio-section container" style={{ position: 'relative' }}>
            <div className="section-header">
                <span className="badge"><span className="badge-dot" />Our Expertise</span>
                <h2>Featured Case Studies</h2>
                <p>Explore how we've helped industry leaders redefine their digital landscape.</p>
            </div>

            <div className="carousel-top-controls">
                <button className="carousel-arrow" onClick={() => scroll('left')} aria-label="Previous Project">
                    <ChevronLeft size={24} />
                </button>
                <button className="carousel-arrow" onClick={() => scroll('right')} aria-label="Next Project">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="carousel-wrapper">
                <div 
                    className="carousel-container" 
                    ref={carouselRef}
                >
                    <div className="inner-carousel">
                        {projects.map((project, idx) => (
                            <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
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
            </div>
            </div>
        </section>
    );
};

export default ProjectPortfolio;
