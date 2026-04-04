'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Websites', 'Videos', 'Meta Ads', 'Google Ads'];

const projects = [
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

  // 🎬 VIDEOS (INSTAGRAM)
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

  // 📊 ADS
  {
    title: 'Meta Ads Campaign',
    category: 'Meta Ads',
    image: 'https://i.postimg.cc/gkdNrDL7/Screenshot2026-04-0418415.jpg',
  },
  {
    title: 'Google Ads Report',
    category: 'Google Ads',
    image: 'https://i.postimg.cc/QNBH1G1N/Time-serie.jpg',
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-12 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-lg scale-105'
                  : 'border-gray-500 hover:border-white hover:bg-white/10 hover:scale-105'
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
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.image}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/400x300?text=Preview+Not+Available';
                }}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              key={selected.title}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-3 right-3 text-xl"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-6">
                {selected.title}
              </h2>

              {/* Website */}
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-6 bg-black text-white px-4 py-2 rounded"
                >
                  Visit Website
                </a>
              )}

              {/* Instagram */}
              {selected.profile && (
                <>
                  <button
                    onClick={() => window.open(selected.profile, '_blank')}
                    className="mb-6 bg-pink-600 text-white px-4 py-2 rounded"
                  >
                    Open Instagram Profile
                  </button>

                  <div className="grid md:grid-cols-3 gap-4">
                    {selected.reels.map((reel, i) => (
                      <div
                        key={i}
                        onClick={() => window.open(reel, '_blank')}
                        className="relative cursor-pointer group"
                      >
                        <img
                          src={selected.image}
                          className="w-full h-[260px] object-cover rounded-xl"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition">
                          <div className="text-white text-3xl">▶</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Ads / Others Image */}
              {!selected.profile && (
                <img
                  src={selected.image}
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://via.placeholder.com/600x400?text=Preview+Not+Available';
                  }}
                  className="w-full rounded-xl mt-4"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}