'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Ashwanth N',
    role: 'Founder',
    linkedin: 'https://www.linkedin.com/in/ashwanth-n-91bb0325b/',
    instagram: 'https://www.instagram.com/ashwanth.nagendran?igsh=MWFwMm11MXE1M3JpaQ%3D%3D&utm_source=qr',
  },
  {
    name: 'Rishikesavan S P',
    role: 'CEO',
    linkedin: 'https://www.linkedin.com/in/rishikesavan-s-p-071015324/',
    instagram: 'https://www.instagram.com/rishi__rk7',
  },
  {
    name: 'Rathish G',
    role: 'CFO',
    linkedin: 'https://www.linkedin.com/in/rathish-g-326744327/',
    instagram: 'https://www.instagram.com/rathis_h_17?igsh=MXI3dGNoYmNweHgwaA==',
  },
  {
    name: 'Harish M',
    role: 'CTO',
    linkedin: 'https://www.linkedin.com/in/harish-m15/',
    instagram: 'https://www.instagram.com/__harish05__?igsh=MXJuMXl5aHV1NW5paw==',
  },
  {
    name: 'Stephen A',
    role: 'Web Developer',
    linkedin: 'https://www.linkedin.com/in/stephen-a-50634b28b/',
    instagram: 'https://www.instagram.com/steff.xxi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-8">
            We Build Brands{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              That Grow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            We're a team of strategists, creators, and marketers focused on one thing — helping businesses grow faster and smarter in the digital world.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every strategy we develop, every campaign we run, and every piece of content we create is driven by one goal: measurable results that impact your bottom line. We don't just execute — we partner with you to build scalable systems that work.
          </p>
        </motion.div>

        {/* Right Side - Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <div className="flex gap-3 text-lg">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700"
                    aria-label={`${member.name} Instagram`}
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}