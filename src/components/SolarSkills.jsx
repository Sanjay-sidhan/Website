import React from 'react';
import { motion } from 'framer-motion';
import './SolarSkills.css';

const techLogos = [
    // Orbit 1: Inner (min 4)
    { name: 'Flutter', orbit: 1, color: '#02569B', logo: 'https://cdn.simpleicons.org/flutter' },
    { name: 'React', orbit: 1, color: '#61DAFB', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'HTML5', orbit: 1, color: '#E34F26', logo: 'https://cdn.simpleicons.org/html5' },
    { name: 'Node.js', orbit: 1, color: '#339933', logo: 'https://cdn.simpleicons.org/nodedotjs' },

    // Orbit 2: Middle (+2 = 6)
    { name: 'JavaScript', orbit: 2, color: '#F7DF1E', logo: 'https://cdn.simpleicons.org/javascript' },
    { name: 'Python', orbit: 2, color: '#3776AB', logo: 'https://cdn.simpleicons.org/python' },
    { name: 'Java', orbit: 2, color: '#007396', logo: 'https://cdn.simpleicons.org/openjdk' },
    { name: 'TypeScript', orbit: 2, color: '#3178C6', logo: 'https://cdn.simpleicons.org/typescript' },
    { name: 'C++', orbit: 2, color: '#00599C', logo: 'https://cdn.simpleicons.org/cplusplus' },
    { name: 'Dart', orbit: 2, color: '#0175C2', logo: 'https://cdn.simpleicons.org/dart' },

    // Orbit 3: Outer (9)
    { name: 'SQL', orbit: 3, color: '#4479A1', logo: 'https://cdn.simpleicons.org/sqlite' },
    { name: 'MongoDB', orbit: 3, color: '#47A248', logo: 'https://cdn.simpleicons.org/mongodb' },
    { name: 'PostgreSQL', orbit: 3, color: '#336791', logo: 'https://cdn.simpleicons.org/postgresql' },
    { name: 'Firebase', orbit: 3, color: '#FFCA28', logo: 'https://cdn.simpleicons.org/firebase' },
    { name: 'Git', orbit: 3, color: '#F05032', logo: 'https://cdn.simpleicons.org/git' },
    { name: 'Docker', orbit: 3, color: '#2496ED', logo: 'https://cdn.simpleicons.org/docker' },
    { name: 'GitHub', orbit: 3, color: '#181717', logo: 'https://cdn.simpleicons.org/github' },
    { name: 'Figma', orbit: 3, color: '#F24E1E', logo: 'https://cdn.simpleicons.org/figma' },
    { name: 'Tailwind', orbit: 3, color: '#06B6D4', logo: 'https://cdn.simpleicons.org/tailwindcss' },
];

const OrbitIcon = ({ tech, index, totalInOrbit, rotationClassName }) => {
    const angle = (index / totalInOrbit) * 360;

    return (
        <div
            className="orbit-icon-wrapper"
            style={{
                '--rotation-angle': `${angle}deg`,
                '--icon-color': tech.color
            }}
        >
            <motion.div
                className={`icon-sphere-container ${rotationClassName}-reverse`}
                whileHover={{ scale: 1.15, zIndex: 10 }}
            >
                <div className="icon-sphere">
                    <img src={tech.logo} alt={tech.name} className="tech-icon-img" />
                    <div className="icon-glow" style={{ backgroundColor: tech.color }} />
                </div>
            </motion.div>
        </div>
    );
};

const SolarSkills = () => {
    const orbit1Items = techLogos.filter(t => t.orbit === 1);
    const orbit2Items = techLogos.filter(t => t.orbit === 2);
    const orbit3Items = techLogos.filter(t => t.orbit === 3);

    return (
        <section className="solar-skills-section">
            <div className="container solar-flex-container">
                <div className="solar-content-left">
                    <motion.div
                        className="hero-badge-container"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ justifyContent: 'flex-start' }}
                    >
                        <span className="hero-badge"><span className="live-dot"></span>Technical Expertise</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Advanced Technical Ecosystem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Our tech stack is engineered for peak performance and global scalability.
                        We leverage industry-leading tools across frontend, backend, and cloud
                        infrastructure to build the next generation of digital excellence.
                    </motion.p>
                    <motion.div
                        className="tech-stats-summary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="tech-stat-item">
                            <span className="stat-num">19+</span>
                            <span className="stat-label">Core Technologies</span>
                        </div>
                        <div className="tech-stat-item">
                            <span className="stat-num">5+</span>
                            <span className="stat-label">Live Projects</span>
                        </div>
                    </motion.div>
                </div>

                <div className="solar-visual-right">
                    <div className="solar-system">
                        {/* Central Core */}
                        <motion.div
                            className="solar-core"
                            animate={{
                                boxShadow: [
                                    "0 10px 30px rgba(0, 0, 0, 0.05)",
                                    "0 15px 40px rgba(255, 51, 0, 0.1)",
                                    "0 10px 30px rgba(0, 0, 0, 0.05)"
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <div className="core-inner">
                                <span>TECH</span>
                                <span>STACK</span>
                            </div>
                        </motion.div>

                        {/* Orbit 1 (Inner) */}
                        <div className="orbit orbit-1">
                            <div className="orbit-path" />
                            <div className="orbit-rotation rotator-fast">
                                {orbit1Items.map((tech, i) => (
                                    <OrbitIcon
                                        key={tech.name}
                                        tech={tech}
                                        index={i}
                                        totalInOrbit={orbit1Items.length}
                                        rotationClassName="rotator-fast"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Orbit 2 (Middle) */}
                        <div className="orbit orbit-2">
                            <div className="orbit-path" />
                            <div className="orbit-rotation rotator-medium">
                                {orbit2Items.map((tech, i) => (
                                    <OrbitIcon
                                        key={tech.name}
                                        tech={tech}
                                        index={i}
                                        totalInOrbit={orbit2Items.length}
                                        rotationClassName="rotator-medium"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Orbit 3 (Outer) */}
                        <div className="orbit orbit-3">
                            <div className="orbit-path" />
                            <div className="orbit-rotation rotator-slow">
                                {orbit3Items.map((tech, i) => (
                                    <OrbitIcon
                                        key={tech.name}
                                        tech={tech}
                                        index={i}
                                        totalInOrbit={orbit3Items.length}
                                        rotationClassName="rotator-slow"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolarSkills;
