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
import ServicesCarousel from "../components/ServicesCarousel";
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


/* ==============================
   FAQ ITEM COMPONENT
================================ */

const FAQItem = ({ faq, idx }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      className={`faq-card ${isOpen ? 'active' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
    >
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-num">{String(idx + 1).padStart(2, '0')}</span>
        <span className="faq-q-text">{faq.q}</span>
        <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="faq-answer"
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="services-page">
      <SEO
        title="Web, AI & Cloud Engineering Services"
        description="Scalable web, AI, mobile, and cloud systems engineered for performance and long-term growth."
      />

      {/* ================= HERO ================= */}

      {/* ================= HERO CAROUSEL ================= */}
      <div className="section-header-centered" style={{ marginTop: "4rem", marginBottom: "2rem" }}>
          <span className="badge" style={{ marginBottom: "1rem" }}><span className="badge-dot" />Flagship Solutions</span>
          <h2>Premium Services</h2>
          <p className="section-sub">Explore our flagship solutions designed for the modern enterprise.</p>
      </div>
      <ServicesCarousel />

      {/* ================= SECONDARY (BENTO GRID - SERVICE BOXES) ================= */}

      <section className="secondary-services-glass container">
        <div className="section-header-centered">
          <span className="badge" style={{ marginBottom: "1rem" }}><span className="badge-dot" />Capabilities</span>
          <h2>Our Core Services</h2>
          <p className="section-sub">Comprehensive technical solutions designed for modern enterprises and high-growth startups.</p>
        </div>
        
        <div className="services-bento-grid">
          {secondaryServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bento-card-glass bento-card-${index}`}
            >
              <InteractiveCard className="bento-inner">
                <div className="bento-icon-wrapper">
                  <service.icon className="bento-icon" size={32} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <ul className="bento-features">
                  {service.points.map((point, idx) => (
                    <li key={idx}>
                      <span className="dot"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="process-preview container">
        <div className="section-header-centered">
          <span className="badge" style={{ marginBottom: "1rem" }}><span className="badge-dot" />Methodology</span>
          <h2>How We Engineer Scalable Systems</h2>
        </div>

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


      <section className="faq-section container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge"><span className="badge-dot" />Knowledge Base</span>
          <h2>Questions &amp; Answers</h2>
          <p>Everything you need to know about our engineering process, security standards, and how we deliver results.</p>
        </motion.div>

        <div className="faq-grid">
          <div className="faq-accordion-column">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} idx={idx} />
            ))}
          </div>

          <motion.div
            className="faq-cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="faq-cta-inner">
              <div className="faq-cta-icon">?</div>
              <h3>Still have questions?</h3>
              <p>Talk directly with our engineering team. We'll map out a technical roadmap tailored to your needs.</p>
              <RippleEffect>
                <Link to="/contact" className="btn-primary faq-cta-btn">
                  Schedule a Call
                </Link>
              </RippleEffect>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;