'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ================= TYPE ================= */
type Project = {
  title: string;
  category: string;
  image: string;
  link?: string;
  profile?: string;
  reels?: string[];
  ads?: string[];
  designs?: string[];
  platform?: string;
  performance?: {
    ctr?: string;
    leads?: string;
    budget?: string;
  };
};

const categories = ['All', 'Websites', 'Videos', 'Ads', 'Designs'];

/* ================= DATA ================= */
const projects: Project[] = [
  {
    title: 'JMJ Catering',
    category: 'Websites',
    image: 'https://i.postimg.cc/NG8SMZVG/Screenshot2026-04-0411410.jpg',
    link: 'https://jmjcateringcbe.com/',
  },
  {
    title: 'Aruls Cargo Insurance',
    category: 'Websites',
    image: 'https://i.postimg.cc/MZc03B0z/Screenshot2026-04-0411513.jpg',
    link: 'https://arulscargoinsurance.com/',
  },
  {
    title: 'Mechatron Motors',
    category: 'Videos',
    image: 'https://i.postimg.cc/9fFZdwF3/Screenshot2026-04-0417391.jpg',
    profile: 'https://www.instagram.com/mechatron_motors/',
  },
  {
    title: 'JMJ Catering',
    category: 'Videos',
    image: 'https://i.postimg.cc/zGdV1t50/Screenshot2026-04-0417421.jpg',
    profile: 'https://www.instagram.com/jmjcateringcbe27_official/',
  },
  {
    title: 'SIRT Mech',
    category: 'Videos',
    image: 'https://i.postimg.cc/fTN37SBY/Screenshot2026-04-0417405.jpg',
    profile: 'https://www.instagram.com/sritmech/',
  },
  {
    title: 'JMJ Catering',
    category: 'Ads',
    image: 'https://i.postimg.cc/QNBH1G1N/Time-serie.jpg',
    platform: 'Google Ads',
    performance: {
      ctr: '3.8%',
      leads: '120 Leads',
      budget: '₹1,500',
    },
  },
  {
    title: 'JMJ Catering',
    category: 'Ads',
    image: 'https://i.postimg.cc/gkdNrDL7/Screenshot2026-04-0418415.jpg',
    platform: 'Meta Ads',
    performance: {
      ctr: '5.1%',
      leads: '210 Leads',
      budget: '₹2,000',
    },
  },
  {
    title: 'JMJ Catering',
    category: 'Designs',
    image: 'https://i.postimg.cc/hGBJXVkr/Screenshot2026-04-0513471.jpg',
  },
  {
    title: 'Mechatron Motors',
    category: 'Designs',
    image: 'https://i.postimg.cc/HstW6FRb/Screenshot2026-04-0513501.jpg',
  },
];

/* ================= COMPONENT ================= */
export default function PortfolioSection() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-16">

      {/* Heading */}
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto my-6 rounded-full"></div>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              active === cat
                ? 'bg-black text-white'
                : 'border-gray-400 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(item)}
            className="group cursor-pointer rounded-xl overflow-hidden shadow-md"
          >
            <div className="relative">
              <img
                src={item.image}
                className="h-64 w-full object-cover transition group-hover:scale-105"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-white-300 text-sm">
                  {item.category}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 max-w-5xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title */}
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                {selected.title}
              </h2>

              {/* Platform Badge */}
              {selected.platform && (
                <span className="inline-block mb-4 px-3 py-1 text-white rounded-full bg-gray-200 dark:bg-neutral-800">
                  {selected.platform}
                </span>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mb-6 flex-wrap">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    Visit Website
                  </a>
                )}

                {selected.profile && (
                  <button
                    onClick={() => window.open(selected.profile, '_blank')}
                    className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    View Profile
                  </button>
                )}
              </div>

              {/* Metrics */}
              {selected.performance && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    CTR<br /><strong>{selected.performance.ctr}</strong>
                  </div>
                  <div className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    Leads<br /><strong>{selected.performance.leads}</strong>
                  </div>
                  <div className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    Budget<br /><strong>{selected.performance.budget}</strong>
                  </div>
                </div>
              )}

              {/* Images */}
              <div className="w-full mt-6">
  <img
    src={selected.image}
    className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-xl transition duration-500 hover:scale-[1.02]"
  />
</div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}