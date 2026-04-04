'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Websites', 'Videos', 'Meta Ads', 'Google Ads'];

const projects = [
  {
    title: 'Business Website',
    category: 'Websites',
    image: 'https://i.postimg.cc/1Rnktc4r/Screenshot-2026-04-04-114108.png',
    link: 'https://example.com',
  },
  {
    title: 'Instagram Reel',
    category: 'Videos',
    image: '/portfolio/video1.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Meta Ads Campaign',
    category: 'Meta Ads',
    image: '/portfolio/meta1.jpg',
  },
  {
    title: 'Google Ads Report',
    category: 'Google Ads',
    image: '/portfolio/google1.jpg',
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<any>(null);

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Portfolio
      </h2>

      {/* FILTERS */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              active === cat
                ? 'bg-white text-black'
                : 'text-white border-gray-500 hover:bg-white hover:text-black'
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
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.image}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white text-black rounded-xl p-6 max-w-2xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">
                {selected.title}
              </h2>

              {/* WEBSITE */}
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  className="inline-block mb-4 bg-black text-white px-4 py-2 rounded"
                >
                  Visit Website
                </a>
              )}

              {/* VIDEO */}
              {selected.video && (
                <iframe
                  src={selected.video}
                  className="w-full h-64 rounded"
                  allowFullScreen
                />
              )}

              {/* IMAGE (ADS REPORT) */}
              {!selected.video && (
                <img
                  src={selected.image}
                  className="w-full rounded"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}