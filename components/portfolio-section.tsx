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
  // 🌐 WEBSITES
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

  // 🎬 VIDEOS
  {
    title: 'Mechatron Motors',
    category: 'Videos',
    image: 'https://i.postimg.cc/9fFZdwF3/Screenshot2026-04-0417391.jpg',
    profile: 'https://www.instagram.com/mechatron_motors/',
    reels: [
      'https://www.instagram.com/reel/DO8w-eck8qd/',
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
      'https://www.instagram.com/reel/DO7lnU9E4OY/',
    ],
  },
  {
    title: 'JMJ Catering Reels',
    category: 'Videos',
    image: 'https://i.postimg.cc/zGdV1t50/Screenshot2026-04-0417421.jpg',
    profile: 'https://www.instagram.com/jmjcateringcbe27_official/',
    reels: [
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
      'https://www.instagram.com/reel/DO8w-eck8qd/',
      'https://www.instagram.com/reel/DO7lnU9E4OY/',
    ],
  },
  {
    title: 'SIRT Mech',
    category: 'Videos',
    image: 'https://i.postimg.cc/fTN37SBY/Screenshot2026-04-0417405.jpg',
    profile: 'https://www.instagram.com/sritmech/',
    reels: [
      'https://www.instagram.com/reel/DO7lnU9E4OY/',
      'https://www.instagram.com/reel/DOOA5zmE-Hf/',
      'https://www.instagram.com/reel/DO8w-eck8qd/',
    ],
  },

  // 📢 ADS
  {
    title: 'JMJ Catering Ads',
    category: 'Ads',
    image: 'https://i.postimg.cc/8kzXKX3H/sample-ad1.jpg',
    platform: 'Meta & Google Ads',
    performance: {
      ctr: '3.8%',
      leads: '120 Leads',
      budget: '₹5,000',
    },
    ads: [
      'https://i.postimg.cc/8kzXKX3H/sample-ad1.jpg',
      'https://i.postimg.cc/3w1pZ6kQ/sample-ad2.jpg',
      'https://i.postimg.cc/VL1kWwzC/sample-ad3.jpg',
    ],
  },
  {
    title: 'Mechatron Motors Ads',
    category: 'Ads',
    image: 'https://i.postimg.cc/JzT2w7rQ/sample-ad4.jpg',
    platform: 'Meta Ads',
    performance: {
      ctr: '5.1%',
      leads: '210 Leads',
      budget: '₹8,000',
    },
    ads: [
      'https://i.postimg.cc/JzT2w7rQ/sample-ad4.jpg',
      'https://i.postimg.cc/3w1pZ6kQ/sample-ad2.jpg',
      'https://i.postimg.cc/VL1kWwzC/sample-ad3.jpg',
    ],
  },

  // 🎨 DESIGNS
  {
    title: 'JMJ Catering Designs',
    category: 'Designs',
    image: 'https://i.postimg.cc/xyz/design1.jpg',
    designs: [
      'https://i.postimg.cc/xyz/design1.jpg',
      'https://i.postimg.cc/xyz/design2.jpg',
      'https://i.postimg.cc/xyz/design3.jpg',
    ],
  },
  {
    title: 'Mechatron Motors Designs',
    category: 'Designs',
    image: 'https://i.postimg.cc/xyz/design4.jpg',
    designs: [
      'https://i.postimg.cc/xyz/design4.jpg',
      'https://i.postimg.cc/xyz/design5.jpg',
      'https://i.postimg.cc/xyz/design6.jpg',
    ],
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

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Our Portfolio
        </h2>
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full transition ${
              active === cat
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                : 'border border-gray-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(item)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
          >
            <img src={item.image} className="h-64 w-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-5xl w-full text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
                {selected.title}
              </h2>

              {/* BUTTONS */}
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  className="inline-block mr-3 mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                >
                  🌐 Visit Website
                </a>
              )}

              {selected.profile && (
                <button
                  onClick={() => window.open(selected.profile, '_blank')}
                  className="mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"
                >
                  📸 Open Profile
                </button>
              )}

              {/* METRICS */}
              {selected.performance && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    CTR<br />{selected.performance.ctr}
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    Leads<br />{selected.performance.leads}
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    Budget<br />{selected.performance.budget}
                  </div>
                </div>
              )}

              {/* IMAGES */}
              <div className="grid md:grid-cols-3 gap-4">
                {(selected.ads || selected.designs || selected.reels)?.map((_, i) => (
                  <img
                    key={i}
                    src={selected.image}
                    className="h-[260px] w-full object-cover rounded-xl"
                  />
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}