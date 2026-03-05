'use client';

import { useState } from 'react';
import { Mail, Linkedin, Instagram, MessageCircle, X } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <p className="mb-2">
        At Zentraffix, we respect your privacy and are committed to protecting your personal information...
      </p>
      <p className="mb-2">
        We may collect personal information such as your name, email address, phone number, etc...
      </p>
      <p className="mb-2">Effective Date: March 4, 2026</p>
    </div>
  );

  const termsContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
      <p className="mb-2">
        Welcome to Zentraffix! By using our website and services, you agree to the following terms...
      </p>
      <p className="mb-2">
        All content is protected by copyright. You may not reproduce without permission...
      </p>
      <p className="mb-2">Effective Date: March 4, 2026</p>
    </div>
  );

  return (
    <footer className="bg-foreground/5 border-t border-border relative">
      <div className="w-full px-8 lg:px-16 py-8">
        {/* Top Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-serif font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              ZENTRAFFIX
            </h3>
            <p className="text-muted-foreground">
              Engineering predictable growth for ambitious brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {['Marketing', 'SEO', 'Social Media', 'Development'].map(service => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:zentraffix@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> zentraffix@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8610043511?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors mt-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Chat
                </a>
              </li>
              <li className="pt-4 border-t border-border">
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/zentraffix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/zentraffix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Zentraffix Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-24 z-50">
            <div className="bg-white rounded-xl max-w-3xl w-full p-8 relative shadow-lg overflow-y-auto max-h-[80vh]">
              <button
                onClick={() => setModalContent(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
              {modalContent === 'privacy' ? privacyContent : termsContent}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}