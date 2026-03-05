'use client';

import { motion } from 'framer-motion';

const logos = [
  "https://i.postimg.cc/Xqn84MRz/Zentraffix-cilent-logo-1-removebg-preview.png",
  "https://i.postimg.cc/Hxg09Dk8/Zentraffix-cilent-logo-2-removebg-preview.png",
  "https://i.postimg.cc/SQr08mxy/Zentraffix-cilent-logo-removebg-preview-removebg-preview.png",
  "https://i.postimg.cc/zDMQT318/Zentraffix-cilent-logo-2-removebg-preview-(1).png",
  "https://i.postimg.cc/FKB6GKJy/Zentraffix-cilent-logo-3-removebg-preview.png"
];

export default function TrustBar() {
  return (
    <section className="relative py-24 border-y border-border bg-background overflow-hidden">
      <div className="w-full">

        {/* Premium Heading */}
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-6xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-16"
>
  Trusted by{" "}
  
  <span className="relative inline-block text-indigo-600">
    Growing Brands Worldwide

    {/* Scroll Animated Center-Out Underline */}
    <motion.span
      className="absolute left-0 -bottom-3 w-full h-[3px] bg-indigo-600 
                 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      style={{ originX: 0.5 }}
    />
  </span>
</motion.h2>

        {/* Logo Scroll */}
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-24 w-max"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[220px]"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="Client Logo"
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fade Edges */}
         <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
<div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}