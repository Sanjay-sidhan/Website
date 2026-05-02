import { Quote, User } from 'lucide-react';
import InteractiveCard from './InteractiveCard';

const testimonials = [
    {
        name: "Sarah Johnson",
        text: "Clynero transformed our legacy systems into a modern cloud powerhouse. Their attention to detail in the 3D dashboard was phenomenal.",
    },
    {
        name: "Marcus Chen",
        text: "The premium UX design they delivered significantly increased our user engagement. They truly understand the 'luxury' in enterprise software.",
    },
    {
        name: "Elena Rodriguez",
        text: "Efficient, professional, and state-of-the-art. Their AI integration saved us thousands of hours in manual data processing.",
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section container">
            <div className="section-header">
                <span className="badge"><span className="badge-dot" />Testimonials</span>
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
                            <div className="avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                                <User size={24} color="var(--text-secondary)" />
                            </div>
                            <div>
                                <h4>{t.name}</h4>
                            </div>
                        </div>
                    </InteractiveCard>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
