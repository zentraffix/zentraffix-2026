'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Arul',
    role: 'Founder, STARUL World Trade',
    content: 'Our new website has completely transformed our online presence and strengthened our credibility in the marine insurance sector.Since launch, we’ve seen a noticeable rise in genuine inquiries and quality business leads.',
    rating: 5,
  },
  {
    name: 'Vimal J',
    role: 'Founder, JMJ Catering',
    content: 'Our complete website support and social media marketing are handled with outstanding professionalism and creativity. Our engagement has grown tremendously, and we’re now receiving consistent inquiries and event bookings every week.',
    rating: 5,
  },
  {
    name: 'Abhishek Udiit',
    role: 'Founder & CEO, Udiit',
    content: 'Creative, clean, and impactful editing with well-crafted animation clips. Our students loved the engaging and interactive learning experience.',
    rating: 5,
  },
  {
    name: 'Veerakumar S',
    role: 'Founder & CEO, Mechatron Motors',
    content: 'Zentraffix not only boosted visibility but also generated high-quality leads that converted into paying customers.',
    rating: 5,
  },
 
  
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="w-full px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-heading font-bold tracking-tight mb-6">
            Trusted by Industry Leaders
          </h2>
          {/* Purple underline */}
  <div className="w-24 h-1 bg-indigo-500 mx-auto my-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 2) }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
