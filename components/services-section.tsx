'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const services = [
  {
    title: 'Performance Marketing',
    description: 'Data-driven ad campaigns that generate consistent ROI.',
    image: 'https://i.postimg.cc/cChpZvHF/Service-section-icons.gif',
    details:
      'We create high-performing ad campaigns across Meta, Google, and YouTube. Our strategy focuses on conversion tracking, audience targeting, and continuous optimization to maximize ROI.',
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher, get discovered, and dominate search results.',
    image: 'https://i.postimg.cc/Jnq6H9Lt/Service-section-icons-(1).gif',
    details:
      'We improve your rankings with on-page SEO, technical audits, keyword research, and backlink building strategies designed for long-term growth.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Turn attention into engagement and customers.',
    image: 'https://i.postimg.cc/tJczhbvr/Service-section-icons-(2).gif',
    details:
      'We build engaging content strategies and manage campaigns that grow followers, increase engagement, and generate qualified leads.',
  },
  {
    title: 'Video Production',
    description: 'Cinematic visuals that elevate your brand perception.',
    image: 'https://i.postimg.cc/5NFBZZRx/Service-section-icons-(3).gif',
    details:
      'From concept to final cut, we produce high-quality brand videos, ad creatives, and promotional content that captures attention.',
  },
  {
    title: 'Video Editing',
    description: 'High-retention edits designed to keep viewers watching.',
    image: 'https://i.postimg.cc/CKcK0W99/Service-section-icons.gif',
    details:
      'We create engaging edits optimized for retention, reels, YouTube, and paid ads that convert viewers into customers.',
  },
  {
    title: 'Content Creation',
    description: 'Strategic content that builds trust and authority.',
    image: 'https://i.postimg.cc/Wz66DrL9/Service-section-icons-(6).gif',
    details:
      'We develop powerful content strategies including scripts, captions, creatives, and storytelling that position your brand as an authority.',
  },
  {
    title: 'Branding & Identity',
    description: 'Create a brand people recognize and remember.',
    image: 'https://i.postimg.cc/hjJKPbmk/Service-section-icons-(7).gif',
    details:
      'We design logos, brand guidelines, and messaging that create a strong and memorable brand identity.',
  },
  {
    title: 'Website Development',
    description: 'Fast, modern websites built to convert.',
    image: 'https://i.postimg.cc/wB7ChxB3/Service-section-icons-(8).gif',
    details:
      'We build high-speed, SEO-friendly, conversion-focused websites using modern technologies tailored to your business goals.',
  },
  {
    title: 'Funnels & Automation',
    description: 'Smart systems that turn clicks into customers.',
    image: 'https://i.postimg.cc/L5RQ0mmx/Service-section-icons-(9).gif',
    details:
      'We design automated funnels with email sequences and CRM integrations to maximize customer lifetime value.',
  },
  {
    title: 'Conversion Optimization',
    description: 'Maximize every visitor with improvements.',
    image: 'https://i.postimg.cc/y8JjjD0M/Service-section-icons-(10).gif',
    details:
      'Using data analytics and A/B testing, we optimize landing pages and sales funnels to improve conversions.',
  },
  {
    title: 'Ads Creative Design',
    description: 'Scroll-stopping creatives that drive sales.',
    image: 'https://i.postimg.cc/PxK1THWj/Service-section-icons-(11).gif',
    details:
      'We design performance-driven ad creatives that grab attention and improve click-through rates.',
  },
  {
    title: 'Email Marketing',
    description: 'Convert leads into loyal customers.',
    image: 'https://i.postimg.cc/SQvzrDV9/Service-section-icons-(12).gif',
    details:
      'We create automated email flows, newsletters, and sales sequences that nurture leads and increase repeat sales.',
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="w-full px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto my-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to scale your brand
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-2xl p-8 
              hover:scale-105 hover:-translate-y-2 
              transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="flex justify-center mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-32 object-contain rounded-xl"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-indigo-500 transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 text-center">
                {service.description}
              </p>

              <div
                onClick={() => setSelectedService(service)}
                className="flex items-center justify-center text-indigo-500 
                opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-card rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-red-500"
              >
                <X />
              </button>

              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-40 h-40 mx-auto mb-6 object-contain"
              />

              <h3 className="text-2xl font-bold text-center mb-4">
                {selectedService.title}
              </h3>

              <p className="text-muted-foreground text-center">
                {selectedService.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}