'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your brand, audience, and goals.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We design a clear roadmap for growth.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We launch and manage high-performing campaigns.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'We continuously improve performance using real data.',
  },
  {
    number: '05',
    title: 'Scaling',
    description: 'We double down on what works to maximize revenue.',
  },
];

const milestones = [
  {
    year: 'Dec 2022',
    title: 'Plan & Idea',
    description:
      'Market research complete, brand positioning defined, and core services finalized.',
  },
  {
    year: 'Jan 2023',
    title: 'First Clients',
    description:
      'Delivered pilot projects, built onboarding flow, and documented delivery systems.',
  },
  {
    year: 'Sep 2023',
    title: 'Government Recognition',
    description:
      'Registrations completed and official certifications obtained.',
  },
  {
    year: 'Jan 2024',
    title: 'Scaled Operations',
    description:
      'Expanded team and optimized internal processes for scale.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-accent/30">
      <div className="w-full px-8 lg:px-16">

        {/* SECTION HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Proven Growth System
          </h2>
          {/* Purple underline */}
  <div className="w-24 h-1 bg-indigo-500 mx-auto my-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Five proven steps & our company evolution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* ================= LEFT SIDE (PROCESS) ================= */}
          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

         {/* ================= RIGHT SIDE PREMIUM ================= */}
<div className="relative flex flex-col h-full">

  <h3 className="text-3xl font-bold text-center mb-12">
    Company Evolution
  </h3>

  <div className="relative flex-1">

    <motion.div
  initial={{ height: 0 }}
  whileInView={{ height: "100%" }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  viewport={{ once: true }}
  className="absolute top-0 h-full w-[3px] bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500"
  style={{ left: "calc(50% - 1.5px)" }}   // perfectly centered 3px line
/>

    <div className="flex flex-col justify-between h-full">
      {milestones.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
        <motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ duration: 0.4, delay: index * 0.2 }}
  viewport={{ once: true }}
  className="absolute top-6 w-5 h-5 rounded-full
             bg-gradient-to-r from-indigo-600 to-purple-600
             shadow-lg z-10"
  style={{
    left: isLeft
      ? "calc(50% - 20px - 1.5px)"  // LEFT side tangent
      : "calc(50% + 1.5px)"        // RIGHT side tangent
  }}
/>

            {/* Card */}
            <div
              className={`w-[45%] p-6 rounded-2xl backdrop-blur-lg bg-white/80 border border-white/40 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl
              ${isLeft ? "mr-auto text-right pr-10" : "ml-auto pl-10"}`}
            >
              <p className="text-sm font-semibold text-indigo-600 mb-2">
                {item.year}
              </p>

              <h4 className="font-bold text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}