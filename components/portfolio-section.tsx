'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Websites', 'Videos', 'Meta Ads', 'Google Ads'];

const projects = [
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'JMJ Catering',
    category: 'Videos',
    image: 'https://via.placeholder.com/400x300',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'SIRT Mech',
    category: 'Videos',
    image: 'https://i.postimg.cc/fTN37SBY/Screenshot2026-04-0417405.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Meta Ads Campaign',
    category: 'Meta Ads',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    title: 'Google Ads Report',
    category: 'Google Ads',
    image: 'https://via.placeholder.com/400x300',
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
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="w-full px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-4 flex-wrap mb-12 bg-white/10 dark:bg-white/5 backdrop-blur-md p-4 rounded-full border border-white/20">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  active === cat
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-lg scale-105' : 'border-gray-500 text-black hover:border-white hover:bg-white/10 hover:scale-105'
                }
              `}
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
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.image}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />

              {/* OVERLAY */}
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
              className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-xl p-6 max-w-2xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                className="absolute top-3 right-3 text-xl"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {selected.title}
              </h2>

              {/* WEBSITE */}
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  className="inline-block mb-4 bg-black text-white px-4 py-2 rounded hover:opacity-90"
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

              {/* IMAGE */}
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