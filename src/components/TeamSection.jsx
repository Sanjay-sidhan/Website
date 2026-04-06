import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import './TeamSection.css';

const members = [
    {
        name: "Alexander Vance",
        role: "Chief Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
        bio: "Pioneer in neural architecture with 15+ years of scaling enterprise cloud systems."
    },
    {
        name: "Elena Rodriguez",
        role: "Head of AI",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
        bio: "Specializing in large language models and predictive analytics for Fortune 500s."
    },
    {
        name: "Marcus Thorne",
        role: "Cyber Operations",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        bio: "Former intelligence analyst focused on military-grade encryption and threat detection."
    }
];

const TeamSection = () => {
    return (
        <section className="team-section container">
            <div className="section-header">
                <span className="badge">Our Visionaries</span>
                <h2>The Minds Behind the Tech</h2>
                <p>A global collective of world-class engineers and creative strategists.</p>
            </div>

            <div className="team-grid">
                {members.map((member, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.1 }}
                        className="team-card bento-card"
                    >
                        <div className="team-image-wrapper">
                            <img src={member.image} alt={member.name} className="team-image" />
                            <div className="team-socials">
                                <a href="#"><Linkedin size={18} /></a>
                                <a href="#"><Instagram size={18} /></a>
                                <a href="#"><Github size={18} /></a>
                            </div>
                        </div>
                        <div className="team-content">
                            <h3>{member.name}</h3>
                            <span className="team-role">{member.role}</span>
                            <p className="team-bio">{member.bio}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
