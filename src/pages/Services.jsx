import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cpu,
  Cloud,
  Code,
  Smartphone,
  Layout,
  Shield,
  Wrench,
  CheckCircle,
  Plus,
  Minus
} from "lucide-react";
import SEO from "../components/SEO";
import InteractiveCard from "../components/InteractiveCard";
import RippleEffect from "../components/RippleEffect";
import "./Services.css";

/* ==============================
   FLAGSHIP SERVICES
================================ */

const flagshipServices = [
  {
    id: "ai",
    tag: "AI ENGINEERING",
    title: "AI & Automation Systems",
    description:
      "Custom AI-powered systems designed to automate operations, improve efficiency, and generate intelligent business insights.",
    idealFor:
      "Ideal for SaaS platforms, operational businesses, and automation-driven startups.",
    features: [
      "AI Agents & Business Assistants",
      "Workflow Automation Systems",
      "Predictive Analytics",
      "Custom GPT Integrations",
      "Internal AI Dashboards",
    ],
    tech: ["Python", "FastAPI", "LangChain", "OpenAI", "Vector DB"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
  },
  {
    id: "cloud",
    tag: "CLOUD SYSTEMS",
    title: "Cloud & Backend Architecture",
    description:
      "Scalable backend systems and secure cloud infrastructure engineered for performance, reliability, and long-term growth.",
    idealFor:
      "Built for growing platforms handling increasing traffic and complex business operations.",
    features: [
      "REST & GraphQL APIs",
      "Database Architecture & Optimization",
      "Auto-Scaling Cloud Deployment",
      "Secure Authentication Systems",
      "Monitoring & Performance Optimization",
    ],
    tech: ["AWS", "Docker", "PostgreSQL", "Node.js", "CI/CD"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
  },
];

/* ==============================
   SECONDARY SERVICES
================================ */

const secondaryServices = [
  {
    icon: Code,
    title: "Web & SaaS Development",
    desc: "Scalable web platforms, admin dashboards, and multi-tenant SaaS systems.",
    points: ["Admin Panels", "Payment Systems", "API Integrations"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "High-performance cross-platform mobile applications with backend integration.",
    points: ["Flutter Apps", "Real-time Features", "Cloud Sync"],
  },
  {
    icon: Layout,
    title: "UI/UX & Product Design",
    desc: "Conversion-focused interfaces and scalable design systems.",
    points: ["Wireframes", "Design Systems", "User Research"],
  },
  {
    icon: Shield,
    title: "Security & Hardening",
    desc: "Secure architecture, encryption, and performance protection.",
    points: ["Auth Systems", "Encryption", "Vulnerability Protection"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing optimization, monitoring, and system upgrades.",
    points: ["Performance Tuning", "Bug Fixes", "Feature Enhancements"],
  },
];

const faqs = [
    {
        q: "What industries do you specialize in?",
        a: "We provide elite technical solutions across Finance, Healthcare, Manufacturing, and Defense, focusing on AI-driven automation and secure cloud scaling."
    },
    {
        q: "How long does a typical project take?",
        a: "A standard enterprise-grade project typically spans 3-6 months from discovery to global deployment, depending on technical complexity."
    },
    {
        q: "Do you provide post-launch support?",
        a: "Absolutely. We offer 24/7 technical oversight and strategic cloud optimization to ensure your infrastructure remains cutting-edge."
    },
    {
        q: "Is your infrastructure secure?",
        a: "We implement military-grade encryption and conduct regular cyber-security audits to protect your most sensitive digital assets."
    }
];

const Services = () => {
  return (
    <div className="services-page">
      <SEO
        title="Web, AI & Cloud Engineering Services"
        description="Scalable web, AI, mobile, and cloud systems engineered for performance and long-term growth."
      />

      {/* ================= HERO ================= */}

      <header className="services-hero">
        <div className="services-header-content">
          <h1>Scalable Digital Systems Built for Growth</h1>
          <p>
            We design and engineer high-performance web, mobile, and AI-driven
            platforms built for scalability, security, and real-world impact.
          </p>
        </div>
      </header>


      {/* ================= FLAGSHIP ================= */}

      <section className="flagship-container container">
        {flagshipServices.map((service, index) => (
          <div
            key={service.id}
            className={`flagship-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flagship-text"
            >
              <span className="service-tag">{service.tag}</span>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <p className="ideal-for">{service.idealFor}</p>

              <ul className="service-features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} color="#FF3300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="tech-stack">
                {service.tech.map((techItem, idx) => (
                  <span key={idx} style={{ marginRight: "12px" }}>
                    {techItem}
                  </span>
                ))}
              </div>

              <RippleEffect>
                <Link to="/contact" className="btn-primary">
                  Discuss Your Project
                </Link>
              </RippleEffect>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flagship-image-wrapper"
            >
              <img
                src={service.image}
                alt={service.title}
                className="flagship-image"
              />
              <div className="image-overlay-glow"></div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* ================= SECONDARY ================= */}

      <section className="secondary-services container">
        <div className="services-grid">
          {secondaryServices.map((service, index) => (
            <InteractiveCard
              key={index}
              className="service-card-premium"
            >
              <service.icon className="service-icon-glow" size={40} />

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <ul style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#aaa" }}>
                {service.points.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </InteractiveCard>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="process-preview container">
        <h2>How We Engineer Scalable Systems</h2>

        <div className="process-steps">
          {[
            {
              title: "Discovery & Technical Audit",
              desc: "Requirement analysis, system mapping, risk assessment, and scalability planning."
            },
            {
              title: "Architecture & System Design",
              desc: "Backend structure, database schema, API contracts, and cloud infrastructure blueprint."
            },
            {
              title: "UI/UX & Prototyping",
              desc: "Wireframes, interaction flows, and usability validation before build."
            },
            {
              title: "Agile Engineering & QA",
              desc: "Sprint-based development with testing, performance optimization, and clean code standards."
            },
            {
              title: "Deployment & Optimization",
              desc: "CI/CD pipelines, cloud deployment, monitoring setup, and scaling readiness."
            }
          ].map((step, index) => (
            <div key={index} className="process-step-card">
              <div className="process-number">0{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="final-cta">
        <h2>Ready to Build Something Scalable?</h2>
        <p>
          Schedule a consultation and get a clear technical roadmap for your
          next digital system.
        </p>

        <RippleEffect>
          <Link to="/contact" className="btn-primary">
            Get Strategy Call
          </Link>
        </RippleEffect>
      </section>

      <section className="faq-section container">
        <div className="faq-container-grid">
          <div className="faq-sidebar">
            <span className="badge">Knowledge Base</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our technical processes and how we deliver elite results.</p>
            <RippleEffect>
              <Link to="/contact" className="btn-secondary faq-cta">
                Discuss with Engineers
              </Link>
            </RippleEffect>
          </div>

          <div className="faq-accordion-column">
            {faqs.map((faq, idx) => {
              const [isExpanded, setIsExpanded] = React.useState(false);
              return (
                <motion.div
                  key={idx}
                  className={`faq-card ${isExpanded ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <button
                    className="faq-question"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer"
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;