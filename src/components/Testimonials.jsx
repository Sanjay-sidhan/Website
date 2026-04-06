import { Quote } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO, TechFlow",
        text: "Clynero transformed our legacy systems into a modern cloud powerhouse. Their attention to detail in the 3D dashboard was phenomenal.",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Marcus Chen",
        role: "Founder, Innovate AI",
        text: "The premium UX design they delivered significantly increased our user engagement. They truly understand the 'luxury' in enterprise software.",
        avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
        name: "Elena Rodriguez",
        role: "Project Manager, GlobalLink",
        text: "Efficient, professional, and state-of-the-art. Their AI integration saved us thousands of hours in manual data processing.",
        avatar: "https://i.pravatar.cc/150?u=elena"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section container">
            <div className="section-header">
                <span className="badge">Testimonials</span>
                <h2>What Leaders Say</h2>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((t, idx) => (
                    <InteractiveCard
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ delay: idx * 0.1 }}
                        className="testimonial-card bento-card"
                    >
                        <Quote className="quote-icon" size={40} />
                        <p className="testimonial-text">{t.text}</p>
                        <div className="testimonial-footer">
                            <img src={t.avatar} alt={t.name} className="avatar" />
                            <div>
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    </InteractiveCard>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
