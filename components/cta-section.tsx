'use client';

import { Mail, Linkedin, Instagram, MessageCircle, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 lg:py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 animate-fadeIn">
          Let's Connect{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            With Us
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Have a project in mind or just want to say hi? Reach out via email, WhatsApp, or social media. We’re here to help you grow.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          
          {/* Email Button */}
          <a
            href="mailto:zentraffix@gmail.com"
            className="flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918610043511?text=Hello%2C%20I%20am%20interested%20in%20your%20digital%20marketing%20services.%20Please%20let%20me%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Chat
          </a>

          {/* Call Button */}
          <a
            href="tel:+918610043511"
            className="flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/zentraffix-agency-938a36375"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-indigo-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/zentraffix.agency?igsh=YzNlamJ2M3djYjRn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}