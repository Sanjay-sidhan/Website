import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ServicesCarousel.css";
import RippleEffect from "./RippleEffect";

const banners = [
  {
    id: 1,
    tag: "OUT NOW",
    title: "AI Automation Suite",
    subtitle: "Scale your workflow instantly with our new autonomous AI agents. Available now for enterprise.",
    offer: "Starting at $2,499",
    cta: "Explore Solutions",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600",
    theme: "purple",
    thumb: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    tag: "NOW AVAILABLE",
    title: "Cloud Infrastructure",
    subtitle: "Zero-downtime migrations & highly available microservices infrastructure.",
    offer: "Free Technical Audit",
    cta: "Claim Audit",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
    theme: "blue",
    thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    tag: "PREMIUM RETAINER",
    title: "Continuous Deploy",
    subtitle: "Dedicated engineering teams for ongoing SaaS and Mobile development.",
    offer: "Custom Pricing",
    cta: "View Plans",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
    theme: "orange",
    thumb: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    tag: "UPDATE",
    title: "Cyber Security Protocol",
    subtitle: "Military-grade encryption and real-time threat monitoring systems for your apps.",
    offer: "Q3 Release",
    cta: "Read More",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600",
    theme: "green",
    thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=150"
  }
];

const variants = {
  enter: { opacity: 0, scale: 0.98 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.5, ease: "easeIn" } }
};

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideDuration = 6000;

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="epic-carousel-section">
      <div 
        className="epic-carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Left Area */}
        <div className="epic-main-view">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="epic-slide"
            >
              <img
                src={banners[activeIndex].image}
                alt={banners[activeIndex].title}
                className="epic-bg-image"
              />
              <div className="epic-overlay-gradient" />
              <div className="epic-overlay-vignette" />

              <div className={`epic-content-layer theme-${banners[activeIndex].theme}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="epic-tag"
                >
                  {banners[activeIndex].tag}
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="epic-title"
                >
                  {banners[activeIndex].title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="epic-subtitle"
                >
                  {banners[activeIndex].subtitle}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="epic-action-row"
                >
                  <span className="epic-price">{banners[activeIndex].offer}</span>
                  <RippleEffect>
                    <button className="epic-btn">{banners[activeIndex].cta}</button>
                  </RippleEffect>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Sidebar List */}
        <div className="epic-sidebar">
          {banners.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={item.id}
                className={`epic-nav-item ${isActive ? "active" : ""}`}
                onClick={() => handleSelect(idx)}
              >
                <div className="epic-nav-thumb-wrap">
                  <img src={item.thumb} alt={item.title} className="epic-nav-thumb" />
                </div>
                <div className="epic-nav-text">
                  <span className="epic-nav-title">{item.title}</span>
                </div>
                
                {/* Progress bar inside the active item */}
                {isActive && (
                  <div className="epic-progress-bar">
                    <div 
                      className="epic-progress-fill" 
                      style={{ 
                        animationDuration: `${slideDuration}ms`,
                        animationPlayState: isPaused ? 'paused' : 'running'
                      }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
